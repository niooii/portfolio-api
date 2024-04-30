import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "./ui/card";

export default function FamiliarTechCard() {
    return (
        <Card className="w-full">
        <CardHeader className="">
          <CardTitle className="font-extrabold text-2xl text-center">Here&apos;s some technologies I&apos;m familiar with.</CardTitle>
        </CardHeader>
        <CardContent className="">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="w-full cursor-pointer">
            <CardHeader className="">
              <CardTitle className="font-extrabold text-2xl">Docker</CardTitle>
            </CardHeader>
            <CardContent className="">
              hoi there
              <CardDescription>
              HIHIHI
              </CardDescription>
            </CardContent>
          </Card>
            <Card className="w-full">
              <CardHeader className="">
                <CardTitle className="font-extrabold text-2xl">Docker</CardTitle>
              </CardHeader>
              <CardContent className="">
                hoi there
                <CardDescription>
                HIHIHI
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardHeader className="">
                <CardTitle className="font-extrabold text-2xl">Docker</CardTitle>
              </CardHeader>
              <CardContent className="">
                hoi there
                <CardDescription>
                HIHIHI
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    )
}