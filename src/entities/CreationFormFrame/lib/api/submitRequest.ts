import { secureApi } from '../../../../shared';

export const submitRequest = async (url: string, values: any) => {
  const formData = new FormData();
  for (let item in values) {
    if (Array.isArray(values[item])) {
      for (let arrI of values[item]) {
        formData.append(item, arrI as File, arrI.name);

        console.log(item, arrI, arrI.name);
      }
    } else if (values[item] !== undefined) {
      formData.append(item, values[item]);

      console.log(item, values[item]);
    }
    console.log(values[item]);
  }

  console.log(formData);

  // const data = await secureApi().post(url, { body: formData }).json();
  // return data;
};
