import styled from 'styled-components';

export const Container = styled.div`
width:350px;
@media(max-width: 768px){
    width:100%;
}
.dashboard-card{ {
        .title{
            color:${({ theme }) => theme.markColor.title};
        }
        .val{
            color:${({ theme }) => theme.markColor.value};
        }
    }
`;
