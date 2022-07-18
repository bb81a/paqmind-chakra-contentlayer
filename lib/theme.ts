import {extendTheme} from "@chakra-ui/react"

export const theme = extendTheme({
  fonts: {
    heading: `'Source Serif Pro', serif`,
    body: `'Source Sans Pro', sans-serif`,
    mono: `'Source Code Pro', monospace`,
  },

  components: {
    Blockquote: {
      baseStyle: {
        backgroundColor: "#F8F0F0",
        borderRadius: "4px",
        fontFamily: "heading",
        fontSize: "lg",
        fontStyle: "italic",
        padding: "1rem",
        position: "relative",
        _before: {
          content: "'“'",
          position: "absolute",
          left: "-1.25rem",
          top: "-0.75rem",
          fontSize: "2.5rem",
          color: "#f2e4e4",
          fontStyle: "normal",
        },
      },
    },

    Link: {
      baseStyle: {
        textDecoration: "none",
        _hover: {
          textDecoration: "underline",
        },
      },

      variants: {
        default: ({}) => ({
          color: `blue.500`,
        }),

        text: ({}) => ({}),
      },

      defaultProps: {
        variant: "default",
      },
    },

    // https://github.com/chakra-ui/chakra-ui/discussions/6323
    // List: {
    //   baseStyle: {
    //     item: {
    //       listStyle: "none",
    //       color: "red",
    //       _before: {
    //         fontSize: "1em",
    //         verticalAlign: "center",
    //         content: '"•"',
    //         display: "inline-block",
    //         width: "0.75em",
    //       }
    //     }
    //   }
    // },

     // "& ul": {
     //    listStyle: "none",
     //    ...List.baseStyle.container,
     //  },
     //  "& ul li::before": {
     //    fontSize: "1em",
     //    verticalAlign: "center",
     //    content: '"•"',
     //    display: "inline-block",
     //    width: "0.75em",
     //  },

    // https://type-scale.com/ 1.25 => "Major Third" scale
    Heading: {
      baseStyle: {
        fontWeight: "semibold",
        lineHeight: "1.2em",
        // _after: {
          // content: "''",
          // marginBottom: "-.2em",
          // display: "table",
        // },
      },
      sizes: {
        "4xl": {
          fontSize: "76.29px", // 16 * 1.25 ^ 7
        },
        "3xl": {
          fontSize: "61.04px", // 16 * 1.25 ^ 6
        },
        "2xl": {
          fontSize: "48.83px", // 16 * 1.25 ^ 5
        },
        "xl": {
          fontSize: "39.06px", // 16 * 1.25 ^ 4
        },
        "lg": {
          fontSize: "31.25px", // 16 * 1.25 ^ 3 | h1
        },
        "md": {
          fontSize: "25px", // 16 * 1.25 ^ 2 | h2
        },
        "sm": {
          fontSize: "20px", // 16 * 1.25 ^ 1 | h3
        },
        "xs": {
          fontSize: "16px", // 16 * 1.25 ^ 0 | h4 – p size, but bold & serif
        },
      }
    },
  },
})
