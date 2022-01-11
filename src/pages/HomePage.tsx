import { useEffect, useState } from "react";
import Header from "./components/Header";
import { WidgetMetadata } from "../widgets/types";
import WidgetsContainer from "../widgets/containers/WidgetsLayout";
import mockWidgetData from "../data/mockWidgetData";
import { Box, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const HomePage = () => {
  const [widgets, setWidgets] = useState<WidgetMetadata[]>();
  const theme = useTheme();

  console.log("theme", theme);

  useEffect(() => {
    // load the widget preferences
    setWidgets(mockWidgetData);
  }, []);

  return (
    <Container maxWidth="xl">
      <Header />
      <main>
        {widgets ? (
          <WidgetsContainer widgets={widgets} />
        ) : (
          <h2>loading widgets...</h2>
        )}
      </main>
      <footer style={{ bottom: 0 }}>
        no animals were harmed in the making of this site. all rights reserved.
      </footer>
    </Container>
  );
};

export default HomePage;
