/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Footer from "../components/atoms/Footer";
import LoginForm from "../components/organisms/LoginForm";
import Header from "../components/molecules/Header";
import { colors } from "../theme/constants";

const PageStyle = css({
  backgroundColor: colors["eerie-black"],
  color: colors.text,
  height: "100vh",
  maxHeight: "100vh",
});

const AuthPage = () => {
  return (
    <div css={PageStyle}>
      <Header />
      <main>
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
};

export default AuthPage;
