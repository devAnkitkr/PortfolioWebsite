import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="bg-primary"> {children}</main>
      <Footer />
    </>
  );
};

export default Layout;
