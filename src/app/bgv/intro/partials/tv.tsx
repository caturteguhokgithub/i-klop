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
    image: "transtv",
    title: "Trans TV",
  },
  {
    image: "gtv",
    title: "Global TV",
  },
  {
    image: "indosiar",
    title: "Indosiar",
  },
  {
    image: "inews",
    title: "iNews",
  },
  {
    image: "kompas",
    title: "Kompas TV",
  },
  {
    image: "trans7",
    title: "Trans 7",
  },
  {
    image: "metrotv",
    title: "Metro TV",
  },
  {
    image: "sctv",
    title: "SCTV",
  },
  {
    image: "sindo",
    title: "Sindo News TV",
  },
  {
    image: "tvone",
    title: "tvOne",
  },
  {
    image: "rcti",
    title: "RCTI",
  },
  {
    image: "mnc",
    title: "MNC",
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
      width="125px"
      height="125px"
      bgcolor={bgcolor || "white"}
      className={isActive ? "active" : ""}
      onClick={onClick}
      borderRadius="50%"
      sx={{
        transform: isActive ? "scale(1.2)" : "none",
      }}
    >
      <Image
        alt="BGV"
        src={`/images/tv/${image}.png`}
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: "70%",
          height: "auto",
          borderRadius: "50%",
        }}
      />
      <Typography sx={{ opacity: 0, userSelect: "none", height: 0 }}>
        {title}
      </Typography>
      {/* <Image
        alt="BGV"
        src={`/images/tv/${image}.png`}
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: "auto",
          height: "160px",
        }}
      /> */}
    </Stack>
  );
};

export default function SectionTvChannel() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const [openModal, setOpenModal] = React.useState(false);

  const { onlySmallScreen, onlyLargeScreen } = useBreakpoints();

  const [favoriteRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: {
      // perView: onlySmallScreen ? 2 : onlyLargeScreen ? 3 : 7,
      perView: "auto",
      spacing: 16,
    },
  });

  return (
    <Fragment>
      <Stack gap={2}>
        <SectionTitle label="TV Channels" />
        <Box
          ref={favoriteRef}
          className="keen-slider"
          // sx={{ overflow: "visible !important" }}
        >
          {data.map((item, index) => (
            <Box
              className={`keen-slider__slide`}
              key={index}
              sx={{
                transform: activeIndex === index ? "scale(1.2)" : "none",
                cursor: "pointer",
                width: "126px !important",
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
