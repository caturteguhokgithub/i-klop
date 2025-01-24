import React, { Fragment } from "react";
import { Box, Stack, Typography } from "@mui/material";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import useBreakpoints from "@/themes/breakpoints";
import { SectionTitle } from "@/components/SectionTitle";
import VideoPlayer from "./videoPlayer";
import Image from "next/image";

export interface DataType {
  image?: string | any;
  bgColor?: string;
  title?: string | any;
}

export const data: DataType[] = [
  {
    image: "youtube",
    title: "youtube",
  },
  {
    image: "vidio",
    title: "vidio",
  },
  {
    image: "viu",
    title: "viu",
  },
  {
    image: "wetv",
    title: "We TV",
  },
  {
    image: "netflix",
    title: "netflix",
  },
  {
    image: "prime",
    title: "prime",
  },
  {
    image: "mtv",
    title: "mtv",
  },
];

export const CardItem = ({
  image,
  bgcolor,
  onClick,
  isActive,
  title,
}: {
  image: string;
  bgcolor?: string;
  onClick: () => void;
  isActive: boolean;
  title?: string;
}) => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="16vh"
      bgcolor={bgcolor || "white"}
      className={isActive ? "active" : ""}
      onClick={onClick}
      borderRadius={3}
      sx={{
        transform: isActive ? "scale(1.2)" : "none",
        // backgroundImage: `url(/images/ott/${image}.jpeg)`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
    >
      <Image
        alt="BGV"
        src={`/images/ott/${image}.png`}
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: "70%",
          height: "auto",
        }}
      />
      <Typography sx={{ opacity: 0, userSelect: "none", height: 0 }}>
        {title}
      </Typography>
    </Stack>
  );
};

export default function SectionOtt() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const [openModal, setOpenModal] = React.useState(false);

  const { onlySmallScreen, onlyLargeScreen } = useBreakpoints();

  const [favoriteRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: {
      // perView: onlySmallScreen ? 2 : onlyLargeScreen ? 3 : 4,
      perView: "auto",
      spacing: 16,
    },
  });

  const handleBoxClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Fragment>
      <Stack gap={2}>
        <SectionTitle label="Video Channels" />
        <Box ref={favoriteRef} className="keen-slider">
          {data.map((item, index) => (
            <Box
              className={`keen-slider__slide`}
              key={index}
              sx={{
                transform: activeIndex === index ? "scale(1.2)" : "none",
                cursor: "pointer",
              }}
            >
              <CardItem
                image={item.image}
                bgcolor={item.bgColor}
                isActive={activeIndex === index}
                onClick={() => setOpenModal(true)}
              />
            </Box>
          ))}
        </Box>
      </Stack>
      <VideoPlayer
        openModal={openModal}
        setOpenModal={() => setOpenModal(false)}
      />
    </Fragment>
  );
}
