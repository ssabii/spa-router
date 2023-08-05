import Route from './components/Route'
import Home from './components/Home'
import Routes from './components/Routes'
import About from './components/About'

import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" component={<Home />} />
      <Route path="/about" component={<About />} />
    </Routes>
  )
}

export default App
