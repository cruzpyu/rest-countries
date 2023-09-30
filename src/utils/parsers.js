export const parseList = (list) => {
  return list
    .map((item) => {
      const singleValue = Object.values(item).join(", ");
      return singleValue;
    })
    .join(", ");
};

export const parseObject = (object) => {
  return object
    .map((item) => {
      const singleValue = Object.values(item)[0];
      return `${singleValue.name} (${singleValue.symbol})`;
    })
    .join(", ");
};
