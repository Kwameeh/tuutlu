import AreaCharts from "@/components/dashboard/area-chart";
import Dashboard from "@/components/dashboard/dashboard";
import TdashboardBtn from "@/components/tdashboard-btn";
import { MessageSquarePlus } from "lucide-react";

const TeachersPage = () => { 
    return (
        <div className="py-8">
            <div className="flex items-center gap-2 justify-between px-8">   
          <TdashboardBtn Icon={MessageSquarePlus} href="/teachers" title="Send Parent a Message" variant="default" /> 
          <TdashboardBtn Icon={MessageSquarePlus} href="/teachers" title="Send Parent a Message" variant="outline" />  
          <TdashboardBtn Icon={MessageSquarePlus} href="/teachers" title="Send Parent a Message" variant="outline" />  
            </div>

         <div className="w-full">
            <Dashboard/>
         
         </div>
        </div>
    )
}  

export default TeachersPage;
