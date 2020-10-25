import React, { useState } from "react";
import { create, act } from "react-test-renderer";

const Screen1 = () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  return (
    <>
      <div id="count">{count}</div>
      <button id="button" onClick={() => increment()}>Add</button>
    </>
  )
}

it("1. Use an act to update synchronous state", () => {
  const { root } = create(<Screen1 />)
  expect(root.findByProps({ id: "count" }).props.children).toBe(0)

  act(() => { // add this
    root.findByProps({ id: "button" }).props.onClick()
  })

  expect(root.findByProps({ id: "count" }).props.children).toBe(1)
})