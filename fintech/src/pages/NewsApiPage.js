import React, { useState } from 'react'
import AppBar from '../components/common/AppBar'
import SearchInput from '../components/news/SearchInput'
import SearchResult from '../components/news/SearchResult'

const NewsApiPage = () => {

  const [searchInput, setSearchInput] = useState('')
  const [searchList, setSearchList] = useState([])

  const searchInputHandleChange = () => {
    //검색어 변경
  }

  const searchButtonHandleClick = () => {
    //검색버튼 클릭
  }

  return (
    <>
      <AppBar title={"뉴스검색"}/>
      {/* 검색어 입력 컴포넌트 */}
      <SearchInput handleChange={searchInputHandleChange} handleClick={searchButtonHandleClick}/>
      {/* 검색 결과 출력 컴포넌트 */}
      <SearchResult/>
    </>
  )
}

export default NewsApiPage