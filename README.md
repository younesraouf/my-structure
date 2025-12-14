# ⏱️ Work Timer App

A clean and beautiful mobile application to help you track time on different tasks. Built with **React Native**, **Expo**, and **NativeWind**.

## ✨ Features

- **Multiple Timers:** Create and manage different timers for various tasks.
- **Full Control:** Start, pause, reset, rename, and delete timers easily.
- **Dark Mode:** A beautiful dark theme that persists across app restarts.
- **Auto-Save:** Your timers are saved automatically to your device.
- **Statistics:** View your total work time and task history.
- **Profile:** A user profile tab with a productivity summary.

## 🛠️ Tech Stack

- **Framework:** React Native (Expo)
- **Language:** TypeScript
- **Styling:** NativeWind (Tailwind CSS)
- **Navigation:** Expo Router
- **Storage:** AsyncStorage
- **Icons:** Lucide React Native

## 🚀 How to Run

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Start the App**
    ```bash
    npx expo start -c
    ```

3.  **Run on Device**
    - Download the **Expo Go** app on your iOS or Android phone.
    - Scan the QR code that appears in your terminal.

## 📂 Project Structure

- `src/app`: App screens and navigation logic.
- `src/components`: Reusable UI components (like the Timer Card).
- `src/context`: Global state (Theme/Dark Mode).
- `src/hooks`: Logic for the timer mechanism.
- `src/utils`: Helper functions and color definitions.

## 📄 License

This project is licensed under the MIT License.