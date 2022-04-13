import React from "react";
import { Route, useParams } from "react-router-dom";
import Comments from '../components/comments/Comments'

function QuoteDetails() {
  const params = useParams();
  return (
    <div>
      <p>QuoteDetails</p>
      <p>{params.quoteId}</p>
      {/* <Route path="/quotes/:quoteId/comments"> */}
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments/>
      </Route>
    </div>
  );
}

export default QuoteDetails;
