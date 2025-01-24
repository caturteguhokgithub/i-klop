import { motion } from "framer-motion";
import Backdrop from "./backdrop";
import { Box, IconButton } from "@mui/material";
import Iconify from "../Icon/iconify";
import useBreakpoints from "@/themes/breakpoints";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const flip = {
  hidden: {
    transform: "scale(0) rotateX(-360deg)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: " scale(1) rotateX(0deg)",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: "scale(0) rotateX(360deg)",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Modal({
  handleClose,
  children,
}: {
  children: React.ReactNode;
  handleClose: () => void;
}) {
  const { onlyMediumScreen } = useBreakpoints();

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        variants={flip}
        initial="hidden"
        animate="visible"
        exit="exit"
        style={{
          width: "100%",
          height: "100vh",
        }}
      >
        {children}
        <Box position="fixed" top={16} right={16}>
          <IconButton
            onClick={handleClose}
            sx={{
              svg: {
                opacity: onlyMediumScreen ? 0.5 : 0.2,
                transition: "all 500ms ease-in-out",
                transform: onlyMediumScreen
                  ? "translateY(0)"
                  : "translateY(-50px)",
              },
              "&:hover": {
                svg: {
                  opacity: 1,
                  width: 40,
                  height: 40,
                  transform: "translateY(0)",
                },
              },
            }}
          >
            <Iconify name="line-md:close-small" color="white" size={32} />
          </IconButton>
        </Box>
      </motion.div>
    </Backdrop>
  );
}
