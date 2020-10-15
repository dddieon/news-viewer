import React, { useCallback, useState } from 'react'
import NewsPage from './pages/NewsPage'
import { Route } from 'react-router-dom'

function App() {
    const [data, setData] = useState(null)
    const [category, setCategory] = useState('all')
    const onSelect = useCallback((category) => {
        console.log(category)
        return setCategory(category)
    }, [])
    return (
        <>
            <Route path="/:category?" component={NewsPage} />
        </>
    )
}

export default App
