const formatPrice = (price) => {
  if (price === null || price === undefined) return "";
  const number = Number(price);
  if (isNaN(number)) return "";

  return `${number.toLocaleString()}원`;
};

export default formatPrice;