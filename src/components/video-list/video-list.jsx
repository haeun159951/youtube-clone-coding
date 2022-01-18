import React from 'react';
import Video from '../video/video';
import style from './style.module.css';

const VideoList = (props) => {
  return (
    <ul className={style.videos}>
      {props.videos.map((video) => (
        <Video key={video.id} video={video} />
      ))}
    </ul>
  );
};
export default VideoList;
