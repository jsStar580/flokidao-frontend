import styled from 'styled-components';

export const Container = styled.div`
    .sidebar {
        background:${({ theme }) => theme.sidebarBack};
        
    }
    .sidebar-logo{
        small{
            color:${({ theme }) => theme.sidebarText} !important;
        }
    }
    .sidebar-link{
        color:${({ theme }) => theme.sidebarText} !important;
    }
    .sidebar-footer{
        Button{
            color:${({ theme }) => theme.sidebarText} !important;
        }
    }

`;
