import { motion } from "framer-motion";

function Content({ modal, setModal, children }: any) {
  return (
    <motion.div
      animate={{
        scale: modal ? 0.8 : 1,
        opacity: modal ? 0.5 : 1,
      }}
      transition={{ type: "spring", bounce: 0, duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

export default Content;
