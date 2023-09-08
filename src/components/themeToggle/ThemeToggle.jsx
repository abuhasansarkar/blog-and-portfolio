"use client";
import { useContext } from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div
      onClick={toggle}
      className={styles.themeTogle}
      style={
        theme === "dark"
          ? { backgroundColor: "#fff" }
          : { backgroundColor: "#000" }
      }
    >
      <Image src="/moon.png" alt="moon" width={20} height={20} />
      <Image src="/sun.png" alt="moon" width={20} height={20} />
      <div
        className={styles.theme}
        style={
          theme === "dark" ? { left: 1, backgroundColor: "#000" } : { right: 1 }
        }
      ></div>
    </div>
  );
};

export default ThemeToggle;
