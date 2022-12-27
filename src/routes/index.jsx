import { Route, Routes as Switch } from 'react-router-dom'
import { HighestRoad, StandardCircuit } from '../pages'
import RawChangthang from '../pages/rawchangthang'

const Routes = () => {
  return (
    <Switch>
      <Route path="/standardcircuit" element={<StandardCircuit />} />
      <Route path="/highestroad" element={<HighestRoad />} />
      <Route path="/rawchangthang" element={<RawChangthang />} />
    </Switch>
  )
}

export default Routes
