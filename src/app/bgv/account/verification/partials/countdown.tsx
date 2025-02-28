import { Box, Button, Stack, Typography } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import { useState, useRef, useEffect } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<number>(10);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleStart = (): void => {
    if (timeLeft > 0) {
      setIsActive(true);
      setIsPaused(false);
    }
  };

  useEffect(() => {
    if (isActive && !isPaused) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timerRef.current!);
            return 0;
          }

          return prevTime - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isActive, isPaused]);

  useEffect(() => {
    handleStart();
  }, []);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <Stack gap={timeLeft === 0 ? 1 : 0}>
      <Typography color={grey[400]}>
        Resend code in:{" "}
        <Typography color={blue[600]} component="span">
          {formatTime(timeLeft)}
        </Typography>
      </Typography>
      <Button
        color="primary"
        variant="contained"
        onClick={() => alert("Time's up!")}
        sx={{
          padding: timeLeft === 0 ? "inherit" : 0,
          height: timeLeft === 0 ? 36.5 : 0,
          opacity: timeLeft === 0 ? 1 : 0,
          transform: timeLeft === 0 ? "translateY(0)" : "translateY(-20px)",
          transition:
            "opacity 0.5s ease-in-out, transform 0.5s ease-in-out, height 0.5s ease-in-out",
          visibility: timeLeft === 0 ? "visible" : "hidden",
        }}
      >
        Resend Code
      </Button>
    </Stack>
  );
}
