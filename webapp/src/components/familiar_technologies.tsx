import TechCard from "./tech_card";
import TechSectionLabel from "./tech_section_label";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function FamiliarTechCard() {
  return (
    <Card className="w-full">
      <CardHeader className="">
        <CardTitle className="font-extrabold text-2xl text-center">Here&apos;s some technologies I&apos;ve used before.</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col justify-between gap-4">
        <TechSectionLabel text="Build Tools"/>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4" style={{ width: "100%" }}>
          <TechCard name="CMake" description="C & C++" url="https://cmake.org/" img_url="/cmake.png" />
          <TechCard name="Apache Maven" description="Java" url="https://maven.apache.org/" img_url="/apache_maven.svg" />
          <TechCard name="Gradle" description="Java" url="https://gradle.org/" img_url="/gradle.png" />
          <TechCard name="GNU Make" description="A variety of things" url="https://www.gnu.org/software/make/manual/make.html" img_url="/gnu_logo.png" />
        </div>
        <TechSectionLabel text="Databases"/>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4" style={{ width: "100%" }}>
          <TechCard name="PostgreSQL" description="Sql" url="https://www.postgresql.org/" img_url="/postgresql.png" />
          <TechCard name="Firebase" description="No sql/real-time" url="https://firebase.google.com/" img_url="/firebase.png" />
          <TechCard name="Apache Cassandra" description="No sql" url="https://cassandra.apache.org/_/index.html" img_url="/apache_cassandra.png" />
        </div>
        <TechSectionLabel text="Frameworks"/>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4" style={{ width: "100%" }}>
          <TechCard name="Flutter" description="Cross-platform app development" url="https://flutter.dev/" img_url="/flutter.png" />
          <TechCard name="Next-JS" description="Web development" url="https://nextjs.org/" img_url="/nextjs.svg" />
          <TechCard name="Pytorch" description="Machine learning" url="https://pytorch.org/" img_url="/pytorch.webp" />
        </div>
        <TechSectionLabel text="OS"/>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4" style={{ width: "100%" }}>
          <TechCard name="Linux" description="Debian, Arch" url="https://www.linux.org/" img_url="/arch.png" />
          <TechCard name="Windows" description="7, 10, !11" url="https://www.microsoft.com/en-us/software-download/windows10" img_url="/windows.webp" />
        </div>
        <TechSectionLabel text="Scripting"/>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4" style={{ width: "100%" }}>
          <TechCard name="Bash" description="touch build.sh" url="https://www.gnu.org/software/bash/" img_url="/bash.png" />
          <TechCard name="Powershell" description="But I forgot most of it" url="https://learn.microsoft.com/en-us/training/modules/script-with-powershell/" img_url="/apoweredshell.png" />
          <TechCard name="AHK" description="Automating GUI tasks" url="https://www.autohotkey.com/" img_url="/ahk.png" />
        </div>
        <TechSectionLabel text="Misc/Other"/>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4" style={{ width: "100%" }}>
          <TechCard name="Docker" description="Container-izing this website" url="https://www.docker.com/" img_url="/docker.webp" />
          <TechCard name="Lua" description="Roblox Studio" url="https://www.lua.org/" img_url="/lua.png" />
          <TechCard name="C#" description="Unity" url="https://learn.microsoft.com/en-us/dotnet/csharp/" img_url="/csharp.svg" />
          <TechCard name="Assembly" description="NASM/GAS" url="https://www.nasm.us/" img_url="/nasm.svg" />
        </div>
      </CardContent>
    </Card>
  );
}
