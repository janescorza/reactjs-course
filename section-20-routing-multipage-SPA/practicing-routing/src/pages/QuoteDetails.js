import React, { useEffect } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const DUMMY_QUOTES = [
  { id: "q1", author: "a", text: "abc" },
  { id: "q2", author: "b", text: "asw" },
];

function QuoteDetails() {
  const params = useParams();
  const match = useRouteMatch();
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true); //trues as we start in loading mode
const {quoteId} = params;//To only pass the quote id as we don't want the effect to run on every change of params

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest,quoteId]);

  if(status === 'pending'){
    return <div className="centered">
      <LoadingSpinner/>
    </div>
  }
  if(error){
    return <p className="centered">{error}</p>
  }
  if(!loadedQuote.text){
    return <p>No quote found!</p>;
  }

  // const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  // if (!quote) {
  //   return <p>No quote found for that id!</p>;
  // }

  return (
    <div>
      <h1>QuoteDetails</h1>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
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
      console.log(quoteData);
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
