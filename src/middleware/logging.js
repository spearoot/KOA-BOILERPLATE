    exports.myLogging = async (ctx,next) => {
    let clientIp = ctx.request.ip;
    let url = ctx.originalUrl
    console.log(`${clientIp.replace("::ffff:","")} 주소에서 요청 : ${url}`);
    await next();
}