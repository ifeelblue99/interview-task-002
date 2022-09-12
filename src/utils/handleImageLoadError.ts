import React from "react";

function handleImageLoadError(
  err: React.SyntheticEvent<HTMLImageElement, Event>
) {
  /* handle image load errors with default image `no-post-image.png in task assets`*/
  err.target.src = "src/task-assets/no-post-image.png";
}

export default handleImageLoadError;
