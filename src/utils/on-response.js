export function onResponse(res) {
  return res.ok
    ? res.json()
    : res.json().then((data) => Promise.reject(`Ошибка${data.status}`));
}
