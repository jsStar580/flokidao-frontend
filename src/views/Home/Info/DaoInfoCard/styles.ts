import styled from 'styled-components';

export const Container = styled.div`
    padding: 5em 5em 5em 0em;
    width:50%;
    .DaoInfoCard{
        display:flex;
        flex-direction:column;
        .DaoInfoCat{
            color:#f2b42a;
        }
        .DaoInfoTitle{
            margin-top:0.5em;
            font-size:30pt;
            color:#192748;
        }
        .DaoInfoDescription{
            color:#51545b;

        }
    }
    @media (max-width:768px) {
        padding: 0px;
        width:100%;
        .DaoInfoCard{
            margin-top:20px;
            .DaoInfoTitle{
                margin-top:0px;
            }
        }
    }
`;
