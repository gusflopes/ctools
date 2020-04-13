import React from "react"

// className = "video"

export const Video = ({ videoUrl, videoTitle, ...props }) => (
  <div className="embed-responsive embed-responsive-16by9" >
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