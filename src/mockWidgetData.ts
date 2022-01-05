import { WidgetMetadata } from "./components/types";

const widgetData: WidgetMetadata[] = [
  {
    fileName: "WidgyDashboard",
    // start with a width of 2
    sizeOptions: {
      w: 2,
      h: 40,
    },
  },
  {
    fileName: "Talkfree",
    sizeOptions: {
      minW: 2,
      w: 6,
      h: 40,
    },
  },
  { fileName: "2", sizeOptions: {} },
  { fileName: "3", sizeOptions: {} },
];

export default widgetData;
