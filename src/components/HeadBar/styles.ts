import styled from 'styled-components';

export const Container = styled.div`
    .headerAction {
        background:${({ theme }) => theme.header.actionBack};
        color:${({ theme }) => theme.header.actionText};
        
    }
`;
