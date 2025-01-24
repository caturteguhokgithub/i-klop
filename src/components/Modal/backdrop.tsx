import { motion } from "framer-motion";

export default function Backdrop({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        height: "100%",
        width: "100%",
        background: "#000000e1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflowY: "hidden",
        zIndex: 999,
        overflow: "hidden !important",
      }}
    >
      {children}
    </motion.div>
  );
}
