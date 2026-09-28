// src/pages/GitHubStats.jsx
import React, { useEffect, useState } from 'react';
import { FaGithub, FaStar, FaCodeBranch, FaUsers } from 'react-icons/fa';
import '../styles/GitHubStats.css';

const USERNAME = 'prasodium';

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
};

const fallbackStats = {
  repos: 42,
  stars: 52,
  followers: 0,
  langs: [
    { name: 'TypeScript', count: 6 },
    { name: 'Python', count: 7 },
    { name: 'JavaScript', count: 7 },
    { name: 'C++', count: 7 },
  ],
};

const GitHubStats = () => {
  const [stats, setStats] = useState(fallbackStats);
  const [live, setLive] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`),
          fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100`),
        ]);
        if (!userRes.ok || !reposRes.ok) return;
        const user = await userRes.json();
        const repos = await reposRes.json();

        const stars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
        const langCounts = {};
        repos.forEach((r) => {
          if (r.fork || !r.language) return;
          langCounts[r.language] = (langCounts[r.language] || 0) + 1;
        });
        const langs = Object.entries(langCounts)
          .map(([name, count]) => ({ name, count }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 6);

        if (!cancelled) {
          setStats({
            repos: user.public_repos ?? fallbackStats.repos,
            stars,
            followers: user.followers ?? 0,
            forks: repos.reduce((sum, r) => sum + (r.forks_count || 0), 0),
            langs,
          });
          setLive(true);
        }
      } catch {
        // stay on fallback stats
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const maxLang = Math.max(...stats.langs.map((l) => l.count), 1);

  return (
    <section id="github" className="section">
      <h2 className="section-heading">GitHub Activity</h2>
      <p className="section-subheading">
        {live ? 'Live from the GitHub API — always current.' : 'Cached snapshot — live data loads when you are online.'}
      </p>

      <div className="gh-stats">
        <a
          className="gh-stat-card gh-profile"
          href="https://github.com/prasodium"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="gh-stat-icon" />
          <span className="gh-username">@{USERNAME}</span>
          <span className="gh-cta">View profile →</span>
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
        <h3 className="gh-langs-title">$ top languages — by repo count</h3>
        {stats.langs.map((lang) => (
          <div className="gh-lang-row" key={lang.name}>
            <span className="gh-lang-name">{lang.name}</span>
            <div className="gh-lang-bar">
              <div
                className="gh-lang-fill"
                style={{
                  width: `${(lang.count / maxLang) * 100}%`,
                  backgroundColor: langColors[lang.name] || 'var(--accent-color)',
                }}
              />
            </div>
            <span className="gh-lang-count">{lang.count}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GitHubStats;
