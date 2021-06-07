import React from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';
import Form from './Form';

function App() {
  return (
    <>
      <NavBar />
      <main className='contact'>
        <Form />
      </main>
      <Footer />
    </>
  );
}

export default App;
