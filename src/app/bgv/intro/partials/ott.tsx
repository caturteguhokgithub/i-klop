import React, { Fragment } from "react";
import { Box, Stack, Typography } from "@mui/material";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import useBreakpoints from "@/themes/breakpoints";
import { SectionTitle } from "@/components/SectionTitle";
import VideoPlayer from "./videoPlayer";
import Image from "next/image";
import Link from "next/link";

export interface DataType {
  image?: string | any;
  bgColor?: string;
  title?: string | any;
  imgWidth?: string;
  href?: string;
}

export const data: DataType[] = [
  {
    image: "viu",
    title: "viu",
    href: "https://www.viu.com/ott/id",
  },
  {
    image: "cubmu",
    title: "Cubmu",
    imgWidth: "30%",
    href: "https://www.cubmu.com/",
  },
  {
    image: "kino",
    title: "Kino TV",
    imgWidth: "50%",
    href: "https://spiintl.com/channels/kinotv",
  },
  {
    image: "wetv",
    title: "We TV",
    href: "https://wetv.vip/id",
  },

  // {
  //   image: "youtube",
  //   title: "youtube",
  //   href: "https://www.youtube.com/",
  // },
  // {
  //   image: "cubmu",
  //   title: "Cubmu",
  //   imgWidth: "30%",
  //   href: "https://www.cubmu.com/",
  // },
  // {
  //   image: "viu",
  //   title: "viu",
  //   href: "https://www.viu.com/ott/id",
  // },
  // {
  //   image: "wetv",
  //   title: "We TV",
  //   href: "https://wetv.vip/id",
  // },
  // {
  //   image: "kino",
  //   title: "Kino TV",
  //   imgWidth: "50%",
  //   href: "https://spiintl.com/channels/kinotv",
  // },

  // {
  //   image: "vidio",
  //   title: "vidio",
  // },
  // {
  //   image: "netflix",
  //   title: "netflix",
  // },
  // {
  //   image: "prime",
  //   title: "prime",
  // },
  // {
  //   image: "mtv",
  //   title: "mtv",
  // },
];

export const CardItem = ({
  image,
  bgcolor,
  onClick,
  isActive,
  title,
  imgWidth,
  href,
}: {
  image: string;
  bgcolor?: string;
  onClick?: () => void;
  isActive: boolean;
  title?: string;
  imgWidth?: string;
  href?: string;
}) => {
  return (
    <Box
      component="a"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="16vh"
      bgcolor={bgcolor || "white"}
      className={isActive ? "active" : ""}
      // onClick={onClick}
      borderRadius={3}
      href={href}
      target="_blank"
      sx={{
        display: "flex",
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
          width: imgWidth ? imgWidth : "70%",
          height: "auto",
        }}
      />
      <Typography
        component="span"
        sx={{ opacity: 0, userSelect: "none", height: 0 }}
      >
        {title}
      </Typography>
    </Box>
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
                href={item.href}
                imgWidth={item.imgWidth}
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
