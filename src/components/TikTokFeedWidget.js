// src/components/TikTokFeedWidget.js
import React, { useEffect } from "react";
import "./styles.css";

function TikTokFeedWidget() {
  useEffect(() => {
    // Create the SociableKIT script tag (TikTok feed widget)
    const script = document.createElement("script");
    script.src = "https://widgets.sociablekit.com/tiktok-feed/widget.js";
    script.defer = true; // similar to 'defer' attribute
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="section">
      <h2 className="section-title">Latest TikToks</h2>
      <p className="section-description">
        This feed updates automatically with the newest videos from
        @knowall_paranormal.
      </p>

      {/* This div is from your SociableKIT embed code */}
      <div
        className="sk-tiktok-feed"
        data-embed-id="25628139"
      ></div>
    </section>
  );
}

export default TikTokFeedWidget;
