import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles} from '@material-ui/core/styles';

import Form from './Form';

  

const CardForm = (props) => { 
    return(
        <Card className= {props.classes.card}>
        <CardContent className= {props.classes.form}> 
        <Form />
        </CardContent>
        </Card>
    );
}
 export default withStyles ({
    card:{

        
    }
 })(CardForm);