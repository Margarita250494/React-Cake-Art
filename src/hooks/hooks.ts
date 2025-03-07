import { useState, useEffect } from "react";

export const useSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle the sidebar open/close
  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  // Close the sidebar if it's open
  const closeMenu = () => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };

  // Update root class based on sidebar state
  useEffect(() => {
    const rootElement = document.getElementById("root");
    if (rootElement) {
      if (isSidebarOpen) {
        rootElement.classList.add("sidebar-open");
      } else {
        rootElement.classList.remove("sidebar-open");
      }
    }
  }, [isSidebarOpen]);

  return {
    isSidebarOpen,
    toggleSidebar,
    closeMenu,
  };
};