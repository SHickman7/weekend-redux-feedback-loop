import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';



function SubmissionSuccess(){

    const dispatch = useDispatch();
    const history = useHistory();

    const startOver = () => {

// clear reducers
    dispatch({type: 'CLEAR_FEELING'});
    dispatch({type: 'CLEAR_UNDERSTANDING'});
    dispatch({type: 'CLEAR_SUPPORT'})
    dispatch({type: 'CLEAR_COMMENTS'})
    
// navigate user back to home page
    history.push('/');

    }

    return(

        <>
        <p>Feedback!</p>

        <p>Thank you!</p>

        <button onClick={startOver}>Leave New Feedback</button>
        </>

    )
}

export default SubmissionSuccess;