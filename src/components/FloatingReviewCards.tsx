'use client';

import { useState } from 'react';
import './FloatingReviewCards.css';

type Review = {
  quote: string;
  name: string;
  meta: string;
  stars: number;
};

export default function FloatingReviewCards({ reviews }: { reviews: Review[] }) {
  const [activeIndex, setActiveIndex] = useState(Math.floor(reviews.length / 2));

  return (
    <div className="coverflow-wrapper">
      <div className="coverflow-container">
        {reviews.map((review, index) => {
          const offset = index - activeIndex;
          const absOffset = Math.abs(offset);
          
          // Unique radial fan & depth-of-field effect
          let translateX = offset * 280; // Distance between cards
          let translateY = Math.pow(absOffset, 1.5) * 40; // Parabolic curve downwards
          let rotateZ = offset * 6; // Fan out rotation
          let scale = offset === 0 ? 1 : 0.85 - absOffset * 0.05;
          let zIndex = 100 - absOffset * 10;
          let opacity = offset === 0 ? 1 : Math.max(0.3, 0.7 - absOffset * 0.15);
          let blur = offset === 0 ? 0 : absOffset * 3; // Depth of field
          
          return (
            <div
              key={review.name}
              className={`coverflow-card ${offset === 0 ? 'active' : 'inactive'}`}
              style={{
                transform: `translateX(calc(-50% + ${translateX}px)) translateY(${translateY}px) rotateZ(${rotateZ}deg) scale(${scale})`,
                zIndex,
                opacity,
                filter: `blur(${blur}px)`,
              }}
              onClick={() => setActiveIndex(index)}
            >
              <div className="quote-icon">“</div>
              <div className="stars">{'★'.repeat(review.stars)}{'☆'.repeat(5 - review.stars)}</div>
              <p className="quote">{review.quote}</p>
              <div className="reviewer">
                <div className="reviewer-avatar">{review.name.charAt(0)}</div>
                <div className="reviewer-info">
                  <span className="reviewer-name">{review.name}</span>
                  <span className="reviewer-meta">{review.meta}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
