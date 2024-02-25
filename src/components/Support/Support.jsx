import { useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';


function Support (){

    const [supportRating, setSupportRating] = useState ("");
    const dispatch = useDispatch ();
    const history = useHistory();

    const handleSubmit = () => {
        if (supportRating.length > 0){
            dispatch({
                type: "ADD_SUPPORT",
                payload: {supportRating}
            });
            history.push('/comments');
            }}

    return( 
        <>
        <form>
            <h2>How well are you being supported?</h2>
            <p>Support?</p>
            <input 
                 type = "number" min="1" max="5"
                 value = {supportRating}
                 onChange = {(event) => setSupportRating(Number(event.target.value))}
                 style = {styles.input}
                 required
                 data-testid="input" 
                />
            <button onClick = {() => {
                dispatch({
                    type: "ADD_SUPPORT",
                    payload: {supportRating}
                })
                history.push('/comments');
            }} 
            data-testid="next">Next</button>
        </form>
        </>
    )
};

export default Support;

const styles = {
    container: {
        textAlign: 'center',
        margin: 'auto',
        padding: '20px',
    },
    heading: {
        fontSize: '34px',
        marginBottom: '10px',
        color: "#033076",
        borderBottom: "3px solid #033076",
        paddingBottom: 20,
        borderRadius: "8px",
    },
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