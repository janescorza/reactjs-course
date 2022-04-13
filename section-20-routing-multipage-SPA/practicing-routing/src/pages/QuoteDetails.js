import React from "react";
import { Route, useParams } from "react-router-dom";
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote'
const DUMMY_QUOTES = [
    {id: 'q1', author:'a', text:'abc'},
    {id: 'q2', author:'b', text:'asw'}
  ];
  

function QuoteDetails() {
  const params = useParams();
  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);
  if(!quote){
      return <p>No quote found for that id!</p>
  }
  return (
    <div>
      <h1>QuoteDetails</h1>
      <HighlightedQuote text={quote.text} author={quote.author}/>
      {/* <p>{params.quoteId}</p> */}
      {/* <Route path="/quotes/:quoteId/comments"> */}
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments/>
      </Route>
    </div>
  );
}

export default QuoteDetails;
