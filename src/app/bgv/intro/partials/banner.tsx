import React, { Fragment } from "react";
import { alpha, Box, Button, Stack, Typography } from "@mui/material";
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
  title?: string | any;
}

export const data: DataType[] = [
  {
    image: "ads-1",
    title: "Handsome Guys",
  },
  {
    image: "ads-1",
    title: "Lost in Love",
  },
  {
    image: "ads-1",
    title: "My Love Mix-Up",
  },
  {
    image: "ads-1",
    title: "How to Spot a Red Flag",
  },
  {
    image: "ads-1",
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
        src={`/images/banner/${image}.jpg`}
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

export default function SectionBaner() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const [openModal, setOpenModal] = React.useState(false);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const { onlySmallScreen, onlyLargeScreen } = useBreakpoints();

  const [favoriteRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: {
      perView: 1,
      spacing: 16,
    },
  });

  const handleBoxClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Fragment>
      <Box position="relative">
        <Box ref={sliderRef} className="keen-slider">
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
                isActive={activeIndex === index}
                onClick={() => setOpenModal(true)}
              />
            </Box>
          ))}
        </Box>
        <Box
          position="absolute"
          bottom={16}
          left="50%"
          sx={{
            transform: "translateX(-50%)",
          }}
        >
          {loaded && instanceRef.current && (
            <Stack
              display="inline-flex"
              direction="row"
              justifyContent="center"
              alignItems="center"
              gap={0.75}
            >
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length
                ).keys(),
              ].map((idx) => {
                return (
                  <Box key={idx}>
                    <Button
                      onClick={() => {
                        instanceRef.current?.moveToIdx(idx);
                      }}
                      className={
                        "dot" + (currentSlide === idx ? " active" : "")
                      }
                      sx={{
                        p: 0,
                        m: 0,
                        minWidth: 0,
                        width: 16,
                        height: 16,
                        borderRadius: "50%",
                        bgcolor:
                          currentSlide === idx
                            ? blue[600]
                            : alpha(blue[600], 0.2),
                      }}
                    ></Button>
                  </Box>
                );
              })}
            </Stack>
          )}
        </Box>
      </Box>
      <VideoPlayer
        openModal={openModal}
        setOpenModal={() => setOpenModal(false)}
      />
    </Fragment>
  );
}
