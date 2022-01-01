/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

const defaultHeaderStyles = css({
  height: 80,
  borderBottom: "1px solid #aaa",
  h1: {
    marginTop: 0,
  },
});

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  return (
    <header css={defaultHeaderStyles}>
      <h1>Widgy</h1>
    </header>
  );
};

export default Header;
