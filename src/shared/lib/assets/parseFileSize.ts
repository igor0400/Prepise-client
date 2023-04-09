export const parseFileSize = (size: number): string => {
  if (size < 1000) return `${size}б`;

  const sizeInKB = ~~(size / 1000);

  if (sizeInKB < 1000) return `${sizeInKB}кб`;

  const sizeInMB = ~~(sizeInKB / 1000);

  if (sizeInMB < 1000) return `${sizeInMB}мб`;

  const sizeInGB = ~~(sizeInMB / 1000);

  return `${sizeInGB}гб`;
};
