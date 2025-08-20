import gamingIcon from '../assets/gaming-icon-design-vector.png'

const Header = () => (
  <header className="app-header">
    <div className="header-content">
      <img src={gamingIcon} alt="Gaming Icon" className="header-icon" />
      <div>
        <h1>Build your dream PC</h1>
        <p>Build your dream PC with ease</p>
      </div>
    </div>
  </header>
)

export default Header