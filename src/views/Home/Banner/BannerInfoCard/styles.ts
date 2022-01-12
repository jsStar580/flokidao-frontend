import styled from 'styled-components';

export const Container = styled.div`
    display:inline-block;
    max-width:450px;
    width:100%;
    .BannerInfoCard{
        width:100%;
        display:flex;
        align-items: center;
        margin-top:1.3em;
        @media (max-width:768px) {
            img{
                width:50px;
            }
        }
        .info-body{
            padding-left:20px;
            display:flex;
            flex-direction: column;
            font-size:18pt;
            @media (max-width:768px) {
                font-size:15pt;
            }
        }
    }

`;
