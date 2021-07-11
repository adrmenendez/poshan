import '../styles/main.scss';
import React from 'react';
import ls from '../services/local';
import { Route, Switch } from 'react-router-dom';
import questionData from '../data/questions.json';
import Landing from './Landing/Landing';
import StartPage from './Questionnaire/StartPage';
import Contact from './contact/Contact';
import Questionnaire from './Questionnaire/Questionnaire';
import End from './End';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleTextInput = this.handleTextInput.bind(this);
    this.renderQuestionDetail = this.renderQuestionDetail.bind(this);
    this.state = {
      name: '',
      age: 0,
      weight: 0,
      heigth: 0,
      gender: '',
      meals: 0,
      sport: [],
    };
  }

  componentDidMount() {
    if (ls.get('answers')) {
      const localData = ls.get('answers');
      this.setState(localData);
    }
  }

  componentDidUpdate() {
    ls.set('answers', this.state);
  }

  handleTextInput(ev) {
    let value;
    const key = ev.target.name;
    if (ev.target.name === 'name') {
      value = ev.target.value;
    } else {
      value = parseInt(ev.target.value);
    }
    this.setState({
      [key]: value,
    });
  }

  handleButtonClick(ev) {
    let value;
    const key = ev.target.name;
    if (key === 'gender') {
      value = ev.target.value;
    } else if (key === 'meals') {
      if (ev.target.value === '2') {
        value = 'two';
      } else if (ev.target.value === '3') {
        value = 'three';
      } else if (ev.target.value === '4') {
        value = 'four';
      } else {
        value = 'five';
      }
    } else {
      value = parseInt(ev.target.id);
    }

    if (key === 'gender' || key === 'meals') {
      this.setState({
        [key]: value,
      });
    } else {
      this.setState((prevState) => ({
        sport: [...prevState.sport, value],
      }));
    }
  }

  renderQuestionDetail(routerProps) {
    const questionId = routerProps.match.params.id;

    const questionFound = questionData.find(
      (question) => question.id === questionId
    );
    return (
      <Questionnaire
        questionObject={questionFound}
        handleTextInput={this.handleTextInput}
        handleButtonClick={this.handleButtonClick}
      />
    );
  }

  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/start' component={StartPage} />
          <Route path='/contact' component={Contact} />
          <Route path='/question/:id' component={this.renderQuestionDetail} />
          <Route path='/end'>
            <End {...this.state} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
