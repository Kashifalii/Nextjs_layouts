export default function Header() {
  return (
    <div className="flex justify-between p-1 bg-purple-400">
      <h1>Header</h1>
      <ul className="flex space-x-4">
        <li>Home</li>
        <li>About</li>
        <li>contact</li>
      </ul>
    </div>
  );
}
