import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import {commentsProp} from '../../utils/valid-props';
import {COLUMN_QUANTITY, PRECISION_RATING} from '/src/const';

export const MovieContentReviews = (props) => {
  const {comments} = props;
  const lengthFirstArray = Math.floor(comments.length / COLUMN_QUANTITY);
  const firstCommentsArray = comments.slice(0, lengthFirstArray);
  const secondCommentsArray = comments.slice(lengthFirstArray);

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {firstCommentsArray.map((comment, index) => (
          <React.Fragment key={`comment-${index}`}>
            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">{comment.commentText}</p>

                <footer className="review__details">
                  <cite className="review__author">{comment.user.name}</cite>
                  <time className="review__date" dateTime="2016-12-24">{dayjs(comment.date).format(`MMMM D, YYYY`)}</time>
                </footer>
              </blockquote>

              <div className="review__rating">{String(comment.rating.toPrecision(PRECISION_RATING)).replace(`.`, `,`)}</div>
            </div>
          </React.Fragment>
        ))}
      </div>

      <div className="movie-card__reviews-col">
        {secondCommentsArray.map((comment, index) => (
          <React.Fragment key={`comment-${index}`}>
            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">{comment.commentText}</p>

                <footer className="review__details">
                  <cite className="review__author">{comment.user.name}</cite>
                  <time className="review__date" dateTime="2016-12-24">{dayjs(comment.date).format(`MMMM D, YYYY`)}</time>
                </footer>
              </blockquote>

              <div className="review__rating">{String(comment.rating.toPrecision(PRECISION_RATING)).replace(`.`, `,`)}</div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

MovieContentReviews.propTypes = {
  comments: PropTypes.arrayOf(commentsProp).isRequired,
};

export default MovieContentReviews;
