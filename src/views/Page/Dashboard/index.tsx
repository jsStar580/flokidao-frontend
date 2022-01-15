import { ScaleFade } from "@chakra-ui/react";
import DashboardCard from "../../../components/DashboardCard";

export default function Dashboard() {
    return (
        <ScaleFade initialScale={0.1} in={true}>
            <div className="dashboard">
                <div className="DashBoard-Info viewback">
                    <DashboardCard title="Market Cap" value="$2,337,608,025" />
                    <DashboardCard title="FLOK Price" value="$65.5" />
                    <DashboardCard title="wsFLOK Price" value="$394.7" />
                    <DashboardCard title="Circulating Supply(total)" value="3091522/3414272" />
                    <DashboardCard title="Backing per FLOK" value="$43.84" />
                    <DashboardCard title="Current Index" value="5.54 sFLOK" />
                </div>
            </div>
        </ScaleFade>
    )
}