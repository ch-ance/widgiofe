import { lazy, Suspense, useMemo } from "react";
import WidgetErrorBoundary from "./WidgetErrorBoundary";
import { WidgetMetadata } from "../types";
import WidgetContainer from "./WidgetContainer";

// set some setTimeouts to see the animation phases
const WidgetLoader = (props: WidgetMetadata) => {
  const Component = useMemo(
    () => lazy(() => import(`../${props.fileName}/${props.fileName}`)),
    []
  );

  return (
    <Suspense fallback={<div>loading...</div>}>
      <WidgetErrorBoundary>
        <WidgetContainer>
          <Component />
        </WidgetContainer>
      </WidgetErrorBoundary>
    </Suspense>
  );
};
export default WidgetLoader;
