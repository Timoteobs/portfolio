import { useState, useEffect } from "react";
import { Button, Icon } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      setShowButton(scrollPercentage >= 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      onClick={handleScrollToTop}
      pos="fixed"
      bottom={4}
      right={4}
      size="lg"
      bg="#000"
      borderRadius="full"
      opacity={showButton ? 1 : 0}
      transition="opacity 0.3s"
      zIndex={showButton ? "overlay" : -1}
    >
      <Icon as={FaArrowUp} color="#fff" />
    </Button>
  );
};

export default ScrollToTopButton;
