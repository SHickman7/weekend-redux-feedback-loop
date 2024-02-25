import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import '../App/App.css';



function ThankyouScreen(){

    const dispatch = useDispatch();
    const history = useHistory();
    const feelingInfo = useSelector(store => store.feelingInfo);
    const understandingInfo = useSelector(store => store.understandingInfo);
    const supportInfo = useSelector(store => store.supportInfo);
    const commentsInfo = useSelector(store => store.commentsInfo);
    

    const startOver = () => {

// clear reducers
    dispatch({type: 'CLEAR_FEELING'});
    dispatch({type: 'CLEAR_UNDERSTANDING'});
    dispatch({type: 'CLEAR_SUPPORT'});
    dispatch({type: 'CLEAR_COMMENTS'});
    
// navigate user back to home page
    history.push('/');

    }

    return(

        <>
        <p className='feedback_box'>Feedback!</p>

        <p className='thankyou_box'>Thank you!

        <button onClick={startOver}data-testid="next">Leave New Feedback</button>
        </p>
        </>

    )
}

export default ThankyouScreen;