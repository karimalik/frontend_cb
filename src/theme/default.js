const theme = {
  backgroundColor: "#f00",
  spacing: 8,

  // COLOR
  palette: {
    primary: {
      light: "#5e92f3",
      main: "#1565c0",
      dark: "#003c8f",
      darkSelected: "#004ba0",
      contrastText: "#ffffff",
    },
    success: { main: "#98c03c" },
    warning: { main: "#fec201" },
    error: {
      main: "#dd0000",
      contrastText: "#ffffff",
    },
    info: { main: "#999999" },
  },

  // TYPO

  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    useNextVariants: true,
    h2: {
      fontWeight: 10,
      fontSize: "40px",
    },
  },

  // SPEC

  overrides: {
    a: {
      color: "#143c58",
      textDecoration: "none",
      fontWeight: "600",
    },
  },
};

export default theme;
