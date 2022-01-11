import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";

const AuthPage = () => {
  return (
    <div>
      <Header />
      <main>
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
};

export default AuthPage;
