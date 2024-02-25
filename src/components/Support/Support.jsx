import { useDispatch } from 'react-redux';
import { useState } from "react";
import { useHistory } from 'react-router-dom';


function Support (){

    const [supportRating, setSupportRating] = useState ("");
    const dispatch = useDispatch ();
    const history = useHistory();



    return( 
        <>
        <form>
            <h2>How well are you being supported?</h2>
            <p>Support?</p>
            <input 
                 type = "number" min="1" max="5"
                 value = {supportRating}
                 onChange = {(event) => setSupportRating(Number(event.target.value))}
                 data-testid="input"
                 className='required_input' 
                />
            <button onClick = {(event) => {
                event.preventDefault();
                dispatch({
                    type: "ADD_SUPPORT",
                    payload: {supportRating}
                })
                history.push('/comments');
            }}
            className='next_button'
            data-testid="next">Next</button>
        </form>
        </>
    )
};

export default Support;
