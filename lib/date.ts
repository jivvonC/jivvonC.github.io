export function seoulDate() {
  const now = new Date();
  const weekday = now.toLocaleDateString("en-US", {
    timeZone: "Asia/Seoul",
    weekday: "long",
  });
  const date = now.toLocaleDateString("en-US", {
    timeZone: "Asia/Seoul",
    month: "numeric",
    day: "numeric",
    year: "numeric",
  });
  return `${weekday}, ${date}`;
}
