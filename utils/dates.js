const currentDate = new Date();
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

export const fullDate = currentDate.toLocaleDateString('ua-UA', options);
export const currentHour = currentDate.getHours();

export const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
