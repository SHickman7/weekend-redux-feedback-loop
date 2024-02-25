import { useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';


function Understanding (){

    const [understandingRating, setUnderstandingRating] = useState ('');
    const dispatch = useDispatch ();
    const history = useHistory();

    const styles = {
        input: {
            padding: '10px',
            marginBottom: '10px',
            width: '50px',
            borderRadius: 8,
        },
        disabledButton: {
            backgroundColor: 'gray',
            color: 'white',
            cursor: 'not-allowed',
            margin: 10,
            padding: 15,
            borderRadius: "8px",
            border: "none",
            boxShadow: "0px 0px 10px 0px grey",
        },
        enabledButton: {
            backgroundColor: '#033076',
            color: 'white',
            cursor: 'pointer',
            margin: 10,
            padding: 15,
            borderRadius: "8px",
            border: "none",
            boxShadow: "0px 0px 10px 0px grey",
        },
    };

    const handleSubmit = () => {
        if (understandingRating.length > 0){
            dispatch({
                type: "ADD_UNDERSTANDING",
                payload: {understandingRating}
            });
            history.push('/support');
            }}


    return( 
        <>
        <form>
            <h2>How well are you understanding the content?</h2>
            <p>Understanding?</p>
            <input
                type = "number" min="1" max="5"
                value = {understandingRating}
                onChange = {(event) => setUnderstandingRating(event.target.value)}
                style = {styles.input}
                required
                data-testid="input"
                />
            <button onClick = {() => {
                dispatch({
                    type: "ADD_UNDERSTANDING",
                    payload: {understandingRating}
                })
                history.push('/support');
            }} 
            data-testid="next">Next</button>
        </form>
        </>
    )
};

export default Understanding;

