import { useTheme } from "../contexts/ThemeContext";

const ThemeSwitch = () => {
    const themeCtx = useTheme();

    const handleThemeToggle = () => {
        if (themeCtx) {
            themeCtx.setTheme(themeCtx.theme === "dark" ? "light" : "dark");
        }
    };

    return (
        <button
            className={`border px-3 py-2 rounded-md
            ${
                themeCtx?.theme === "dark"
                    ? "bg-white text-black"
                    : "bg-black text-white"
            }
        `}
            onClick={handleThemeToggle}
        >
            Toggle Theme
        </button>
    );
};

export default ThemeSwitch;
