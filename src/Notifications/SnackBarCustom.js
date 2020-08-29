import React, { useState, useEffect } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SnackBarCustom({ alert }) {

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
        <Snackbar open={showSnackBar} autoHideDuration={1000} onClose={hideSnackBar}>
            <Alert onClose={hideSnackBar} severity="success">
                ICE will be here
            </Alert>
        </Snackbar>
    );
}