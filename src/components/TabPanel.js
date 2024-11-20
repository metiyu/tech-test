function TabPanel({ children, value, index, ...other }) {
    if (value !== index) return null;

    return (
        <div
            role="tabpanel"
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            <div>{children}</div>
        </div>
    )
}

export default TabPanel
