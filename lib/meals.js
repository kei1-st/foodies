// access to database
import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  // 非同期処理（即座に完了しない処理）
  // await は async 関数内でのみ使用可能、Promise() が完了するまで待機してくれる
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // throw new Error('Loading meals failed');
  return db.prepare("SELECT * FROM meals").all(); //run() はデータの挿入、get() はデータの取得、all() は複数データの取得
}

export function getMeal(slug) {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug); // "?" のプレースホルダーは better-sqlite3 の仕様
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true }); // 小文字
  meal.instructions = xss(meal.instructions); // x site scripting 対策

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer(); //image を buffer に変換

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(
    `INSERT INTO meals 
    (title, summary, instructions, creator, creator_email, image, slug) 
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `
  ).run(meal);
}
