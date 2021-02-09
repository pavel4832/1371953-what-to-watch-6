import React from 'react';
import {RATING_STARS} from '../../const';


const AddReviewForm = () => {
  const [userFormText, setUserFormText] = React.useState(``);
  const [userFormRating, setUserFormRating] = React.useState([false, false, false, false, false, false, false, false, false, false]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleTextChange = (evt) => {
    const {value} = evt.target;
    setUserFormText(value);
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {RATING_STARS.map((rating, index) => (
              <React.Fragment key={`Rating-${index}`}>
                <input className="rating__input" id={`star-${rating}`} type="radio" name="rating" value={rating} checked={userFormRating[index]}
                  onChange={({target}) =>{
                    const value = target.checked;
                    setUserFormRating([...userFormRating.slice(0, index), value, ...userFormRating.slice(index + 1)]);
                  }}
                />
                <label className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={userFormText} onChange={handleTextChange}>{userFormText}</textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" onSubmit={handleSubmit}>Post</button>
          </div>

        </div>
      </form>
    </div>
  );
};

export default AddReviewForm;
