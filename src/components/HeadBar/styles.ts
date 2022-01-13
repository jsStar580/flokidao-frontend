import styled from 'styled-components';

export const Container = styled.div`
    position:fixed;
    width:100%;
    padding-left:20px;
    padding-right:20px;
    background:#f4f2ed;
    z-index:1;
    .Header-Flex{
        padding-right:200px;
    }
    .headerAction {
        background:${({ theme }) => theme.header.actionBack};
        color:${({ theme }) => theme.header.actionText};
        
    }
`;
