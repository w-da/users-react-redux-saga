const dateOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
};

export const normalizeDate = date => {
  const normalizedDate = new Date(date);
  return normalizedDate.toLocaleDateString('en-US', dateOptions);
};
