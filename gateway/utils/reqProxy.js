module.exports = (proxy, req, reponse) => {
    if (req.body) { 
        const reqBody = JSON.stringify(req.body);
        proxy.setHeader("Content-Type", "application/json");
        proxyReq.setHeader("Content-Length", Buffer.byteLength(bodyData));
        proxyReq.write(bodyData);
    }
};