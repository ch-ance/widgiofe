/** @jsxImportSource @emotion/react */
import PageHeader from "@atlaskit/page-header";

import { css } from "@emotion/react";

const defaultHeaderStyles = css({
  borderBottom: "1px solid #aaa",
});

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <header css={defaultHeaderStyles}>
      <PageHeader>{title}</PageHeader>
    </header>
  );
};

export default Header;
