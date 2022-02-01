import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    .ventures {
        .ventures-container{
            background:${({ theme }) => theme.stake.stakeBack} !important;
            .ventures-header {
                .title{
                    color: ${({ theme }) => theme.stake.stakeTitle}
                }
                .description{
                    color:${({ theme }) => theme.stake.stakeText}
                }
            }           
        }
    }`;