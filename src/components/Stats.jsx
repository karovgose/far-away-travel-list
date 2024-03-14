function Stats({ items }) {
  if (items.length === 0) return;
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed);
  const percentage =
    numItems !== 0 ? Math.floor((numPacked.length / numItems) * 100) : 0;
  return (
    <footer className="stats">
      <em>
        💼 You have {numItems} item on your list, and you already packed{" "}
        {numPacked.length} ({percentage} %)
      </em>
    </footer>
  );
}

export default Stats;
