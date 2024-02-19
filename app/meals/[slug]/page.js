export default function MealDetailsPage({ params }) {
  // params は nextjs の仕様
  return (
    <main>
      <h1>Meal Details</h1>
      <p>{params.slug}</p> {/* ページに対して一意 */}
    </main>
  );
}
