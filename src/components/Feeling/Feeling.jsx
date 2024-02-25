import { useDispatch } from 'react-redux';
import { useState } from "react";
import { useHistory } from 'react-router-dom';


function Feeling (){

    const [feelingRating, setFeelingRating] = useState ("");
    const dispatch = useDispatch ();
    const history = useHistory();
        

    return( 
        <>
            <form>
                <h2>How are you feeling today?</h2>
                <p>Feeling?</p>
                <input
                    type = "number" min="1" max="5"
                    value = {feelingRating}
                    onChange = {(event) => setFeelingRating(Number(event.target.value))}
                    data-testid="input"
                    className='required_input'
                    />
                <button onClick = {(event) => {
                    event.preventDefault();
                    dispatch({
                        type: "ADD_FEELING",
                        payload: {feelingRating},
                    })
                    history.push('/understanding');
                }}
                className='next_button' 
                data-testid="next">Next</button>
            </form>
        </>
    )
};

export default Feeling;

