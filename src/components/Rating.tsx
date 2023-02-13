import React, { useState } from "react";
import styles from "./Rating.module.css";

const Rating = () => {
  const [selectedRating, setSelectedRating] = useState<number>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleRatingClicked(rating: number) {
    setSelectedRating(rating);
  }

  function handleFormSubmitted(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  return isSubmitted ? (
    <div className={styles.thankYouPanel}>
      <img src="./illustration-thank-you.svg" alt="Thank you Icon" />

      <p className={styles.selected}>You selected {selectedRating} out of 5</p>

      <h1 className={styles.title}>Thank you!</h1>

      <p className={styles.description}>
        We appreaciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  ) : (
    <form onSubmit={handleFormSubmitted} className={styles.panel + " left"}>
      <img className={styles.star} src="./icon-star.svg" alt="Star Logo" />

      <h1 className={styles.title}>How did we do?</h1>

      <p className={styles.description}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className={styles.group}>
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            type="button"
            onClick={() => handleRatingClicked(rating)}
            className={styles.rating}
          >
            {rating}
          </button>
        ))}
      </div>

      <button disabled={selectedRating === undefined} className={styles.submit}>
        Submit
      </button>
    </form>
  );
};

export default Rating;
