/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { WidgetProvider } from "./context";

const WidgyDashboardStyles = css({
  height: "100%",
  width: "100%",
});

const WidgyDashboard = () => {
  // get data here and put it in Context
  const [widgetData, setWidgetData] = useState({});

  useEffect(() => {
    // get stuff
    // set stuff
  }, []);

  return (
    <div css={WidgyDashboardStyles}>
      <WidgetProvider widgetData={widgetData}>
        <h2>Widgy Dashboard</h2>
      </WidgetProvider>
    </div>
  );
};

export default WidgyDashboard;
