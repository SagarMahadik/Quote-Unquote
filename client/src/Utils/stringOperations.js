export const makeFirstLetterUpperCase = text => {
  text = text
    .toLowerCase()
    .split(' ')
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');

  return text;
};

function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

export const sanitizeQuoteText = text => {
  if (text.charAt(0) === '"' && text.charAt(text.length - 1) === '"') {
    console.log(text.substr(1, text.length - 2));
    text = text.substr(1, text.length - 2);
  }
  if (text.charAt(0) === '“' && text.charAt(text.length - 1) === '”') {
    console.log(text.substr(1, text.length - 2));
    text = text.substr(1, text.length - 2);
  }
  if (
    text.charAt(0) === '"' ||
    text.charAt(0) === "'" ||
    text.charAt(0) === '“'
  ) {
    text = text.substring(1);
  }
  if (
    text.charAt(text.length - 1) === '"' ||
    text.charAt(text.length - 1) === "'" ||
    text.charAt(text.length - 1) === '”' ||
    text.charCodeAt(text.length - 1) === 10
  ) {
    text = text.substr(0, text.length - 1);
  }

  if (text.charAt(text.length - 1) !== '.') {
    text = text + '.';
  }
  return capitalizeFirstLetter(text);
};
