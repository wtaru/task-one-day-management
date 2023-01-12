import {
  Box,
  Container,
  Heading,
  Image,
  Text,
  AspectRatio,
} from "@chakra-ui/react";
import React, { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "@fontsource/sawarabi-gothic/400.css";

const TopImage = require("../../images/top/cute-bunny-gif-6-min.gif");

export const Top: FC = memo(() => {
  const navigate = useNavigate();

  const onClickGoHome = useCallback(() => navigate("/home"),[navigate]);

  return (
    <Container maxW="md" bg="teal.400" h="100vh" m="auto">
      <Heading
        fontSize="4xl"
        color="white"
        textShadow="1px 2px #808080"
        textAlign="center"
        p={4}
        mb={1}
      >
        Let's Todo today
      </Heading>
      <Box
        as="div"
        w="260px"
        onClick={onClickGoHome}
        bg="white"
        p={4}
        shadow="0 6px 1px 2px #333631"
        borderRadius="full"
        _hover={{ cursor: "pointer" }}
        m="auto"
      >
        <Image
          src={TopImage}
          alt="干支画像"
          display="block"
          m="auto"
          borderRadius="full"
        />
      </Box>
      <Box bg="teal.300" p={4} my={10} mx="auto" borderRadius={10} w="310px" shadow="sm">
        <Text
          textAlign="center"
          color="yellow.200"
          fontSize="22px"
          fontWeight="bold"
        >
          失敗してもいいじゃない
          <br />
          何とかなるものよ
          <br />
        </Text>
        <Text fontSize="16px" my="1" color="gray.100" textAlign="left">
          ~ It's okay to fail. Still manageable. ~
        </Text>
        <Box mt={7} py={2}>
          <Text fontSize="16px" color="gray.200" textAlign="left">
            When you open the app, today's
            You can store your Todo.
            <br />
            今やる気が出なくても心配しない！
            <br />
          </Text>
        </Box>
      </Box>
    </Container>
  );
});
