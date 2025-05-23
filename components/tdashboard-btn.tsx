import Link from "next/link"
import { Button } from "./ui/button"
import { LucideIcon } from "lucide-react"

const TdashboardBtn = ({Icon, href, title, variant}: {Icon: LucideIcon, href: string, title: string, variant: "default" | "outline"}) => {
  return (
    <Button variant={variant} className="gap-2 " >
        {Icon && <Icon className="w-4 h-4" />}
        <Link href={href}>{title}</Link>
    </Button>
  )
}

export default TdashboardBtn
