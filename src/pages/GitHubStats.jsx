// src/pages/GitHubStats.jsx
import React, { useEffect, useState } from 'react';
import { FaGithub, FaStar, FaCodeBranch, FaUsers } from 'react-icons/fa';
import '../styles/GitHubStats.css';

const USERNAME = 'prasodium';
const CACHE_KEY = 'gh-stats-v2';
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours

// GitHub linguist colors for the languages we show
const langColors = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  'C++': '#f34b7d',
  C: '#555555',
  HTML: '#e34c26',
  CSS: '#563d7c',
  'Jupyter Notebook': '#DA5B0B',
  Dart: '#00B4AB',
  CMake: '#DA3434',
  Go: '#00ADD8',
  Rust: '#dea584',
  Java: '#b07219',
  Shell: '#89e051',
  Vue: '#41b883',
  Svelte: '#ff3e00',
  Dockerfile: '#384d54',
  SCSS: '#c6538c',
};

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`GitHub API ${res.status}`);
  return res.json();
}

// Fetch with a small concurrency pool so we stay polite to the API
async function poolAll(urls, limit = 5) {
  const results = [];
  for (let i = 0; i < urls.length; i += limit) {
    const batch = urls.slice(i, i + limit);
    const settled = await Promise.allSettled(batch.map(fetchJson));
    results.push(...settled);
  }
  return results;
}

async function loadLiveStats() {
  const [user, repos] = await Promise.all([
    fetchJson(`https://api.github.com/users/${USERNAME}`),
    fetchJson(`https://api.github.com/users/${USERNAME}/repos?per_page=100`),
  ]);

  const own = repos.filter((r) => !r.fork && r.language);
  const stars = own.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);

  // Language usage in bytes, summed across repos (like GitHub's own stats)
  const bytes = {};
  const langUrls = own.map((r) => `https://api.github.com/repos/${USERNAME}/${r.name}/languages`);
  const settled = await poolAll(langUrls);
  settled.forEach((result) => {
    if (result.status !== 'fulfilled') return;
    Object.entries(result.value).forEach(([lang, n]) => {
      bytes[lang] = (bytes[lang] || 0) + n;
    });
  });

  const total = Object.values(bytes).reduce((sum, n) => sum + n, 0) || 1;
  const langs = Object.entries(bytes)
    .map(([name, n]) => ({ name, pct: (n / total) * 100 }))
    .sort((a, b) => b.pct - a.pct)
    .slice(0, 6);

  return {
    repos: user.public_repos ?? 0,
    stars,
    followers: user.followers ?? 0,
    langs,
    fetchedAt: Date.now(),
  };
}

function readCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const cached = JSON.parse(raw);
    if (Date.now() - cached.fetchedAt > CACHE_TTL) return null;
    return cached;
  } catch {
    return null;
  }
}

const GitHubStats = () => {
  const [stats, setStats] = useState(null);
  const [status, setStatus] = useState('loading'); // loading | live | error

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const cached = readCache();
      if (cached) {
        if (!cancelled) {
          setStats(cached);
          setStatus('live');
        }
        return;
      }
      try {
        const data = await loadLiveStats();
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify(data));
        } catch {
          // storage unavailable, still show the data
        }
        if (!cancelled) {
          setStats(data);
          setStatus('live');
        }
      } catch {
        if (!cancelled) setStatus('error');
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="github" className="section">
      <h2 className="section-heading">GitHub Activity</h2>
      <p className="section-subheading">
        {status === 'live' && 'Live from the GitHub API, refreshed daily.'}
        {status === 'loading' && 'Fetching live data from GitHub...'}
        {status === 'error' && 'Could not reach the GitHub API right now.'}
      </p>

      {status === 'loading' && (
        <div className="gh-stats">
          {[0, 1, 2, 3].map((i) => (
            <div className="gh-stat-card gh-loading" key={i}>
              <span className="gh-loading-bar" />
            </div>
          ))}
        </div>
      )}

      {status === 'error' && (
        <div className="gh-error">
          <p>Live stats are unavailable at the moment. You can still browse everything directly:</p>
          <a
            className="hero-cta-button"
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View GitHub profile</span>
          </a>
        </div>
      )}

      {status === 'live' && stats && (
        <>
          <div className="gh-stats">
            <a
              className="gh-stat-card gh-profile"
              href={`https://github.com/${USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="gh-stat-icon" />
              <span className="gh-username">@{USERNAME}</span>
              <span className="gh-cta">View profile</span>
            </a>

            <div className="gh-stat-card">
              <FaCodeBranch className="gh-stat-icon" />
              <span className="gh-stat-number">{stats.repos}</span>
              <span className="gh-stat-label">Public repos</span>
            </div>

            <div className="gh-stat-card">
              <FaStar className="gh-stat-icon" />
              <span className="gh-stat-number">{stats.stars}</span>
              <span className="gh-stat-label">Stars earned</span>
            </div>

            <div className="gh-stat-card">
              <FaUsers className="gh-stat-icon" />
              <span className="gh-stat-number">{stats.followers}</span>
              <span className="gh-stat-label">Followers</span>
            </div>
          </div>

          <div className="gh-langs">
            <h3 className="gh-langs-title">$ top languages, by usage</h3>
            {stats.langs.map((lang) => (
              <div className="gh-lang-row" key={lang.name}>
                <span className="gh-lang-name">{lang.name}</span>
                <div className="gh-lang-bar">
                  <div
                    className="gh-lang-fill"
                    style={{
                      width: `${Math.max(lang.pct, 2)}%`,
                      backgroundColor: langColors[lang.name] || 'var(--accent-color)',
                    }}
                  />
                </div>
                <span className="gh-lang-count">{lang.pct.toFixed(1)}%</span>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default GitHubStats;
