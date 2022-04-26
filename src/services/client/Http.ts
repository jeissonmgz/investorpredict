const get = <T>(url: string): Promise<T> => {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json() as Promise<T>;
  });
};

export const Http = {
  get,
};
