export const makeFirstLetterUpperCase = text => {
  text = text
    .toLowerCase()
    .split(' ')
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');

  return text;
};

export const sanitizeQuoteText = text => {
  let temptext = '';
  if (text.charAt(0) === '"' && text.charAt(text.length - 1) === '"') {
    console.log(text.substr(1, text.length - 2));
    temptext = text.substr(1, text.length - 2);
    return temptext;
  } else {
    return text;
  }
};
