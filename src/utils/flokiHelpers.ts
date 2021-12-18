
import useWeb3 from 'hooks/useWeb3';




export async function GetDurationToBlock(blockNumber: number){
  const web3 = useWeb3();  
  const days:number = ((blockNumber - (await web3.eth.getBlockNumber()))*3)/60/60/24
  const daysFloor:number = Math.floor(days)
  const hours:number = (((blockNumber - (await web3.eth.getBlockNumber()))*3)/60/60/24-daysFloor)*24
  const hoursFloor:number = Math.floor(hours)
  const minutes:number = (((((blockNumber - (await web3.eth.getBlockNumber()))*3)/60/60/24-daysFloor)*24-hoursFloor)*60)
  const minutesCeiling:number = Math.ceil(minutes)
  return {daysFloor, hoursFloor, minutesCeiling}
}

export function getDurationFromTimestamp(timestamp: number){
  const days:number = (timestamp/60/60/24)
  const daysFloor:number = Math.floor(days)
  const hours:number = ((timestamp/60/60/24-daysFloor)*24)
  const hoursFloor:number = Math.floor(hours)
  const minutes:number = ((((timestamp/60/60/24-daysFloor)*24-hoursFloor)*60))
  const minutesCeiling:number = Math.ceil(minutes)
  return [daysFloor, hoursFloor, minutesCeiling]
}



export function numberWithCommas(x: number) {x=(Math.round(x*100))/100;return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}


export function formatNumber(num: number) {
  var significantDigits: number = 5
  //if (num < 0) {num=num*(-1)
  //       if (num * 1_000_000_000 < 1) {return num.toFixed(significantDigits + 9)*(-1)}
  //  else if (num * 1_000_000 < 1)     {return (Number(num).toFixed(significantDigits + 6))*(-1)}
  //  else if (num * 1_000 < 1)         {return (Number(num).toFixed(significantDigits + 3))*(-1)}
  //  else if (num < 1)                 {return (Number(num).toFixed(significantDigits))*(-1)}
  //  else if (num < 1_000)             {return (Number(num).toFixed(significantDigits - 3))*(-1)}
  //  else if (num < 1_000_000)         {return numberWithCommas((Number(num).toFixed(significantDigits - 5))*(-1))}
  //  else if (num < 1_000_000_000)     {return numberWithCommas((num.toFixed(0))*(-1))}
  //  else if (num < 1_000_000_000_000) {return ((num / 1_000_000_000).toFixed(1))*(-1) + ' B'}
  //  else if (num < 1000000000000000)  {return ((num / 1_000_000_000_000).toFixed(1))*(-1) + ' T'}}
    //if(num>999999999999999){
    //  num=Math.round(num);
    //  num=BigInt(num);
    //if (num < 1_000_000_000_000_000_000n)          {return tempNumber = ((Number(num / 1_000_000_000_000n))/1_000).toFixed(1) + ' Q'}
    //else if (num < 1_000_000_000_000_000_000_000n) {return tempNumber = ((Number(num / 1_000_000_000_000_000n))/1_000).toFixed(1) + ' Quin'}}
    /* else */ if (num == 0)            {return num.toFixed(2)}
    else if (num * 1_000_000_000 < 1)   {return num.toFixed(significantDigits + 9)}
    else if (num * 1_000_000 < 1)       {return num.toFixed(significantDigits + 6)}
    else if (num * 1_000 < 1)           {return num.toFixed(significantDigits + 3)}
    else if (num < 1)                   {return num.toFixed(significantDigits)}
    else if (num < 1_000)               {return num.toFixed(significantDigits - 3)}
    else if (num < 1_000_000)           {return numberWithCommas(Number(num.toFixed(significantDigits - 5)))}
    else if (num < 1_000_000_000)       {return numberWithCommas(Number(num.toFixed(significantDigits - 5)))}
    //else if (num < 1_000_000_000)       {return (num / 1_000_000).toFixed(1) + ' M'}
    else if (num < 1_000_000_000_000)   {return numberWithCommas(Number(num.toFixed(significantDigits - 5)))}
    //else if (num < 1_000_000_000_000)   {return        (num / 1_000_000_000).toFixed(1) + ' B'}
    else if (num < 1000000000000000)    {return numberWithCommas(Number(num.toFixed(significantDigits - 5)))}
    //else if (num < 1000000000000000)    {return (num / 1_000_000_000_000).toFixed(1) + ' T'}}
}