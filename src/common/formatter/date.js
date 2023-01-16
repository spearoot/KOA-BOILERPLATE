const moment = require('moment')

moment().format(); // 2021-10-09T00:15:13+09:00
moment().fromNow();

/**
 * 오늘 날짜의 글일경우 N분전 또는 N시간전 등으로 표시
 * 오늘 이전의 날짜의 경우엔 YYYY-MM-DD 형식으로 표시
 * @param {*} date YYYY-MM-DD HH:mm:ss 형식의 문자
 * @return {string}
 */
exports.dateFromNow = (date) => {
    moment().fromNow();
};
/**
 * 새 10분을 기준으로 새글인지 판단
 * @author 창근
 * @date 2023-01-12
 * @param {*} date 
 * @returns 새글이면 true 아니면 false
 */
exports.isNewFeed = date =>{
    let.currentTime = moment().add(-10,'minute');
    let feedDate = moment(date);
    return feedDate.isAfter(currentTime);
}