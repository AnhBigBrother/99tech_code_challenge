export const formatter = (x: number) => {
  if (Number.isInteger(x)) return `${x}`;
  return x.toString().replace(/\d(?=(\d{3})+\.)/g, '$&,');
};
