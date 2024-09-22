import React from "react";
import BoksSingleCard from "../home/BoksSingleCard";

const BooksCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols lg:grid-cols-3 xl:grid-cols-4">
      {books.map((book) => (
        <BoksSingleCard key={book._id} book={book} />
      ))}
    </div>
  );
};

export default BooksCard;

