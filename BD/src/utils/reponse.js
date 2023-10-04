module.exports = (res, data, statusCode) =>{
    res.status(statusCode).send({error: false, data});
}