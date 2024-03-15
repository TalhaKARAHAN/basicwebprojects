var name = prompt("Lütfen adınızı girin:");
      
        document.getElementById("myName").innerHTML = name;




     function showTime() {
      var now = new Date();
      var timeString = now.toLocaleTimeString(); 

      document.getElementById("myClock").innerHTML = timeString;
  }
 
  setInterval(showTime, 1000);
  
  showTime();








