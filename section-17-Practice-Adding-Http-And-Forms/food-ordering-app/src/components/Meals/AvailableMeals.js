import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import useHttp from "../../hooks/use-http";
import { useState, useEffect } from "react";

const AvailableMeals = () => {
  //USING FETCH TO GET DATA FROM HTTP:
  const [meals,setMeals] = useState([]);
  useEffect(()=>{
    const fetchMeals = async () => {
      const response = await fetch('https://react-js-course-b4b3c-default-rtdb.firebaseio.com/meals.json');
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
      setMeals(loadedMeals);
      
    }
    fetchMeals();
  },[]);//No dependencies so it runs only on load

  const mealsList = meals.map((meal) => (
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
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
