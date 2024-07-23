const port = "3000";
const url = "ws://localhost";
const socket = new WebSocket(url + ":" + port);

socket.onopen = () => {
    console.log("WebSocket connection opened");
    sendMessage("I am connected. Ping!");
}

socket.onerror = (e) => {
    console.log("An Error appeared on WebSocket Connection! Info: ", e.data);
}

socket.onclose = () => {
    console.log("WebSocket connection closed");
}

function sendMessage(message) {
    socket.send(message);
}

function closeConnection() {
    socket.close();
}

export default socket;