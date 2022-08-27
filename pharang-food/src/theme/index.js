import { CssBaseline } from "@mui/material";
import {
  alpha,
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";

const PRIMARY = {
  // lighter: "#f69113",
  light: "#e3f2fd",
  main: "#90caf9",
  dark: "#42a5f5",
  // darker: "#f69113",
  // contrastText: "#FFF",
};

const SECONDARY = {
  // lighter: "#D6E4FF",
  light: "#f3e5f5",
  main: "#ce93d8",
  dark: "#ab47bc",
  // darker: "#091A7A",
  // contrastText: "#FFF",
};

const SUCCESS = {
  // lighter: "#E9FCD4",
  light: "#81c784",
  main: "#66bb6a",
  dark: "#388e3c",
  // darker: "#08660D",
  // contrastText: "#FFF",
};
const ERROR = {
  // lighter: "#E9FCD4",
  light: "#e57373",
  main: "#f44336",
  dark: "#d32f2f",
  // darker: "#08660D",
  // contrastText: "#FFF",
};
const WARNING = {
  // lighter: "#E9FCD4",
  light: "#ffb74d",
  main: "#ffa726",
  dark: "#f57c00",
  // darker: "#08660D",
  // contrastText: "#FFF",
};
const INFO = {
  // lighter: "#E9FCD4",
  light: "#4fc3f7",
  main: "#29b6f6",
  dark: "#0288d1",
  // darker: "#08660D",
  // contrastText: "#FFF",
};


const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
  500_8: alpha("#919EAB", 0.08),
  500_12: alpha("#919EAB", 0.12),
  500_16: alpha("#919EAB", 0.16),
  500_24: alpha("#919EAB", 0.24),
  500_32: alpha("#919EAB", 0.32),
  500_48: alpha("#919EAB", 0.48),
  500_56: alpha("#919EAB", 0.56),
  500_80: alpha("#919EAB", 0.8),
};

function ThemeProvider({ children }) {
  const themeOptions = {
    palette: {
      primary: PRIMARY,
      secondary: SECONDARY,
      success: SUCCESS,
      error: ERROR,
      warning: WARNING,
      info: INFO,
      text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
      background: { paper: "#fff", default: "#fff", neutral: GREY[200] },
      action: {
        active: GREY[600],
        hover: GREY[500_8],
        selected: GREY[500_16],
        disabled: GREY[500_80],
        disabledBackground: GREY[500_24],
        focus: GREY[500_24],
        hoverOpacity: 0.08,
        disabledOpacity: 0.48,
      },
    },
    shape: { borderRadius: 0 },
  };

  const theme = createTheme(themeOptions);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

export default ThemeProvider;
