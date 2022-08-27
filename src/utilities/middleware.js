const requestlogger = (req, res, next) => {
    console.log('method:', req.method)
    console.log('path:' , req.path)
    console.log('body:' , req.body)
}


const unknownEndpoint = (req, res) =>{
    res.status(404).send({
        error:'unknown endpoint' })

}



module.exports = {
    requestlogger,
    unknownEndpoint
}