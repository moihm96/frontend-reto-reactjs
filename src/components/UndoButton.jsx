/* eslint-disable react/prop-types */
const UndoButton = ({ setSavedItems, lastSavedState, setLastSavedState }) => {
  const handleUndo = () => {
    if (lastSavedState !== null) {
      setSavedItems(lastSavedState);
      setLastSavedState(null);
    }
  };

  return (
    <button
      className="secondary-button todo-undo-button"
      onClick={handleUndo}
      disabled={!lastSavedState}
    >
      Undo
    </button>
  );
};

export default UndoButton;
