/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { CSSProperties } from "react";

const DefaultHeaderStyle = css({
  borderBottom: "1px solid #aaa",
  width: "100%",
  margin: 0,
  padding: 0,
  h1: {
    margin: 0,
    padding: 0,
  },
  zIndex: 2,
});

interface HeaderProps {
  styles?: CSSProperties;
}

const Header = (props: HeaderProps) => {
  return (
    <header css={DefaultHeaderStyle} style={props.styles}>
      <h1>Widgy</h1>
    </header>
  );
};

export default Header;
