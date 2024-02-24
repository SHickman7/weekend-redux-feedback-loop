import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useHistory } from 'react-router-dom';

function Review(){

    const history = useHistory();
    const dispatch = useDispatch();
    // const feedbackProfileInfo = useSelector(store => store.feedbackProfile);
    const feelingInfo = useSelector (store => store.feelingInfo);
    const understandingInfo = useSelector (store => store.understandingInfo);
    const supportInfo = useSelector (store => store.supportInfo);
    const commentsInfo = useSelector (store => store.commentsInfo);



    const submit = () => {

        axios({
            method: 'POST',
            url: '/api/feedback',
            data: {feeling: feelingInfo.feelingRating, understanding: understandingInfo.understandingRating, support: supportInfo.supportRating, comments: commentsInfo.commentsText}
        
        }).then(response => {
            console.log('Successful POST', response);
            history.push('/submissionSuccess');
        }).catch(error => {
            console.log('Error sending feedback profile', error);
        });
    }


    return(
        <>
            <h2>Review Your Feedback</h2>
            <p>Feelings: {feelingInfo.feelingRating}</p>
            <p>Understanding: {understandingInfo.understandingRating}</p>
            <p>Support: {supportInfo.supportRating}</p>
            <p>Comments:{commentsInfo.commentsText}</p>
            <button onClick={submit}>Submit</button>
        
        </>
    )
}

export default Review;