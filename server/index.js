import { Server } from "socket.io";

const io = new Server(3000, { cors: {
  origin: "*"
} });

io.on("connection", (socket) => {
  console.log("CONEXION RECIBIDA", socket.id);

  // Escuchar del cliente:
  socket.on("mensaje", (arg) => {
    io.emit("respuesta", `${socket.id} escribio: ${arg}`);
  });
});
