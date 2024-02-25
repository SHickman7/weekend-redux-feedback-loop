import { useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';


function Comments (){

    const [commentsText, setCommentsText] = useState ('');
    const dispatch = useDispatch ();
    const history = useHistory();


    return( 
        <>
        <form>
            <h2>Any comments you want to leave?</h2>
            <p>Comments?</p>
            <input 
                type = "text"
                placeholder = "comment"
                value = {commentsText}
                onChange = {(event) => setCommentsText(event.target.value)}
                style = {styles.input}
                data-testid="input"
                />
            <button onClick = {() => {
                dispatch({
                    type: "ADD_COMMENTS",
                    payload: {commentsText}
                });
                history.push('/review');
                }}
                style = {styles.enabledButton}
                data-testid="next">Next</button>
        </form>
        </>
    )
};

export default Comments;

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
        width: '300px',
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