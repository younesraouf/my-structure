/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Plus, Clock, Zap } from "lucide-react-native";
import { TimerCard } from "../../components/TimerCard";
import { useTimers } from "../../hooks/useTimers";
import { useTheme } from "../../context/ThemeContext";
import { formatTime } from "../../utils/formatTime";

export default function Index() {
  const { theme } = useTheme();
  const {
    timers,
    addTimer,
    toggleTimer,
    resetTimer,
    deleteTimer,
    renameTimer,
    totalSeconds,
  } = useTimers();

  const runningCount = timers.filter((t) => t.isRunning).length;

  return (
    <SafeAreaView style={{ backgroundColor: theme.background }} className="flex-1">
      <View className="flex-1 px-5">
        {/* Header */}
        <View className="pt-4 pb-6">
          <View className="flex-row justify-between items-start mb-6">
            <View>
              <Text style={{ color: theme.textTertiary }} className="text-sm font-medium mb-1">
                Welcome back 👋
              </Text>
              <Text style={{ color: theme.textPrimary }} className="text-3xl font-black">
                Work Timers
              </Text>
            </View>

            {/* Running Indicator */}
            {runningCount > 0 && (
              <View
                style={{ backgroundColor: theme.successLight }}
                className="flex-row items-center px-3 py-2 rounded-full"
              >
                <Zap size={14} color={theme.success} />
                <Text style={{ color: theme.success }} className="ml-1 text-sm font-bold">
                  {runningCount} Active
                </Text>
              </View>
            )}
          </View>

          {/* Stats Card */}
          <View
            style={{ backgroundColor: theme.surface, borderColor: theme.border }}
            className="flex-row rounded-3xl p-5 border"
          >
            <View className="flex-1 items-center border-r" style={{ borderColor: theme.border }}>
              <View
                style={{ backgroundColor: theme.primaryLight }}
                className="w-12 h-12 rounded-full items-center justify-center mb-2"
              >
                <Clock size={24} color={theme.primary} />
              </View>
              <Text style={{ color: theme.textTertiary }} className="text-xs font-semibold uppercase mb-1">
                Total Time
              </Text>
              <Text style={{ color: theme.textPrimary }} className="text-2xl font-black font-mono">
                {formatTime(totalSeconds)}
              </Text>
            </View>

            <View className="flex-1 items-center">
              <View
                style={{ backgroundColor: theme.warningLight }}
                className="w-12 h-12 rounded-full items-center justify-center mb-2"
              >
                <Zap size={24} color={theme.warning} />
              </View>
              <Text style={{ color: theme.textTertiary }} className="text-xs font-semibold uppercase mb-1">
                Total Tasks
              </Text>
              <Text style={{ color: theme.textPrimary }} className="text-2xl font-black">
                {timers.length}
              </Text>
            </View>
          </View>
        </View>

        {/* Timer List */}
        <FlatList
          data={timers}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 120 }}
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
            <View
              style={{ backgroundColor: theme.surface, borderColor: theme.border }}
              className="items-center justify-center py-16 rounded-3xl border mt-4"
            >
              <View
                style={{ backgroundColor: theme.surfaceSecondary }}
                className="w-20 h-20 rounded-full items-center justify-center mb-4"
              >
                <Clock size={40} color={theme.textTertiary} />
              </View>
              <Text style={{ color: theme.textSecondary }} className="text-lg font-semibold mb-1">
                No timers yet
              </Text>
              <Text style={{ color: theme.textTertiary }} className="text-center px-8">
                Tap the button below to create your first timer
              </Text>
            </View>
          }
        />

        {/* Floating Add Button */}
        <View className="absolute bottom-6 left-5 right-5">
          <TouchableOpacity
            onPress={addTimer}
            style={{
              backgroundColor: theme.primary,
              shadowColor: theme.primary,
              shadowOpacity: 0.4,
              shadowRadius: 12,
              shadowOffset: { width: 0, height: 6 },
              elevation: 10,
            }}
            className="flex-row items-center justify-center py-5 rounded-2xl"
            activeOpacity={0.9}
          >
            <Plus size={24} color="white" strokeWidth={3} />
            <Text className="text-white text-lg font-bold ml-2">Add New Timer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}