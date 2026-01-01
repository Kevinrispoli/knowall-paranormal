



// src/components/AboutPage.js
import React from "react";
import { Helmet } from "react-helmet-async";
import "./styles.css";

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us – Knowall Paranormal</title>
        <meta
          name="description"
          content="Meet the creators behind Knowall Paranormal. TikTok-based paranormal storytelling and real investigations into haunted places and unexplained encounters."
        />
        <link rel="canonical" href="https://knowall.link/about" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Knowall Paranormal" />
        <meta
          property="og:description"
          content="Behind the scenes of Knowall Paranormal – the team, the mission, and our approach to paranormal storytelling and investigation."
        />
        <meta property="og:image" content="https://knowall.link/preview.jpg" />
      </Helmet>

      <div className="about-page">
        <h1 className="about-title">About Knowall Paranormal</h1>

        <p className="about-text">
          We are the creators behind Knowall Paranormal — investigators,
          storytellers, and explorers of the unexplained. From TikTok short
          stories to full investigations, we break down paranormal encounters in
          a way anyone can follow.
        </p>

        <div className="about-videos">
          {/* Video 1 */}
          <div className="about-video-card">
            <video
              className="about-video"
              src="/videos/AboutUs1.mp4"
              controls
              preload="metadata"
            />
            <div className="about-video-caption">
              <h2>Who We Are</h2>
              <p>
                Meet the creators behind Knowall Paranormal — storytellers and
                investigators exploring the unknown.
              </p>
            </div>
          </div>

          {/* Video 2 */}
          <div className="about-video-card">
            <video
              className="about-video"
              src="/videos/AboutUs2.mp4"
              controls
              preload="metadata"
            />
            <div className="about-video-caption">
              <h2>The Furry Division</h2>
              <p>
                Meet our lovable pet rats — the unofficial mascots of Knowall
                Paranormal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;