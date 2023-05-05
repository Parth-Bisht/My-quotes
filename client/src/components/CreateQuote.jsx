import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_QUOTE } from "../gqloperations/mutations";

const CreateQuote = () => {
  const [quote, setQuote] = useState("");
  const [createQuote, { loading, error, data }] = useMutation(CREATE_QUOTE, {
    refetchQueries: ["getAllQuotes", "getMyProfile"],
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    createQuote({
      variables: {
        name: quote,
      },
    });
  };
  if (loading) return <h1>Loading</h1>;
  if (error) {
    console.log(error.message);
  }
  if (data) {
    console.log(data);
  }
  return (
    <div className="container my-container">
      {error && <div className="red card-panel">{error.message}</div>}
      {data && <div className="green card-panel">{data.quote}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          placeholder="Write your quote here"
        />
        <button type="submit" className="btn green">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateQuote;
