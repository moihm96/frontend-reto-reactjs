/* eslint-disable react/prop-types */
const DeleteButton = ({
  savedItems,
  setSavedItems,
  selectedItems,
  setSelectedItems,
  setLastSavedState,
}) => {
  const handleDelete = () => {
    if (selectedItems.length === 0) return;
    setLastSavedState([...savedItems]);
    const newItems = savedItems.filter((item) => !selectedItems.includes(item));
    setSavedItems(newItems);
    setSelectedItems([]);
  };

  return (
    <button
      className="secondary-button"
      onClick={handleDelete}
      disabled={selectedItems.length === 0}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
