import QuoteList from '../components/quotes/QuoteList'
const DUMMY_QUOTES = [
  {id: 'q1', author:'a', text:'abc'},
  {id: 'q2', author:'b', text:'asw'}
];

function AllQuotes() {
  return (
      <QuoteList quotes={DUMMY_QUOTES}/>
  );
}

export default AllQuotes;
