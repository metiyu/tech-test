function Modal({ isOpen, title, children, handleModal }) {
    if (!isOpen) return null
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <div className="rounded-lg bg-white w-56 h-56 flex flex-col items-center justify-evenly border shadow">
                <p className="text-2xl font-bold">{title}</p>
                <p>{children}</p>
                <button className="bg-red-400 hover:bg-red-500 rounded-md px-3 py-1 font-bold" onClick={handleModal}>Close</button>
            </div>
        </div>
    )
}

export default Modal