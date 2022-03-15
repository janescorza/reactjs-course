import React, { Fragment } from "react";
import styles from "./MealsSummary.module.css";

const MealsSummary = (props) => {
  return (
    <div className={styles.summary}>
      <h2>Delicious food, delivered to you</h2>
      <p>
        This is my first full on project to sum up everything I've learned since
        module 1 all the way to module 11
      </p>
      <p>
        So far learning React has been a thirlling experience as there is som
        much to learn, but at the same time so many ideas sound familiar. It's a
        reassuring feeling
      </p>
    </div>
  );
};

export default MealsSummary;
