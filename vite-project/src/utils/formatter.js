export function formatPrice(price, suffix = "") {
  return Intl.NumberFormat().format(price) + suffix;
}

export function formatDateYYYYMMDD(dateString) {
  const date = new Date(dateString);
  const isoString = date.toISOString();
  const index = isoString.indexOf("T");
  return isoString.slice(0, index);
}
