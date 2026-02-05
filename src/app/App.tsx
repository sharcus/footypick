import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import MainScreen from "../pages/MainScreen";
import HistoryScreen from "../pages/HistoryScreen";
import SettingsScreen from "../pages/SettingsScreen";
import ProfileScreen from "../pages/ProfileScreen";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/history" element={<HistoryScreen />} />
        <Route path="/settings" element={<SettingsScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
      </Routes>
    </Layout>
  );
}
