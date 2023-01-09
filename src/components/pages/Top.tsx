import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import React, { FC, memo } from "react";
import { useNavigate } from "react-router-dom";

const TopImage = require("../../images/top/top.png");

export const Top: FC = memo(() => {
  const navigate = useNavigate();

  const onClickGoHome = () => {
    navigate("/home");
  };

  return (
    <Container>
      <Heading
        ml={3}
        mt={4}
        fontSize="2xl"
        color="white"
        textShadow="1px 2px #808080"
      >
        本日の思い付き
      </Heading>
      <Box h={"100vh"}>
        <Box as="div" onClick={onClickGoHome} w="100%" mt={3}>
          <Image
            src={TopImage}
            alt="干支画像"
            boxSize={320}
            mx="auto"
            borderRadius={20}
            shadow="1px 0 #808080"
            _hover={{ cursor: "pointer" }}
          />
        </Box>
        <Text h="100vh" textAlign="left" color="gray.100">
          Apparently we had reached a great height in the atmosphere, for the
          sky was a dead black, and the stars had ceased to twinkle. By the same
          illusion which lifts the horizon of the sea to the level of the
          spectator on a hillside, the sable cloud beneath was dished out, and
          the car seemed to float in the middle of an immense dark sphere, whose
          upper half was strewn with silver. Looking down into the dark gulf
          below, I could see a ruddy light streaming through a rift in the
          clouds.
        </Text>
        {/* <Box as="div">
          <Text as="p">sa</Text>
        </Box>  */}
      </Box>
    </Container>
  );
});
