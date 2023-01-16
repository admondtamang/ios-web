import { AnimatePresence, motion, AnimationProps } from "framer-motion";
import React, { useContext } from "react";
import { ModalContext } from "../../context/modalContext";

type Props = {};
const defaultModalAnimation: AnimationProps = {
  transition: { duration: 0.2, delay: 0.1, ease: "easeInOut" },
  initial: { opacity: 0, scale: 0.9, y: 20 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const defaultModalBackdropAnimation: AnimationProps = {
  transition: { duration: 0.2, ease: "easeInOut" },
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

function Modal({ modal, setModal }: any) {
  const { link } = useContext(ModalContext);

  return (
    <AnimatePresence>
      {modal && (
        <div className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center px-5">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -50,
              opacity: 0,
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="absolute z-10 h-auto w-full max-w-md rounded bg-indigo-600 p-5 text-white"
          >
            <button
              onClick={() => setModal((modal: any) => !modal)}
              className="absolute top-0 right-0 -mt-4 -mr-4 mb-2 block h-8 w-8 rounded-full border border-indigo-600 bg-white text-indigo-600"
            >
              &times;
            </button>
            <embed
              type="text/html"
              src="snippet.html"
              width="500"
              height="200"
            ></embed>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.2 }}
            onClick={() => setModal((modal: any) => !modal)}
            className="fixed top-0 left-0 flex h-full w-full items-center justify-center bg-transparent px-5"
          />
        </div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
