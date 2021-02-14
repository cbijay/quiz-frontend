import React from "react";

function DocViewer({ source }) {
  if (!source) {
    return <div>Loading...</div>;
  }

  const src = source;
  return (
    <div>
      <iframe src={src} title="file" width="100%" height="600"></iframe>
    </div>
  );
}

export default DocViewer;
