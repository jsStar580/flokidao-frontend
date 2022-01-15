import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    .stake {
        .stake-container{
            background:${({ theme }) => theme.stake.stakeBack} !important;
            .stake-header {
                .title{
                    color: ${({ theme }) => theme.stake.stakeTitle}
                }
                .description{
                    color:${({ theme }) => theme.stake.stakeText}
                }
            }
            .stacking-form{
                .inputWithElement{
                    border-color:${({ theme }) => theme.stake.stakeText} !important;
                }
            }
            .overview-info{
                .info-item{
                    color:${({ theme }) => theme.markColor.title};
                    .value{
                        color:${({ theme }) => theme.markColor.value};
                    }
                }
            }
            .chakra-tabs__tab[aria-selected = true]{
                color:${({ theme }) => theme.markColor.value};
            }
            .unit-row{
                color:${({ theme }) => theme.stake.stakeText};
            }
        }
    }`;