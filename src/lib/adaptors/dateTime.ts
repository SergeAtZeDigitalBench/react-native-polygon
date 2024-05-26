export const getCurrentTime = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  return {
    hours: hours < 10 ? `0${hours}` : hours.toString(),
    minutes: minutes < 10 ? `0${minutes}` : minutes.toString(),
    seconds: seconds < 10 ? `0${seconds}` : seconds.toString(),
  };
};
