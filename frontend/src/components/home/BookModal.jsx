import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { PiBookOpenTextLight } from "react-icons/pi";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center item-center"
      onClick={onClose}
    >
      <div
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex-col relative"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <AiOutlineClose
          onClick={onClose}
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
        />
          <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
            {book.publishYear}
          </h2>
        <h4 className="my-2 text-gray-500">{book._id}</h4>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-xl" />
          <h2 className="my-1">{book.title}</h2>
        </div>

        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </div>
        <p className="my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur voluptatum accusamus dignissimos inventore ipsum maiores ad autem nobis dolor illo totam quasi recusandae, quibusdam reiciendis velit iusto magnam sed quae cum provident odio dolorem? Similique dignissimos cumque libero vero vel, quaerat odio aspernatur autem iusto culpa perferendis illum quibusdam?
        </p>
      </div>
    </div>
  );
};

export default BookModal;
