export const increment = cb => cb(prev => (+prev > 95 ? 100 : +prev + 5));

export const decrement = cb =>
  cb(prev => (+prev < 5 ? +prev - +prev : +(+prev - 5).toFixed(2)));
