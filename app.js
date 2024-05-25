// const _ = require("lodash");

// const items = [1, [2, [3, [4]]]];
// const newItems = _.flattenDeep(items);

// console.log(newItems);

const http = require("http");

const app = http.createServer((req, res) => {
  res.write("<h1>Homepage</h1>");
  res.end();
});

app.listen(3300, () => {
  console.log("Server is running on port 3300");
});
