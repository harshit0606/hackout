import React from 'react'
import "./artist.css";
import {BsFillPlayCircleFill} from "react-icons/bs";
import SongsList from '../songs/songsList';
import FansList from '../fansList/fansList';
function Artist() {
     const data = [
       {
         url: "https://i.ytimg.com/vi/CwJ8SUhTQYA/maxresdefault.jpg",
         name: "Gaani",
         artistName: "Guri",
         price: 0.5,
         desc: "Geet MP3 & Omjee Star Studios Presenting New Song Gaani From Movie Jatt Brothers",
       },
       {
         url: "https://i.ytimg.com/vi/CwJ8SUhTQYA/maxresdefault.jpg",
         name: "Gaani",
         artistName: "Guri",
         price: 0.5,
         desc: "Geet MP3 & Omjee Star Studios Presenting New Song Gaani From Movie Jatt Brothers",
       },
       {
         url: "https://i.ytimg.com/vi/CwJ8SUhTQYA/maxresdefault.jpg",
         name: "Gaani",
         artistName: "Guri",
         price: 0.5,
         desc: "Geet MP3 & Omjee Star Studios Presenting New Song Gaani From Movie Jatt Brothers",
       },
       {
         url: "https://i.ytimg.com/vi/CwJ8SUhTQYA/maxresdefault.jpg",
         name: "Gaani",
         artistName: "Guri",
         price: 0.5,
         desc: "Geet MP3 & Omjee Star Studios Presenting New Song Gaani From Movie Jatt Brothers",
       },
       {
         url: "https://i.ytimg.com/vi/CwJ8SUhTQYA/maxresdefault.jpg",
         name: "Gaani",
         artistName: "Guri",
         price: 0.5,
         desc: "Geet MP3 & Omjee Star Studios Presenting New Song Gaani From Movie Jatt Brothers",
       },
       {
         url: "https://i.ytimg.com/vi/CwJ8SUhTQYA/maxresdefault.jpg",
         name: "Gaani",
         artistName: "Guri",
         price: 0.5,
         desc: "Geet MP3 & Omjee Star Studios Presenting New Song Gaani From Movie Jatt Brothers",
       },
       {
         url: "https://i.ytimg.com/vi/CwJ8SUhTQYA/maxresdefault.jpg",
         name: "Gaani",
         artistName: "Guri",
         price: 0.5,
         desc: "Geet MP3 & Omjee Star Studios Presenting New Song Gaani From Movie Jatt Brothers",
       },
       {
         url: "https://i.ytimg.com/vi/CwJ8SUhTQYA/maxresdefault.jpg",
         name: "Gaani",
         artistName: "Guri",
         price: 0.5,
         desc: "Geet MP3 & Omjee Star Studios Presenting New Song Gaani From Movie Jatt Brothers",
       },
     ];
     const fanData = [
       {
         address: "123893123193asd1920213213",
         donations: 100,
       },
       {
         address: "123893123193asd1920213213",
         donations: 100,
       },
       {
         address: "123893123193asd1920213213",
         donations: 100,
       },
       {
         address: "123893123193asd1920213213",
         donations: 100,
       },
       {
         address: "123893123193asd1920213213",
         donations: 100,
       },
     ];
  return (
    <div className="artist_main">
      <div className="img_div">
        <img src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_760,c_fill,h_380,g_face/q_75,f_auto,w_660,c_thumb,h_380,g_west/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1499859384%2Fw22jeadhkdltecmr1fac.jpg" />
        <h1>Diljeet Dosanjh</h1>
      </div>
      <div className="artist_songs">
        <div style={{ display: "flex", alignItems: "center" }}>
          {" "}
          <BsFillPlayCircleFill className="play_icon" />
          <h2 style={{ marginLeft: "30px" }}>Popular</h2>
        </div>

        <div className="songs_table">
          {data.map((d, index) => (
            <SongsList songdata={d} index={index} />
          ))}
        </div>
      </div>
      <div className="artist_fans">
        <h2>Top Fans</h2>
        <div className="songs_table">
          {fanData.map((d, index) => (
            <FansList fanData={d} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Artist