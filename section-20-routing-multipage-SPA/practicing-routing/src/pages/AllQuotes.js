import QuoteList from "../components/quotes/QuoteList";
import { getAllQuotes } from "../lib/api";
import { useEffect } from "react";
import useHttp from "../hooks/use-http";
import LoadingSpinner from '../components/UI/LoadingSpinner'
import NoQuotesFound from '../components/quotes/NoQuotesFound'

// const DUMMY_QUOTES = [
//   { id: "q1", author: "a", text: "abc" },
//   { id: "q2", author: "b", text: "asw" },
// ];

function AllQuotes() {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  },[sendRequest])//When the sendRequest changes which is basically only on initial load

  if(status==='pending'){
    return <div className="centered">
      <LoadingSpinner/>
    </div>
  }
  if(error){
    return <p className="centered focused">{error}</p>
  }
  
  if(status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)){
    return <NoQuotesFound/>
  }
  return <QuoteList quotes={loadedQuotes} />;
}

export default AllQuotes;
