export function generateFormData(values: any) {
  const formData = new FormData();
  for (let key in values) {
    const value = values[key];

    if (Array.isArray(value)) {
      for (let arrI of value) {
        if (typeof arrI === 'string') {
          formData.append(key, arrI);
        } else {
          formData.append(key, arrI as File, arrI?.name);
        }
      }
    } else if (value !== undefined) {
      formData.append(key, value);
    }
  }

  return formData;
}
