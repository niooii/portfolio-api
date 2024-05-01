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
  var lang_stats = GetLangStats();
  var top_10 = lang_stats.slice(0, 10);
  var rest = lang_stats.slice(10);
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-between p-24 gap-10">
        <h1 className="font-extrabold text-8xl" data-aos="fade-up">Hi, I&apos;m Hewitt.</h1>
        <h1 className="font-extrabold text-4xl">yap yap yap</h1>
        <div className="flex w-full gap-4">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Some things about me...</CardTitle>
            </CardHeader>
            <CardContent className="">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Who am I?</AccordionTrigger>
                <AccordionContent>
                  Hi! I&apos;m a 17yo student graduating from <a href="https://www.bxscience.edu/" target="_blank" className="underline">The Bronx High School of Science</a>. I&apos;m also a programmer hacking his way around, aiming to become a well-rounded developer. I&apos;ve been programming for ~2 years. I try my best to pull my weight and take initiative while working with others :)
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>My hobbies?</AccordionTrigger>
                <AccordionContent>  
                  I like playing music in my free time (mainly piano and violin). I&apos;m a classical musician of 12 years and am obsessed with Chopin and Liszt, but I try to be versatile as well. I also enjoy running, swimming, and gaming in my free time.
                  <br></br>
                  <br></br>
                  <p className="font-semibold ">Currently interested in:</p>
                  <ul>
                    <li>&#8226; Graphics programming</li>
                    <li>&#8226; Embedded/systems programming</li>
                    <li>&#8226; Stock market trading</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Something....</AccordionTrigger>
                <AccordionContent>
                  What do I add here..
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>My 10 most used languages</CardTitle>
            </CardHeader>
            <CardContent className="">
              <LangChart data={top_10} />
              <CardDescription className="underline cursor-pointer">
                <a href="https://github.com/niooii/portfolio-api/blob/main/backend/src/github_stats.rs" target="_blank">Statistics updated in real-time.</a>
              </CardDescription>
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
      
      <FamiliarTechCard></FamiliarTechCard>
      </div>
    </main>
  );
}