import React, { useState } from "react";
import "../src/index.css";
import perksImage from "../img/perks.jpg";
import "../src/index.css";

const Card = ({ book }) => {
  
  console.log(book);
  
  const [isBookmarked, setIsBookmarked] = useState(false);
  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };
  return (
    <>
      {book.map((item) => {
        return (
          <>
          <div className="card " style={{ width: "18rem" }}>
            <img className="card-img-top" src="../img/perks.jpg" alt="" />
            <div className="bottom">
              <h3 className="title">The Perks Of Being a Wallflower</h3>
              <p className="rating">
                Rating: 10/10
                <button
                  className="btn btn-bookmark"
                  onClick={handleBookmarkClick}
                >
                  {isBookmarked ? (
                    <i className="fa-solid fa-bookmark"></i>
                  ) : (
                    <i className="fa-regular fa-bookmark"></i>
                  )}
                </button>
              </p>
            </div>
          </div>
          </>
        );
      })}
    </>
  );
};

export default Card;
