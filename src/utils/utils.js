export const sleep = (amount) =>
  new Promise((res) => {
    setTimeout(() => {
      res()
    }, amount)
  })
