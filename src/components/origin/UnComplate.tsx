import { Box, Button, Flex, Stack } from "@chakra-ui/react";
import React, { memo } from "react";

type Props = {
    unComplateTodos: string[];
    onClickComplete: (i:number) => void;
    onClickDelete: (i:number) => void;
}

export const UnComplate = memo((props: Props) => {
    const { unComplateTodos, onClickComplete, onClickDelete} = props;
    return (
        <Box bg="#fff" h="37vh" borderRadius={10} shadow="outline" pt={2} pl={8}>
            <ul>
                {unComplateTodos.map((todo, i) => (
                    <Flex key={todo} justify="space-between">
                        <li>{todo}</li>
                        <Box>
                            <Button bg="teal.400" color="white" mx={1} boxSize={7} fontSize="xs" onClick={() => onClickComplete(i)}>完了</Button>
                            {/* 関数に引数を渡したい場合はアロー関数で渡す */}
                            <Button bg="red.500" color="white" mx={1} boxSize={7} fontSize="xs" onClick={() => onClickDelete(i)}>削除</Button>
                            
                        </Box>
                    </Flex>
                ))}
            </ul>
        </Box>
    );
});