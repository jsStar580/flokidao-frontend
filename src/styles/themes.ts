import { whiten } from "@chakra-ui/theme-tools";

export interface ThemeProps {
    background: string;
    text: string;
    toggleback:string,
    togglecolor:string,
    sidebarBack:string,
    sidebarText:string,
    pageBackground:string,
    dashboard:{
      cardBack:string,
      cardText:string
    },
    header:{
      actionBack:string,
      actionText:string
    },
    presale:{
      presaleBack:string,
      presaleText:string,
      presaleTitle:string,
    }
  }
  
  export const darkTheme: ThemeProps = {
    background: 'black',
    text: 'white',
    toggleback:'#b997ff',
    togglecolor:'white',
    sidebarBack:'#354255eb',
    sidebarText:'white',
    pageBackground:'#1a2230fa',
    dashboard:{
      cardBack:'#253449',
      cardText:'white'
    },
    header:{
      actionBack:'#5c82a547',
      actionText:'#fff'
    },
    presale:{
      presaleBack:'inear-gradient(to top, #1a2230, #303f54)',
      presaleText:'#728ea2',
      presaleTitle:'white',
    }
    
    
  };
  
  export const lightTheme: ThemeProps = {
    background: 'white',
    text: 'black',
    toggleback:'#b997ff',
    togglecolor:'white',
    sidebarBack:'white',
    sidebarText:'#253449',
    pageBackground:'linear-gradient(1deg, #fad3386b, transparent)',
    dashboard:{
      cardBack:'white',
      cardText:'#253449'
    },
    header:{
      actionBack:'#fdf1c1',
      actionText:'#253449'
    },
    presale:{
      presaleBack:'linear-gradient(to top, #f7ea8a, #e7e7e7,#f7ea8a)',
      presaleText:'#4e5a6b',
      presaleTitle:'#4e5a6b',
    }
  };