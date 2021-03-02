import React, {useState} from 'react';
import {RATING_STARS, COMMENT_LENGTH} from '../../const';
import PropTypes from 'prop-types';
import {postComment} from '../../store/api-actions';
import {connect} from 'react-redux';

const AddReviewForm = (props) => {
  const {id, onPost} = props;
  const [userFormText, setUserFormText] = useState(``);
  const [userFormRating, setUserFormRating] = useState(10);

  const isDisabled = (userFormText.toString().length < COMMENT_LENGTH.MIN || userFormText.toString().length > COMMENT_LENGTH.MAX);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const commentData = {
      rating: userFormRating,
      comment: userFormText
    };

    onPost(id, commentData);
  };

  const handleTextChange = (evt) => {
    const {value} = evt.target;
    setUserFormText(value);
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {RATING_STARS.map((rating, index) => (
              <React.Fragment key={`Rating-${index}`}>
                <input
                  className="rating__input"
                  id={`star-${rating}`}
                  type="radio" name="rating"
                  value={rating}
                  checked={userFormRating === index + 1}
                  onChange={() => {
                    setUserFormRating(index + 1);
                  }}/>
                <label className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text" id="review-text"
            placeholder="Review text"
            value={userFormText}
            minLength="50"
            maxLength="400"
            onChange={handleTextChange}
          >
            {userFormText}
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={isDisabled}>Post</button>
          </div>

        </div>
      </form>
    </div>
  );
};

AddReviewForm.propTypes = {
  id: PropTypes.number.isRequired,
  onPost: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onPost(id, commentData) {
    dispatch(postComment(id, commentData));
  },
});

export {AddReviewForm};
export default connect(null, mapDispatchToProps)(AddReviewForm);
