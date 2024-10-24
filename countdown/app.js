const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const giveaway = document.querySelector('.giveaway')
  const deadline = document.querySelector('.deadline')
  const items =  document.querySelectorAll('.deadline-format h4')



  let tempDate = new Date();
  let TempYear = tempDate.getFullYear();
  let tempMonth = tempDate.getMonth();
  let tempDay = tempDate.getDate();

  const futureDate = new Date(TempYear,tempMonth,tempDay + 10, 11,30,0)


//   let futureDate = new Date(2024,10,24,17,30,0);
  const year = futureDate.getFullYear();  
  const hours =  futureDate.getHours();
  const minutes =  futureDate.getMinutes();
  const month = futureDate.getMonth();
  const date = futureDate.getDate();
  const weekday = weekdays[futureDate.getDay()];

  giveaway.textContent = `giveaway ends on ${weekday} ${date} ${months[month]} ${year} ${hours}:${minutes}am`

//   future time in milliseconds

const futureTime =  futureDate.getTime();


 let getRemainingTime = () => {
    const today = new Date().getTime()
    const difference =  futureTime - today
    // t is in milliseconds

    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60 min
    // 1day = 24 hours

    // values in ms 
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMin = 60*1000;
    const oneSec = 1000;
    

    let days = difference/oneDay
    days =  Math.floor(days);
    let remHours = Math.floor(difference % oneDay/oneHour)

    let remMin = Math.floor((difference % oneHour) / oneMin)
    let remSec = Math.floor((difference % oneMin) / oneSec)

    const values = [days,remHours,remMin,remSec]
    // console.log(values);

    const format = (item) => {
        if(item <10 ) {
            return item = `0${item}`
        }
            return item
    }
    
     items.forEach((item,index) => {
        item.innerHTML = format(values[index])
        
     })
     if (difference < 0 ) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">Sorry! This giveaway has expired.</h4>`
     }
    
}
//  countdown
let countdown = setInterval(getRemainingTime,1000);

 getRemainingTime();


