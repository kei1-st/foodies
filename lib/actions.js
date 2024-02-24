"use server";

import { redirect } from "next/navigation";

import { saveMeal } from "./meals";

// サーバー上でのみ実行される

export async function shareMeal(formData) {
  // action に設定した form 送信時にサーバー側で実行される

  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  await saveMeal(meal);
  redirect("/meals");
}
