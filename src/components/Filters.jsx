import { Button } from "./Button"

export const Filters = ({ currentFilter, setFilter }) => {

    return (
        <div className="mb-10 md:flex md:items-center md:justify-between">
            <h2 className="dark:text-Neutral-0 text-center text-4xl font-bold mb-6 md:mb-0">Extensions List</h2>
            <div className="flex justify-center space-x-3">
                <Button isActive={currentFilter === "All"} onClick={() => setFilter("All")}>All</Button>
                <Button isActive={currentFilter === "Active"} onClick={() => setFilter("Active")}>Active</Button>
                <Button isActive={currentFilter === "Inactive"} onClick={() => setFilter("Inactive")}>Inactive</Button>
            </div>
        </div>
    )
}
