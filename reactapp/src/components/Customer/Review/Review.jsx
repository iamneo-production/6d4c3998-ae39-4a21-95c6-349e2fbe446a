import React, { useState } from "react";

function Review() {
  const [comments, setComments] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Comments:
        <input
          type="text"
          value={comments}
          onChange={(event) => setComments(event.target.value)}
          data-testid="comments"
        />
      </label>
      <button type="submit" data-testid="submitReview">
        Submit
      </button>
    </form>
  );
}

export default Review;