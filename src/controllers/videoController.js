const trending = (req, res) => res.send("Home Page Videos");

const handleWatchVideo = (req, res) => res.send("Watch Video");

const handleEditVideo = (req, res) => res.send("Edit Video");

export {
  trending,
  handleWatchVideo,
  handleEditVideo,
};
