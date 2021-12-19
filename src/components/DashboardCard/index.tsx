
import * as S from './styles';

export default function DashboardCard(props: any) {
    return (
        <S.Container>
            <div className="dashboard-card">
                <span className="title">{props.title}</span>
                <span className="val">{props.value}</span>
            </div>
        </S.Container>
    )
}