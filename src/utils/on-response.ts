export function onResponse<T>(res: Response): Promise<T> {
  return res.ok
    ? res.json()
    : res.json().then((data) => Promise.reject(`Ошибка${data.status}`));
}
