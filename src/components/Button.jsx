
export const Button = ({ children, textSmall, isActive = false, onClick }) => {
    return (
        <button onClick={onClick} className={`border px-5 py-2 rounded-full cursor-pointer transition
            ${textSmall ? 'text-base' : 'text-[1.25rem]'}
            ${isActive ? 'bg-Red-500 text-white border-Red-500 dark:bg-Red-500 dark:text-Neutral-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Red-400' : 'border-Neutral-300 hover:bg-Red-500 hover:text-white dark:hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-Red-400'}
            dark:text-Neutral-0 dark:bg-Neutral-700 dark:border-none dark:hover:text-Neutral-900`}
        >
            {children}
        </button >
    )
}
