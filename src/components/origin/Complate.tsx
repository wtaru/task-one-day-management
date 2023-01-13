import { Box, Button,  ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React, { memo } from "react";

type Props = {
    ComplateTodos: string[];
    onClickBack: (i:number) => void;
}

export const Complate = memo((props: Props) => {
    const { ComplateTodos, onClickBack} = props;
    return (
        <Box bg="#fff" h="37vh" borderRadius={10} shadow="outline" pl={1}>
            <UnorderedList ml={1} py={2}>
            {ComplateTodos.map((todo, i) => (
                <ListItem w="100%" display="flex" >
                    <Text w="100%" my={0.5}>●  {todo}</Text>
                    <Box w="100%" display="flex" justifyContent="right" alignItems="center" mr={1} my={0.5}>
                        <Button
                        borderRadius="full"
                        bg="gray.400"
                        color="white"
                        boxSize={6}
                        fontSize="xs"
                        onClick={() => onClickBack(i)}
                        >
                        戻す
                        </Button>
                    </Box>
                </ListItem>
            ))}
        </UnorderedList>
        </Box>
    );
});