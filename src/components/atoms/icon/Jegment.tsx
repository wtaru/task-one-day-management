import { MinusIcon, StarIcon } from '@chakra-ui/icons';
import React from 'react'

type Props = {
    cheak: boolean;
}

export const Jegment = (props: Props) => {
    const { cheak } = props;   
    return (
        <>
            {(cheak) ? (
                <StarIcon boxSize={4} color="yellow.400"/>
            ) : (
                <MinusIcon color="gray.400"/>
            )}
        </>
    )
}
