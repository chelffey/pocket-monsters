import "./Modal.css";

const Modal = (props) => {
  const visibilityFunction = props.setVisibility;
  const handleTurnOffModal = () => {
    visibilityFunction(false);
  };

  return (
    <div className="modalContainer">
      {props.children}
      <button onClick={handleTurnOffModal}>Close Modal</button>
    </div>
  );
};

export default Modal;
