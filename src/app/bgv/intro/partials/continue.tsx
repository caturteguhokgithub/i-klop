import React, { Fragment } from "react";
import { Box, Stack, styled, Typography } from "@mui/material";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import useBreakpoints from "@/themes/breakpoints";
import { SectionTitle } from "@/components/SectionTitle";
import VideoPlayer from "./videoPlayer";
import Image from "next/image";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import iTheme from "@/themes/themes";
import { blue } from "@mui/material/colors";

export interface DataType {
  image?: string | any;
  bgColor?: string;
  progress: number;
  title?: string | any;
}

export const data: DataType[] = [
  {
    image: "movie-1",
    title: "Handsome Guys",
    progress: 20,
  },
  {
    image: "movie-2",
    title: "Lost in Love",
    progress: 88,
  },
  {
    image: "movie-3",
    title: "My Love Mix-Up",
    progress: 10,
  },
  {
    image: "movie-4",
    title: "How to Spot a Red Flag",
    progress: 50,
  },
  {
    image: "movie-5",
    title: "Running Man",
    progress: 44,
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
      // width="100%"
      // height="22vh"
      // bgcolor={bgcolor || "white"}
      className={isActive ? "active" : ""}
      onClick={onClick}
      // borderRadius={2}
      sx={{
        transform: isActive ? "scale(1.2)" : "none",
        // backgroundImage: `url(/images/ott/${image}.jpeg)`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
    >
      <Image
        alt="BGV"
        src={`/images/continue/${image}.jpeg`}
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
          borderRadius: 16,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
      />
      <Typography sx={{ opacity: 0, userSelect: "none", height: 0 }}>
        {title}
      </Typography>
    </Stack>
  );
};

export default function SectionContinue() {
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

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 6,
    borderRadius: 16,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[700],
      ...theme.applyStyles("dark", {
        backgroundColor: theme.palette.grey[800],
      }),
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 1,
      backgroundColor: blue[500],
      ...theme.applyStyles("dark", {
        backgroundColor: "#308fe8",
      }),
    },
  }));

  return (
    <Fragment>
      <Stack gap={2}>
        <SectionTitle label="Continue Watching" />
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
              <BorderLinearProgress
                variant="determinate"
                value={item.progress}
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
