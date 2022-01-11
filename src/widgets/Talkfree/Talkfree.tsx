/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import Header from "./Header";
import { WidgetProvider } from "./context";

const TalkFreeStyles = css({
  height: "100%",
  width: "100%",
});

const Talkfree = () => {
  // get data here and put it in Context
  const [widgetData, setWidgetData] = useState({
    name: "Talkfree",
  });

  useEffect(() => {
    // get stuff
    // set stuff
  }, []);

  return (
    <div css={TalkFreeStyles}>
      <WidgetProvider widgetData={widgetData}>
        <Header />
      </WidgetProvider>
    </div>
  );
};

export default Talkfree;
