// src/components/DonatePage.js
import React from "react";
import { Helmet } from "react-helmet-async";
import "./styles.css";

function DonatePage() {
  // Change these to your real links
  const cashAppUrl = "https://cash.app/$knowallparanormal";
  const paypalUrl = "https://www.paypal.me/Kevin222316";
  const coffeeUrl = "https://www.buymeacoffee.com/knowall_paranormal";

  return (
    <>
      {/* ⭐ SEO + SOCIAL META TAGS */}
      <Helmet>
        <title>Support Knowall Paranormal – Donate</title>
        <meta
          name="description"
          content="Support Knowall Paranormal through Cash App, PayPal, or Buy Me a Coffee. Your donations help fund investigations, travel, and paranormal research."
        />

        <link rel="canonical" href="https://knowall.link/donate" />

        {/* OpenGraph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Support Knowall Paranormal" />
        <meta
          property="og:description"
          content="Help fund paranormal investigations and content creation by donating via Cash App, PayPal, or Buy Me a Coffee."
        />
        <meta property="og:url" content="https://knowall.link/donate" />
        <meta property="og:image" content="https://knowall.link/preview.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Support Knowall Paranormal" />
        <meta
          name="twitter:description"
          content="Donate to support investigations, haunted location travel, and new paranormal content."
        />
        <meta name="twitter:image" content="https://knowall.link/preview.jpg" />
      </Helmet>

      {/* ⭐ DONATION PAGE CONTENT */}
      <div className="page-container">
        <section className="section donate-section">
          <h1 className="section-title">Support Knowall Paranormal</h1>

          <p className="section-description">
            Your support helps us keep exploring the unknown, traveling to
            haunted locations, and creating content for TikTok, YouTube, and
            beyond.
          </p>

          {/* DONATION GRID */}
          <div className="donate-grid">
            {/* CASH APP PANEL */}
            <div className="donate-panel">
              <h2>Donate via Cash App</h2>

              <div className="donate-buttons">
                <a
                  href={cashAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary donate-button"
                >
                  💚 Donate on Cash App
                </a>
              </div>

              <img
                src="/CashTag.jpg"
                alt="Cash App QR Code"
                className="cashapp-image"
              />
            </div>

            {/* BUY ME A COFFEE PANEL */}
            <div className="donate-panel">
              <h2>Buy Us a Coffee ☕</h2>

              <div className="donate-buttons">
                <a
                  href={coffeeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-coffee donate-button"
                >
                  ☕ Buy Us a Coffee
                </a>
              </div>

              <img
                src="/CoffeeTag.jpg"
                alt="Buy Me a Coffee QR Code"
                className="cashapp-image"
              />
            </div>

            {/* PAYPAL PANEL */}
            <div className="donate-panel">
              <h2>Donate via PayPal</h2>

              <div className="donate-buttons">
                <a
                  href={paypalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-paypal donate-button"
                >
                  🔵 Donate with PayPal
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default DonatePage;
