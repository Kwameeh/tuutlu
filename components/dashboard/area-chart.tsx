"use client"

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export default function AreaCharts() {
  // Monthly data with values representing the chart in the image
  const data = [
    { month: "JAN", value: 2800 },
    { month: "FEB", value: 3200 },
    { month: "MAR", value: 2200 },
    { month: "APR", value: 3000 },
    { month: "MAY", value: 3800 },
    { month: "JUN", value: 3400 },
    { month: "JUL", value: 3900 },
    { month: "AUG", value: 5000 },
    { month: "SEP", value: 3000 },
    { month: "OCT", value: 2800 },
    { month: "NOV", value: 2500 },
    { month: "DEC", value: 3800 },
  ]
  
  return (
    <div className="w-full p-0">
      <ChartContainer
        config={{
          value: {
            label: "Monthly Value",
            color: "rgb(79, 70, 229)",
          },
        }}
        
      >
       
          <AreaChart data={data} >
            <defs>
              <linearGradient id="valueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="rgb(59, 130, 246)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="rgb(59, 130, 246)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tickMargin={10} stroke="#94a3b8" />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickMargin={5}
              tickFormatter={(value) => (value === 0 ? "0" : `${value / 1000}k`)}
              domain={[0, 5000]}
              stroke="#94a3b8"
              orientation="right"
            />
            <ChartTooltip
              content={<ChartTooltipContent />}
              cursor={{
                stroke: "rgb(79, 70, 229)",
                strokeWidth: 1,
                
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="rgb(59, 130, 246)"
              fill="url(#valueGradient)"
              strokeWidth={2}
              activeDot={{ r: 6, fill: "rgb(59, 130, 246)", stroke: "#fff", }}
            />
          </AreaChart>
       
      </ChartContainer>
    </div>
  )
}
