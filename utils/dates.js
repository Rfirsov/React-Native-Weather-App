const currentDate = new Date();
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

export const fullDate = currentDate.toLocaleDateString('ua-UA', options);
export const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const getNumOfWeek = (timestamp) => new Date(timestamp).getUTCDay();
export const getDayOfWeek = (unixTimestamp) => week[getNumOfWeek(unixTimestamp * 1000)];
