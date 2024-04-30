import TechCard from "./tech_card";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function FamiliarTechCard() {
  return (
    <Card className="w-full">
      <CardHeader className="">
        <CardTitle className="font-extrabold text-2xl text-center">Here&apos;s some technologies I&apos;ve used before.</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col justify-between gap-4">
        <h1>Build Tools</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4" style={{ width: "100%" }}>
          <TechCard name="CMake" description="C & C++" url="docker.com" img_url="/cmake.png" />
          <TechCard name="Apache Maven" description="Java" url="docker.com" img_url="/apache_maven.svg" />
          <TechCard name="Gradle" description="Java" url="docker.com" img_url="/gradle.png" />
          <TechCard name="GNU Make" description="Anything" url="docker.com" img_url="/gnu_logo.png" />
        </div>
        <h1>Databases</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4" style={{ width: "100%" }}>
          <TechCard name="PostgreSQL" description="sql" url="docker.com" img_url="/postgresql.png" />
          <TechCard name="Firebase" description="sql/no sql/real-time" url="docker.com" img_url="/firebase.png" />
          <TechCard name="Apache Cassandra" description="no sql" url="docker.com" img_url="/apache_cassandra.png" />
        </div>
        <h1>Frameworks</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4" style={{ width: "100%" }}>
          <TechCard name="Flutter" description="Cross-platform app development" url="docker.com" img_url="/flutter.png" />
          <TechCard name="Next-JS" description="Web development" url="docker.com" img_url="/nextjs.svg" />
          <TechCard name="Pytorch" description="Machine learning" url="docker.com" img_url="/pytorch.webp" />
        </div>
        <h1>OS</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4" style={{ width: "100%" }}>
          <TechCard name="Linux" description="Debian, Arch" url="docker.com" img_url="/arch.png" />
          <TechCard name="Windows" description="7, 10, 11" url="docker.com" img_url="/windows.webp" />
        </div>
        <h1>Scripting</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4" style={{ width: "100%" }}>
          <TechCard name="Bash" description="something" url="docker.com" img_url="/bash.png" />
          <TechCard name="Batch" description="something" url="docker.com" img_url="/apache_cassandra.png" />
          <TechCard name="Powershell" description="BNack" url="docker.com" img_url="/apache_cassandra.png" />
          <TechCard name="AHK" description="Automating mundane tasks" url="docker.com" img_url="/ahk.png" />
        </div>
      </CardContent>
    </Card>
  );
}
