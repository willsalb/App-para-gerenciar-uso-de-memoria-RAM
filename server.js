const http = require("http");
const host = "http://localhost";
const port = 5000;
const stats = require("./pcRamUsage");

http
  .createServer((req, res) => {
    let url = req.url;

    if (url === "/stats") {
      res.end(JSON.stringify(stats, null, 2));
    } else {
      res.end("<h1>Hello World!</h1>");
    }
  })
  .listen(port, () => console.log(`Server is runing in ${host}:${port}`));
