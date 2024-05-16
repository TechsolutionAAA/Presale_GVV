export const debouncer = <P extends any[], R>(
    callback: (...options: P) => R,
    interval: number
  ) => {
    let timerId: ReturnType<typeof setTimeout> | null = null;
    return (...options: P) => {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        callback(...options);
      }, interval);
    };
  };
  