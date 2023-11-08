//1
const express = require("express");
const morgan = require("morgan");
const router = require("./routes");

const server = express();

server.use(morgan("dev"));
server.use(express.json());

server.use(router); // server.use(require("./routes"))

module.exports= server;