export const secondsToMinutes = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  if (minutes < 10) {
    return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
  }

  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

export const timeToSeconds = (time: string): number => {
  const [minutes, seconds] = time.split(":").map(Number);
  const totalSeconds = minutes * 60 + seconds;
  return totalSeconds;
};
