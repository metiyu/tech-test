import { Tab, Tabs } from "@mui/material"
import { useState } from "react"
import TabPanel from "../components/TabPanel"

function TabsFunction() {
    const [value, setValue] = useState(0)

    const handleChange = (e, newValue) => {
        setValue(newValue)
    }

    return (
        <div>
            <Tabs value={value} onChange={handleChange}>
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
            </Tabs>

            <TabPanel index={0} value={value} children={"This is Tab 1"}/>
            <TabPanel index={1} value={value} children={"This is Tab 2"}/>
            <TabPanel index={2} value={value} children={"This is Tab 3"}/>
        </div>
    )
}

export default TabsFunction