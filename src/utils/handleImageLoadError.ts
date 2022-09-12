import React from "react";

function handleImageLoadError(
  err: React.SyntheticEvent<HTMLImageElement, Event>
) {
  /* handle image load errors with default image `no-post-image.png in task assets`*/
  (err.target as HTMLImageElement).src = "src/task-assets/no-post-image.png";
}

export default handleImageLoadError;
