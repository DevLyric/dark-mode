import { ReactNode } from "react";
import { useTheme } from "../contexts/ThemeContext";

const Container = ({ children }: { children: ReactNode }) => {
    const themeCtx = useTheme();

    return (
        <div
            className={`w-full h-screen flex items-center justify-center
            ${
                themeCtx?.theme === "dark"
                    ? "bg-black text-white"
                    : "bg-white text-black"
            }
            `}
        >
            <div className="flex flex-col gap-5 text-center">
                Theme: {themeCtx?.theme}
                {children}
            </div>
        </div>
    );
};

export default Container;
