export const secondsToMinutes = (seconds: number, active: boolean): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedMinutes = active
    ? String(minutes).padStart(2, "0")
    : String(minutes);
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
};

export const timeToSeconds = (time: string): number => {
  const [minutes, seconds] = time.split(":").map(Number);
  const totalSeconds = minutes * 60 + seconds;
  return totalSeconds;
};
