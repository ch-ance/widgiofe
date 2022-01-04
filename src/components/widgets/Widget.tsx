/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { lazy, Suspense, useMemo } from "react";
import WidgetErrorBoundary from "./WidgetErrorBoundary";
import { WidgetMetadata } from "../types";

const WidgetStyle = css({
  width: "100%",
  height: "100%",
  borderWidth: 1,
  borderStyle: "solid",
  borderRadius: 5,
});

const Widget = (props: WidgetMetadata) => {
  const Component = useMemo(
    () => lazy(() => import(`../widgets/${props.fileName}/${props.fileName}`)),
    []
  );

  return (
    <article css={WidgetStyle}>
      <Suspense fallback={<div>loading...</div>}>
        <WidgetErrorBoundary>
          <Component />
        </WidgetErrorBoundary>
      </Suspense>
    </article>
  );
};

export default Widget;
