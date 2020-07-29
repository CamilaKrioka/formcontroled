import React from 'react';
import { withStyles} from '@material-ui/core/styles';
import './App.css';


import CardForm from './Card';




function App(props) {
  return (
    <div className="app">

    

    <CardForm className="cardf" />
      
     </div>
  );
    
   
  
}

export default withStyles({
  
}) (App);
