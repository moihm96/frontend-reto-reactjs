/* eslint-disable react/prop-types */
import { useState } from "react";
import "./AddItemModal.css";

const AddItemModal = ({ isOpen, onClose, onAddItem }) => {
  const [item, setItem] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item.trim()) return;

    onAddItem(item);
    setItem("");
    onClose();
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setItem("");
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <header>
          <h1 className="entry-header">Add item to list</h1>
        </header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            placeholder="Enter new item..."
            className="entry-input"
          />
          <div className="modal-buttons">
            <button className="primary-button" type="submit">
              Add
            </button>
            <button
              className="secondary-button"
              type="button"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItemModal;
