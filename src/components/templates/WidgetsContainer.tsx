import GridLayout, { Layout } from "react-grid-layout";
import { WidgetMetadata } from "./types";
import Widget from "./Widget";

const columns = 3;
const rows = 6;

interface WidgetsContainerProps {
  widgets: WidgetMetadata[];
}

const layout: Layout[] = [
  { i: "0", x: 0, y: 0, h: 2, w: 1 },
  { i: "1", x: 1, y: 0, h: 2, w: 1 },
  { i: "2", x: 2, y: 0, h: 2, w: 1 },
  { i: "3", x: 0, y: 2, h: 1, w: 3 },
];

// TODO: Generate Layout Dynamically
const WidgetsContainer = ({ widgets }: WidgetsContainerProps) => {
  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={columns}
      width={window.innerWidth}
    >
      {widgets.map(({ fileName }, index) => (
        <div key={`${index}`}>
          <Widget fileName={fileName} />
        </div>
      ))}
    </GridLayout>
  );
};

// unfinished, poor attempt at generating a dynamic layout
// const layout = useMemo(computeLayout, []);

// function computeLayout() {
//   let elements: Layout[] = [];
//   let desiredWidth = widgets.length % columns;
//   let desiredHeight = widgets.length % rows;

//   for (let i = 0; i < widgets.length; i++) {
//     let element: Layout = {
//       i: `${i}`,
//       x: desiredWidth % i,
//       y: desiredHeight % i,
//       w: 1,
//       h: 1,
//     };
//     elements.push(element);
//   }
//   return elements;
// }

export default WidgetsContainer;
