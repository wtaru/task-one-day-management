import { Box, Button, Flex, Input, Stack, Text } from "@chakra-ui/react";
import React, { ChangeEvent, FC, memo, useCallback, useState } from "react";

export const Home: FC = memo(() => {
  const [value, setValue] = useState("");
  const onChageValue = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  return (
    <Box h="100vh" w="100%">
      <Flex p={3}>
        <Input bg="white" placeholder="ここにタスクを入力" onChange={onChageValue} value={value}/>
        <Button
          bg="teal.400"
          color="gray.100"
          ml={2}
          _hover={{ bg: "teal.200" }}
        >
          送信
        </Button>
      </Flex>
      <Stack p={3} spacing={5}>
        <Box>
          <Text fontWeight="bold" mb={1} color="teal.400">残りを頑張ろう</Text>
          <Box bg="#fff" h="37vh" borderRadius={10} shadow="outline"></Box>
        </Box> 
        <Box>
          <Text fontWeight="bold" mb={1} color="teal.600">終わったもの</Text>
          <Box bg="#fff" h="37vh" borderRadius={10} shadow="outline"
          ></Box>
        </Box>
        
      </Stack>
    </Box>
  );
});
