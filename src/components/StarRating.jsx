export default function StarRating({ vote }) {
  let round = 0;
  let votes = vote;
  vote = Math.floor(vote);
  votes = votes - vote;

  const starReviews = [];
  for (let index = 0; index < 5; index++) {
    if (index < vote) {
      starReviews.push(
        <i key={index} className="fa-solid fa-star text-warning  me-1"></i>
      );
    } else if (votes > 0.5 && round === 0) {
      starReviews.push(
        <i
          key={index}
          className="fa-solid fa-star-half-stroke text-warning  me-1"
        ></i>
      );
      round++;
    } else {
      starReviews.push(
        <i key={index} className="fa-regular fa-star text-warning  me-1"></i>
      );
    }
  }
  return starReviews;
}
