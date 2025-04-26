import React from "react";

export const useDropdownPosition = (
  ref: React.RefObject<HTMLDivElement | null> | React.RefObject<HTMLDivElement>
) => {
  const getDropdownPosition = () => {
    if (!ref.current) return { top: 0, left: 0 };

    const rect = ref.current.getBoundingClientRect();
    const dropdownWidth = 240; // width of the dropdown (w-60 = 15rem = 240px)

    // Calculate the position of the dropdown
    let left = rect.left + window.scrollX;
    const top = rect.bottom + window.scrollY;

    // Check if the dropdown goes beyond the right edge of the screen
    if (left + dropdownWidth > window.innerWidth) {
      left = rect.right + window.scrollX - dropdownWidth;

      // if still off-screen, align to the right edge of viewport with some padding
      if (left < 0) {
        left = window.innerWidth - dropdownWidth - 16; // 16px padding
      }
    }

    // Ensure the dropdown is within the viewport
    if (left < 0) {
      left = 16; // 16px padding
    }

    return { top, left };
  };

  return { getDropdownPosition };
};
