export function throttle(f: () => void, delay: number) {
  let prev = 0;

  return () => {
    const now = new Date().getTime();

    if (now - prev > delay) {
      prev = now;
      f();
    }
  };
}
