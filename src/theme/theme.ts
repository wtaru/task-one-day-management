import { extendTheme } from "@chakra-ui/react";

// chakra-uiのグローバル適応
const Theme = extendTheme({
    styles: {
        global: {
            body: {
                backgroundColor: "teal.400",
                color: "gray.800"
            },
        },
        fonts: {
            heading: `"Sawarabi Gothic", sans-serif;`,
            body: `"Sawarabi Gothic", sans-serif;`,
        }
    }
});

export default Theme;