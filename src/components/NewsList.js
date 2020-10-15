import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import NewsItem from './NewsItem'
import axios from 'axios'

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`

const sampleArticle = {
    title: '제목',
    description: '내용',
    url: 'https://google.com',
    urlToImage: 'https://via.placeholder.com/160',
}

const NewsList = ({ category }) => {
    const [loading, setLoading] = useState(false)
    const [articles, setArticles] = useState(null)
    useEffect(() => {
        // async를 따로 선언해야 한다
        const fetchData = async () => {
            setLoading(true)
            try {
                const query = category === 'all' ? '' : `&category=${category}`
                const response = await axios.get(
                    `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=4a460e15e3dc42b0a8bfc45ce24e913d`,
                )
                console.log(response.request.responseURL)
                setArticles(response.data.articles)
            } catch (e) {
                console.log(e)
            }
            setLoading(false)
        }
        // ---------------------------
        fetchData()
    }, [category])
    return (
        !loading,
        articles ? (
            <NewsListBlock>
                {articles.map((article) => {
                    return (
                        <NewsItem
                            key={article.url}
                            article={article}
                        ></NewsItem>
                    )
                })}
            </NewsListBlock>
        ) : (
            <NewsListBlock>대기 중...</NewsListBlock>
        )
    )
}

export default NewsList
