import { makeStyles, createStyles } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import { CSSProperties } from "react";
import { AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// const DefaultHeaderStyle = css({
//   borderBottom: "1px solid #aaa",
//   width: "100%",
//   margin: 0,
//   padding: 0,
//   h1: {
//     margin: 0,
//     padding: 0,
//   },
//   zIndex: 2,
// });

interface HeaderProps {
  styles?: CSSProperties;
}

const Header = (props: HeaderProps) => {
  return (
    <Accordion sx={{ bgcolor: "primary.main" }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h3">Widg.io</Typography>
      </AccordionSummary>
      <AccordionDetails></AccordionDetails>
    </Accordion>
  );
};

export default Header;
