import { useState } from "react";

const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);

const useApi = (taskText, post = true) => {
  setIsLoading(true);
  setError(null);
  try {
    const address =
      "https://react-js-course-b4b3c-default-rtdb.firebaseio.com/tasks.json";
    let extraObject = {};
    if (post) {
      extraObject = {
        method: "POST",
        body: JSON.stringify({ text: taskText }),
        headers: {
          "Content-Type": "application/json",
        },
      };
    }
    const response = await fetch(address, extraObject);

    if (!response.ok) {
      throw new Error("Request failed!");
    }

    const data = await response.json();
    let returnData;
    if (post) {
      const generatedId = data.name; // firebase-specific => "name" contains generated id
      returnData = { id: generatedId, text: taskText };
      
    } else {
      returnData = [];
      for (const taskKey in data) {
        returnData.push({ id: taskKey, text: data[taskKey].text });
      }
    }
    setIsLoading(false);
    return returnData ;
  } catch (err) {
    setError(err.message || "Something went wrong!");
  }
  setIsLoading(false);
};

export default useApi;
