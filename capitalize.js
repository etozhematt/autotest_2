export const capitalize = (text) => {
  if (text === "") {
    return "";
  }
  const char = text[0].toUpperCase();
  const str = text.slice(1);
  return `${char}${str}`;
}

export default capitalize;

console.log("ВЫЗОВ ФАЙЛА С ФУНКЦИЕЙ");
console.log("----------------------");

