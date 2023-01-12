import { useTime } from 'react-timer-hook'
import React, { FC } from 'react'
import { Box, Text } from '@chakra-ui/react';
import { css } from '@emotion/react';

export const Timer: FC = () => {
    const { seconds, minutes, hours, ampm } = useTime({format: "12-hour"});
    const style_flex = css`
        color: #1f3134
    `
    const style_time = css`
        color: #1f3134;
        font-Weight: bold;
    `
    return (
        <Box position="absolute" left="71%" top="-50%">
            <Text css={style_flex} w="100%" fontSize="2xs">AM 00:00 リセット</Text>
            <Box>
                <Text css={style_time}>
                    {ampm.toUpperCase()} {hours}:{minutes}:{seconds}
                </Text>
            </Box>
        </Box>
    );
}
    