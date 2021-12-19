import styled from 'styled-components';

export const Container = styled.div`
.dashboard-card{ {
        background:${({ theme }) => theme.dashboard.cardBack};
        .title{
            color:${({ theme }) => theme.dashboard.cardText};
        }
        .val{
            color:${({ theme }) => theme.dashboard.cardText};
        }
    }
`;
