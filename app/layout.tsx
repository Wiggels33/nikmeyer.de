import './styles/globals.css';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';

export const metadata = {
    title      : 'Meine Next.js Website',
    description: 'Eine tolle Next.js Website mit MUI',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="de">
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <body>{children}</body>
        </ThemeProvider>
        </html>
    )
}
