export const trToEng = (str) => {
  str = str.replace(/ı/g, "i");
  str = str.replace(/ğ/g, "g");
  str = str.replace(/ü/g, "u");
  str = str.replace(/ş/g, "s");
  str = str.replace(/ö/g, "o");
  str = str.replace(/ç/g, "c");
  return str;
};
