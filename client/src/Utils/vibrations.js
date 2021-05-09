export const submitVibrations = () => {
  navigator.vibrate = navigator.vibrate;

  if (navigator.vibrate) {
    return navigator.vibrate([300.2, 200]);
  }
};

export const apirequestSuccessVibraions = () => {
  navigator.vibrate = navigator.vibrate;

  if (navigator.vibrate) {
    return navigator.vibrate([100, 2, 200]);
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
    return navigator.vibrate(9);
  }
};

export const goButtonVibrations = () => {
  navigator.vibrate = navigator.vibrate;

  if (navigator.vibrate) {
    return navigator.vibrate(9);
  }
};

export const formClickVibrations = () => {
  navigator.vibrate = navigator.vibrate;

  if (navigator.vibrate) {
    return navigator.vibrate(10);
  }
};

export const playVibrations = time => {
  if (navigator.vibrate) {
    return navigator.vibrate(time);
  }
};
