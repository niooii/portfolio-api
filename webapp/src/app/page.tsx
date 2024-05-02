/* eslint-disable react/no-children-prop */
"use client"
import Image from "next/image";
import TypingText from "@/components/typing_text";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LangChart } from "@/components/stats/lang_chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import useSWR from 'swr'
import FamiliarTechCard from "@/components/familiar_technologies";
import { useEffect } from "react";
import Background from "@/components/background";
import { EmailForm } from "@/components/email_form";
import SocialMedia from "@/components/social_media";
const fetcher = (args: string | URL | Request) => fetch(args).then((res) => res.json())

function GetLangStats(): { name: string, total: number }[] {
  var { data, error } = useSWR('../test_jsons/langs.json', fetcher)
 
  if (error) return []
  if (!data) return []

  data = Object.entries(data).map(([name, total]) => ({
      name,
      total
  }));

  data = data.sort((a: { name: string, total: number }, b: { name: string, total: number }) => b.total - a.total);
  return data
}

export default function Home() {
  useEffect(() => {
    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
    );
    document.getElementsByTagName("head")[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);
  var lang_stats = GetLangStats();
  var top_10 = lang_stats.slice(0, 10);
  var rest = lang_stats.slice(10);
  return (
    <main>
      <Background children={
        <div className="flex min-h-screen flex-col items-center justify-between p-24 gap-10">
        <h1 className="font-extrabold text-8xl animate-fade">Hi, I&apos;m Hewitt.</h1>
        <h1 className="font-extrabold text-4xl py-5 animate-[appear_150ms_cubic-bezier(0.4,_0,_0.2,_1)_1500ms_forwards]">yap yap yap</h1>
        <div className="relative flex w-full gap-4 text-2xl">
          <Card className="w-full opacity-100" data-aos="fade-in" data-aos-delay={100}>
            <CardHeader>
              <CardTitle className="text-4xl">About me...</CardTitle>
            </CardHeader>
            <CardContent className="">
            <p className="text-xl">
              I&apos;m a 17yo student graduating from <a href="https://www.bxscience.edu/" target="_blank" className="underline">The Bronx High School of Science</a>. I&apos;m also a relatively new programmer of ~2 years, aiming to become a well-rounded developer. I don&apos;t talk very much, but am not at all afraid to share my ideas.
              <br></br>
              <br></br>
              I like playing music in my free time (mainly piano and violin). I&apos;m a classical musician of 12 years and mostly play pieces by Chopin and Liszt, but I try to be versatile as well. I also enjoy running, swimming, and gaming in my free time.
              <br></br>
              <br></br>
              <text className="font-semibold ">Currently interested in:</text>
              <ul>
                <li>&#8226; Graphics programming</li>
                <li>&#8226; Embedded/systems programming</li>
                <li>&#8226; Stock market trading</li>
              </ul>
            </p>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-4xl">My 10 most used languages</CardTitle>
            </CardHeader>
            <CardContent className="">
              <LangChart data={top_10} />
              <CardDescription className="underline cursor-pointer">
                <a href="https://github.com/niooii/portfolio-api/blob/main/backend/src/github_stats.rs" target="_blank">Statistics updated in real-time.</a>
              </CardDescription>
            </CardContent>
          </Card>
        </div>
        <FamiliarTechCard></FamiliarTechCard>
        <div className="relative flex w-full gap-4 text-2xl">
          <Card className="w-full" data-aos="fade-in" data-aos-delay={100}>
            <CardHeader>
              <CardTitle className="text-4xl">Check out some stuff I made!</CardTitle>
            </CardHeader>
            <CardContent className="">
              <h1>Some video embed goes here</h1>
            </CardContent>
          </Card>
          <Card className="w-full opacity-100" data-aos="fade-in" data-aos-delay={200}>
            <CardHeader>
              <CardTitle className="text-4xl">Contact me</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-between gap-5">
              <h1 className="text-2xl font-semibold">Shoot me an email!</h1>
              <EmailForm></EmailForm>
              <h1 className="text-2xl font-semibold pt-8">Or find me on:</h1>
              <SocialMedia logo_url="" handle="oinonionoin" url="https://www.instagram.com/oinonionoin/" />
            </CardContent>
          </Card>
          {/* <Card className="w-full">
            <CardHeader>
              <CardTitle>Have working knowledge of:</CardTitle>
            </CardHeader>
            <CardContent className="">
            {
              rest.map(({ name, total }: { name: string; total: number }) => {
                return <h1 key={name} className="text-l grey">&#8226; {name}</h1>
              })
            }
            </CardContent>
          </Card> */}
        </div>
      
      </div>
      }>
      </Background>
      
    </main>
  );
}