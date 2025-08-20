import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Menu from './components/Menu'
import PartsGrid from './components/PartsGrid'
function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="app-main">
        <Menu />
        <PartsGrid/>
      </main>
      <Footer />
    </div>
  )
}

export default App
