import { useDispatch } from 'react-redux';
import { useState } from "react";
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
                data-testid="input"
                className='required_comment'
                />
            <button onClick = {(event) => {
                event.preventDefault();
                dispatch({
                    type: "ADD_COMMENTS",
                    payload: {commentsText}
                });
                history.push('/review');
                }}
                className='next_button' 
                data-testid="next">Next</button>
        </form>
        </>
    )
};

export default Comments;

