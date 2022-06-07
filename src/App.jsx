import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//import { Grid } from '@material-ui/core'
import { ROUTES, PLACEHOLDERS } from "./settings/constants";

import Home from './pages/Home/Home.jsx';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Placeholder from './components/Placeholder/Placeholder';

import "./App.scss";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={ ROUTES.home } component={ Home } />
        <Route exact path={ ROUTES.trials } component={ () => <Placeholder title={PLACEHOLDERS.trials}/> } />
        <Route exact path={ ROUTES.how } component={ () => <Placeholder title={PLACEHOLDERS.how}/> } />
        <Route exact path={ ROUTES.login } component={ () => <Placeholder title={PLACEHOLDERS.login}/> } />
        <Route exact path={ ROUTES.submit } component={ () => <Placeholder title={PLACEHOLDERS.submit}/> } />
        <Route exact path={ ROUTES.terms } component={ () => <Placeholder title={PLACEHOLDERS.terms}/> } />
        <Route exact path={ ROUTES.privacy } component={ () => <Placeholder title={PLACEHOLDERS.privacy}/> } />
        <Route exact path={ ROUTES.contact } component={ () => <Placeholder title={PLACEHOLDERS.contact}/> } />
        <Route component={()=> <Placeholder title={PLACEHOLDERS.notFound}/> } />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
