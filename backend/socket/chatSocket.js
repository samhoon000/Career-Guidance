module.exports.initChat = (server) => {
  const io = require("socket.io")(server, {
    cors: { origin: "*" }
  });

  io.on("connection", socket => {
    console.log("User connected to chat:", socket.id);

    // To be implemented by your friend later
  });
};
