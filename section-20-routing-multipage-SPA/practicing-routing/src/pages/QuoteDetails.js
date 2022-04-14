import React from "react";
import { Link, Route, useLocation, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import { useState } from "react";
const DUMMY_QUOTES = [
  { id: "q1", author: "a", text: "abc" },
  { id: "q2", author: "b", text: "asw" },
];

function QuoteDetails() {
  const params = useParams();
  const location = useLocation();
  console.log(location.pathname);
  const [showingComments, setShowingComments] = useState(
    location.pathname === `/quotes/${params.quoteId}/comments` ? true : false
  );
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <p>No quote found for that id!</p>;
  }

  const showCommentsHandler = () => {
    setShowingComments((prevState) => !prevState);
  };
  return (
    <div>
      <h1>QuoteDetails</h1>
      <HighlightedQuote text={quote.text} author={quote.author} />
      {/* <p>{params.quoteId}</p> */}
      {/* <Route path="/quotes/:quoteId/comments"> */}

      <div className="centered">
        <Link
          className="btn--flat"
          to={
            showingComments
              ? `/quotes/${params.quoteId}`
              : `/quotes/${params.quoteId}/comments`
          }
          onClick={showCommentsHandler}
        >
          {showingComments ? "Hide Comments" : "Show Comments"}
        </Link>
      </div>

      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </div>
  );
}

export default QuoteDetails;
