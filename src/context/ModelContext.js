import { createContext, useState } from "react";

const ModelContext = createContext();

const ModalState = (props) => {
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("winner"); // start || winner

  const showModal = () => setShow(true);
  const hideModal = () => setShow(false);

  return (
    <ModelContext.Provider
      value={{
        show,
        modaleModel: mode,
        showModal,
        hideModal,
        setModalMode: setMode,
      }}
    >
      {props.children}
    </ModelContext.Provider>
  );
};

export { ModelContext, ModalState };