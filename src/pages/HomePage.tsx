/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { CSSProperties, useEffect, useState } from "react";
import Header from "../components/molecules/Header";
import { WidgetMetadata } from "../components/types";
import WidgetsContainer from "../components/widgets/WidgetsLayout";
import { colors } from "../theme/constants";
import mockWidgetData from "../mockWidgetData";

const PageStyle = css({
  backgroundColor: colors["eerie-black"],
  color: colors.text,
  minHeight: "100vh",
  height: "100%",
  maxWidth: window.innerWidth + "px",
});

const headerStyles: CSSProperties = {
  height: 80,
  position: "fixed",
  display: "flex",
  alignItems: "center",
  paddingLeft: 20,
  backgroundColor: "blue",
};

const MainStyle = css({
  paddingTop: 90,
  minHeight: "100%",
  height: "100%",
});

const FooterStyle = css({
  bottom: 0,
  position: "relative",
  marginBottom: 0,
  paddingBottom: 0,
  paddingLeft: 10,
  height: 40,
  maxHeight: 40,
  backgroundColor: "aqua",
  color: "black",
  display: "flex",
  alignItems: "center",
});

const HomePage = () => {
  const [widgets, setWidgets] = useState<WidgetMetadata[]>();

  useEffect(() => {
    // load the widget preferences
    setWidgets(mockWidgetData);
  }, []);

  return (
    <div css={PageStyle}>
      <Header styles={headerStyles} />
      <main css={MainStyle}>
        {widgets ? (
          <WidgetsContainer widgets={widgets} />
        ) : (
          <h2>loading widgets...</h2>
        )}
      </main>
      <footer css={FooterStyle}>
        no animals were harmed in the making of this site. all rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
