import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: "242",
      name: "🍌Banane",
      color: "yellow",
    },
    {
      id: "543",
      name: "🍒Cherry",
      color: "red",
    },
    {
      id: "321",
      name: "🍇Grapes",
      color: "purple",
    },
    {
      id: "725",
      name: "🍉Melon",
      color: "green",
    },
    {
      id: "924",
      name: "🫐Blueberry",
      color: "blue",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => {
        return (
          <li key={fruit.id}>
            <Card
              id={fruit.id}
              name={fruit.name}
              emoji={fruit.emoji}
              color={fruit.color}
            />
          </li>
        );
      })}
    </div>
  );
}
