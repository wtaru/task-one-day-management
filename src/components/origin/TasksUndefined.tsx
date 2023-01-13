import { Flex, Text } from "@chakra-ui/react";
import React, { memo } from "react";

export const TasksUndefined = memo(() => {
    return (
        <Flex bg="#fff" h="37vh" borderRadius={10} shadow="outline" >
            <Text fontSize="20px" fontWeight="bold" color="gray.300" m="auto">タスクはありません</Text>
        </Flex>
    );
});