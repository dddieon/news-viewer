import React from 'react'
import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'

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
const Category = styled(NavLink)`
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
    /* 1. ----- props에 따른 조건부 스타일링 */
    /* ${(props) =>
        props.active &&
        css`
            font-weight: 600;
            border-bottom: 2px solid #22b8cf;
            color: #22b8cf;
        `} */
    /* 2. ----- active라는 클래스일 때 조건부 */
    &.active {
        font-weight: 600;
        border-bottom: 2px solid #22b8cf;
        color: #22b8cf;
    }
`

const Categories = () => {
    return (
        <CategoriesBlock>
            {categories.map((c) => (
                <Category
                    key={c.name}
                    activeClassName="active"
                    exact={c.name === 'all'}
                    to={c.name === 'all' ? '/' : `/${c.name}`}
                >
                    {c.text}
                </Category>
            ))}
        </CategoriesBlock>
    )
}

export default Categories
