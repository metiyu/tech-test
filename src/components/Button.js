function Button({children, style, onClick}) {
    return (
        <button 
            className={style || "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}
            onClick={onClick}>
                {children}
        </button>
    )
} 

export default Button