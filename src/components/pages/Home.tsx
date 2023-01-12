import { Box, Button, Flex, Input, Stack, Text } from "@chakra-ui/react";
import React, { ChangeEvent, FC, memo, useCallback, useState } from "react";
import { Timer } from "../molecule/time/Timer";
import { Complate } from "../origin/Complate";
import { UnComplate } from "../origin/UnComplate";

export const Home: FC = memo(() => {
  const [value, setValue] = useState("");
  const [unComplateTodos, setUnComplateTodos] = useState<string[]>([]);
  const [complateTodos, setComplateTodos] = useState<string[]>([]);

  // text
  const onChageValue = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  // add
  const onClickAdd = () => {
    if (value === "") return;
    const newTodos = [...unComplateTodos, value];
    setUnComplateTodos(newTodos);
    setValue("");
  }

  // complate
  const onClickComplete = (i: number) => {
    const newUnComplateTodos = [...unComplateTodos];
    newUnComplateTodos.splice(i, 1);
    setUnComplateTodos(newUnComplateTodos);  

    const newComplateTodos = [...complateTodos, unComplateTodos[i]];
    setComplateTodos(newComplateTodos);
  }

  // complate delete
  const onClickDelete = (i: number) => {
    const newUnComplateTodos = [...unComplateTodos];
    newUnComplateTodos.splice(i, 1);
    setUnComplateTodos(newUnComplateTodos);
  }

  // back
  const onClickBack = (i:number) => {
    const newComplateTodos = [...complateTodos];
    newComplateTodos.splice(i, 1);
    setComplateTodos(newComplateTodos);

    const newUnComplateTodos = [...unComplateTodos, complateTodos[i]];
    setUnComplateTodos(newUnComplateTodos);
  }

  return (
    <Box h="100vh" w="100%">
      <Flex p={3}>
        <Input bg="white" placeholder="ここにタスクを入力" onChange={onChageValue} value={value}/>
        <Button
          bg="teal.400"
          color="gray.100"
          ml={2}
          _hover={{ bg: "teal.200" }}
          onClick={onClickAdd}
        >
          追加
        </Button>
      </Flex>
      <Stack p={3} spacing={5}>
        <Box>
          <Flex justify="space-between" position="relative">
            <Text fontWeight="bold" mb={1} color="teal.400">残りを頑張ろう</Text>
            <Timer/>
          </Flex>
          <UnComplate unComplateTodos={unComplateTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />
        </Box> 
        <Box>
          <Text fontWeight="bold" mb={1} color="teal.600">終わったもの</Text>
          <Complate ComplateTodos={complateTodos} onClickBack={onClickBack}/>
        </Box>
      </Stack>
    </Box>
  );
});
