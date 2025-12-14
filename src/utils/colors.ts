/* eslint-disable prettier/prettier */
export const colors = {
    light: {
        // Backgrounds
        background: "#F8FAFC",
        surface: "#FFFFFF",
        surfaceSecondary: "#F1F5F9",

        // Text
        textPrimary: "#0F172A",
        textSecondary: "#64748B",
        textTertiary: "#94A3B8",

        // Accents
        primary: "#6366F1",
        primaryLight: "#EEF2FF",
        success: "#10B981",
        successLight: "#D1FAE5",
        warning: "#F59E0B",
        warningLight: "#FEF3C7",
        danger: "#EF4444",
        dangerLight: "#FEE2E2",

        // Borders
        border: "#E2E8F0",
        borderLight: "#F1F5F9",

        // Tab Bar
        tabBar: "#FFFFFF",
        tabBarBorder: "#E2E8F0",
    },
    dark: {
        // Backgrounds
        background: "#0F172A",
        surface: "#1E293B",
        surfaceSecondary: "#334155",

        // Text
        textPrimary: "#F8FAFC",
        textSecondary: "#94A3B8",
        textTertiary: "#64748B",

        // Accents
        primary: "#818CF8",
        primaryLight: "#312E81",
        success: "#34D399",
        successLight: "#064E3B",
        warning: "#FBBF24",
        warningLight: "#78350F",
        danger: "#F87171",
        dangerLight: "#7F1D1D",

        // Borders
        border: "#334155",
        borderLight: "#475569",

        // Tab Bar
        tabBar: "#1E293B",
        tabBarBorder: "#334155",
    },
};

export type ThemeColors = typeof colors.light;
