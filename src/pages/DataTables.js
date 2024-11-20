import { useEffect, useState } from 'react'
import data from '../local-json/data.json'
import Button from '../components/Button'
import { useNavigate, useSearchParams } from 'react-router-dom'

function DataTables() {

    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()

    const pageParam = searchParams.get('page')
    const itemsParam = searchParams.get('items')
    const nameParam = searchParams.get('name')

    const [itemsPerPage, setItemsPerPage] = useState(itemsParam ? Number(itemsParam) : 10)
    const [currPage, setCurrPage] = useState(pageParam ? Number(pageParam) : 1)
    const [searchName, setSearchName] = useState(nameParam || '')

    const [currItems, setCurrItems] = useState([])
    const [filteredItems, setFilteredItems] = useState(data)
    const TOTAL_PAGES = Math.ceil(data.length / itemsPerPage)

    useEffect(() => {
        const filter = searchName
            ? data.filter(d => d.name.toLowerCase().includes(searchName.toLowerCase()))
            : data
        setFilteredItems(filter)
        setCurrPage(1)
    }, [searchName])

    useEffect(() => {
        const params = new URLSearchParams()
        params.set('page', currPage.toString())
        params.set('items', itemsPerPage.toString())
        if (searchName) params.set('name', searchName)
        setSearchParams(params)
    }, [currPage, itemsPerPage, searchName, setSearchParams])

    useEffect(() => {
        const firstIdx = (currPage - 1) * itemsPerPage
        const lastIdx = firstIdx + itemsPerPage
        setCurrItems(filteredItems.slice(firstIdx, lastIdx))
    }, [currPage, itemsPerPage, filteredItems])

    const handleChangeItemsPerPage = (e) => {
        setItemsPerPage(Number(e.target.value))
        setCurrPage(1)
    }

    const handleSearch = (e) => {
        setSearchName(e.target.value)
    }

    const handleNext = () => {
        if (currPage < TOTAL_PAGES) {
            setCurrPage(old => old + 1)
        }
    }

    const handlePrev = () => {
        if (currPage > 1) {
            setCurrPage(old => old - 1)
        }
    }

    const handleChangePage = (e) => {
        setCurrPage(Number(e.target.value))
    }

    return (
        <div>
            <div className='flex p-5'>
                <label>Data per page: </label>
                <input type="number" className='border' onChange={handleChangeItemsPerPage} value={itemsPerPage} />
            </div>
            <div className='flex p-5'>
                <label>Search by name: </label>
                <input type="text" className='border' onChange={handleSearch} value={searchName} />
            </div>
            <table class="table w-full border border-collapse">
                <thead className='table-header-group'>
                    <tr className='border'>
                        <th className='border'>ID</th>
                        <th className='border'>Name</th>
                        <th className='border'>Age</th>
                        <th className='border'>Occupation</th>
                    </tr>
                </thead>
                <tbody>
                    {currItems.map(d => (
                        <tr className='border' key={d.id}>
                            <td className='text-center border'>{d.id}</td>
                            <td className='border'>{d.name}</td>
                            <td className='text-center border'>{d.age}</td>
                            <td className='border'>{d.occupation}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='flex justify-start gap-10 p-5'>
                {currPage > 1 ? (
                    <Button children={"Prev"} onClick={handlePrev} />
                ) : null}
                {currPage < TOTAL_PAGES ? (
                    <Button children={"Next"} onClick={handleNext} />
                ) : null}
            </div>
        </div>
    )
}

export default DataTables