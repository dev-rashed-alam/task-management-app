import moment from 'moment';

export const generateRandomString = (strLength) => {
  const length = typeof strLength === 'number' && strLength > 0 ? strLength : false;
  if (length) {
    const possibleCharacters = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let output = '';

    for (let i = 1; i <= length; i += 1) {
      const randomCharacter = possibleCharacters.charAt(
        Math.floor(Math.random() * possibleCharacters.length)
      );
      output += randomCharacter;
    }

    return output;
  }
  return false;
};

export const changeDate = (date) => {
  const dateObj = new Date(date);
  return moment(dateObj).format('DD MMM, YY');
};
