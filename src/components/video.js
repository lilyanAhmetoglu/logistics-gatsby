import React from "react"
import VideoPJ from '../images/QLogistisc_Product_Journey_HB_.mp4'
const Video = ({ videoSrcURL, videoTitle}) => (
  <div className=" embed-responsive embed-responsive-16by9">
    <iframe
      className=""
      src={VideoPJ}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)
export default Video