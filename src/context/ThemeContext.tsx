import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { colors, ThemeColors } from "../utils/colors";

type ThemeMode = "light" | "dark";

interface ThemeContextType {
    mode: ThemeMode;
    theme: ThemeColors;
    toggleTheme: () => void;
    isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = "@app_theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [mode, setMode] = useState<ThemeMode>("light");

    // Load saved theme on startup
    useEffect(() => {
        (async () => {
            try {
                const saved = await AsyncStorage.getItem(STORAGE_KEY);
                if (saved === "dark" || saved === "light") {
                    setMode(saved);
                }
            } catch (e) {
                console.error("Failed to load theme", e);
            }
        })();
    }, []);

    // Save theme when it changes
    useEffect(() => {
        AsyncStorage.setItem(STORAGE_KEY, mode);
    }, [mode]);

    const toggleTheme = () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
    };

    const value: ThemeContextType = {
        mode,
        theme: colors[mode],
        toggleTheme,
        isDark: mode === "dark",
    };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}