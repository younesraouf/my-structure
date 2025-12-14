/* eslint-disable prettier/prettier */
import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Switch,
    ScrollView,
    Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    Moon,
    Bell,
    Trash2,
    Info,
    ChevronRight,
    Sun,
} from "lucide-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from "../../context/ThemeContext";

export default function SettingsScreen() {
    const { theme, isDark, toggleTheme } = useTheme();

    const handleClearData = () => {
        Alert.alert(
            "Clear All Data",
            "This will delete all your timers. This action cannot be undone.",
            [
                { text: "Cancel", style: "cancel" },
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: async () => {
                        await AsyncStorage.removeItem("@my_app_timers");
                        Alert.alert(
                            "Done",
                            "All timers have been deleted. Restart the app to see changes.",
                        );
                    },
                },
            ],
        );
    };

    return (
        <SafeAreaView
            style={{ backgroundColor: theme.background }}
            className="flex-1"
        >
            <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View className="pt-4 pb-6">
                    <Text
                        style={{ color: theme.textTertiary }}
                        className="text-sm font-medium mb-1"
                    >
                        Customize
                    </Text>
                    <Text
                        style={{ color: theme.textPrimary }}
                        className="text-3xl font-black"
                    >
                        Settings
                    </Text>
                </View>

                {/* Appearance Section */}
                <Text
                    style={{ color: theme.textTertiary }}
                    className="text-xs font-bold uppercase mb-3 ml-1"
                >
                    Appearance
                </Text>
                <View
                    style={{ backgroundColor: theme.surface, borderColor: theme.border }}
                    className="rounded-2xl border mb-6 overflow-hidden"
                >
                    <View className="flex-row items-center p-4">
                        <View
                            style={{ backgroundColor: theme.primaryLight }}
                            className="p-3 rounded-xl mr-4"
                        >
                            {isDark ? (
                                <Moon size={22} color={theme.primary} />
                            ) : (
                                <Sun size={22} color={theme.primary} />
                            )}
                        </View>
                        <View className="flex-1">
                            <Text
                                style={{ color: theme.textPrimary }}
                                className="font-semibold text-base"
                            >
                                Dark Mode
                            </Text>
                            <Text style={{ color: theme.textTertiary }} className="text-sm">
                                {isDark
                                    ? "Currently using dark theme"
                                    : "Currently using light theme"}
                            </Text>
                        </View>
                        <Switch
                            value={isDark}
                            onValueChange={toggleTheme}
                            trackColor={{ false: theme.border, true: theme.primary }}
                            thumbColor="white"
                        />
                    </View>
                </View>

                {/* Notifications Section */}
                <Text
                    style={{ color: theme.textTertiary }}
                    className="text-xs font-bold uppercase mb-3 ml-1"
                >
                    Notifications
                </Text>
                <View
                    style={{ backgroundColor: theme.surface, borderColor: theme.border }}
                    className="rounded-2xl border mb-6 overflow-hidden"
                >
                    <View className="flex-row items-center p-4">
                        <View
                            style={{ backgroundColor: theme.warningLight }}
                            className="p-3 rounded-xl mr-4"
                        >
                            <Bell size={22} color={theme.warning} />
                        </View>
                        <View className="flex-1">
                            <Text
                                style={{ color: theme.textPrimary }}
                                className="font-semibold text-base"
                            >
                                Push Notifications
                            </Text>
                            <Text style={{ color: theme.textTertiary }} className="text-sm">
                                Get reminded about your tasks
                            </Text>
                        </View>
                        <Switch
                            value={true}
                            trackColor={{ false: theme.border, true: theme.success }}
                            thumbColor="white"
                        />
                    </View>
                </View>

                {/* Data Section */}
                <Text
                    style={{ color: theme.textTertiary }}
                    className="text-xs font-bold uppercase mb-3 ml-1"
                >
                    Data
                </Text>
                <View
                    style={{ backgroundColor: theme.surface, borderColor: theme.border }}
                    className="rounded-2xl border mb-6 overflow-hidden"
                >
                    <TouchableOpacity
                        onPress={handleClearData}
                        className="flex-row items-center p-4"
                        activeOpacity={0.7}
                    >
                        <View
                            style={{ backgroundColor: theme.dangerLight }}
                            className="p-3 rounded-xl mr-4"
                        >
                            <Trash2 size={22} color={theme.danger} />
                        </View>
                        <View className="flex-1">
                            <Text
                                style={{ color: theme.danger }}
                                className="font-semibold text-base"
                            >
                                Clear All Data
                            </Text>
                            <Text style={{ color: theme.textTertiary }} className="text-sm">
                                Delete all timers permanently
                            </Text>
                        </View>
                        <ChevronRight size={20} color={theme.textTertiary} />
                    </TouchableOpacity>
                </View>

                {/* About Section */}
                <Text
                    style={{ color: theme.textTertiary }}
                    className="text-xs font-bold uppercase mb-3 ml-1"
                >
                    About
                </Text>
                <View
                    style={{ backgroundColor: theme.surface, borderColor: theme.border }}
                    className="rounded-2xl border mb-8 overflow-hidden"
                >
                    <View className="flex-row items-center p-4">
                        <View
                            style={{ backgroundColor: theme.surfaceSecondary }}
                            className="p-3 rounded-xl mr-4"
                        >
                            <Info size={22} color={theme.textSecondary} />
                        </View>
                        <View className="flex-1">
                            <Text
                                style={{ color: theme.textPrimary }}
                                className="font-semibold text-base"
                            >
                                Version
                            </Text>
                            <Text style={{ color: theme.textTertiary }} className="text-sm">
                                1.0.0
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
