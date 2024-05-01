import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "./ui/card";
import Image from 'next/image'

interface TechCardProps {
  name: string;
  description: string;
  url: string;
  img_url: string;
}

export default function TechCard({ name, description, url, img_url }: TechCardProps) {
  return (
   <a href={url} target="_blank">
        <Card className="w-full cursor-pointer flex">
            <div className="flex items-center">
                <div style={{ padding: '12px' }}>
                <Image src={img_url} width={100} height={100} alt="" />
                </div>
            </div>
            <div className="flex flex-col">
                <CardHeader className="">
                <CardTitle className="font-extrabold text-2xl whitespace-nowrap">{name}</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center">
                <CardDescription className="whitespace-nowrap">{description}</CardDescription>
                </CardContent>
            </div>
        </Card>
   </a>
  );
}
