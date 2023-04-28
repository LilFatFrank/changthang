import { useNavigate } from 'react-router-dom'
import Sprite from '../sprite'
import './header.scss'

const Header = () => {
  const navigate = useNavigate()

  return (
    <div className="header">
      <img
        src="/assets/Logo.svg"
        alt="Logo"
        width={70}
        height={70}
        style={{ cursor: 'pointer' }}
        onClick={() => navigate('/')}
      />
      <div className="links">
        <a
          href="https://wa.me/8899224319"
          rel="noopener noreferrer"
          target={'_blank'}
        >
          <Sprite id={'whatsapp-icon'} width={32} height={32} />
        </a>
        <a
          href="https://instagram.com/abhimanyusherpa"
          rel="noopener noreferrer"
          target={'_blank'}
        >
          <Sprite id={'instagram-icon'} width={32} height={32} />
        </a>
      </div>
    </div>
  )
}

export default Header
