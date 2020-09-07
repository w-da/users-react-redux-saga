const timeOptions = {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
};

export function getCurrentTime() {
  const currentTime = new Date().toLocaleString('en-US', timeOptions);
  return currentTime;
}
