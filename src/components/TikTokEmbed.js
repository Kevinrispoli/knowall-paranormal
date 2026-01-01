// src/components/TikTokEmbed.js
import React, { useEffect, useMemo, useState } from "react";
import "./TikTokEmbed.css";

function getVideoId(url) {
  const match = url.match(/\/video\/(\d+)/);
  return match ? match[1] : "";
}

const PLACEHOLDER_URL = process.env.PUBLIC_URL + "/LOGO4.png"; // put LOGO4.png in /public

function TikTokEmbed({ videoUrls = [] }) {
  const videoIds = useMemo(() => videoUrls.map(getVideoId), [videoUrls]);

  // show placeholder immediately, hide after a short delay (TikTok has no reliable onLoad)
  const [showPlaceholder, setShowPlaceholder] = useState({});

  // Load TikTok script once
  useEffect(() => {
    const id = "tiktok-embed-script";
    const existing = document.getElementById(id);

    const onReady = () => {
      // Ask TikTok to re-scan the page for new embeds
      if (window.tiktokEmbed && typeof window.tiktokEmbed.load === "function") {
        window.tiktokEmbed.load();
      }
    };

    if (!existing) {
      const script = document.createElement("script");
      script.id = id;
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      script.onload = onReady;
      document.body.appendChild(script);
    } else {
      onReady();
    }
  }, []);

  // Reset placeholders whenever the list changes
  useEffect(() => {
    const next = {};
    videoUrls.forEach((_, i) => (next[i] = true));
    setShowPlaceholder(next);

    // Hide placeholders after 1.5s (adjust if you want)
    const timer = setTimeout(() => {
      const done = {};
      videoUrls.forEach((_, i) => (done[i] = false));
      setShowPlaceholder(done);
    }, 1500);

    return () => clearTimeout(timer);
  }, [videoUrls]);

  return (
    <div className="tiktok-embed-container">
      {videoUrls.map((url, i) => {
        const id = videoIds[i];

        return (
          <div key={id || i} className="tiktok-embed-wrapper">
            {showPlaceholder[i] && (
              <div
                className="tiktok-placeholder"
                style={{ backgroundImage: `url(${PLACEHOLDER_URL})` }}
              />
            )}

            <blockquote
              className="tiktok-embed"
              cite={url}
              data-video-id={id}
              style={{ margin: 0 }}
            >
              <section />
            </blockquote>
          </div>
        );
      })}
    </div>
  );
}

export default TikTokEmbed;
