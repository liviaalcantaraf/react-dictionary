import React from "react";
import "./Phonetic.css";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <div className="col-2">
        <span className="text">{props.phonetic.text}</span>
        <p className="mt-3">
          <ReactAudioPlayer
            src={props.phonetic.audio}
            controls
            className="audio"
          />
        </p>
      </div>
    </div>
  );
}
