import Route from './components/Route'
import Home from './pages/Home'
import About from './pages/About'
import Routes from './components/Routes'
import Router from './components/Router'

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" component={<Home />} />
        <Route path="/about" component={<About />} />
      </Routes>
    </Router>
  )
}

export default App
