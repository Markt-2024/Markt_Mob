import React from 'react'
import Header from '../../components/Header/Header'
import Search from '../../components/Search/Search'
import Footer from '../../components/Footer/Footer'
import ProductListing from '../../components/ProductListing/ProductListing'

export default function Home() {
  return (
    <div>
      <Header/>
      <Search/>
      <ProductListing/>
    </div>
  )
}
