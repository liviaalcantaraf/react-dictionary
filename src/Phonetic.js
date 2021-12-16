import React from "react";
import "./Phonetic.css";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <span className="text">{props.phonetic.text}</span>
      <br />
      <ReactAudioPlayer src={props.phonetic.audio} controls className="audio" />
    </div>
  );
}
