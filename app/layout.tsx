import './styles/globals.css';
import MUIProvider from "./MUIProvider";

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
        <html lang="de" suppressHydrationWarning>
        <body>
        <MUIProvider>{children}</MUIProvider>
        </body>
        </html>
    )
}
