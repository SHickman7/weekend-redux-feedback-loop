import { useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';


function comments (){

    const [commentsText, setCommentsText] = useState ('');
    const dispatch = useDispatch ();
    const history = useHistory();


    return( 
        <>
        <form>
            <h2>Any comments you want to leave?</h2>
            <p>Comments</p>
            <input 
                type = "text"
                placeholder = "comment"
                value = {commentsText}
                onChange = {(event) => setCommentsText(event.target.value)}/>
            <button onClick = {() => {
                dispatch({
                    type: "ADD_COMMENTS",
                    payload: {commentsText}
                });
                history.push('/review');
                }}>Next</button>
        </form>
        </>
    )
};

export default comments;