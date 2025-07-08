import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(() => {
    return sessionStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      sessionStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      sessionStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="flex items-center space-x-2">
      <Switch checked={isDark} onCheckedChange={setIsDark} className="cursor-pointer"/>
      <span className="dark:text-white block">{isDark ? "Dark" : "Light"}</span>
    </div>
  );
}
