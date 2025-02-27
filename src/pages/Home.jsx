import { useState, useEffect } from "react";
import "./Home.css";
import TodoList from "../components/TodoList/TodoList";
import UndoButton from "../components/UndoButton";
import AddItemModal from "../components/AddItemModal/AddItemModal";
import DeleteButton from "../components/DeleteButton";
import { loadItems, saveItems } from "../utils/storage";

const Home = () => {
  const [savedItems, setSavedItems] = useState(loadItems());
  const [selectedItems, setSelectedItems] = useState([]);
  const [lastSavedState, setLastSavedState] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    saveItems(savedItems);
  }, [savedItems]);

  const handleAddItem = (item) => {
    setLastSavedState([...savedItems]);
    setSavedItems((prev) => [...prev, item]);
  };

  return (
    <div className="todo-container">
      <header>
        <h1 className="todo-header">This is a technical proof</h1>
      </header>
      <span className="todo-description">
        Lorem ipsum dolor sit amet consectetur adipiscing, elit mus primis nec
        inceptos. Lacinia habitasse arcu molestie maecenas cursus quam nunc,
        hendrerit posuere augue fames dictumst placerat porttitor, dis mi
        pharetra vestibulum venenatis phasellus.
      </span>

      <TodoList
        savedItems={savedItems}
        setSavedItems={setSavedItems}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
      <div className="todo-button-container">
        <div className="group-delete-button">
          <UndoButton
            savedItems={savedItems}
            setSavedItems={setSavedItems}
            lastSavedState={lastSavedState}
            setLastSavedState={setLastSavedState}
          />
          <DeleteButton
            savedItems={savedItems}
            setSavedItems={setSavedItems}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            setLastSavedState={setLastSavedState}
          />
        </div>
        <button
          className="primary-button todo-add-button"
          onClick={() => setIsModalOpen(true)}
        >
          ADD
        </button>
      </div>

      <AddItemModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddItem={handleAddItem}
      />
    </div>
  );
};

export default Home;
