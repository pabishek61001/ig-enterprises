// theme.jsx
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#084b82',  // You can customize this color (deep blue)
        },
        secondary: {
            main: '#2a73ae', // lighter teal-ish blue, harmonious with deep blue
        }

    },
    shape: {
        borderRadius: 3,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none', // Disable uppercase
                    borderRadius: '10px !important',
                },
            },
        },
        MuiTextField: {
            defaultProps: {
                variant: 'outlined', // optional, choose variant globally
            },
            styleOverrides: {
                root: {
                    borderRadius: 3, // Though TextField borderRadius mostly controlled via InputBase
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 3,
                    },
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: 3,
                },
            },
        },
    },
});

export default theme;
