import styled from 'styled-components';

export const Container = styled.div`
    .page {
        background-color:${({ theme }) => theme.pageBackground} !important;
        
    }
    .Header.solid{
        background:${({ theme }) => theme.headerBack} !important;
    }
    .viewback{
        background: ${({ theme }) => theme.viewBack.back} !important;
        border: 1px solid #F2BC07;
        border-radius:10px;
    }
    .actionButton{
        background: ${({ theme }) => theme.actionButton.actionBack} !important;
        color:${({ theme }) => theme.actionButton.actionText} !important;
        border: 1px solid ${({ theme }) => theme.actionButton.actionBorder} !important;
    }
`;
