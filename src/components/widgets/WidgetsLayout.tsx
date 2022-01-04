/** Example of saving a responsive grid layout to local storage
 *  https://github.com/react-grid-layout/react-grid-layout/blob/master/test/examples/7-localstorage.jsx
 *
 *  Example of generating dynamic min and max width and height
 *  https://github.com/react-grid-layout/react-grid-layout/blob/master/test/examples/10-dynamic-min-max-wh.jsx
 */
import { Responsive, WidthProvider, Layouts, Layout } from "react-grid-layout";
import { WidgetMetadata } from "../types";
import Widget from "./Widget";

const ResponsiveGridLayout = WidthProvider(Responsive);

enum BreakpointSize {
  lg = "lg",
  md = "md",
  sm = "sm",
  xs = "xs",
  xxs = "xxs",
}

const cols = {
  lg: 12,
  md: 10,
  sm: 6,
  xs: 2,
  xxs: 1,
};

const breakpoints = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 };

interface WidgetsContainerProps {
  widgets: WidgetMetadata[];
}

// TODO: Generate Layout Dynamically
const WidgetsContainer = ({ widgets }: WidgetsContainerProps) => {
  function generateLayouts(): Layouts {
    let breakpointLayouts: Layouts = {
      lg: [],
      md: [],
      sm: [],
      xs: [],
      xxs: [],
    };
    Object.keys(breakpoints).forEach((size, i, bpArr) => {
      breakpointLayouts[size as BreakpointSize] = getLayouts(size);
    });
    return breakpointLayouts;
  }

  const getLayouts = (size: string): Layout[] => {
    const calcWidth = (size: BreakpointSize) => {
      const width = cols[size] / 2;
      return width >= 2 ? width : cols[size];
    };
    const calcHeight = (size: BreakpointSize) => {
      const height = 2;
      return height;
    };
    let layouts = [];
    for (let i = 0; i < widgets.length; i++) {
      const w = calcWidth(size as BreakpointSize);
      const h = calcHeight(size as BreakpointSize);
      const layout = {
        x: (i * 2) % cols[size as BreakpointSize],
        y: Math.floor(i / 6),
        w: w,
        h: h,
        i: i.toString(),
      };
      layouts.push(layout);
    }
    return layouts;
  };

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={generateLayouts()}
      breakpoints={breakpoints}
      cols={cols}
      useCSSTransforms={true}
    >
      {widgets.map(({ fileName }, index) => (
        <div key={`${index}`}>
          <Widget fileName={fileName} />
        </div>
      ))}
    </ResponsiveGridLayout>
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
