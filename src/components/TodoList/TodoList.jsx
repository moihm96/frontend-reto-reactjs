/* eslint-disable react/prop-types */
import "./TodoList.css";
const TodoList = ({ savedItems, selectedItems, setSelectedItems }) => {
  const toggleSelect = (item) => {
    const newSelected = selectedItems.includes(item)
      ? selectedItems.filter((i) => i !== item)
      : [...selectedItems, item];
    setSelectedItems(newSelected);
  };

  return (
    <ul className="todo-list">
      {savedItems.map((item, index) => (
        <li
          key={index}
          className={selectedItems.includes(item) ? "selected" : ""}
          onClick={() => toggleSelect(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
