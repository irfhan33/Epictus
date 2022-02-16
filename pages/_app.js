import "../styles/globals.css";
import App from "next/app";

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  const reqCategory = await fetch(
    process.env.NEXT_PUBLIC_APIURL + "/categories"
  );
  const resCategory = await reqCategory.json();

  return {
    ...appProps,
    categories: resCategory.data,
  };
};

function MyApp({ Component, pageProps, categories }) {
  return <Component {...pageProps} categories={categories} />;
}

export default MyApp;
