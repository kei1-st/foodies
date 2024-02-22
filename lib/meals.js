// access to database

import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals(){	// 非同期
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return db.prepare('SELECT * FROM meals').all();	//run() はデータの挿入、get() はデータの取得、all() は複数データの取得
}