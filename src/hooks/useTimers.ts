import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Timer } from "../types";

const STORAGE_KEY = "@my_app_timers";

export function useTimers() {
    const [timers, setTimers] = useState<Timer[]>([]);
    const [loaded, setLoaded] = useState(false);

    // 1. Load from Storage on App Start
    useEffect(() => {
        (async () => {
            try {
                const json = await AsyncStorage.getItem(STORAGE_KEY);
                if (json) setTimers(JSON.parse(json));
            } catch (e) {
                console.error("Failed to load timers", e);
            } finally {
                setLoaded(true);
            }
        })();
    }, []);

    // 2. Save to Storage whenever timers change
    useEffect(() => {
        if (loaded) {
            AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(timers));
        }
    }, [timers, loaded]);

    // 3. The Ticking Mechanism
    useEffect(() => {
        const interval = setInterval(() => {
            setTimers((current) =>
                current.map((t) =>
                    t.isRunning ? { ...t, time: t.time + 1 } : t
                )
            );
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // --- Actions ---

    const addTimer = () => {
        const newTimer: Timer = {
            id: Date.now().toString(),
            name: "New Task",
            time: 0,
            isRunning: false,
        };
        setTimers((prev) => [newTimer, ...prev]);
    };

    const toggleTimer = (id: string) => {
        setTimers((prev) =>
            prev.map((t) => (t.id === id ? { ...t, isRunning: !t.isRunning } : t))
        );
    };

    const resetTimer = (id: string) => {
        setTimers((prev) =>
            prev.map((t) => (t.id === id ? { ...t, time: 0, isRunning: false } : t))
        );
    };

    const deleteTimer = (id: string) => {
        setTimers((prev) => prev.filter((t) => t.id !== id));
    };

    const renameTimer = (id: string, newName: string) => {
        setTimers((prev) =>
            prev.map((t) => (t.id === id ? { ...t, name: newName } : t))
        );
    };

    const totalSeconds = timers.reduce((acc, t) => acc + t.time, 0);

    return {
        timers,
        addTimer,
        toggleTimer,
        resetTimer,
        deleteTimer,
        renameTimer,
        totalSeconds,
    };
}