"use client"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import LangLabel from "./lang_label";

interface LanguageData {
    name: string;
    total: number;
}
  
interface LangChartProps {
    data: LanguageData[];
}

export function LangChart({ data }: LangChartProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          interval={0}
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}%`}
        />
        <Bar
          dataKey="total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  )
}