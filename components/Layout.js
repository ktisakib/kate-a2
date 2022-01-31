import Head from "next/head";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

const Layout = ({ children }) => {
  return (
    <div className=''>
      <Head>
        <title>Kate</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className="mx-auto   max-w-screen-xl">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
