import React from 'react'
import Header from '../../components/Header/Header'
import Search from '../../components/Search/SearchPage'
import Footer from '../../components/Footer/Footer'
import SearchPage from '../../components/Search/SearchPage'
import './Home.css'

export default function Home() {
  return (
    <div className='Home'>
      <SearchPage />
    </div>
  )
}
