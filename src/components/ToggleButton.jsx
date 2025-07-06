
export const ToggleButton = ({ enabled, setEnabled }) => {
    return (
        <button
            onClick={setEnabled}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${enabled ? "bg-Red-700 focus:outline-none focus:ring-2 focus:ring-Red-400" : "bg-gray-300"
                }`}
        >
            <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${enabled ? "translate-x-6" : "translate-x-1"
                    }`}
            />
        </button>
    )
}
