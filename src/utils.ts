export const waitFor = async (cb: any) => {
  let c = 0

  async function f() {
    try {
      await cb()
    } catch (error) {
      if (c < 9) {
        c += 1
        setTimeout(f, 500)
      }
    }
  }

  await f()
}

export const wait = async () => {
  await new Promise((resolve) => setTimeout(resolve, 0))
}
