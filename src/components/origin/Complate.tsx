import { Box, Button, Flex } from "@chakra-ui/react";
import React, { memo } from "react";

type Props = {
    ComplateTodos: string[];
    onClickBack: (i:number) => void;
}

export const Complate = memo((props: Props) => {
    const { ComplateTodos, onClickBack} = props;
    return (
        <Box bg="#fff" h="37vh" borderRadius={10} shadow="outline" pt={2} pl={8}>
            <ul>
                {ComplateTodos.map((todo, i) => (
                    <Flex key={todo} justify="space-between">
                        <li>{todo}</li>
                        <Button bg="gray.400" color="white" mx={1} boxSize={7} fontSize="xs" onClick={() => onClickBack(i)}>削除</Button>    
                    </Flex>
                ))}
            </ul>
        </Box>
    );
});