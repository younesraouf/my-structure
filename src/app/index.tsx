import React from "react";
import { View, Text, FlatList, TouchableOpacity, SafeAreaView } from "react-native";
import { Plus, Clock } from "lucide-react-native";
import { TimerCard } from "../components/TimerCard";
import { useTimers } from "../hooks/useTimers";
import { formatTime } from "../utils/formatTime";

export default function Index() {
  const {
    timers,
    addTimer,
    toggleTimer,
    resetTimer,
    deleteTimer,
    renameTimer,
    totalSeconds,
  } = useTimers();

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-1 p-5">
        {/* Header */}
        <View className="flex-row justify-between items-center mb-6 mt-2">
          <View>
            <Text className="text-3xl font-bold text-gray-900">Work Timers</Text>
            <Text className="text-gray-500">Track your productivity</Text>
          </View>
          <View className="items-end bg-white px-4 py-2 rounded-xl border border-gray-100">
            <Text className="text-xs font-bold text-gray-400 uppercase">
              Total
            </Text>
            <View className="flex-row items-center gap-1">
              <Clock size={14} color="#4F46E5" />
              <Text className="text-lg font-mono font-bold text-indigo-600">
                {formatTime(totalSeconds)}
              </Text>
            </View>
          </View>
        </View>

        {/* List of Timers */}
        <FlatList
          data={timers}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          renderItem={({ item }) => (
            <TimerCard
              timer={item}
              onToggle={toggleTimer}
              onReset={resetTimer}
              onDelete={deleteTimer}
              onRename={renameTimer}
            />
          )}
          ListEmptyComponent={
            <View className="items-center justify-center mt-20">
              <Text className="text-gray-400">No timers yet.</Text>
              <Text className="text-gray-400">Add one to get started!</Text>
            </View>
          }
        />

        {/* Floating Add Button */}
        <View className="absolute bottom-8 left-5 right-5">
          <TouchableOpacity
            onPress={addTimer}
            className="flex-row items-center justify-center bg-indigo-600 py-4 rounded-2xl shadow-lg shadow-indigo-500/30"
          >
            <Plus size={24} color="white" />
            <Text className="text-white text-lg font-bold ml-2">
              New Timer
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}