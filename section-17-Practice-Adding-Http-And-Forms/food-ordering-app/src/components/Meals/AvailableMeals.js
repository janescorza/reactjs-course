import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import useHttp from "../../hooks/use-http";
import { useState, useEffect, useReducer } from "react";

const ACTIONS = {
  addMeals: "add-meals",
  startLoading: "start-loading",
  endLoading: "end-loading",
  toggleError: "toggle-error",
};

const initialState = {
  meals: [],
  isLoading: true,
  error: false,
};

const mealStateReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.addMeals:
      return { ...state, isLoading: false, meals: action.meals };
    case ACTIONS.startLoading:
      return { ...state, isLoading: true };
    case ACTIONS.endLoading:
      return { ...state, isLoading: false };
    case ACTIONS.toggleError:
      return { ...state, error: !state.error };
    default:
      return state;
  }
};

const AvailableMeals = () => {
  //USING FETCH TO GET DATA FROM HTTP:
  //Using state
  // const [meals, setMeals] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  //Using reducer
  const [mealState, dispatch] = useReducer(mealStateReducer, initialState);

  useEffect(() => {
    const fetchMeals = async () => {
      // setIsLoading(true);
      dispatch({ type: ACTIONS.startLoading });
      const response = await fetch(
        "https://react-js-course-b4b3c-default-rtdb.firebaseio.com/meals.json"
      );
      const responseData = await response.json();
      //I got an object but I want an array
      const loadedMeals = [];

      for (const mealKey in responseData) {
        loadedMeals.push({
          id: mealKey,
          name: responseData[mealKey].name,
          description: responseData[mealKey].description,
          price: responseData[mealKey].price,
        });
      }
      dispatch({ type: ACTIONS.addMeals, meals: loadedMeals });
      // setMeals(loadedMeals);
      // setIsLoading(false);
    };
    fetchMeals();
  }, []); //No dependencies so it runs only on load

  if (mealState.isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading available meals</p>
      </section>
    );
  }

  const mealsList = mealState.meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  //USING A CUSTOM HTTP HOOK:
  /*
  const [mealsList, setMealsList] = useState([]);
  const { isLoading, error, sendRequest: fetchData } = useHttp();

  useEffect(() => {
    const requestConfig = {
      url: "https://react-js-course-b4b3c-default-rtdb.firebaseio.com/meals.json",
    };
    const transformMeals = (mealsObj) => {
      const loadedMeals = [];

      for (const mealKey in mealsObj) {
        loadedMeals.push({
          id: mealKey,
          name: mealsObj[mealKey].name,
          description: mealsObj[mealKey].description,
          price: mealsObj[mealKey].price,
        });
      }

      const mealsListJSX = loadedMeals.map((meal) => (
        <MealItem
          key={meal.id}
          id={meal.id}
          name={meal.name}
          description={meal.description}
          price={meal.price}
        />
      ));

      setMealsList(mealsListJSX);
    };

    fetchData(requestConfig, transformMeals);
  }, [fetchData]);
  */

  return (
    <section className={classes.meals}>
      <Card>{mealsList}</Card>
    </section>
  );
};

export default AvailableMeals;
