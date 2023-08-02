import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { useEffect, useState } from 'react';
import FirebaseProvider from "../lib/authContext";
import "../lib/firebaseConfig/init";
import "../styles/global.css"
import LoadingScreen from "../components/loadScreen";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <FirebaseProvider>
      <Layout>
        {isLoading && <LoadingScreen />}
        <div className={`transition-opacity ease-in-out duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          <Component {...pageProps} />
        </div>
      </Layout>
    </FirebaseProvider>
  );
}

export default MyApp;
