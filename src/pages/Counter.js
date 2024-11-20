import { useState } from "react"
import Button from "../components/Button"

function Counter() {
    const [counter, setCounter] = useState(0)

    const handleCounter = () => {
        setCounter(old => old + 1)
    }

    return (
        <div className="h-lvh w-full flex flex-col justify-center items-center gap-4">
            <p className="border px-10 py-3 rounded bg-blue-200">{counter}</p>
            <Button onClick={handleCounter} children="Click"></Button>
        </div>
    )
}

export default Counter