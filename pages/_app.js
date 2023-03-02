import "../styles/globals.css";
import { StateContext } from "../context/StateContext";
import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import Loader from "../components/Loader";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setLoading(true);
    });

    router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });

    router.events.on("routeChangeError", () => {
      setLoading(false);
    });
  }, [router]);

  return (
    <>
      {!loading ? (
        <StateContext>
          <Toaster />
          <Component {...pageProps} />
        </StateContext>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default MyApp;
