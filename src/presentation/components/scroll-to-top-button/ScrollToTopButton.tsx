import { useScrollToTop } from "./useScrollToTop";
import { FaArrowUp } from "react-icons/fa";
import "./scroll-to-top.css";

const ScrollToTopButton = () => {
  const { isVisible, scrollToTop } = useScrollToTop();

  const buttonStyle = {
    display: isVisible ? "block" : "none",
    transform: isVisible ? "scale(1)" : "scale(0)",
  };

  return (
    <>
      <button
        className="scroll-to-top-button visible"
        style={buttonStyle}
        onClick={scrollToTop}
      >
        <FaArrowUp className="scroll-to-top-icon" />
      </button>
    </>
  );
};

export default ScrollToTopButton;
