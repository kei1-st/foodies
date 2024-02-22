import MealsGrid from "@/components/meals/meals-grid";
import classes from "./page.module.css";
import Link from "next/link";
import { getMeals } from "@/lib/meals";

export default async function MealsPage() { // getMeals() のための async :
  const meals = await getMeals();

  return (
    <>
      <header className={classes.header}>
        <h1>
          Deliscious meals, created <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself. It is easy and fun!!</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
