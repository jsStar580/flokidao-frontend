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
    headerBack:string,
    presale:{
      presaleBack:string,
      presaleText:string,
      presaleTitle:string,
    },
    stake:{
      stakeBack:string,
      stakeText:string,
      stakeTitle:string,
    },
    viewBack:{
      back:string,
    },
    markColor:{
      title:string,
      value:string
    },
    actionButton:{
      actionBack:string,
      actionText:string,
      actionBorder:string,
    }
  }
  
  export const darkTheme: ThemeProps = {
    background: 'black',
    text: 'white',
    toggleback:'#b997ff',
    togglecolor:'white',
    sidebarBack:'#2b3040',
    sidebarText:'white',
    pageBackground:'#0C0C0C',
    dashboard:{
      cardBack:'#2a3f70',
      cardText:'white'
    },
    header:{
      actionBack:'#F2BC07',
      actionText:'#F2BC07'
    },
    headerBack:'#0C0C0C',
    presale:{
      presaleBack:'#0C0C0C',
      presaleText:'#fff',
      presaleTitle:'white',
    },
    stake:{
      stakeBack:'#0C0C0C',
      stakeText:'#fff',
      stakeTitle:'white',
    },
    viewBack:{
      back:'#0C0C0C',
    },
    markColor:{
      title:'#fff',
      value:'#F2BC07'
    },
    actionButton:{
      actionBack:'#0C0C0C',
      actionText:'#fff',
      actionBorder:'#F2BC07',
    }
    
    
  };
  
  export const lightTheme: ThemeProps = {
    background: 'white',
    text: 'black',
    toggleback:'#b997ff',
    togglecolor:'white',
    sidebarBack:'white',
    sidebarText:'#253449',
    pageBackground:'linear-gradient(2.46deg, #FFE0B3 -9.31%, rgba(255, 240, 217, 0) 102.37%), #FFFFFF',
    dashboard:{
      cardBack:'#ffdf9d',
      cardText:'#253449'
    },
    header:{
      actionBack:'#F2BC07',
      actionText:'#253449'
    },
    headerBack:'#fff',

    presale:{
      presaleBack:'linear-gradient(180deg, #FFF3E1 0%, #FFDFAD 100%)',
      presaleText:'#253449',
      presaleTitle:'#253449',
    },
    stake:{
      stakeBack:'linear-gradient(180deg, #FFF3E1 0%, #FFDFAD 100%)',
      stakeText:'#253449',
      stakeTitle:'#253449',
    },
    viewBack:{
      back:'linear-gradient(180deg, #FFF3E1 0%, #FFDFAD 100%)',
    },
    markColor:{
      title:'#253449',
      value:'#2a3f70'
    },
    actionButton:{
      actionBack:'#FAD338',
      actionText:'#253449',
      actionBorder:'#F2BC07',
    }
  };