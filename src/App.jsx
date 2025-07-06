import { useState } from "react";
import { CardContainer } from "./components/CardContainer"
import { Filters } from "./components/Filters"
import { Header } from "./components/Header"
import data from "./data/data.json";

function App() {

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

  const filteredData = extensions.filter((items) => {
    if (filter === "All") return true;
    if (filter === "Active") return items.isActive;
    if (filter === "Inactive") return !items.isActive;
  });

  return (
    <main className="light-gradient dark:dark-gradient min-h-screen flex flex-col items-center">
      <section className="w-[343px] my-6 md:w-[672px] xl:w-[1170px]">
        <Header />
        <Filters currentFilter={filter} setFilter={setFilter} />
        <CardContainer data={filteredData} onToggle={handleToggle} onRemove={handleRemove} />
      </section>
    </main>
  )
}

export default App
