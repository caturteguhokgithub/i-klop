// "use client";

// import Iconify from "@/components/Icon/iconify";
// import LayoutIntro from "@/components/LayoutIntro/page";
// import {
//   Box,
//   Container,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Stack,
//   Typography,
// } from "@mui/material";
// import { useSearchParams } from "next/navigation";
// import { Fragment, useEffect, useState } from "react";
// import Grid from "@mui/material/Grid2";
// import { CardItem, dataFavorite, FavType } from "../partials/liveTv";
// import React from "react";
// import { motion, Variants } from "motion/react";

// const ListItemSuggestion = ({ label }: { label: string }) => {
//   return (
//     <ListItem sx={{ px: 0.2, py: 0.5, alignItems: "flex-start" }}>
//       <ListItemIcon sx={{ minWidth: 0, pr: 2 }}>
//         <Iconify
//           name="mdi-circle"
//           size={8}
//           color="white"
//           sx={{ position: "relative", top: 4 }}
//         />
//       </ListItemIcon>
//       <ListItemText sx={{ m: 0 }}>
//         <Typography lineHeight={1}>{label}</Typography>
//       </ListItemText>
//     </ListItem>
//   );
// };

// export default function SearchResultsPage() {
//   const searchParams = useSearchParams();
//   const query = searchParams.get("query");
//   const [results, setResults] = useState<FavType[]>([]);
//   const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

//   useEffect(() => {
//     if (query) {
//       const searchQuery = query.toLowerCase();
//       const filteredResults = dataFavorite.filter((item) =>
//         item.title.toLowerCase().includes(searchQuery)
//       );
//       setResults(filteredResults);
//     }
//   }, [query]);

//   const handleBoxClick = (index: number) => {
//     setActiveIndex(index);
//   };

//   const childVariants: Variants = {
//     init: (index: number) => ({
//       y: "-100%",
//       opacity: 0,
//       transition: { delay: index * 0.2 },
//     }),
//     enter: (index: number) => ({
//       y: 0,
//       opacity: 1,
//       transition: { delay: index * 0.2 },
//     }),
//     exit: (index: number) => ({
//       y: "100%",
//       opacity: 0,
//       transition: { delay: index * 0.2 },
//     }),
//   };

//   return (
//     <LayoutIntro>
//       <Container>
//         <Stack gap={6} mt="8vh">
//           <Box color="white">
//             {results.length > 0 ? (
//               <Fragment>
//                 <Typography>
//                   Search results for "<strong>{query}</strong>"
//                 </Typography>
//                 <Grid container spacing={2} mt={5}>
//                   {results.map((item, index) => (
//                     <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
//                       <motion.div
//                         custom={index}
//                         initial="init"
//                         animate="enter"
//                         exit="exit"
//                         variants={childVariants}
//                       >
//                         <CardItem
//                           title={item.title}
//                           icon={item.icon}
//                           bgcolor={item.bgColor}
//                           iconcolor={item.iconColor}
//                           isActive={activeIndex == index}
//                           onClick={() => handleBoxClick(index)}
//                         />
//                       </motion.div>
//                     </Grid>
//                   ))}
//                 </Grid>
//               </Fragment>
//             ) : (
//               <Stack gap={3} maxWidth={400} m="0 auto">
//                 <Typography>
//                   Your search for "<strong>{query}</strong>" did not have any
//                   matches
//                 </Typography>
//                 <Box>
//                   <Typography>Suggestions:</Typography>
//                   <List dense={false}>
//                     <ListItemSuggestion label="Try different keywords" />
//                     <ListItemSuggestion label="Looking for TV channel?" />
//                     <ListItemSuggestion label="Try using a TV channel, channel title, channel word" />
//                   </List>
//                 </Box>
//               </Stack>
//             )}
//           </Box>
//         </Stack>
//       </Container>
//     </LayoutIntro>
//   );
// }

"use client";

import Iconify from "@/components/Icon/iconify";
import LayoutIntro from "@/components/LayoutIntro/page";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { useSearchParams } from "next/navigation";
import { Fragment, Suspense, useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { CardItem, dataFavorite, FavType } from "../partials/liveTv";
import React from "react";
import { motion, Variants } from "motion/react";

const ListItemSuggestion = ({ label }: { label: string }) => {
  return (
    <ListItem sx={{ px: 0.2, py: 0.5, alignItems: "flex-start" }}>
      <ListItemIcon sx={{ minWidth: 0, pr: 2 }}>
        <Iconify
          name="mdi-circle"
          size={8}
          color="white"
          sx={{ position: "relative", top: 4 }}
        />
      </ListItemIcon>
      <ListItemText sx={{ m: 0 }}>
        <Typography lineHeight={1}>{label}</Typography>
      </ListItemText>
    </ListItem>
  );
};

const SearchResultsContent = ({
  query,
  results,
  activeIndex,
  handleBoxClick,
  childVariants,
}: {
  query: any;
  results: any;
  activeIndex: any;
  handleBoxClick: any;
  childVariants: any;
}) => (
  <Box color="white">
    {results.length > 0 ? (
      <Fragment>
        <Typography>
          Search results for "<strong>{query}</strong>"
        </Typography>
        <Grid container spacing={2} mt={5}>
          {results.map((item: any, index: any) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
              <motion.div
                custom={index}
                initial="init"
                animate="enter"
                exit="exit"
                variants={childVariants}
              >
                <CardItem
                  title={item.title}
                  icon={item.icon}
                  bgcolor={item.bgColor}
                  iconcolor={item.iconColor}
                  isActive={activeIndex == index}
                  onClick={() => handleBoxClick(index)}
                />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Fragment>
    ) : (
      <Stack gap={3} maxWidth={400} m="0 auto">
        <Typography>
          Your search for "<strong>{query}</strong>" did not have any matches
        </Typography>
        <Box>
          <Typography>Suggestions:</Typography>
          <List dense={false}>
            <ListItemSuggestion label="Try different keywords" />
            <ListItemSuggestion label="Looking for TV channel?" />
            <ListItemSuggestion label="Try using a TV channel, channel title, channel word" />
          </List>
        </Box>
      </Stack>
    )}
  </Box>
);

export default function SearchResultsPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [results, setResults] = useState<FavType[]>([]);
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  useEffect(() => {
    if (query) {
      const searchQuery = query.toLowerCase();
      const filteredResults = dataFavorite.filter((item) =>
        item.title.toLowerCase().includes(searchQuery)
      );
      setResults(filteredResults);
    }
  }, [query]);

  const handleBoxClick = (index: number) => {
    setActiveIndex(index);
  };

  const childVariants: Variants = {
    init: (index: number) => ({
      y: "-100%",
      opacity: 0,
      transition: { delay: index * 0.2 },
    }),
    enter: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: index * 0.2 },
    }),
    exit: (index: number) => ({
      y: "100%",
      opacity: 0,
      transition: { delay: index * 0.2 },
    }),
  };

  return (
    <LayoutIntro>
      <Container>
        <Stack gap={6} mt="8vh">
          <Suspense fallback={<div>Loading...</div>}>
            <SearchResultsContent
              query={query}
              results={results}
              activeIndex={activeIndex}
              handleBoxClick={handleBoxClick}
              childVariants={childVariants}
            />
          </Suspense>
        </Stack>
      </Container>
    </LayoutIntro>
  );
}
