import { Box, Button, Flex, Input, Stack, Text } from "@chakra-ui/react";
import React, { ChangeEvent, FC, memo, useState } from "react";
import { Timer } from "../molecule/time/Timer";
import { Complate } from "../origin/Complate";
import { UnComplate } from "../origin/UnComplate";
import { TasksUndefined } from "../origin/TasksUndefined";

export const Home: FC = memo(() => {
  const [value, setValue] = useState("");
  const [unComplateTodos, setUnComplateTodos] = useState<string[]>([]);
  const [complateTodos, setComplateTodos] = useState<string[]>([]);
  const [cheak, setCheak] = useState<boolean[]>([]);

  // text
  const onChageValue = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  // add
  const onClickAdd = () => {
    if (value === "") return;
    const newTodos = [...unComplateTodos, value];
    setUnComplateTodos(newTodos);
    const newCheak = newTodos.map(t => false);
    setCheak(newCheak);
    setValue("");
  }

  // complate
  const onClickComplete = (i: number) => {
    const newUnComplateTodos = [...unComplateTodos];
    const newCheak = [...cheak];
    newUnComplateTodos.splice(i, 1);
    newCheak.splice(i, 1);

    setUnComplateTodos(newUnComplateTodos);  
    setCheak(newCheak);

    const newComplateTodos = [...complateTodos, unComplateTodos[i]];
    setComplateTodos(newComplateTodos);
  }

  // complate delete
  const onClickDelete = (i: number) => {
    const newUnComplateTodos = [...unComplateTodos];
    const newCheak = [...cheak];
    newUnComplateTodos.splice(i, 1);
    newCheak.splice(i, 1);

    setUnComplateTodos(newUnComplateTodos);
    setCheak(newCheak);
  }

  // back
  const onClickBack = (i:number) => {
    const newComplateTodos = [...complateTodos];
    newComplateTodos.splice(i, 1);
    setComplateTodos(newComplateTodos);

    const newUnComplateTodos = [...unComplateTodos, complateTodos[i]];
    setUnComplateTodos(newUnComplateTodos);
  }

  // cheak
  const onClickCheak = (i: number) => {
    const newcheak = [...cheak];
    const changeCheak = (cheak[i]) ? false : true;
    newcheak.splice(i, 1, changeCheak);
    setCheak(newcheak);
  }

  const newUnComplateTodos = unComplateTodos;

  return (
    <Box h="100vh" w="100%" pt={2}>
      <Stack p={3} spacing={5}>
        <Box>
          <Flex justify="space-between" position="relative">
            <Text fontWeight="bold" mb={1} color="teal.400">?????????????????????</Text>
            <Timer/>
          </Flex>
          {(newUnComplateTodos.length !== 0) ? (
            <UnComplate cheak={cheak} onClickCheak={onClickCheak} unComplateTodos={unComplateTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />
          ) : (
            <TasksUndefined/>
          )}
        </Box> 
        <Box>
          <Text fontWeight="bold" mb={1} color="teal.600">?????????????????????</Text>
          <Complate ComplateTodos={complateTodos} onClickBack={onClickBack}/>
        </Box>
      </Stack>
      <Flex py={2} px={3}>
        <Input bg="white" placeholder="???????????????????????????" onChange={onChageValue} value={value}/>
        <Button
          bg="teal.400"
          color="gray.100"
          ml={2}
          _hover={{ bg: "teal.200" }}
          onClick={onClickAdd}
        >
          ??????
        </Button>
      </Flex>
    </Box>
  );
});
