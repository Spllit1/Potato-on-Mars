const ws = require("ws");

module.exports = (server) => {
  console.clear()
  console.log("\x1b[1m\x1b[32m     Loading...")
  console.log("\x1b[1m\x1b[32mHave fun developing!\x1b[0m\x1b[1m")
	const socket = new ws.Server({ server: server, path: "/multiplayer" });

	socket.on("connection", (conn) => {

		function broadcast(data) {
			socket.clients.forEach((client) => {
				if (client !== conn && client.readyState === ws.OPEN) {
					client.send(data);
				}
			});
		}

		conn.on("message", (data) => {
			// ...
		});

		conn.on("close", (data) => {
			// ...
		});

		conn.send("oh hi");

	});

};
