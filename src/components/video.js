import React from "react"
export const Video = ({ videoUrl, videoTitle, ...props }) => (
  <div className="video">
    <iframe
      src={videoUrl}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      {...props}
    />
  </div>
)
export default Video