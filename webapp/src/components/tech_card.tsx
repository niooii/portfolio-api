import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "./ui/card";

interface TechCardProps {
    name: string,
    description: string,
    url: string,
    img_url: string
}

export default function TechCard({ name, description, url, img_url }: TechCardProps) {
    return (
        <Card className="w-full cursor-pointer">
            <CardHeader className="">
                <CardTitle className="font-extrabold text-2xl">{name}</CardTitle>
            </CardHeader>
            <CardContent className="">
                hoi there
                <CardDescription>
                {description}
                </CardDescription>
            </CardContent>
        </Card>
    )
}