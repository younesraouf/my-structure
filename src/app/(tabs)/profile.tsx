/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    Camera,
    Mail,
    Calendar,
    Clock,
    ChevronRight,
} from "lucide-react-native";
import { useTheme } from "../../context/ThemeContext";
import { useTimers } from "../../hooks/useTimers";
import { formatTime } from "../../utils/formatTime";

export default function ProfileScreen() {
    const { theme } = useTheme();
    const { timers, totalSeconds } = useTimers();

    return (
        <SafeAreaView
            style={{ backgroundColor: theme.background }}
            className="flex-1"
        >
            {/* Header Banner */}
            <View
                style={{ backgroundColor: theme.primary }}
                className="h-36 w-full absolute top-0"
            />

            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                <View className="px-5 items-center mt-12">
                    {/* Avatar */}
                    <View className="relative mb-4">
                        <View
                            style={{ backgroundColor: theme.surface }}
                            className="w-32 h-32 rounded-full p-1.5 shadow-xl"
                        >
                            <Image
                                source={{ uri: "https://i.pravatar.cc/300" }}
                                className="w-full h-full rounded-full"
                                style={{ backgroundColor: theme.surfaceSecondary }}
                            />
                        </View>
                        <TouchableOpacity
                            style={{ backgroundColor: theme.warning }}
                            className="absolute bottom-1 right-1 p-3 rounded-full border-4"
                            activeOpacity={0.8}
                        >
                            <Camera size={18} color="white" />
                        </TouchableOpacity>
                    </View>

                    {/* Name & Title */}
                    <Text
                        style={{ color: theme.textPrimary }}
                        className="text-2xl font-black mb-1"
                    >
                        Alex Johnson
                    </Text>
                    <View
                        style={{ backgroundColor: theme.primaryLight }}
                        className="px-4 py-1.5 rounded-full mb-8"
                    >
                        <Text
                            style={{ color: theme.primary }}
                            className="font-bold text-sm"
                        >
                            Productivity Master
                        </Text>
                    </View>

                    {/* Quick Stats */}
                    <View
                        style={{
                            backgroundColor: theme.surface,
                            borderColor: theme.border,
                        }}
                        className="w-full flex-row rounded-3xl border p-4 mb-6"
                    >
                        <View className="flex-1 items-center">
                            <Text
                                style={{ color: theme.primary }}
                                className="text-2xl font-black"
                            >
                                {timers.length}
                            </Text>
                            <Text
                                style={{ color: theme.textTertiary }}
                                className="text-xs font-semibold"
                            >
                                Tasks
                            </Text>
                        </View>
                        <View style={{ backgroundColor: theme.border }} className="w-px" />
                        <View className="flex-1 items-center">
                            <Text
                                style={{ color: theme.success }}
                                className="text-2xl font-black"
                            >
                                {formatTime(totalSeconds)}
                            </Text>
                            <Text
                                style={{ color: theme.textTertiary }}
                                className="text-xs font-semibold"
                            >
                                Total Time
                            </Text>
                        </View>
                        <View style={{ backgroundColor: theme.border }} className="w-px" />
                        <View className="flex-1 items-center">
                            <Text
                                style={{ color: theme.warning }}
                                className="text-2xl font-black"
                            >
                                {timers.filter((t) => t.isRunning).length}
                            </Text>
                            <Text
                                style={{ color: theme.textTertiary }}
                                className="text-xs font-semibold"
                            >
                                Active
                            </Text>
                        </View>
                    </View>

                    {/* Info Cards */}
                    <View className="w-full gap-4">
                        <View
                            style={{
                                backgroundColor: theme.surface,
                                borderColor: theme.border,
                            }}
                            className="p-4 rounded-2xl flex-row items-center border"
                        >
                            <View
                                style={{ backgroundColor: theme.primaryLight }}
                                className="p-3 rounded-xl mr-4"
                            >
                                <Mail size={22} color={theme.primary} />
                            </View>
                            <View className="flex-1">
                                <Text
                                    style={{ color: theme.textTertiary }}
                                    className="text-xs font-bold uppercase"
                                >
                                    Email
                                </Text>
                                <Text
                                    style={{ color: theme.textPrimary }}
                                    className="font-semibold text-base"
                                >
                                    alex@example.com
                                </Text>
                            </View>
                        </View>

                        <View
                            style={{
                                backgroundColor: theme.surface,
                                borderColor: theme.border,
                            }}
                            className="p-4 rounded-2xl flex-row items-center border"
                        >
                            <View
                                style={{ backgroundColor: theme.successLight }}
                                className="p-3 rounded-xl mr-4"
                            >
                                <Calendar size={22} color={theme.success} />
                            </View>
                            <View className="flex-1">
                                <Text
                                    style={{ color: theme.textTertiary }}
                                    className="text-xs font-bold uppercase"
                                >
                                    Member Since
                                </Text>
                                <Text
                                    style={{ color: theme.textPrimary }}
                                    className="font-semibold text-base"
                                >
                                    December 2024
                                </Text>
                            </View>
                        </View>

                        {/* Edit Profile Button */}
                        <TouchableOpacity
                            style={{
                                backgroundColor: theme.surface,
                                borderColor: theme.border,
                            }}
                            className="p-4 rounded-2xl flex-row items-center justify-between border mt-2"
                            activeOpacity={0.7}
                        >
                            <Text
                                style={{ color: theme.textPrimary }}
                                className="font-bold text-base"
                            >
                                Edit Profile
                            </Text>
                            <ChevronRight size={20} color={theme.textTertiary} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
