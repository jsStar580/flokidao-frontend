
export default function DashboardCard(props:any){
    return(
        <div className="dashboard-card">
            <span className="title">{props.title}</span>
            <span className="val">{props.value}</span>
        </div>
    )
}