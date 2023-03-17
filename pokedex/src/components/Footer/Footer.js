import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

export function Footer() {
  return (
    <Box
      bg={useColorModeValue("#0f1012")}
      color={useColorModeValue("white", "white")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack direction={"row"} spacing={6}>
          <Link href={"https://github.com/DevLucasTavares"} target={"_blank"}>
            GitHub
          </Link>
          <Link
            href={"https://www.linkedin.com/in/-lucas-tavares/"}
            target={"_blank"}
          >
            LinkedIn
          </Link>
          <Link href={"https://t.me/DevLucasTavares"} target={"_blank"}>
            Telegram
          </Link>
          <Link
            href={"https://api.whatsapp.com/send?phone=5521981894373"}
            target={"_blank"}
          >
            WhatsApp
          </Link>
        </Stack>

        <Stack direction={"row"} spacing={6}>
          <Text>Made using <Link href={"https://pokeapi.co/"} target={"_blank"}>PokéAPI</Link></Text>
          <Text>© 2023 Lucas Tavares. All rights reserved</Text>
        </Stack>
      </Container>
    </Box>
  );
}
