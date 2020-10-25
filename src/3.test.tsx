import React, { useEffect, useState } from "react"
import { act, create } from "react-test-renderer"
import { wait, waitFor } from "./utils"

const Screen3 = () => {
	const [count, setCount] = useState(0)

	const incrementAsync = async () => {
		await setTimeout(() => setCount(count + 1), 0)
	}
	
	useEffect(() => {
		incrementAsync()
	}, [])

	return <div id="count">{count}</div>
}

it("can deal with an async side effect that affects internal state (useEffect)", async () => {
	const { root } = create(<Screen3 />)
	expect(root.findByProps({ id: "count" }).props.children).toBe(0)
	
	await act(async() => { // wrap an empty wait inside an act
		await wait()
	})

	expect(root.findByProps({ id: "count" }).props.children).toBe(1)
})