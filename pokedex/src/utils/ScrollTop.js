import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { IconButton } from "@chakra-ui/react";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <IconButton
      aria-label="Scroll to top"
      icon={<FaArrowUp />}
      onClick={scrollToTop}
      position="fixed"
      top="20px"
      right="20px"
      bg={isVisible ? "#33A4F5" : "gray.300"}
      _hover={{
        bg: isVisible ? "#2e93db" : "gray.400"
      }}
      color="white"
      borderRadius="full"
      size="md"
      opacity={isVisible ? "1" : "0"}
      transition="opacity 0.3s ease-in-out"
    />
  );
};

export default ScrollTop;
