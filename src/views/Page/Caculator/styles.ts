import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    .calculator {
        .calculator-container{
            background:${({ theme }) => theme.stake.stakeBack} !important;
            .calculator-header {
                .title{
                    color: ${({ theme }) => theme.stake.stakeTitle}
                }
                .description{
                    color:${({ theme }) => theme.stake.stakeText}
                }
            }
            .overview-info{
                .info-item{
                    color:${({ theme }) => theme.stake.stakeText};
                }
            }
            .calculator-form{
                .form-item {
                    span {
                        color:${({ theme }) => theme.stake.stakeText};
                    }
                    .inputWithElement{
                        border-color:${({ theme }) => theme.stake.stakeText} !important;
                    }
                }
            }
            .calculator-slider{
                .slider-title {
                    color:${({ theme }) => theme.stake.stakeText};
                }
            }
            .unit-row{
                color:${({ theme }) => theme.stake.stakeText};
            }
        }
    }`;