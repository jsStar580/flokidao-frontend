import styled from 'styled-components';

export const Container = styled.div`
    .presale {
        .presale-container{
            background:${({ theme }) => theme.presale.presaleBack} !important;
            .presale-header{
                .title{
                    color: ${({ theme }) => theme.presale.presaleTitle}
                }
                .description{
                    color:${({ theme }) => theme.presale.presaleText}
                }
            }

            .info{
                .unit-row{
                    color: ${({ theme }) => theme.presale.presaleText} !important;
                }
            }
            .item{
                .item-body{
                    .unit-row{
                        color: ${({ theme }) => theme.presale.presaleText} !important;
                    }
                }
            }
        }
    }
`;
