import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Navbar } from './Components/Navbar'
import { AboutPage } from './Pages/AboutPage'
import { TodosPage } from './Pages/TodosPage'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={TodosPage} path="/" exact />
          <Route component={AboutPage} path="/about" />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
