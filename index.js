const Koa = require('koa');
const Router = require('@koa/router');
const bodyParser =require('koa-bodyparser');
const render = require('koa-ejs');
const path = require('path')
const app = new Koa();
const router = new Router();

// 서버 실행 포트 3000
const port = process.env.PORT || 3000;

// 바디파서 셋팅 http request 의 body 부분을 활용할 수 있도록 해줌
app.use(bodyParser({formLimit: '5mb'}));

console.log(__dirname);
// 정적 실행 public 디렉토리를 지정
app.use(require('koa-static')(`${__dirname}/public`));

// 라우터 설정
router.use(require('./src/routes').routes());
app.use(router.routes());
app.use(router.allowedMethods());

render(app, {
    // layout : null;
    layout : 'layouts/template',
    root : path.join(__dirname, '/views'),
    viewExt: 'ejs', cache: false
});
// 서버 실행
app.listen(port, () => {
    console.log(`웹서버 구동... ${port}`);
})