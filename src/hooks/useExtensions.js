import { useState, useMemo } from "react";
import data from "../data/data.json";

export function useExtensions() {
  const [filter, setFilter] = useState("All");
  const [extensions, setExtensions] = useState(data);

  const handleToggle = (name) => {
    setExtensions((prev) =>
      prev.map((ext) =>
        ext.name === name ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  };

  const handleRemove = (nameToRemove) => {
    setExtensions((prev) => prev.filter((ext) => ext.name !== nameToRemove));
  };

  const filteredData = useMemo(() => {
    return extensions.filter((items) => {
      if (filter === "All") return true;
      if (filter === "Active") return items.isActive;
      if (filter === "Inactive") return !items.isActive;
    });
  }, [extensions, filter]);

  return {
    filter,
    setFilter,
    filteredData,
    handleToggle,
    handleRemove,
  };
}
