const alph = "qwertyuiopasdfghjklzxcvbnm";

export const randomChar = () => {
  return alph[Math.round(Math.random() * alph.length)];
};
