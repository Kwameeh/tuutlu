interface ScoreCardProps {
    score: number
    maxScore: number
    period: string
  }
  
  export default function ScoreCard({ score, maxScore, period }: ScoreCardProps) {
    return (
    
    
        <div>
          <div className="text-sm font-medium">Average</div>
          <div className="text-lg font-bold">Assignment Score</div>
          <div className="text-sm text-yellow-500 mt-1">{period}</div>
          <div className="text-4xl font-bold mt-2">
            {score}/{maxScore}
          </div>
        </div>
     
    )
  }
  