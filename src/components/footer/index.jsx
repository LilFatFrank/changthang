import { useNavigate } from 'react-router-dom'
import './footer.scss'

const Footer = () => {
  const navigate = useNavigate()

  return (
    <div className="footer">
      <img
        src="/assets/Logo.svg"
        alt="Logo"
        width={70}
        height={70}
        style={{ cursor: 'pointer' }}
        onClick={() => navigate('/')}
      />
      <div className="links">
        <span className="link" onClick={() => navigate('/cancellation')}>
          Cancellation
        </span>
        <span className="link" onClick={() => navigate('/terms')}>
          Terms
        </span>
        <span className="link" onClick={() => navigate('/about')}>
          About
        </span>
      </div>
    </div>
  )
}

export default Footer
