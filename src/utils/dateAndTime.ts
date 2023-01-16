export function getDateAndTime() {
  let date = new Date();

  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";

  let now = `${hours}:${minutes}`;

  return {
    date,
    now,
    hours,
    minutes,
    ampm,
  };
}
