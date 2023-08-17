import React from 'react';
import Rotas from './rotas';
import NavBar from '../components/navBar';

import '../custom.css';
import 'bootswatch/dist/flatly/bootstrap.css'
import 'toastr/build/toastr.css'
import 'toastr/build/toastr.min.js'

class App extends React.Component {
  render() {
    return (
      <>
      <NavBar />
        <div className='container'>
          <Rotas />
        </div>
      </>

    )
  }
}
export default App;
