import { Server } from "socket.io";

const io = new Server(3000, { cors: {
  origin: "*"
} });

const users = {};

io.on("connection", (socket) => {
  console.log("CONEXION RECIBIDA", socket.id);

  // Escuchar del cliente:
  socket.on("mensaje", (arg) => {
    io.emit("respuesta", `${users[socket.id]} escribio: ${arg}`);
  });

  socket.on("set-username", (username) => {
    const socketId = socket.id
    users[socketId] = username
    console.log(users)
  })
});
