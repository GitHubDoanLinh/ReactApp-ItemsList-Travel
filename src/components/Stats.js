export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some item to your packing list 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you got everything! Ready to go ✈️"
          : `🧳You have ${numItems} items for your list. And you already packed
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
