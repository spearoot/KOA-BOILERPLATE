const jwt = require('jsonwebtoken');

/** 해당 id의 회원정보들 */
exports.info = (ctx,next) => {
    let id = ctx.params.id;
    ctx.body = `${id} 회원에 대한 정보`;
}

exports.register = async (ctx,next) => {
    let token = await generateToken({name:'my-name'});
    ctx.body = token;
}
exports.login = async (ctx,next) => {
    let {id, pw} = ctx.request.body;
    let result = "";
    // 계정이 있는경우 토큰 발급
    if (id === 'admin'&& pw ==='1234'){
        result = await generateToken({name : 'abc'});
    } else {
        result = "아이디 혹은 패스워드가 올바르지 않습니다.";
    }
    ctx.body = result;
}

let generateToken = (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, process.env.APP_KEY, (error,token) => {
            if(error) { reject(error); }    
            resolve(token);
        })
    })
}