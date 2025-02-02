export const sleep = (miliseconds) => {
  return new Promise(response => {
    setTimeout(() => {
      response(true);
    }, miliseconds)
  })
}
