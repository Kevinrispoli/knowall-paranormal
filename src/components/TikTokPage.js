// src/components/TikTokPage.js
import React from "react";
import { Helmet } from "react-helmet-async";
import "./styles.css";
import TikTokThumbGrid from "./TikTokThumbGrid";

const topTikToks = [
  {
    url: "https://www.tiktok.com/@knowall_paranormal/video/7184620230428151083",
    thumb: "/tiktok/t1.jpg", // ✅ matches your file
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

const moreTikToks = [
  {
    url: "https://www.tiktok.com/@knowall_paranormal/video/7581502966889254199",
    thumb: "/tiktok/t4.png",
    title: "More TikTok #1",
  },
  {
    url: "https://www.tiktok.com/@knowall_paranormal/video/7580396295928433933",
    thumb: "/tiktok/t5.png",
    title: "More TikTok #2",
  },
  {
    url: "https://www.tiktok.com/@knowall_paranormal/video/7580014609843719438",
    thumb: "/tiktok/t6.png",
    title: "More TikTok #3",
  },
];

function TikTokPage() {
  return (
    <>
      <Helmet>
        <title>TikTok Videos – Knowall Paranormal</title>
        <meta
          name="description"
          content="Watch Knowall Paranormal TikTok clips: ghost stories, haunted locations, and TikTok-based paranormal storytelling and real investigations."
        />
        <link rel="canonical" href="https://knowall.link/tiktoks" />
      </Helmet>

      <div className="page-container">
        <section className="section">
          <h1 className="section-title">Most Viewed TikToks</h1>
          <p className="section-description">
            Fast-loading previews — click to open instantly on TikTok.
          </p>
          <TikTokThumbGrid items={topTikToks} />
        </section>

        <section className="section">
          <h2 className="section-title">More TikToks from Knowall Paranormal</h2>
          <p className="section-description">
            More eerie encounters, strange sightings, and unexplained stories.
          </p>
          <TikTokThumbGrid items={moreTikToks} />
        </section>
      </div>
    </>
  );
}

export default TikTokPage;
