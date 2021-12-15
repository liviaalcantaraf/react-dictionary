import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonyms mb-3">
        {props.synonyms.map(function (synonym, index) {
          return <li className="index">{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
