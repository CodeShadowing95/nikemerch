import { ReviewCard } from "../components"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <section className="max-container">
        <h3 className="font-palanquin text-center text-4xl font-bold">
            Rave <span className="text-coral-red">Reviews</span> from Our Nike Family
        </h3>
        <p className="info-text m-auto mt-4 max-w-lg text-center">
            Your satisfaction is not just a review; it's the melody of our collective success! 👟💙
        </p>

        <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
            {reviews.map((review) => (
                <ReviewCard key={review.customerName} {...review} />
            ))}
        </div>
    </section>
  )
}

export default CustomerReviews