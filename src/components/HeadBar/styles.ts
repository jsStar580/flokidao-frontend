import styled from 'styled-components';

export const Container = styled.div`
    position:fixed;
    width:calc(100% - 280px);
    padding-left:10px;
    padding-right:10px;
    z-index:1;
    @media(max-width:768px){
        width:100%;
    }
    .Header-Flex{
        padding-right:0px;
    }

    .headerAction {
        background:transparent;
        border:1px solid ${({ theme }) => theme.header.actionBack};
        color:${({ theme }) => theme.header.actionText};
        
    }
    .toggleThemeBtn{
        color:#f2bc07;
    }
`;
