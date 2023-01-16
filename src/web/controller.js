/** 사이트 메인 페이지 */
exports.home = (ctx,next) => {
    ctx.body = '홈페이지';
    console.log('홈페이지 호출');
}
/** 약관, 개인정보처리방침 등 정적 페이지 */
exports.page = (ctx, next) => {
    let page = ctx.params.page;
    let content = "이용약관";
    switch (page) {
        case 'terms' : 
            content = "이용약관";
            break;
        case 'policy':
            content = '개인정보 처리방침';
            break;
    }
    ctx.body = `<html>
    <style "background-color : "gray">
    </html>`
}
