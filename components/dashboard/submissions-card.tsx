import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileIcon } from "lucide-react"

// Submission data
const submissions = [
  {
    id: 1,
    name: "Matthew Sampson",
    subject: "Math Homework",
    time: "3h ago",
  },
  {
    id: 2,
    name: "Crankson Hammer",
    subject: "English Homework",
    time: "2h ago",
  },
  {
    id: 3,
    name: "Kwame Adjo",
    subject: "Science Homework",
    time: "6h ago",
  },
]

export default function SubmissionsCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-indigo-600">Recent Submissions</CardTitle>
        <FileIcon className="h-5 w-5 text-gray-500" />
      </CardHeader>
      <CardContent className="pt-2">
        <div className="space-y-4">
          {submissions.map((submission) => (
            <div key={submission.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=32&width=32"
                    alt={submission.name}
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium text-sm">{submission.name}</div>
                  <div className="text-xs text-gray-500">
                    {submission.subject} • Submitted {submission.time}
                  </div>
                </div>
              </div>
              <Button variant="link" className="text-indigo-600 h-auto p-0 text-xs">
                view
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
