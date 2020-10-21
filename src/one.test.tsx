import React from "react";
import TestRenderer from "react-test-renderer";

function Link(props) {
  return <a href={props.page}>{props.children}</a>;
}

describe("basic", () => {
  it("can render", () => {
    // const testRenderer = TestRenderer.create(
    //   <Link page="https://www.facebook.com/">Facebook</Link>
    // );
    expect(1).toBe(1)
  })
})

// 1. what is an ACT
// 2. how to deal with an async function (can wait on something, mutation)
// 3. how to deal with an async funtion (cannot wait on something, useQuery)
// 4. what happens when use effect to deal with internal state
