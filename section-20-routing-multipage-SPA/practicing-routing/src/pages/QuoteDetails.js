import React from "react";
import { Link, Route, useLocation, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import { useState } from "react";
const DUMMY_QUOTES = [
  { id: "q1", author: "a", text: "abc" },
  { id: "q2", author: "b", text: "asw" },
];

function QuoteDetails() {
  const params = useParams();
  // const location = useLocation();
  const match = useRouteMatch();
  // const [showingComments, setShowingComments] = useState(
  //   location.pathname === `/quotes/${params.quoteId}/comments` ? true : false
  // );
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <p>No quote found for that id!</p>;
  }

  // const showCommentsHandler = () => {
  //   setShowingComments((prevState) => !prevState);
  // };
  return (
    <div>
      <h1>QuoteDetails</h1>
      <HighlightedQuote text={quote.text} author={quote.author} />

{/* How to do it with state that controls when to allow showing and when to allow hiding comments */}
      {/* <div className="centered">
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
      </div> */}

      {/* How to do it with routing (show only if comments aren't currenlty show) */}
      <Route to={`${match.path}`} exact>
        <Link className="btn--flat" to={`${match.url}/comments`}>
          Show Comments
        </Link>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </div>
  );
}

export default QuoteDetails;
