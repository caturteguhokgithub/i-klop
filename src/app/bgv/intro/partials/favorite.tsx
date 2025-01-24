import React, { Fragment } from "react";
import { Icon } from "@iconify/react";
import { Box, Stack } from "@mui/material";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { blue, green, grey, orange, red, yellow } from "@mui/material/colors";
import useBreakpoints from "@/themes/breakpoints";
import { SectionTitle } from "@/components/SectionTitle";
import VideoPlayer from "./videoPlayer";

const dataFavorite = [
  {
    icon: "cib:apple",
    iconColor: grey[800],
  },
  {
    icon: "cib:netflix",
    bgColor: red[600],
  },
  {
    icon: "cib:youtube",
    iconColor: red[600],
  },
  {
    icon: "token-branded:alpha",
    bgColor: blue[600],
  },
  {
    icon: "cib:intel",
    iconColor: blue[600],
  },
  {
    icon: "cib:amazon-aws",
    bgColor: orange[600],
  },
  {
    icon: "cib:overleaf",
    iconColor: green[600],
  },
  {
    icon: "cib:imdb",
    iconColor: yellow[600],
    bgColor: grey[900],
  },
  {
    icon: "cib:monzo",
    bgColor: green[600],
  },
];

export const CardItem = ({
  icon,
  bgcolor,
  iconcolor,
  onClick,
  isActive,
}: {
  icon: string;
  bgcolor?: string;
  iconcolor?: string;
  onClick: () => void;
  isActive: boolean;
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
      borderRadius={1.5}
      sx={{
        transform: isActive ? "scale(1.2)" : "none",
      }}
    >
      <Icon icon={icon} height="6vh" color={iconcolor || "white"} />
    </Stack>
  );
};

export default function SectionFavorite() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const [openModal, setOpenModal] = React.useState(false);

  const { onlySmallScreen, onlyLargeScreen } = useBreakpoints();

  const [favoriteRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: onlySmallScreen ? 2 : onlyLargeScreen ? 3 : 6,
      spacing: 15,
    },
  });

  const handleBoxClick = (index: number) => {
    setActiveIndex(index);
  };

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
    <Fragment>
      <Stack gap={2}>
        <SectionTitle label="Favorite Apps" />
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
