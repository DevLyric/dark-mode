import Container from "./components/Container";
import ThemeSwitch from "./components/ThemeSwitch";
import { ThemeProvider } from "./contexts/ThemeContext";

const page = () => {
    return (
        <ThemeProvider>
            <Container>
                <ThemeSwitch />
            </Container>
        </ThemeProvider>
    );
};

export default page;
