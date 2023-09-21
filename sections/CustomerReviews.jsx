import ReviewCard from '../components/ReviewCard';
import { reviews } from '../constants';

const CustomerReviews = () => {
  return (
    <section className="max-container dark:rounded-md dark:bg-zinc-800 dark:p-10">
      <h3 className="text-center font-palanquin text-4xl font-bold">
        What our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg">
        Hear genuine stories from our satisfied customers about their exceptional experiences with
        us.
      </p>
      <div className="mt-24 flex flex-1 items-center justify-evenly gap-14 max-lg:flex-col">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgUrl={review.imgUrl}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
