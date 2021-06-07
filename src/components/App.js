import '../styles/main.scss';
import Landing from './Landing/Landing';
import StartPage from './Questionnaire/StartPage';
import Contact from './contact/Contact';
import { Route, Switch } from 'react-router-dom';
import Questionnaire from './Questionnaire/Questionnaire';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/start' component={StartPage} />
        <Route path='/contact' component={Contact} />
        <Route path='/question/:id' component={Questionnaire} />
        {/* <Route path='/blog' component={AllPosts} /> */}
      </Switch>
    </div>
  );
}

export default App;
