import { useEffect, useState } from "react";
import { Button } from "./Button"
import { ToggleButton } from "./ToggleButton";

export const Card = ({ logo, name, description, isActive, onToggle, onRemove }) => {
    const [enabled, setEnabled] = useState(isActive);

    useEffect(() => {
        setEnabled(isActive);
    }, [isActive]);

    const handleToggle = () => {
        setEnabled(!enabled);
        onToggle(name);
    }

    const handleRemove = () => {
        onRemove(name);
    };

    return (
        <div className="bg-Neutral-0 rounded-lg p-4 dark:bg-Neutral-800 shadow-sm">

            <div className="flex gap-x-4 mb-10 items-start">
                <img src={logo} alt="Icon" />
                <div>
                    <h2 className="dark:text-Neutral-0 text-[1.25rem] font-bold mb-2">{name}</h2>
                    <p className="text-Neutral-600 dark:text-Neutral-300 text-[.9375rem]">{description}</p>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <Button textSmall onClick={handleRemove}>Remove</Button>
                <ToggleButton enabled={enabled} setEnabled={handleToggle} />
            </div>
        </div >
    )
}
