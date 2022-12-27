import './style/app.scss';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import { Landing } from './pages';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' element={<Landing />} />
        <Route path='/*' element={<Routes />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
