import MealsGrid from "@/components/meals/meals-grid";
import classes from "./page.module.css";
import { Suspense } from "react";
import Link from "next/link";
import { getMeals } from "@/lib/meals";

async function Meals() {
  // getMeals() のための async :
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
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
        <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
          {/* フェッチにかかる時間の間サスペンドする */}
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
