// src/components/TikTokThumbGrid.js
import React from "react";
import "./TikTokThumbGrid.css";

function TikTokThumbGrid({ items = [] }) {
  return (
    <div className="tt-grid">
      {items.map((item, i) => (
        <a
          key={item.url || i}
          className="tt-card"
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.title || "Open TikTok"}
        >
          <div className="tt-thumbWrap">
            <img
              className="tt-thumb"
              src={item.thumb}
              alt={item.title || "TikTok thumbnail"}
              loading="lazy"
              decoding="async"
            />
            <div className="tt-play">▶</div>
          </div>

          {item.title ? <div className="tt-title">{item.title}</div> : null}
        </a>
      ))}
    </div>
  );
}

export default TikTokThumbGrid;
