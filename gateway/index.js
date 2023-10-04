const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const morgan= require("morgan");
const onProxyReq = require("./utils/reqProxy");

const app = express();


app.use(morgan("dev"));

//target: "http://NOMBRECONTENEDOR:puerto",

app.use("/characters", createProxyMiddleware({
	// target:"http://localhost:3001",
	target: "http://characters:3001", 
	changeOrigin:true, 
	onProxyReq,
}));

app.use("/films", createProxyMiddleware({
	// target:"http://localhost:3002", 
	target:"http://films:3002", 
	changeOrigin:true, 
	onProxyReq,
}));

app.use("/planets", createProxyMiddleware({
	// target:"http://localhost:3003", 
	target:"http://planets:3003", 
	changeOrigin:true, 
	onProxyReq,
}));

app.listen(3000, ()=>{
    console.log("Gateway on port 3000");
})