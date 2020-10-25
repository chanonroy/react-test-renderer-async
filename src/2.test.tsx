import React, { useState } from "react"
import { create, act } from "react-test-renderer"
import { wait } from "./utils"

const Screen2 = () => {
  const [count, setCount] = useState(0)
  const incrementAsync = async () => {
    await setTimeout(() => setCount(count + 1), 0)
  }
  return (
    <>
      <div id="count">{count}</div>
      <button id="button" onClick={() => incrementAsync()}>Add</button>
    </>
  )
}
  
it("can deal with an async function that is explicitly called (mutation)", async () => {
  const { root } = create(<Screen2 />)
  expect(root.findByProps({ id: "count" }).props.children).toBe(0)
  
  await act(async() => {
    root.findByProps({ id: "button" }).props.onClick()
    await wait() // add this
  })

  expect(root.findByProps({ id: "count" }).props.children).toBe(1)
})