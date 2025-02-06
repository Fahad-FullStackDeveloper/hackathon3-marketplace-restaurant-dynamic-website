import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

interface RatingProps {
  maxStars?: number; // Default to 5 stars
  color?: string; // Default color for filled stars
  size?: string | number; // Default size for stars
  currentRating?: number; // Prop to set the initial and controlled rating
}

const Rating: React.FC<RatingProps> = ({
  maxStars = 5,
  color = "gold", // Default color for filled stars
  size = 24,
  currentRating = 0, // Default rating
}) => {
  const [rating, setRating] = useState<number>(currentRating); // Initialize state with currentRating

  return (
    <div className="flex space-x-1">
      {[...Array(maxStars)].map((_, index) => {
        const starIndex = index + 1;
        return (
          <FaStar
            key={index}
            size={size}
            color={starIndex <= rating ? color : "#D3D3D3"} // Light gray for unfilled stars
            className="cursor-pointer"
            onClick={() => setRating(starIndex)} // Update rating on click
          />
        );
      })}
    </div>
  );
};

export default Rating;


