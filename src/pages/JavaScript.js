import { useState } from "react"
import data from '../local-json/data.json'
import Button from "../components/Button"

function JavaScript() {

    const [minAge, setMinAge] = useState("")
    const [maxAge, setMaxAge] = useState("")

    const handleMinAge = () => {
        const sortedAsc = [...data].sort((a, b) => a.age - b.age)
        setMinAge(sortedAsc[0].name)        
    }

    const handleMaxAge = () => {
        const sortedDesc = [...data].sort((a, b) => b.age - a.age)
        setMaxAge(sortedDesc[0].name)
    }

    const [isAsc, setIsAsc] = useState()
    const handleSort = () => {
        setIsAsc(old => !old)
        if (isAsc) {
            data.sort((a, b) => a.age - b.age)
        } else {
            data.sort((a, b) => b.age - a.age)
        }
    }
    
    return (
        <div className="flex">
            <div>
                {data.map((d) => (
                    <li key={d.id}>{d.name} - {d.age}</li>
                ))}
            </div>
            <div>
                <Button children={"Find Min Age"} onClick={handleMinAge} />
                <p>{minAge}</p>
                <Button children={"Find Max Age"} onClick={handleMaxAge} />
                <p>{maxAge}</p>
                <Button children={isAsc ? "Sort Asc" : "Sort Desc"} onClick={handleSort} />
            </div>
        </div>
    )
}

export default JavaScript