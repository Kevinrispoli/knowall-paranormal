// src/components/YouTubePage.js
import React from "react";
import { Helmet } from "react-helmet-async";
import "./styles.css";

export default function YouTubePage() {
  const latestVideoId = "x5v-_H0UYXE";

  return (
    <>
      <Helmet>
        <title>YouTube – Knowall Paranormal</title>
        <meta
          name="description"
          content="Watch the latest Knowall Paranormal uploads on YouTube — full episodes, investigations, and deep dives into the unknown."
        />
        <link rel="canonical" href="https://knowall.link/youtube" />
      </Helmet>

      <div className="page-container">
        <section className="section">
          <h1 className="section-title">Knowall Paranormal on YouTube</h1>
          <p className="section-description">Latest uploads from our YouTube channel.</p>

          <div className="video-embed-wrapper">
            <iframe
              className="video-embed-iframe"
              src={`https://www.youtube.com/embed/${latestVideoId}`}
              title="Knowall Paranormal - Latest Upload"
              frameBorder="0"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <p className="section-description" style={{ marginTop: 12 }}>
            Channel link:{" "}
            <a
              href="https://www.youtube.com/@knowall_paranormal"
              target="_blank"
              rel="noopener noreferrer"
            >
              youtube.com/@knowall_paranormal
            </a>
          </p>
        </section>
      </div>
    </>
  );
}
