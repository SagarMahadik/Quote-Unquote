export const submitVibrations = () => {
  navigator.vibrate = navigator.vibrate;

  if (navigator.vibrate) {
    return navigator.vibrate(12);
  }
};

export const incomeButtonVibrations = () => {
  navigator.vibrate = navigator.vibrate;

  if (navigator.vibrate) {
    return navigator.vibrate(8);
  }
};

export const randomButtonVibrations = () => {
  navigator.vibrate = navigator.vibrate;

  if (navigator.vibrate) {
    return navigator.vibrate(6);
  }
};

export const goButtonVibrations = () => {
  navigator.vibrate = navigator.vibrate;

  if (navigator.vibrate) {
    return navigator.vibrate(4);
  }
};
