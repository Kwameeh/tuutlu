import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquareIcon } from "lucide-react"

// Messages data
const messages = [
  {
    id: 1,
    name: "Mr. & Mrs Brown",
    child: "Kweku Brown",
  },
  {
    id: 2,
    name: "Mr. & Mrs Apraku",
    child: "Nana Apraku",
  },
  {
    id: 3,
    name: "Mr. & Mrs Kwansah",
    child: "Kofi Kwansah",
  },
]

export default function MessagesCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-indigo-600">Recent Messages</CardTitle>
        <MessageSquareIcon className="h-5 w-5 text-gray-500" />
      </CardHeader>
      <CardContent className="pt-2">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=32&width=32"
                    alt={message.name}
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium text-sm">{message.name}</div>
                  <div className="text-xs text-gray-500">Parents of {message.child}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="link" className="text-indigo-600 h-auto p-0 text-xs">
                  view
                </Button>
                <Button variant="link" className="text-indigo-600 h-auto p-0 text-xs">
                  send message
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
