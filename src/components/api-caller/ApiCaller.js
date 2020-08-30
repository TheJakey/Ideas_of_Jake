import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import SendIcon from '@material-ui/icons/Send';
import TextField from "@material-ui/core/TextField";


const useStyles = makeStyles(() => ({
    heading: {
        textAlign: "center",
    },
    bodyFields: {
        marginLeft: '10%',
        marginRight: '10%',
        '& div': {
            
        },
    },
    inputStyling: {
        paddingTop: 20,
        paddingBottom: 20,
        '& .MuiInput-input': {
            width: '50ch',
        },
    }
}));


export default function ApiCaller() {
    let classes = useStyles();
    const [endpointURL, setEndpointURL] = useState("");
    const [errorOnURL, setErrorOnURL] = useState(false);
    const [endpointAnswer, setEndpointAnswer] = useState("");

    function sendRequest() {
        fetch(endpointURL, {
            "method": "GET",
            "headers": {
                // "content-type": "application/json",
                // "accept": "application/json"
            },
            // "body": JSON.stringify({
            //     name: this.state.name,
            //     notes: this.state.notes
            // })
            })
            .then(response => response.json())
            .then(response => {
                let responseString = JSON.stringify(response);
                console.log(responseString);
                setEndpointAnswer(responseString);
            })
            .catch(err => {
                console.log(err);
                setErrorOnURL(true);
            });
    }

    function updateEndpointUrlValue(userInputObject) {
        setEndpointURL(userInputObject.target.value);
        setErrorOnURL(false);
    }

    return(
        <div>
            <h1 className={classes.heading}>API Caller</h1>
            <div className={classes.bodyFields}>
                <div className={classes.inputStyling}>
                    <TextField 
                        label="Endpoint URL"
                        placeholder="http..." 
                        error={errorOnURL} 
                        inputProps={{ 'aria-label': 'description'}} 
                        value={endpointURL}
                        onChange={ userInputObject => updateEndpointUrlValue(userInputObject) }
                        />
                    <Button
                        style={{ marginLeft: 20, marginTop: 12 }}
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        endIcon={<SendIcon style={{ fontSize: 20 }}/>}
                        onClick={ () => sendRequest() }
                    >
                        Send
                    </Button>
                </div>

                <TextField
                    id="filled-multiline-static"
                    multiline
                    fullWidth={true}
                    label="API Answer"
                    placeholder="Answer from API server will be here."
                    variant="standard"
                    value={endpointAnswer}
                    rowsMax={20}
                    />
            </div>
        </div>
    );
}
