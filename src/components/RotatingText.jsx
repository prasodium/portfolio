import { useState, useEffect } from "react";

export default function RotatingText({ texts, typingSpeed = 100, deletingSpeed = 60, delay = 1000 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => currentText.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    // When typing is complete
    if (!isDeleting && displayedText === currentText) {
      timeout = setTimeout(() => setIsDeleting(true), delay);
    }

    // When deleting is complete
    if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, index, texts, typingSpeed, deletingSpeed, delay]);

  return (
    <span className="inline-block font-mono text-accent-color">
      {displayedText}
      <span className="blinking-cursor">|</span>
    </span>
  );
}
