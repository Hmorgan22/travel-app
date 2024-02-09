export default function Stats({ items }) {
  //return early if the item array is empty
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list.</em>
      </p>
    );

  //calc stats for packing
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  //return with ternary operator for different text if the list is fully packed or not
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everthing! Ready to go!"
          : `You have ${numItems} items on your list, and you already packed
          ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
