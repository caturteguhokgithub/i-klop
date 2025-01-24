import React, { Fragment } from "react";
import { Box, Stack, Typography } from "@mui/material";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import useBreakpoints from "@/themes/breakpoints";
import { SectionTitle } from "@/components/SectionTitle";
import VideoPlayer from "./videoPlayer";
import Image from "next/image";
import { blue } from "@mui/material/colors";

export interface DataType {
  image?: string | any;
  bgColor?: string;
  title?: string | any;
  vip?: boolean;
}

export const data: DataType[] = [
  {
    image: "handsome-guys",
    title: "Handsome Guys",
    vip: true,
  },
  {
    image: "lost-in-love",
    title: "Lost in Love",
  },
  {
    image: "my-love",
    title: "My Love Mix-Up",
  },
  {
    image: "redflag",
    title: "How to Spot a Red Flag",
    vip: true,
  },
  {
    image: "running-man",
    title: "Running Man",
  },
];

export const CardItem = ({
  image,
  bgcolor,
  onClick,
  isActive,
  title,
  vip,
}: {
  image: string;
  bgcolor?: string;
  onClick: () => void;
  isActive: boolean;
  title?: string;
  vip?: boolean;
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
      position="relative"
      sx={{
        transform: isActive ? "scale(1.2)" : "none",
        // backgroundImage: `url(/images/ott/${image}.jpeg)`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
    >
      <Image
        alt="BGV"
        src={`/images/ottVideo/${image}.jpeg`}
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
          borderRadius: 16,
        }}
      />
      <Typography sx={{ opacity: 0, userSelect: "none", height: 0 }}>
        {title}
      </Typography>
      {vip && (
        <Box
          px={2}
          py={0.75}
          position="absolute"
          top={0}
          right={0}
          sx={{
            borderTopRightRadius: 16,
            borderBottomLeftRadius: 16,
            backgroundSize: "200% auto",
            backgroundImage:
              "linear-gradient(to right, #ffb347 0%, #ffcc33  51%, #ffb347  100%)",
            boxShadow: "rgba(100, 100, 111, 0.9) 0px 2px 16px 0px",
            transition: "0.5s",

            "&:hover": {
              backgroundPosition: "right center",
            },
          }}
        >
          <Typography color="white" fontWeight={700} fontSize={12}>
            VIP
          </Typography>
        </Box>
      )}
    </Stack>
  );
};

export default function SectionOttVideo() {
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
                vip={item.vip}
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
