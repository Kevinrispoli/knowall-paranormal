// src/components/HomePage.js
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./styles.css";
import SocialMediaLinks from "./SocialMediaLinks";
import QuoteBanner from "./QuoteBanner";
import BannerCarousel from "./BannerCarousel";
import TikTokThumbGrid from "./TikTokThumbGrid";

const tiktokThumbs = [
  {
    url: "https://www.tiktok.com/@knowall_paranormal/video/7184620230428151083",
    thumb: "/tiktok/t1.jpg",
    title: "Most Viewed TikTok #1",
  },
  {
    url: "https://www.tiktok.com/@knowall_paranormal/video/7146200312196451630",
    thumb: "/tiktok/t2.png",
    title: "Most Viewed TikTok #2",
  },
  {
    url: "https://www.tiktok.com/@knowall_paranormal/video/7152701262193085739",
    thumb: "/tiktok/t3.png",
    title: "Most Viewed TikTok #3",
  },
];

function HomePage() {
  return (
    <>
      {/* SEO for Home */}
      <Helmet>
        <title>Knowall Paranormal | Ghost Stories & TikTok Clips</title>
        <meta
          name="description"
          content="Short-form paranormal stories, ghost encounters, and haunted locations from Knowall Paranormal on TikTok and YouTube."
        />
        <link rel="canonical" href="https://knowall.link/" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Knowall Paranormal | Ghost Stories & TikTok Clips"
        />
        <meta
          property="og:description"
          content="Watch paranormal stories, ghost encounters, and investigations from Knowall Paranormal."
        />
        <meta property="og:url" content="https://knowall.link/" />
        <meta property="og:image" content="https://knowall.link/preview.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Knowall Paranormal | Ghost Stories & TikTok Clips"
        />
        <meta
          name="twitter:description"
          content="TikTok-based paranormal storytelling and real investigations."
        />
        <meta name="twitter:image" content="https://knowall.link/preview.jpg" />
      </Helmet>

      <div className="page-container">
        {/* HERO / INTRO SECTION */}
        <section className="hero">
          <div className="hero-text">
            <h1>Welcome to Knowall Paranormal</h1>
            <BannerCarousel />

            <p className="hero-subtitle">
              Short-form paranormal stories, investigations, and chills across
              TikTok, YouTube, and Facebook.
            </p>

            <QuoteBanner />

            <div className="hero-buttons">
              <a
                href="https://www.tiktok.com/@knowall_paranormal"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                👻 Watch on TikTok
              </a>
              <a
                href="https://www.youtube.com/@Knowall_Paranormal"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                ▶️ Subscribe on YouTube
              </a>
            </div>
          </div>
        </section>

        {/* MOST VIEWED TIKTOKS (FAST THUMBNAILS) */}
        <section className="section">
          <h2 className="section-title">Most Viewed TikToks</h2>
          <p className="section-description">
            These are the top-performing videos from Knowall Paranormal — fast to
            load and easy to watch.
          </p>

          <TikTokThumbGrid items={tiktokThumbs} />
        </section>

        {/* SOCIAL LINKS */}
        <section className="section">
          <h2 className="section-title">Follow Everywhere</h2>
          <p className="section-description">
            Catch new content first and join the community across all platforms.
          </p>
          <SocialMediaLinks />
        </section>

        {/* ABOUT PREVIEW */}
        <section className="section about-preview">
          <h2 className="section-title">About Knowall Paranormal</h2>
          <p className="section-description">
            We share real stories, investigations, and unexplained events —
            breaking down the strange and supernatural in a way anyone can
            follow.
          </p>
          <Link to="/about" className="text-link">
            Learn more about the mission →
          </Link>
        </section>
      </div>
    </>
  );
}

export default HomePage;
