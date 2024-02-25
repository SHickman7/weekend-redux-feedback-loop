import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useHistory } from 'react-router-dom';

function Review(){

    const history = useHistory();
    const dispatch = useDispatch();
    const feelingInfo = useSelector (store => store.feelingInfo);
    const understandingInfo = useSelector (store => store.understandingInfo);
    const supportInfo = useSelector (store => store.supportInfo);
    const commentsInfo = useSelector (store => store.commentsInfo);



    const submit = () => {

        let feedback = {feeling: feelingInfo.feelingRating, understanding: understandingInfo.understandingRating, support: supportInfo.supportRating, comments: commentsInfo.commentsText}

        axios({
            method: 'POST',
            url: '/api/feedback',
            data: feedback
        
        }).then(response => {
            console.log('Successful POST', response);
            history.push('/ThankyouScreen');
        }).catch(error => {
            console.log('Error sending feedback', error);
        });
    }


    return(
        <>
            <h2>Review Your Feedback</h2>
            <p>Feeling: {feelingInfo.feelingRating}</p>
            <p>Understanding: {understandingInfo.understandingRating}</p>
            <p>Support: {supportInfo.supportRating}</p>
            <p>Comments: {commentsInfo.commentsText}</p>
            <button onClick={submit} data-testid="next">Submit</button>
        
        </>
    )
}

export default Review;