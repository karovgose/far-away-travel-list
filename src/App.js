import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingLists from "./components/PackingList";
import Stats from "./components/Stats";
import "./index.css";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleClear() {
    const conform = window.confirm("Are you sure you want to clear the list?");
    if (conform) {
      setItems([]);
    }
  }

  function handleToggle(id) {
    setItems((items) => {
      return items.map((item) => {
        if (item.id === id) {
          return { ...item, packed: !item.packed };
        }
        return item;
      });
    });
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingLists
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggle={handleToggle}
        clear={handleClear}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
