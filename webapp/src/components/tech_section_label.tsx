interface TechSectionLabelProps {
    text: string
}

export default function TechSectionLabel({text}: TechSectionLabelProps) {
    return (
        <h1 className="font-semibold text-xl text-center">{text}</h1>
    )
}