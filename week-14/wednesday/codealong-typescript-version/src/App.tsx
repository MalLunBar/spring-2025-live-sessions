import { useState } from 'react'
import Card from './components/Card'
import './App.css'

// if creating a Review as an object
interface Review {
  id: number;
  text: string;
  dessert: string;
}

const App = () => {
  const [selectedCard, setSelectedCard] = useState<string>('');
  const [reviews, setReviews] = useState<Review[]>([]); // if implementing an array of reviews
  const [review, setReview] = useState(''); // if implementing one review only, as string.
  const [reviewText, setReviewText] = useState('');

  const handleCardSelect = (title: string) => {
    setSelectedCard(title);
  };

  // setting a signle review as a text, then clearing the text area
  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // stop from doing its default re render here.
    setReview(reviewText);
    setReviewText('');
  };

  return (
    <main className="app">
      <div className="card-container">
        <Card
          title="Ice Cream"
          description="A sweet treat for a hot day. Fantastic!"
          icon="/images/ice-cream.svg"
          color="purple"
          isSelected={selectedCard === "Ice Cream"}
          onSelect={() => handleCardSelect("Ice Cream")}
        />
        <Card
          title="Donut"
          description="A sweet treat for a sweet tooth. Yum!"
          icon="/images/donut.svg"
          color="teal"
          isSelected={selectedCard === "Donut"}
          onSelect={() => handleCardSelect("Donut")}
        />
        <Card
          title="Croissant"
          description="A hot pastry for a cold day. Delicious!"
          icon="/images/croissant.svg"
          color="coral"
          isSelected={selectedCard === "Croissant"}
          onSelect={() => handleCardSelect("Croissant")}
        />
      </div>

      <div className="review-section">
        <h2>Leave a Review</h2>
        <form onSubmit={handleReviewSubmit} className="review-form">
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder={`Write a review for ${selectedCard || 'your favorite dessert'}...`}
            className="review-input"
            disabled={!selectedCard} // not able to write anything if not selected a dessert.
          />
          <button
            type="submit"
            className="submit-review"
            disabled={!selectedCard || !reviewText.trim()} // button is disabled if no text or not selected a card
          >
            Submit Review
          </button>
        </form>

        <div className="reviews-container">

          <h3>Recent Review</h3>
          <p className="review-text">{review}</p>




          {/* IF creating an array of reviews with richer info, this is how to loop through and display them
          <h3>Recent Reviews</h3>
          {reviews.map(review => (
            <div key={review.id} className="review-card">
              <span className="review-dessert">{review.dessert}</span>
              <p className="review-text">{review.text}</p>
            </div>
          ))} */}
        </div>
      </div>


    </main>
  )
}

export default App
