import React, { useState, useEffect } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

// resources
import iceCube from '../resources/ice.png'

const useStyles = makeStyles((theme) => ({
    iceImage: {
        marginLeft: 14,
        width: 20,
        height: 20,
        padding: 5
    }
  }));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SnackBarCustom({ alert }) {
    const classes = useStyles();

    const [showSnackBar, setShowSnackBar] = useState(false);

    useEffect(() => {
        if(alert != null) {
            setShowSnackBar(true);
        }
    }, [alert]);

    function hideSnackBar() {
        setShowSnackBar(false);
    }
    
    return(
        <Snackbar open={showSnackBar} autoHideDuration={3000} onClose={hideSnackBar}>
            <Alert onClose={hideSnackBar} severity="warning">
                <img 
                    src={iceCube} 
                    alt="Logo" 
                    className={classes.iceImage}
                    />

                <img 
                    src={iceCube} 
                    alt="Logo" 
                    className={classes.iceImage}
                    />
                    
                <img 
                    src={iceCube} 
                    alt="Logo" 
                    className={classes.iceImage}
                    />
                <br/>
                This is ice - so it's cool
            </Alert>
        </Snackbar>
    );
}