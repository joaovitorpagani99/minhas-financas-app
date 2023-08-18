import React from 'react';
import Rotas from './rotas';
import NavBar from '../components/navBar';
import ProvedorAutenticacao from './provedorAutenticacao';

import '../custom.css';
import 'bootswatch/dist/flatly/bootstrap.css'
import 'toastr/build/toastr.css'
import 'toastr/build/toastr.min.js'

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
 

class App extends React.Component {

  render(){
    return(
      <ProvedorAutenticacao>
        <NavBar />
        <div className="container">    
            <Rotas />
        </div>
      </ProvedorAutenticacao>
    )
  }
}

export default App
