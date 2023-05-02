import { useState } from "react";

import Footer from "./Footer";

import "../../styles/Review.css";

const ListReviews = (props) => {
    return(
        <div >
            <ul className="list-review" >
            {props.reviews.map((review) => (
                <li key={review.user}>
                    <h4>{review.user} rated this site a {review.value}: </h4>
                    <p classname="comments">{review.comment}</p>
                </li>))}
            </ul>
        </div>
    );
}

function Feedback() {
    const [value, setValue] = useState(10);
    const [comment, setComment] = useState("");
    const [user, setUser] = useState("");
    const [reviews, setReviews] = useState([]);

    const addReview = (item) => {
        setReviews([...reviews, item]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value < 5 && comment.length < 10){
            alert("Please let me know what I can do to improve the UX")
            return;
        }
        else if (!user){
            alert("Please input your name")
            return;
        }     
        else{
            addReview({user, value, comment});
            setValue(10);
            setComment("");
            setUser("");
        }
    }

    return ( 
    <>
    <div className="feedback">
        <form className="review-form" onSubmit={handleSubmit}>
            <fieldset>
                <h2>Feedback Form: {value}</h2>
                <div className="field">
                    <label htmlFor ="name">What is your name?</label>
                    <input 
                        id="name" 
                        type="text" 
                        value={user} 
                        onChange={(e) => setUser(e.target.value)} 
                    />
                </div>

                <div className="field">
                    <label htmlFor ="slider">What did you think of your Subway Experience?</label>
                    <input 
                        id="slider" 
                        type="range" 
                        min="0" 
                        max="10" 
                        value={value} 
                        onChange={(e) => setValue(e.target.value)} 
                    />
                </div>

                <div className="field">
                    <label htmlFor="comment">Tell us what you think</label>
                    <textarea 
                        id="comment" 
                        value={comment} 
                        onChange={(e) => setComment(e.target.value)}
                        placeholder= "Leave your comments here" 
                    />
                </div>
                <button type="submit" disabled={comment.length < 5}>Submit</button>
            </fieldset>
        </form>
        
        <ListReviews reviews={reviews}/>
    </div>
    <Footer />
    </>
    );

}

export default Feedback;