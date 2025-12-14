/* eslint-disable prettier/prettier */
import React from "react";
import { Tabs } from "expo-router";
import { Clock, BarChart2, Settings, User } from "lucide-react-native";
import { useTheme } from "../../context/ThemeContext";

export default function TabLayout() {
    const { theme } = useTheme();

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.primary,
                tabBarInactiveTintColor: theme.textTertiary,
                tabBarStyle: {
                    backgroundColor: theme.tabBar,
                    borderTopWidth: 1,
                    borderTopColor: theme.tabBarBorder,
                    height: 70,
                    paddingBottom: 10,
                    paddingTop: 10,
                    elevation: 0,
                    shadowOpacity: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 11,
                    fontWeight: "600",
                    marginTop: 4,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Timers",
                    tabBarIcon: ({ color, size }) => <Clock color={color} size={size} />,
                }}
            />
            <Tabs.Screen
                name="stats"
                options={{
                    title: "History",
                    tabBarIcon: ({ color, size }) => <BarChart2 color={color} size={size} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: "Settings",
                    tabBarIcon: ({ color, size }) => <Settings color={color} size={size} />,
                }}
            />
        </Tabs>
    );
}