import React from "react";

export const MapEmoji = ({ emoji, text }) => (
  <div>
    <span role="img" className="h5" title={text}>
      {emoji}
    </span>
  </div>
);

export default MapEmoji;
