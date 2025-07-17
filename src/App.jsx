import { CardContainer } from "./components/CardContainer"
import { Filters } from "./components/Filters"
import { Header } from "./components/Header"
import { useExtensions } from "./hooks/useExtensions"

function App() {

  const {
    filter,
    setFilter,
    filteredData,
    handleToggle,
    handleRemove
  } = useExtensions();


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
