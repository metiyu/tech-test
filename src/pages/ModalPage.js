import Button from "../components/Button"
import Modal from "../components/Modal"
import { useState } from "react"

function ModalPage () {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleModal = () => {
        setIsModalOpen(old => !old)
    }

    return (
        <div>
            <Button children={"Open Modal"} onClick={handleModal}></Button>
            <Modal children={"test"} title={"Title"} isOpen={isModalOpen} handleModal={handleModal}></Modal>
        </div>
    )
}

export default ModalPage