import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {enqueueSnackbar}= useSnackbar();

  const handleSaveBook = () => {
    if (!title || !author || !publishYear) {
      alert("All fields are required");
      return;
    }

    const data = {
      title,
      author,
      publishYear,
    };

    setLoading(true);
    axios
      .post("http://localhost:5555/books", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Created Successfully!', {variant: 'success'})
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        // alert("An error occurred. Please check the console.");
        enqueueSnackbar('Error', {variant:'error'})
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Create Book</h1>

      {loading && <Spinner />}

      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            className="border-2 border-gray-500 px-4 py-2 w-full"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            className="border-2 border-gray-500 px-4 py-2 w-full"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            className="border-2 border-gray-500 px-4 py-2 w-full"
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
          />
        </div>
        <button
          className="p-2 bg-sky-300 m-8"
          onClick={handleSaveBook}
          disabled={loading}
        >
          {loading ? "Saving..." : "Save"}
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
