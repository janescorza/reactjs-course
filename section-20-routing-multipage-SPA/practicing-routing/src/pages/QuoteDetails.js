import React from "react";
import { useParams } from "react-router-dom";

function QuoteDetails() {
  const params = useParams();
  return (
    <div>
      <p>QuoteDetails</p>
      <p>{params.quoteId}</p>
    </div>
  );
}

export default QuoteDetails;
