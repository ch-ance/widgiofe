/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import Header from "../components/molecules/Header";
import { WidgetMetadata } from "../components/types";
import WidgetsContainer from "../components/widgets/WidgetsLayout";
import { colors } from "../theme/constants";

const PageStyle = css({
  backgroundColor: colors["eerie-black"],
  color: colors.text,
  height: "100vh",
  maxHeight: "100vh",
});

const HomePage = () => {
  const [widgets, setWidgets] = useState<WidgetMetadata[]>();

  useEffect(() => {
    const widgetData = [
      { name: "talkfree", fileName: "Talkfree" },
      { name: "another widget", fileName: "1" },
      { name: "another widget 2", fileName: "2" },
      { name: "another widget 3", fileName: "3" },
    ];
    setWidgets(widgetData);
  }, []);

  return (
    <div css={PageStyle}>
      <Header />
      <main>
        {widgets ? (
          <WidgetsContainer widgets={widgets} />
        ) : (
          <h2>loading widgets...</h2>
        )}
      </main>
      <footer
        style={{
          position: "absolute",
          bottom: 0,
        }}
      >
        no animals were harmed in the making of this site. all rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
