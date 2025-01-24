import React, { Fragment } from "react";
import { Box, Stack, Typography } from "@mui/material";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import useBreakpoints from "@/themes/breakpoints";

const images = [
  {
    image:
      "https://images.unsplash.com/photo-1590004953392-5aba2e72269a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
    title: "Mufasa: The Lion King",
    desc: "The release closes out the year for Disney and their return to form box office, though it’s uncertain whether Mufasa can match its predecessor’s $1.6 billion-dollar tally.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1590004845575-cc18b13d1d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
    title: "Sonic the Hedgehog 3",
    desc: "The first two films in the video game adaptation franchise were a box office success, making a combined $725 million worldwide.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
    title: "Venom: The Last Dance",
    desc: "Tom Hardy returns as Eddie Brock to close out the critic-proof Venom trilogy with a wild sayonara for Brock and the symbiote he hosts.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1590005176489-db2e714711fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
    title: "Joker: Folie à Deux",
    desc: "There, destiny will draw him and fellow inmate Harleen Quinzel (Lady Gaga) down a path of clown-clad chaos and musically-tinged destruction.",
  },
];

export default function IntroBgTitle() {
  const [opacities, setOpacities] = React.useState<number[]>([]);
  const [activeSlide, setActiveSlide] = React.useState<number>(0);

  const [sliderRef] = useKeenSlider(
    {
      slides: images.length,
      loop: true,
      detailsChanged(s) {
        const newOpacities = s.track.details.slides.map(
          (slide) => slide.portion
        );
        setOpacities(newOpacities);
        setActiveSlide(s.track.details.rel);
      },
      // created(s) {
      //   s.moveToIdx(50, true, animation);
      // },
      // updated(s) {
      //   s.moveToIdx(s.track.details.abs + 50, true, animation);
      // },
      // animationEnded(s) {
      //   s.moveToIdx(s.track.details.abs + 50, true, animation);
      // },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 7000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  const { onlySmallScreen } = useBreakpoints();

  return (
    <>
      <Box
        ref={sliderRef}
        width="40vw"
        height="40vw"
        position="fixed"
        top={0}
        right={0}
        overflow="hidden"
        sx={{
          "&:after": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            // background:
            //   // "radial-gradient(circle at right top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,1) 100%)",
            //   "radial-gradient(circle, rgba(19, 16, 16, 0) 0%, rgba(19, 16, 16, 1) 100%)",
            zIndex: 2,
          },
        }}
      >
        {images.map((src, idx) => (
          <Box
            key={idx}
            sx={{
              opacity: opacities[idx],
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
            }}
          >
            <Image
              alt="images"
              src={src.image}
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "auto",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
              }}
            />
            <Box
              width="40vw"
              height="40vw"
              sx={{
                background:
                  "linear-gradient(270deg, rgba(2,0,36,0) 0%, rgba(19, 16, 16, 1) 100%)",
              }}
              position="absolute"
              top={0}
              right={0}
              zIndex={3}
            />
            <Box
              width="40vw"
              height="40vw"
              sx={{
                background:
                  "linear-gradient(225deg, rgba(2,0,36,0) 10%, rgba(19, 16, 16, 1) 100%)",
              }}
              position="absolute"
              top={0}
              right={0}
              zIndex={3}
            />
            <Box
              width="40vw"
              height="40vw"
              sx={{
                background:
                  "linear-gradient(180deg, rgba(2,0,36,0) 0%, rgba(19, 16, 16, 1) 100%)",
              }}
              position="absolute"
              top={0}
              right={0}
              zIndex={3}
            />
          </Box>
        ))}
      </Box>
      <Box
        ref={sliderRef}
        position="relative"
        zIndex={4}
        mt={onlySmallScreen ? "6vh" : "8vh"}
      >
        {images.map((src, idx) => (
          <Fragment key={idx}>
            {activeSlide === idx && (
              <Stack
                gap={2}
                sx={{
                  opacity: opacities[idx],
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{ duration: 0.7 }}
                  >
                    <Typography
                      color="white"
                      component="h2"
                      fontSize={onlySmallScreen ? "1.5rem" : "2.5rem"}
                      fontWeight={700}
                    >
                      {src.title}
                    </Typography>
                  </motion.div>
                </AnimatePresence>
                <AnimatePresence mode="wait">
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 1.2 }}
                  >
                    <Typography
                      color="white"
                      component="p"
                      fontSize={onlySmallScreen ? "1rem" : "1.3rem"}
                      maxWidth={onlySmallScreen ? "100vw" : "50vw"}
                    >
                      {src.desc}
                    </Typography>
                  </motion.div>
                </AnimatePresence>
              </Stack>
            )}
          </Fragment>
        ))}
      </Box>
    </>
  );
}
