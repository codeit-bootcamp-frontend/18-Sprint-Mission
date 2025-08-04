export function formatPrice(price, suffix = "") {
  return Intl.NumberFormat().format(price) + suffix;
}
