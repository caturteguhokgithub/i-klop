import useBreakpoints from "@/themes/breakpoints";
import { Typography } from "@mui/material";

export const SectionTitle = ({ label }: { label: string }) => {
  const { onlySmallScreen } = useBreakpoints();

  return (
    <Typography
      color="white"
      fontSize={onlySmallScreen ? "1rem" : "1.3rem"}
      fontWeight={600}
    >
      {label}
    </Typography>
  );
};
