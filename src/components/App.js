import '../styles/main.scss';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import NavBar from './NavBar';
//import Questionnaire from './Questionnaire';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Header />
      <Main />
      <Footer />
      {/* <Questionnaire /> */}
    </div>
  );
}

export default App;
