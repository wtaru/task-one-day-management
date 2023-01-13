import {
  Box,
  Button,
  Flex,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Text,
  Link,
} from "@chakra-ui/react";
import React, { memo } from "react";

type Props = {
  unComplateTodos: string[];
  onClickComplete: (i: number) => void;
  onClickDelete: (i: number) => void;
};

export const UnComplate = memo((props: Props) => {
    const { unComplateTodos, onClickComplete, onClickDelete } = props;
    return (
        <Box bg="#fff" h="37vh" borderRadius={10} shadow="outline" pt={0.2} pl={1}>
        <UnorderedList ml={1} py={2}>
            {unComplateTodos.map((todo, i) => (
                <ListItem w="100%" display="flex" >
                    <Text w="100%" my={0.5}><Link>●  {todo}</Link></Text>
                    <Box w="100%" display="flex" justifyContent="right" alignItems="center" mr={1} my={0.5}>
                        <Button
                        borderRadius="full"
                        bg="teal.400"
                        color="white"
                        boxSize={6}
                        fontSize="xs"
                        onClick={() => onClickComplete(i)}
                        >
                        完了
                        </Button>
                        <Button
                        p={0}
                        borderRadius="full"
                        bg="red.500"
                        color="white"
                        mx={1}
                        boxSize={6}
                        fontSize="xs"
                        onClick={() => onClickDelete(i)}
                        >
                        ☒
                        </Button>
                    </Box>
                </ListItem>
            ))}
        </UnorderedList>
        </Box>
    );
});
