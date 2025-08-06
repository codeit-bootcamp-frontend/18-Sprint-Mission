export function formatPrice(price, suffix = "") {
  return Intl.NumberFormat().format(price) + suffix;
}

export function formatDateYYYYMMDD(dateString) {
  const date = new Date(dateString);
  const isoString = date.toISOString();
  const index = isoString.indexOf("T");
  return isoString.slice(0, index);
}

export function formatElapsedTime(dateString) {
  const now = new Date();
  const target = new Date(dateString);
  let diff = (now.getTime() - target.getTime()) / 1000;

  const resultString = (diff, unit) => `${Math.ceil(diff)}${unit} 전`;

  if (diff < 60) {
    return resultString(diff, "초");
  }

  diff /= 60;
  if (diff < 60) {
    return resultString(diff, "분");
  }

  diff /= 60;
  if (diff < 24) {
    return resultString(diff, "시간");
  }

  diff /= 24;
  if (diff < 30) {
    return resultString(diff, "일");
  }

  diff /= 30;
  if (diff < 12) {
    return resultString(diff, "개월");
  }

  return `${now.getFullYear() - target.getFullYear()}년 전`;
}
