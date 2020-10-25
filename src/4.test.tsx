import React, { useEffect, useState } from "react"
import { create } from "react-test-renderer"
import { waitFor } from "./utils"

const Screen4 = () => {
	const [count, setCount] = useState(0)

	const incrementAsync = async () => {
		await setTimeout(() => setCount(count + 1), 0)
	}
	
	useEffect(() => {
		incrementAsync()
	}, [])

	return <div id="count">{count}</div>
}

it("can deal with an async side effect that affects internal state with waitFor", async () => {
	const { root } = create(<Screen4 />)
	expect(root.findByProps({ id: "count" }).props.children).toBe(0)
	
	await waitFor(() => { // can use waitFor to poll for changes
		expect(root.findByProps({ id: "count" }).props.children).toBe(1)
	})
})
