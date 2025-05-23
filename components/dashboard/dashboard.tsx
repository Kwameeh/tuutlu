import { Card } from "../ui/card";
import AreaCharts from "./area-chart";
import MessagesCard from "./messages-card";
import ScoreCard from "./score-card";
import SubmissionsCard from "./submissions-card";


export default function Dashboard() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart and Score Section */}
        <div className="lg:col-span-3 p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
            <div className="lg:col-span-2">
              <AreaCharts/>
            </div>
            <div className="flex flex-col justify-center">
              <ScoreCard score={78} maxScore={100} period="September, 2024" />
            </div>
          </div>
        </div>

        {/* Recent Submissions */}
        <div className="lg:col-span-3 xl:col-span-1 xl:row-span-2">
          <SubmissionsCard />
        </div>

        {/* Recent Messages */}
        <div className="lg:col-span-3 xl:col-span-2 xl:row-span-2">
          <MessagesCard />
        </div>
      </div>
    </div>
  )
}
