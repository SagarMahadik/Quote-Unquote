export const getElementIntoView = element => {
  element.scrollIntoView({
    block: 'center',
    behavior: 'smooth',
    inline: 'center'
  });
};
