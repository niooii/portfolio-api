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
      <Card className="w-full cursor-pointer grid grid-cols-2" style={{ minHeight: '120px' }}>
        <div className="col-span-1 flex flex-col">
          <CardHeader className="">
            <CardTitle className="font-extrabold text-2xl whitespace-nowrap">{name}</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center">
            <CardDescription className="whitespace-nowrap">{description}</CardDescription>
          </CardContent>
        </div>
        <div className="col-span-1 flex justify-end items-center relative">
            <div style={{ padding: '10px' }}>
                <Image src={img_url} width={100} height={100} alt="" />
            </div>
        </div>
      </Card>
    );
  }