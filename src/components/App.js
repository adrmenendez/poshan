import '../styles/main.scss';
import Landing from './Landing/Landing';
import Questionnaire from './Questionnaire/Questionnaire';
import Contact from './contact/Contact';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/questionnaire' component={Questionnaire} />
        <Route path='/contact' component={Contact} />
        {/* <Route path='/blog' component={AllPosts} /> */}
      </Switch>
    </div>
  );
}

export default App;
