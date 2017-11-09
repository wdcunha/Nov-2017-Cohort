for(i = 2014; i <= 2050; i++){
let start = new Date(i,0,1);
  if(start.getDay() === 0){
    console.log(`${start} is the first Sunday`)
      process.exit();
  }
}
