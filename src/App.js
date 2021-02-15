import React from 'react'
import { Route } from 'react-router-dom'
import Header from 'components/Header'
import BottomMenu from 'components/FooterMenu'
import HomeScreen from 'screens/HomeScreen'
import ProductScreen from 'screens/ProductScreen'
import CartScreen from 'screens/CartScreen'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#8c8c8c',
    primaryHover: '#969696',
  },
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div
        className="container-fluid"
        style={{ paddingTop: 120, paddingBottom: 120 }}
      >
        <Route exact path="/" component={HomeScreen} />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/cart" component={CartScreen} />
      </div>
      <BottomMenu />
    </ThemeProvider>
  )
}

export default App
