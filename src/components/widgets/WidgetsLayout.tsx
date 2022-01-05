/** Example of saving a responsive grid layout to local storage
 *  https://github.com/react-grid-layout/react-grid-layout/blob/master/test/examples/7-localstorage.jsx
 *
 *  Example of generating dynamic min and max width and height
 *  https://github.com/react-grid-layout/react-grid-layout/blob/master/test/examples/10-dynamic-min-max-wh.jsx
 *
 *  Grid Units are how h/w is calculated in the layouts
 *  Grid Units: h = props.rowHeight, w = (props.width / props.cols)
 *  https://stackoverflow.com/questions/53390494/react-grid-layout-x-y-w-h
 */

import { useEffect, useState } from "react";
import { Responsive, WidthProvider, Layout } from "react-grid-layout";
import { SizeOptions, WidgetMetadata } from "../types";
import Widget from "./RenderWidget";

const ResponsiveGridLayout = WidthProvider(Responsive);

interface WidgetsContainerProps {
  widgets: WidgetMetadata[];
}

// type declarations for use with ResponsiveGridLayout props
type BreakpointKey = "lg" | "md" | "sm" | "xs";
type BreakpointMap = Record<BreakpointKey, number>;
type BreakpointLayouts = Record<BreakpointKey, Layout[]>;

// width of RGL at which to apply a different layout
const widthBreakpoints: BreakpointMap = {
  lg: 1200,
  md: 996,
  sm: 768,
  xs: 480,
};

// number of columns to use depending on breakpoint
const columnBreakpoints: BreakpointMap = {
  lg: 12,
  md: 8,
  sm: 4,
  xs: 2,
};

// counters for setting default x and y values
let takenWidth = 0;
let takenHeight = 0;

const WidgetsContainer = ({ widgets }: WidgetsContainerProps) => {
  const [layouts, setLayouts] = useState<BreakpointLayouts>();

  useEffect(() => {
    let layouts: BreakpointLayouts = {
      lg: [],
      md: [],
      sm: [],
      xs: [],
    };

    // iterate over the breakpoints and generate layouts for each one
    for (const breakpoint in columnBreakpoints) {
      layouts[breakpoint as BreakpointKey] = getLayouts(
        breakpoint as BreakpointKey
      );
    }

    setLayouts(layouts);
  }, [widgets]);

  /**
   * @param breakpoint The BreakpointKey that these layouts are for
   * @returns an array of layout objects to be used at the given breakpoint
   */
  const getLayouts = (breakpoint: BreakpointKey): Layout[] => {
    return widgets.map((widget, index) => {
      return getLayout(widget.sizeOptions, index, breakpoint);
    });
  };

  /**
   *
   * @param sizeOptions width/height constraints for a partciular Widget, as well as its default size
   * @param index current index of ReactGridLayout children array
   * @param breakpoint the BreakpointKey we are creating a layout for
   * @returns a layout for a single child component
   */
  const getLayout = (
    sizeOptions: SizeOptions,
    index: number,
    breakpoint: BreakpointKey // so we can get extra responsive
  ): Layout => {
    let { minW, w, maxW, minH, h, maxH } = sizeOptions;

    // set default values and enforce constraints
    minW = clamp(minW || 1, 1, 12);
    maxW = clamp(maxW || 12, 1, 12);
    w = clamp(w || 4, minW, maxW);
    minH = clamp(minH || 10, 10, 40);
    maxH = clamp(maxH || 40, 10, 40);
    h = clamp(h || 20, minH, maxH);

    // keep a running total of the width/height used so that we can set the coordinates of the next elements.
    // this is a crude implementation and needs improvement
    takenWidth += w;
    takenHeight += h;

    return {
      i: index.toString(), // used as the key for the child component
      x: takenWidth - w,
      y: takenHeight - h,
      minW,
      w,
      maxW,
      minH,
      h,
      maxH,
    };
  };

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      breakpoints={widthBreakpoints}
      cols={columnBreakpoints}
      useCSSTransforms={true}
      rowHeight={2} // This is gonna be a disaster on different resolutions, I think..... Shouldn't be too big o' deal to fix it
    >
      {widgets.map(({ fileName, sizeOptions }, index) => (
        <div key={index.toString()}>
          <Widget fileName={fileName} sizeOptions={sizeOptions} />
          {/* sizing can't be set inside of the child. sizeOptions are only passed as a prop so that the
          widget knows what breakpoints it can ignore */}
        </div>
      ))}
    </ResponsiveGridLayout>
  );
};
/**
 * Take a value and ensure that it is within a min/max range.
 * Too low? Return the min value. Too high, return the max.
 *
 * @param val a number
 * @param min the minimum acceptable value
 * @param max the maximum acceptable value
 * @returns the clamped val
 */
function clamp(val: number, min: number, max: number) {
  return val > max ? max : val < min ? min : val;
}

// const cols = {
//   lg: 12,
//   md: 10,
//   sm: 6,
//   xs: 2,
//   xxs: 0,
// };

// const breakpoints = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 };

// interface WidgetsContainerProps {
//   widgets: WidgetMetadata[];
// }

// const defaultWidth = 1200; // guess the default width. This is just so we don't get weird animations when the layout is first generated. We can try setting it to different values
// const rowHeight = 12;

// enum BreakpointSize {
//   lg = "lg",
//   md = "md",
//   sm = "sm",
//   xs = "xs",
//   xxs = "xxs",
// }

// function generateLayouts(): Layouts {
//   let breakpointLayouts: Layouts = {
//     lg: [],
//     md: [],
//     sm: [],
//     xs: [],
//     xxs: [],
//   };
//   Object.keys(breakpoints).forEach((size, i, bpArr) => {
//     breakpointLayouts[size as BreakpointSize] = getLayouts(
//       size as BreakpointSize
//     );
//   });
//   return breakpointLayouts;
// }

// const calcWidth = (size: BreakpointSize, desktopPreference: number) => {
//   // const gridUnit = containerWidth / cols[size];
//   const scale = cols[size] / cols["lg"]; // scale the desktop preference based on the breakpoint
//   const prefWidth = desktopPreference * scale;
//   return prefWidth;
// };
// const calcHeight = (size: BreakpointSize, desktopPreference: number) => {
//   // const gridUnit = rowHeight
//   const scale = cols[size] / cols["lg"]; // scale the desktop preference based on the breakpoint
//   const prefHeight = desktopPreference * scale;
//   return prefHeight;
// };

// const getLayouts = (size: BreakpointSize): Layout[] => {
//   let layouts = [];
//   for (let i = 0; i < widgets.length; i++) {
//     const prefWidth = widgets[i].preferredSize?.width || cols[size] / 3;
//     const prefHeight = widgets[i].preferredSize?.height || 1;

//     const w = calcWidth(size as BreakpointSize, prefWidth);
//     const h = calcHeight(size as BreakpointSize, prefHeight);
//     const layout = {
//       x: (i * w) % cols[size as BreakpointSize],
//       y: Math.floor(i / 6),
//       w: w,
//       h: h,
//       i: i.toString(),
//     };
//     layouts.push(layout);
//   }
//   return layouts;
// };

export default WidgetsContainer;
