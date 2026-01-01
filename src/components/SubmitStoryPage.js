// src/components/SubmitStoryPage.js
import React from "react";
import { Helmet } from "react-helmet-async";
import "./styles.css";

function SubmitStoryPage() {
  return (
    <>
      {/* ⭐ SEO + Social Sharing for Submit Story */}
      <Helmet>
        <title>Submit Your Paranormal Story – Knowall Paranormal</title>
        <meta
          name="description"
          content="Share your paranormal encounter with Knowall Paranormal. Ghost sightings, unexplained events, shadow figures, haunted locations — tell us everything."
        />
        <link rel="canonical" href="https://knowall.link/submit" />

        {/* OpenGraph (Facebook, Discord, Messages) */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Submit Your Paranormal Story – Knowall Paranormal"
        />
        <meta
          property="og:description"
          content="Tell us your paranormal experience. With your permission, your story may be featured in a future video or investigation."
        />
        <meta property="og:url" content="https://knowall.link/submit" />
        <meta property="og:image" content="https://knowall.link/preview.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Submit Your Paranormal Story – Knowall Paranormal"
        />
        <meta
          name="twitter:description"
          content="Share your ghost encounter or unexplained event with Knowall Paranormal."
        />
        <meta name="twitter:image" content="https://knowall.link/preview.jpg" />
      </Helmet>

      {/* ⭐ PAGE CONTENT */}
      <div className="page-container">
        <section className="section">
          <h1 className="section-title">Submit Your Paranormal Story</h1>
          <p className="section-description">
            Have you experienced something you can't explain? Share your story
            with Knowall Paranormal. With your permission, we may feature it in a
            future video, TikTok, or investigation.
          </p>

          <form
            className="story-form"
            action="https://formsubmit.co/kevin.rispoli@yahoo.com"
            method="POST"
          >
            {/* Email options for FormSubmit */}
            <input
              type="hidden"
              name="_subject"
              value="New Paranormal Story Submission!"
            />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            {/* CC to your wife */}
            <input type="hidden" name="_cc" value="trispoli87@yahoo.com" />

            {/* Redirect to LIVE thank-you page */}
            <input
              type="hidden"
              name="_next"
              value="https://knowall.link/thank-you"
            />

            <div className="form-group">
              <label htmlFor="name">Your Name (or Alias)</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Jane Doe / Anonymous"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email (optional – only if you want us to follow up)
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="location">
                Where did this happen? (City / State / Country or "Online")
              </label>
              <input
                id="location"
                name="location"
                type="text"
                placeholder="Example: Denver, CO"
              />
            </div>

            <div className="form-group">
              <label htmlFor="title">Story Title</label>
              <input
                id="title"
                name="title"
                type="text"
                placeholder="The Night Something Walked Down the Hall..."
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="story">Your Paranormal Experience</label>
              <textarea
                id="story"
                name="story"
                rows="6"
                placeholder="Tell us everything — what you saw, heard, felt, and how it made you feel..."
                required
              />
            </div>

            <div className="form-group form-checkbox">
              <label>
                <input type="checkbox" name="permission" required />
                I give Knowall Paranormal permission to share this story in
                videos, posts, or streams. (We will never share your email.)
              </label>
            </div>

            <button type="submit" className="btn btn-primary">
              ✉️ Send My Story
            </button>
          </form>
        </section>
      </div>
    </>
  );
}

export default SubmitStoryPage;
