 export const orderApi =  ({ingredients}) => {
    fetch("https://norma.nomoreparties.space/api/orders", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          ingredients:ingredients,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setOrderNumber(data.order.number);
        })
        .catch((error) => {
          console.log(`Упс ошибка - ${error}`);
        });
}