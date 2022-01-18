import React from 'react';
import style from './style.module.css';
const Video = ({ video: { snippet } }) => {
  return (
    <li className={style.video}>
      <img src={snippet.thumbnails.medium.url} alt='' />

      <div className={style.metadata}>
        <p className={style.title}>{snippet.title}</p>
        <p className={style.channelTitle}>{snippet.channelTitle}</p>
      </div>
    </li>
  );
};

export default Video;
