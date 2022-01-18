import React, { useEffect, useState } from "react";
import "./app.css";
import VideoList from "./components/video-list/video-list";
import Navbar from "./components/navbar/navbar";
function App() {
  const [videos, setVideos] = useState([]);

  const search = (q) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&q=${q}&key=AIzaSyCfEkD3AwoALkY-DBvXzbxuUf9VsQkVpKY`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      )
      .then((items) => setVideos(items))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&maxResults=25&chart=mostPopular&key=AIzaSyCfEkD3AwoALkY-DBvXzbxuUf9VsQkVpKY",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items)) //컴포넌트에 데이터를 업데이트 해준다
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <>
      <Navbar onSearch={search} />
      <VideoList videos={videos} />
    </>
  );
}

export default App;
