/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TrendingUp, Target, Award, Calendar } from "lucide-react-native";
import { useTheme } from "../../context/ThemeContext";
import { useTimers } from "../../hooks/useTimers";
import { formatTime } from "../../utils/formatTime";

export default function StatsScreen() {
    const { theme } = useTheme();
    const { timers, totalSeconds } = useTimers();

    const stats = [
        {
            icon: TrendingUp,
            label: "Total Time",
            value: formatTime(totalSeconds),
            color: theme.primary,
            bgColor: theme.primaryLight,
        },
        {
            icon: Target,
            label: "Tasks Created",
            value: timers.length.toString(),
            color: theme.success,
            bgColor: theme.successLight,
        },
        {
            icon: Award,
            label: "Longest Session",
            value: formatTime(Math.max(...timers.map((t) => t.time), 0)),
            color: theme.warning,
            bgColor: theme.warningLight,
        },
        {
            icon: Calendar,
            label: "Active Timers",
            value: timers.filter((t) => t.isRunning).length.toString(),
            color: theme.danger,
            bgColor: theme.dangerLight,
        },
    ];

    return (
        <SafeAreaView style={{ backgroundColor: theme.background }} className="flex-1">
            <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View className="pt-4 pb-6">
                    <Text style={{ color: theme.textTertiary }} className="text-sm font-medium mb-1">
                        Your Progress
                    </Text>
                    <Text style={{ color: theme.textPrimary }} className="text-3xl font-black">
                        Statistics
                    </Text>
                </View>

                {/* Stats Grid */}
                <View className="flex-row flex-wrap gap-4 mb-6">
                    {stats.map((stat, index) => (
                        <View
                            key={index}
                            style={{ backgroundColor: theme.surface, borderColor: theme.border }}
                            className="w-[48%] p-5 rounded-3xl border"
                        >
                            <View
                                style={{ backgroundColor: stat.bgColor }}
                                className="w-12 h-12 rounded-2xl items-center justify-center mb-4"
                            >
                                <stat.icon size={24} color={stat.color} />
                            </View>
                            <Text style={{ color: theme.textTertiary }} className="text-xs font-semibold uppercase mb-1">
                                {stat.label}
                            </Text>
                            <Text style={{ color: theme.textPrimary }} className="text-2xl font-black">
                                {stat.value}
                            </Text>
                        </View>
                    ))}
                </View>

                {/* Recent Activity */}
                <View
                    style={{ backgroundColor: theme.surface, borderColor: theme.border }}
                    className="rounded-3xl border p-5 mb-8"
                >
                    <Text style={{ color: theme.textPrimary }} className="text-lg font-bold mb-4">
                        Recent Tasks
                    </Text>
                    {timers.slice(0, 5).map((timer, index) => (
                        <View
                            key={timer.id}
                            style={{ borderBottomColor: theme.border }}
                            className={`flex-row justify-between items-center py-3 ${index < Math.min(timers.length - 1, 4) ? "border-b" : ""
                                }`}
                        >
                            <View className="flex-row items-center flex-1">
                                <View
                                    style={{
                                        backgroundColor: timer.isRunning ? theme.successLight : theme.surfaceSecondary,
                                    }}
                                    className="w-10 h-10 rounded-xl items-center justify-center mr-3"
                                >
                                    <Text style={{ color: timer.isRunning ? theme.success : theme.textSecondary }}>
                                        {timer.name.charAt(0).toUpperCase()}
                                    </Text>
                                </View>
                                <Text
                                    style={{ color: theme.textPrimary }}
                                    className="font-semibold flex-1"
                                    numberOfLines={1}
                                >
                                    {timer.name}
                                </Text>
                            </View>
                            <Text style={{ color: theme.textSecondary }} className="font-mono font-semibold">
                                {formatTime(timer.time)}
                            </Text>
                        </View>
                    ))}
                    {timers.length === 0 && (
                        <Text style={{ color: theme.textTertiary }} className="text-center py-4">
                            No tasks yet
                        </Text>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}