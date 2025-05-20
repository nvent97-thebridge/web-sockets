let socket = io("http://localhost:3000");

const btnSend = document.getElementById("btnSend");
const inputMessage = document.getElementById("inputMessage");
const listMessages = document.getElementById("listMessages");

const sendMessage = () => {
  const message = inputMessage.value;
  socket.emit("mensaje", message);
  inputMessage.value = ""
};

const listenMessages = (message) => {
  listMessages.innerHTML += `
    <li>${message}</li>
 `;
};

socket.on("respuesta", listenMessages);
btnSend.addEventListener("click", sendMessage);
