import { Divider } from "@mui/material";
import { useEffect, useState } from "react";
import { WidgetProvider } from "./context";

const WidgyDashboard = () => {
  // get data here and put it in Context
  const [widgetData, setWidgetData] = useState({});

  useEffect(() => {
    // get stuff
    // set stuff
  }, []);

  return (
    <div>
      <WidgetProvider widgetData={widgetData}>
        <h2>Some Dashboard</h2>
        <Divider color="secondary.main" />
      </WidgetProvider>
    </div>
  );
};

export default WidgyDashboard;
