import { useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';


function Support (){

    const [supportRating, setSupportRating] = useState ('');
    const dispatch = useDispatch ();
    const history = useHistory();


    return( 
        <>
        <form>
            <h2>How well are you being supported?</h2>
            <p>Support?</p>
            <input 
                required
                type = "number"
                placeholder = "rating"
                value = {supportRating}
                onChange = {(event) => setSupportRating(event.target.value)}/>
            <button onClick = {() => {
                dispatch({
                    type: "ADD_SUPPORT",
                    payload: {supportRating}
                });
                history.push('/comments');
                }}>Next</button>
        </form>
        </>
    )
};

export default Support;