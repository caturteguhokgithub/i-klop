import React, { Fragment } from "react";
import { alpha, Box, Stack, Typography } from "@mui/material";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import useBreakpoints from "@/themes/breakpoints";
import { SectionTitle } from "@/components/SectionTitle";
import VideoPlayer from "./videoPlayer";
import Image from "next/image";
import { blue } from "@mui/material/colors";
import iTheme from "@/themes/themes";

export interface DataType {
  image?: string | any;
  bgColor?: string;
  title?: string | any;
}

export const data: DataType[] = [
  {
    image: "asphalt",
    title: "Asphalt",
  },
  {
    image: "bowling",
    title: "Bowling",
  },
  {
    image: "cocomelon",
    title: "Cocomelon",
  },
  {
    image: "cut-rope",
    title: "Cut Rope",
  },
  {
    image: "gta",
    title: "Grand Theft Auto",
  },
  {
    image: "ludo",
    title: "Ludo",
  },
  {
    image: "shooting",
    title: "Shooting",
  },
  {
    image: "solitaire",
    title: "Solitaire",
  },
  {
    image: "spongebob",
    title: "Spongebob Squarepants",
  },
  {
    image: "transformer",
    title: "Transformer",
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
      // width="100px"
      // height="100px"
      // bgcolor={bgcolor || "white"}
      className={isActive ? "active" : ""}
      onClick={onClick}
      // borderRadius={2}
      position="relative"
      sx={{
        transform: isActive ? "scale(1.2)" : "none",
        // backgroundImage: `url(/images/games/${image}.png)`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
    >
      <Image
        alt="BGV"
        src={`/images/games/${image}.png`}
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
          borderRadius: 16,
        }}
      />
      <Box
        bgcolor={alpha(blue[900], 0.7)}
        width="100%"
        px={1.75}
        py={0.75}
        position="absolute"
        left={0}
        bottom={0}
        sx={{
          borderRadius: "16px",
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        }}
      >
        <Typography
          color="white"
          noWrap
          sx={{
            opacity: 1,
            userSelect: "none",
            height: "auto",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </Typography>
      </Box>
    </Stack>
  );
};

export default function SectionGames() {
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

  const handleBoxClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Fragment>
      <Stack gap={2}>
        <SectionTitle label="Games Channels" />
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
                title={item.title}
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
