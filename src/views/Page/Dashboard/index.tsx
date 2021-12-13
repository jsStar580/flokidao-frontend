import { ScaleFade } from "@chakra-ui/react";
import DashboardCard from "../../../components/DashboardCard";

export default function Dashboard() {
    return (
        <ScaleFade initialScale={0.1} in={true}>
            <div className="dashboard">
                <DashboardCard title="FLOK Price" value="$4485.95" />
                <DashboardCard title="Market Cap" value="$2,337,608,025" />
                <DashboardCard title="TVL" value="$1,525,031,294" />
                <DashboardCard title="APY" value="81,709.6%" />
                <DashboardCard title="Current Index" value="5.54 FLOK" />
                <DashboardCard title="Treasury Balance" value="$766,200,826" />
                <DashboardCard title="Backing per $FLOK" value="$1,951" />
                <DashboardCard title="Runway" value="412.2 Days" />
            </div>
        </ScaleFade>
    )
}