import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./presentation/components/footer/Footer";
import Header from "./presentation/components/header/Header";
import PoetryList from "./presentation/components/poetries/Poetries";
import LoadingScreen from "./presentation/pages/loading-screen/LoadingScreen";
import ScrollToTopButton from "./presentation/components/scroll-to-top-button/ScrollToTopButton";

function App() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolling(
        document.documentElement.scrollTop >=
          document.documentElement.scrollHeight -
            document.documentElement.clientHeight -
            80
      );
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main>
      <Header />
      <PoetryList />
      <Footer footerClassName={scrolling ? "scrolled" : "not-scrolled"} />
      <ScrollToTopButton />
      <LoadingScreen />
    </main>
  );
}

export default App;
