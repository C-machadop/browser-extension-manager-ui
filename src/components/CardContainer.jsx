import { Card } from "./Card"

export const CardContainer = ({ data, onToggle, onRemove }) => {

    return (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {data.map((extension) => (
                <Card
                    key={extension.name}
                    {...extension}
                    onToggle={onToggle}
                    onRemove={onRemove}
                />
            ))}
        </div>
    )
}
