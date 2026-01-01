// src/components/ThankYouPage.js
import React from "react";
import { Helmet } from "react-helmet-async";
import "./styles.css";

function ThankYouPage() {
  return (
    <>
      {/* ⭐ SEO + Social Sharing */}
      <Helmet>
        <title>Thank You – Knowall Paranormal</title>
        <meta
          name="description"
          content="Thank you for submitting your paranormal story to Knowall Paranormal. We appreciate your contribution and may feature it in an upcoming video."
        />
        <link rel="canonical" href="https://knowall.link/thank-you" />

        {/* OpenGraph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Thank You – Knowall Paranormal" />
        <meta
          property="og:description"
          content="Your story has been received by Knowall Paranormal. Thank you for sharing your experience with us."
        />
        <meta property="og:url" content="https://knowall.link/thank-you" />
        <meta property="og:image" content="https://knowall.link/preview.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Thank You – Knowall Paranormal" />
        <meta
          name="twitter:description"
          content="Your story submission was received. Thank you for contributing to Knowall Paranormal."
        />
        <meta name="twitter:image" content="https://knowall.link/preview.jpg" />
      </Helmet>

      {/* ⭐ PAGE CONTENT */}
      <div className="page-container">
        <section className="section thank-you-section">
          <h1 className="section-title">Thank You for Your Story 👻</h1>
          <p className="section-description">
            Your experience has been sent to Knowall Paranormal. We read every
            story, and with your permission, we may feature it in a future video
            or investigation.
          </p>

          <p className="section-description">
            Keep an eye on our TikTok, YouTube, and other socials — your encounter
            might become part of the next episode.
          </p>

          <div className="thank-you-actions">
            <a href="/" className="btn btn-secondary">
              ⬅️ Back to Home
            </a>
            <a href="/submit" className="btn btn-primary">
              Submit Another Story
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default ThankYouPage;
