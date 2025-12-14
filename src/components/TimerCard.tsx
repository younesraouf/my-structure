import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Play, Pause, RotateCcw, Trash2 } from "lucide-react-native";
import { Timer } from "../types";
import { formatTime } from "../utils/formatTime";

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
    return (
        <View
            className={`p-4 mb-4 rounded-2xl border bg-white shadow-sm ${timer.isRunning ? "border-indigo-500 bg-indigo-50/10" : "border-gray-200"
                }`}
        >
            <View className="flex-row justify-between items-center mb-2">
                {/* Editable Name */}
                <TextInput
                    value={timer.name}
                    onChangeText={(text) => onRename(timer.id, text)}
                    className="flex-1 text-lg font-semibold text-gray-800 p-0"
                    placeholder="Task Name"
                />
                {/* Time Display */}
                <Text
                    className={`text-2xl font-mono font-bold ${timer.isRunning ? "text-indigo-600" : "text-gray-600"
                        }`}
                >
                    {formatTime(timer.time)}
                </Text>
            </View>

            {/* Controls */}
            <View className="flex-row gap-3 mt-2">
                <TouchableOpacity
                    onPress={() => onToggle(timer.id)}
                    className={`flex-1 flex-row items-center justify-center py-3 rounded-xl ${timer.isRunning ? "bg-amber-500" : "bg-indigo-600"
                        }`}
                >
                    {timer.isRunning ? (
                        <>
                            <Pause size={20} color="white" />
                            <Text className="text-white font-bold ml-2">Pause</Text>
                        </>
                    ) : (
                        <>
                            <Play size={20} color="white" />
                            <Text className="text-white font-bold ml-2">Start</Text>
                        </>
                    )}
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => onReset(timer.id)}
                    className="bg-gray-100 p-3 rounded-xl items-center justify-center"
                >
                    <RotateCcw size={20} color="#4B5563" />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => onDelete(timer.id)}
                    className="bg-red-50 p-3 rounded-xl items-center justify-center"
                >
                    <Trash2 size={20} color="#DC2626" />
                </TouchableOpacity>
            </View>
        </View>
    );
}