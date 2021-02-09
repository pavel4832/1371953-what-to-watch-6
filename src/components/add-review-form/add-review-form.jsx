import React from 'react';
import {RATING_STARS} from '../../const';
import PropTypes from "prop-types";

const AddReviewForm = (props) => {
  const {onPost} = props;
  const [userFormText, setUserFormText] = React.useState(``);
  const [userFormRating, setUserFormRating] = React.useState([false, false, false, false, false, false, false, false, false, false]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onPost(userFormRating, userFormText);
  };

  const handleTextChange = (evt) => {
    const {value} = evt.target;
    setUserFormText(value);
  };

  const handleRatingChange = (index) => (evt) => {
    evt.target.checked = true;
    const value = evt.target.checked;
    setUserFormRating([...userFormRating.fill(true, 0, index).slice(0, index), value, ...userFormRating.fill(false, index + 1).slice(index + 1)]);
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {RATING_STARS.map((rating, index) => (
              <React.Fragment key={`Rating-${index}`}>
                <input className="rating__input" id={`star-${rating}`} type="checkbox" name="rating" value={rating} onChange={handleRatingChange(index)} checked={userFormRating[index]}/>
                <label className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={userFormText} onChange={handleTextChange}>{userFormText}</textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
};

AddReviewForm.propTypes = {
  onPost: PropTypes.func.isRequired,
};

export default AddReviewForm;
