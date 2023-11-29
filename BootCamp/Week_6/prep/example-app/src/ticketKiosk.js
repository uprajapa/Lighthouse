function ticketKiosk(customerAge){

  return ( customerAge <= 12 && "Here is your free ticket" )
  || ( customerAge >= 13 &&  customerAge <= 17 && "Here is your discounted teen ticket" )
  || ( customerAge >= 18 && customerAge <= 64 && "Here is your adult ticket" )
  || ( customerAge >= 65 && "Here is your discounted senior ticket" );
};

// ticketKiosk(15);
console.log(ticketKiosk(70));