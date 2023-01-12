import { Box } from "@chakra-ui/react";
import React, { memo } from "react";

type Props = {
    unComplateTodos: string[];
    onClickComplete: (i:number) => void;
    onClickDelete: (i:number) => void;
}

export const UnComplate = memo((props: Props) => {
    const { unComplateTodos, onClickComplete, onClickDelete} = props;
    return (
        <Box bg="#fff" h="37vh" borderRadius={10} shadow="outline">
            <ul>
                {unComplateTodos.map((todo, i) => (
                    <div key={todo} className="list-row">
                        <li>{todo}</li>
                        <button onClick={() => onClickComplete(i)}>完了</button>
                        {/* 関数に引数を渡したい場合はアロー関数で渡す */}
                        <button onClick={() => onClickDelete(i)}>削除</button>
                    </div>
                ))}
            </ul>
        </Box>
    );
});