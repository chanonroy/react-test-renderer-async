import React, { useState } from "react";
import { create, act } from "react-test-renderer";

const Screen1 = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <div id="count">{count}</div>
      <button id="button" onClick={() => setCount(count + 1)}>Add</button>
    </>
  )
}

it("1. Use an act to update synchronous state", () => {
  const { root } = create(<Screen1 />)
  expect(root.findByProps({ id: "count" }).props.children).toBe(0)
  act(() => {
    expect(root.findByProps({ id: "button" }).props.onClick())
  })
  expect(root.findByProps({ id: "count" }).props.children).toBe(1)
})

it.todo("can deal with an async function that is explicitly called (mutation)")

it.todo("can deal with an async function and cannot wait on something (query)")

it.todo("can deal with an async side effec that affects internal state (useEffect)")

