import Modal from "@/components/Modal/modal";
import { AnimatePresence } from "framer-motion";
import React from "react";
import ReactPlayer from "react-player";

export default function VideoPlayer({
  openModal,
  setOpenModal,
}: {
  openModal: boolean;
  setOpenModal: () => void;
}) {
  React.useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openModal]);

  return (
    <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
      {openModal && (
        <Modal handleClose={setOpenModal}>
          <ReactPlayer
            playing
            controls={true}
            url="https://res.cloudinary.com/caturteguh/video/upload/v1735899578/other/videoplayback_arviof.mp4"
            width="100%"
            height="100%"
          />
        </Modal>
      )}
    </AnimatePresence>
  );
}
