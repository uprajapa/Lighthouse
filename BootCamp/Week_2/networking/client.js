const net = require("net");
const stdin = process.stdin;
const conn = net.createConnection({
  // host: `99.228.192.84`, // change to IP address of computer, more on that below
  host: `localhost`, // change to IP address of computer, more on that below
  port: 3001,
});

conn.on("connect", () => {
  conn.write("Hello from client!");
});


conn.setEncoding("utf8"); // interpret data as text
conn.on("data", (data) => {
  console.log("Server says: ", data);
});

stdin.on("data", (data) => {
  conn.write(data);
});