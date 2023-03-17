import React, { useState } from "react";
import { Box, Text } from "@chakra-ui/react";

const useOverlayMessage = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleButtonClick = () => {
    setShowOverlay(true);
    setTimeout(() => setShowOverlay(false), 2000);
  };

  const OverlayMessage = () =>
    showOverlay ? (
      <Box
        position="fixed"
        top="0"
        left="0"
        width="100vw"
        height="100vh"
        backgroundColor="rgba(0, 0, 0, 0.5)"
        zIndex="9999"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          backgroundColor="white"
          padding="1rem"
          borderRadius="md"
          boxShadow="md"
        >
          <Text fontSize="lg">Message here</Text>
        </Box>
      </Box>
    ) : null;

  return { OverlayMessage, handleButtonClick };
};

export default useOverlayMessage;