import React from 'react'
import styled, { css } from 'styled-components'

const categories = [
    { name: 'all', text: '전체보기' },
    { name: 'business', text: '비즈니스' },
    { name: 'entertainment', text: '엔터테인먼트' },
]

const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        width: 100%;
        overflow-x: auto;
    }
`
const Category = styled.div`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;
    &:hover {
        color: #495057;
    }
    & + & {
        margin-left: 1rem;
    }
    /* props에 따른 조건부 스타일링 */
    ${(props) =>
        props.active &&
        css`
            font-weight: 600;
            border-bottom: 2px solid #22b8cf;
            color: #22b8cf;
        `}
`

const Categories = ({ onSelect, category }) => {
    return (
        <CategoriesBlock>
            {categories.map((c) => (
                <Category
                    key={c.name}
                    onClick={() => onSelect(c.name)}
                    active={category === c.name}
                >
                    {c.text}
                </Category>
            ))}
        </CategoriesBlock>
    )
}

export default Categories
