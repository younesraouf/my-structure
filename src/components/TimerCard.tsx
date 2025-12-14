/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Play, Pause, RotateCcw, Trash2 } from "lucide-react-native";
import { Timer } from "../types";
import { formatTime } from "../utils/formatTime";
import { useTheme } from "../context/ThemeContext";

interface TimerCardProps {
    timer: Timer;
    onToggle: (id: string) => void;
    onReset: (id: string) => void;
    onDelete: (id: string) => void;
    onRename: (id: string, text: string) => void;
}

export function TimerCard({
    timer,
    onToggle,
    onReset,
    onDelete,
    onRename,
}: TimerCardProps) {
    const { theme } = useTheme();

    return (
        <View
            style={{
                backgroundColor: theme.surface,
                borderColor: timer.isRunning ? theme.primary : theme.border,
                borderWidth: timer.isRunning ? 2 : 1,
                shadowColor: timer.isRunning ? theme.primary : "#000",
                shadowOpacity: timer.isRunning ? 0.15 : 0.05,
                shadowRadius: timer.isRunning ? 12 : 8,
                shadowOffset: { width: 0, height: 4 },
                elevation: timer.isRunning ? 8 : 2,
            }}
            className="p-5 mb-4 rounded-3xl"
        >
            {/* Status Indicator */}
            {timer.isRunning && (
                <View
                    style={{ backgroundColor: theme.primaryLight }}
                    className="absolute top-3 right-3 px-3 py-1 rounded-full flex-row items-center"
                >
                    <View
                        style={{ backgroundColor: theme.primary }}
                        className="w-2 h-2 rounded-full mr-2"
                    />
                    <Text style={{ color: theme.primary }} className="text-xs font-bold">
                        RUNNING
                    </Text>
                </View>
            )}

            {/* Task Name Input */}
            <TextInput
                value={timer.name}
                onChangeText={(text) => onRename(timer.id, text)}
                style={{ color: theme.textPrimary }}
                placeholderTextColor={theme.textTertiary}
                className="text-xl font-bold mb-2 p-0"
                placeholder="Task Name..."
            />

            {/* Time Display */}
            <View className="items-center py-6">
                <Text
                    style={{ color: timer.isRunning ? theme.primary : theme.textPrimary }}
                    className="text-5xl font-mono font-black tracking-tight"
                >
                    {formatTime(timer.time)}
                </Text>
                <Text style={{ color: theme.textTertiary }} className="text-sm mt-2">
                    {timer.time < 60
                        ? "Just started"
                        : timer.time < 3600
                            ? `${Math.floor(timer.time / 60)} minutes tracked`
                            : `${Math.floor(timer.time / 3600)} hours tracked`}
                </Text>
            </View>

            {/* Controls */}
            <View className="flex-row gap-3">
                <TouchableOpacity
                    onPress={() => onToggle(timer.id)}
                    style={{
                        backgroundColor: timer.isRunning ? theme.warning : theme.success,
                    }}
                    className="flex-1 flex-row items-center justify-center py-4 rounded-2xl"
                    activeOpacity={0.8}
                >
                    {timer.isRunning ? (
                        <>
                            <Pause size={22} color="white" fill="white" />
                            <Text className="text-white font-bold text-lg ml-2">Pause</Text>
                        </>
                    ) : (
                        <>
                            <Play size={22} color="white" fill="white" />
                            <Text className="text-white font-bold text-lg ml-2">Start</Text>
                        </>
                    )}
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => onReset(timer.id)}
                    style={{ backgroundColor: theme.surfaceSecondary }}
                    className="p-4 rounded-2xl items-center justify-center"
                    activeOpacity={0.7}
                >
                    <RotateCcw size={22} color={theme.textSecondary} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => onDelete(timer.id)}
                    style={{ backgroundColor: theme.dangerLight }}
                    className="p-4 rounded-2xl items-center justify-center"
                    activeOpacity={0.7}
                >
                    <Trash2 size={22} color={theme.danger} />
                </TouchableOpacity>
            </View>
        </View>
    );
}