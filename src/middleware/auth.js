const jwt = require('jsonwebtoken');
const SECRET_KET = 'my-secret-key';

exports.verify = async(ctx, next) => {
    var token = ctx.request.header['token']
    jwt.verify(token,SECRET_KET, (error, decoded) => {
        if(error) {
            ctx.body = '로그인을 해야합니다.';
            return;
        }
        next();
    })
}