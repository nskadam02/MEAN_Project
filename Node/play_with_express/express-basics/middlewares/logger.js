// logger middleware -  reusable logic
//CJS 

//ESM


function logger(req, res, next) {
    const method = req.method;
    const url = req.url;
    const start= +new Date()

    res.on('finish', () => {
        const ms = +new Date() - start;
        const logmsg=`${method} ${url} took ${ms}ms\n`;
        process.stdout.write(logmsg);
    });
    next();

}

module.exports = logger;