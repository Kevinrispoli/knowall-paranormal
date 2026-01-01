import React from "react";
import "./styles.css"
function SocialMediaLinks() {
  return (
    <div className="social-media-links">
      <a
        href="https://www.tiktok.com/@knowall_paranormal"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://img.icons8.com/color/48/000000/tiktok.png"
          alt="TikTok"
        />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100078749831308"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://img.icons8.com/color/48/000000/facebook.png"
          alt="Facebook"
        />
      </a>
     <a
  href="https://www.youtube.com/@knowall_paranormal"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="https://img.icons8.com/color/48/000000/youtube-play.png"
    alt="YouTube"
  />
</a>

    </div>
  );
}

export default SocialMediaLinks;
