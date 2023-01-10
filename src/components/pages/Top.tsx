import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import React, { FC, memo } from "react";
import { useNavigate } from "react-router-dom";
import "@fontsource/sawarabi-gothic/400.css";

const TopImage = require("../../images/top/top.png");

export const Top: FC = memo(() => {
  const navigate = useNavigate();

  const onClickGoHome = () => {
    navigate("/home");
  };

  return (
    <Container maxW="md" bg="teal.400" h="100vh">
      <Box p={4} mb={1}>
        <Heading
          fontSize="4xl"
          color="white"
          textShadow="1px 2px #808080"
          textAlign="center"
        >
          Let's Todo today
        </Heading>
      </Box>
        <Box
          as="div"
          onClick={onClickGoHome}
          bg="white"
          w="100%"
          p={4}
          shadow="2xl"
          borderRadius="3xl"
          _hover={{ cursor: "pointer" }}
        >
          <Image
            src={TopImage}
            alt="干支画像"
            boxSize={200}
            w="260px"
            display="block"
            m="auto"
          />
        </Box>
        <Box bg="teal.300" p={4} my={10} borderRadius={20} shadow="md">
          <Text textAlign="center" color="yellow.300" fontSize="22px" fontWeight="bold">
            失敗してもいいじゃない。<br/>
            それでも何とかなるものよ。<br/>
          </Text>
          <Text fontSize="16px" my="1" color="gray.100" textAlign="center"> 
            ~ It's okay to fail. Still manageable. ~
          </Text>
          <Box mt={10}>
            <Text fontSize="16px" color="gray.200" textAlign="left" mb={2}> 
              このアプリを開くと今日、思い出した<br/>Todoを保管する事ができます。<br/>
              今やる気が出なくても心配しない！<br/>
            </Text>
          </Box>
        </Box>
      
    </Container>
  );
});
