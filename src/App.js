import React, { useCallback, useState } from 'react'
import axios from 'axios'
import NewsList from './components/NewsList'
import Categories from './components/Categories'

function App() {
    const [data, setData] = useState(null)
    const [category, setCategory] = useState('all')
    const onSelect = useCallback((category) => {
        console.log(category)
        return setCategory(category)
    }, [])
    return (
        <>
            <Categories category={category} onSelect={onSelect} />
            <NewsList category={category} />
        </>
    )
}

export default App
