import { createContext, useState } from "react";

const AddCarCtx = createContext({
  showModal: false,
  showModalHandler: () => {},
});

interface AddCarCtxProviderProps {
  children: React.ReactNode;
}

export const AddCarCtxProvider = (props: AddCarCtxProviderProps) => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <AddCarCtx.Provider
      value={{
        showModal: showModal,
        showModalHandler: showModalHandler,
      }}
    >
      {props.children}
    </AddCarCtx.Provider>
  );
};

export default AddCarCtx
