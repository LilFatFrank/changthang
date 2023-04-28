import { Route, Routes as Switch } from 'react-router-dom'
import { Header, Footer } from '../components'
import { About, Cancellation, HighestRoad, StandardCircuit, Terms } from '../pages'
import RawChangthang from '../pages/rawchangthang'

const Routes = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
    <Header />
    <Switch>
      <Route path="/standardcircuit" element={<StandardCircuit />} />
      <Route path="/highestroad" element={<HighestRoad />} />
      <Route path="/rawchangthang" element={<RawChangthang />} />
      <Route path="/cancellation" element={<Cancellation />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/about" element={<About />} />
    </Switch>
    <Footer />
    </div>
  )
}

export default Routes
