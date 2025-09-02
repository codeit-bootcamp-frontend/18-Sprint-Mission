/**
 * DateTime을 방금전, n분, 일, 월, 년전 형태로 출력한다.
 * @param {string} dateString
 * @returns {string}
 */
export const formatTimeAgo = (dateString) => {
  const now = new Date();
  const past = new Date(dateString);
  const diffInMs = now.getTime() - past.getTime();

  // 시간 단위(밀리초)
  const msInSecond = 1000;
  const msInMinute = msInSecond * 60;
  const msInHour = msInMinute * 60;
  const msInDay = msInHour * 24;
  const msInMonth = msInDay * 30; // 간단한 계산을 위해 30일로 가정
  const msInYear = msInDay * 365; // 간단한 계산을 위해 365일로 가정

  if (diffInMs >= msInYear) {
    const years = Math.floor(diffInMs / msInYear);
    return `${years}년 전`;
  } else if (diffInMs >= msInMonth) {
    const months = Math.floor(diffInMs / msInMonth);
    return `${months}달 전`;
  } else if (diffInMs >= msInDay) {
    const days = Math.floor(diffInMs / msInDay);
    return `${days}일 전`;
  } else if (diffInMs >= msInHour) {
    const hours = Math.floor(diffInMs / msInHour);
    return `${hours}시간 전`;
  } else if (diffInMs >= msInMinute) {
    const minutes = Math.floor(diffInMs / msInMinute);
    return `${minutes}분 전`;
  } else {
    return "방금 전";
  }
};
