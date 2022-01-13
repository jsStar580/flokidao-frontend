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
    },
    stake:{
      stakeBack:string,
      stakeText:string,
      stakeTitle:string,
    }
  }
  
  export const darkTheme: ThemeProps = {
    background: 'black',
    text: 'white',
    toggleback:'#b997ff',
    togglecolor:'white',
    sidebarBack:'#192748',
    sidebarText:'white',
    pageBackground:'#f4f2ed',
    dashboard:{
      cardBack:'#2a3f70',
      cardText:'white'
    },
    header:{
      actionBack:'#2a3f70',
      actionText:'#fff'
    },
    presale:{
      presaleBack:'#2a3f70',
      presaleText:'#fff',
      presaleTitle:'white',
    },
    stake:{
      stakeBack:'#2a3f70',
      stakeText:'#fff',
      stakeTitle:'white',
    }
    
    
  };
  
  export const lightTheme: ThemeProps = {
    background: 'white',
    text: 'black',
    toggleback:'#b997ff',
    togglecolor:'white',
    sidebarBack:'white',
    sidebarText:'#253449',
    pageBackground:'#f4f2ed',
    dashboard:{
      cardBack:'#ffdf9d',
      cardText:'#253449'
    },
    header:{
      actionBack:'#ffdf9d',
      actionText:'#253449'
    },
    presale:{
      presaleBack:'#e2ddd3',
      presaleText:'#2a3f70',
      presaleTitle:'#2a3f70',
    },
    stake:{
      stakeBack:'#e2ddd3',
      stakeText:'#2a3f70',
      stakeTitle:'#2a3f70',
    }
  };