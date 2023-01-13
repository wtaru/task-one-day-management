import { useTime } from 'react-timer-hook'
import React, { FC } from 'react'
import { Box, Text } from '@chakra-ui/react';
import { css } from '@emotion/react';

export const Timer: FC = () => {
    const { seconds, minutes, hours, ampm } = useTime({format: "12-hour"});
    const style_time = css`
        color: #1f3134;
        font-Weight: bold;
    `
    return (
        <Box position="absolute" left="71%" top="-50%">
            <Box>
                <Text css={style_time}>
                    <Text color="gray.500" fontSize="5px" >AM 00:00 リセット</Text>{ampm.toUpperCase()} {hours}:{minutes}:{seconds}
                </Text>
            </Box>
        </Box>
    );
}
    