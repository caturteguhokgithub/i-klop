import React, { Fragment } from "react";
import { Icon } from "@iconify/react";
import { Box, Stack, Typography } from "@mui/material";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import {
  green,
  grey,
  lightBlue,
  orange,
  red,
  teal,
  yellow,
} from "@mui/material/colors";
import useBreakpoints from "@/themes/breakpoints";
import { SectionTitle } from "@/components/SectionTitle";
import VideoPlayer from "./videoPlayer";

export interface FavType {
  icon?: string | any;
  iconColor?: string;
  bgColor?: string;
  title?: string | any;
}

export const dataFavorite: FavType[] = [
  {
    icon: "cbi:okko-tv",
    bgColor: "#7a12ca",
    title: "okko tv",
  },
  {
    icon: "cbi:zdftivi",
    iconColor: orange[600],
    title: "zdf tv",
  },
  {
    icon: "cbi:metv",
    iconColor: grey[900],
    bgColor: yellow[600],
    title: "me tv",
  },
  {
    icon: "cbi:waiputv",
    iconColor: teal[400],
    title: "waipu tv",
  },
  {
    icon: "cbi:skysports-mainevent",
    bgColor: red[600],
    title: "sky sports main nevent",
  },
  {
    icon: "cbi:apple-tv",
    iconColor: grey[800],
    title: "apple tv",
  },
  {
    icon: "cbi:molotovtv",
    iconColor: grey[900],
    bgColor: yellow[600],
    title: "molotov tv",
  },
  {
    icon: "cbi:kion-tv",
    iconColor: lightBlue[800],
    title: "kion tv",
  },
  {
    icon: "cbi:ivi-tv",
    bgColor: green[600],
    title: "ivi tv",
  },
];

export const CardItem = ({
  icon,
  bgcolor,
  iconcolor,
  onClick,
  isActive,
  title,
}: {
  icon: string;
  bgcolor?: string;
  iconcolor?: string;
  onClick: () => void;
  isActive: boolean;
  title?: string;
}) => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="18vh"
      bgcolor={bgcolor || "white"}
      className={isActive ? "active" : ""}
      onClick={onClick}
      borderRadius={2}
      sx={{
        transform: isActive ? "scale(1.2)" : "none",
      }}
    >
      <Typography sx={{ opacity: 0, userSelect: "none", height: 0 }}>
        {title}
      </Typography>
      <Icon icon={icon} height="12vh" color={iconcolor || "white"} />
    </Stack>
  );
};

export default function SectionLiveTv() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const [openModal, setOpenModal] = React.useState(false);

  const { onlySmallScreen, onlyLargeScreen } = useBreakpoints();

  const [favoriteRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: onlySmallScreen ? 2 : onlyLargeScreen ? 3 : 4,
      spacing: 15,
    },
  });

  const handleBoxClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Fragment>
      <Stack gap={2}>
        <SectionTitle label="Live TV Channel" />
        <Box ref={favoriteRef} className="keen-slider">
          {dataFavorite.map((item, index) => (
            <Box
              className={`keen-slider__slide`}
              key={index}
              sx={{
                transform: activeIndex === index ? "scale(1.2)" : "none",
                cursor: "pointer",
              }}
            >
              <CardItem
                icon={item.icon}
                bgcolor={item.bgColor}
                iconcolor={item.iconColor}
                isActive={activeIndex === index}
                // onClick={() => handleBoxClick(index)}
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
