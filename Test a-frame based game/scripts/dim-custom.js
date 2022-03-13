   var colorChecker = 0;
   var clicksCounter = 0;
   
   function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
   
AFRAME.registerComponent('clickhandler', {
        schema: {
          txt: {default:'default'}
        },        
        init: function () {
          var data = this.data;
          var el = this.el;        
          el.addEventListener('click', function () {            
           console.log(data.txt);
           
           if (colorChecker == 0) {

            colorChecker = getRandomInt(3);
            
            if (colorChecker == 0) {
            document.getElementById("perigrafi").style.display = "block";
            document.getElementById("perigrafi2").style.display = "none";
            document.getElementById("perigrafi3").style.display = "none";
            }
            else if (colorChecker == 1) {
            document.getElementById("perigrafi").style.display = "none";
            document.getElementById("perigrafi2").style.display = "block";
            document.getElementById("perigrafi3").style.display = "none";
            }
            else {
            document.getElementById("perigrafi").style.display = "none";
            document.getElementById("perigrafi2").style.display = "none";
            document.getElementById("perigrafi3").style.display = "block";
            }
            
            clicksCounter++;
            document.getElementById("counterBox").innerHTML = clicksCounter;
            if (clicksCounter == 10) {
            
            Swal.fire({
  title: 'Συγχαρητήρια, ολοκλήρωσες επιτυχώς το επίπεδο!',
  showDenyButton: true,
  showCancelButton: false,
  confirmButtonText: `Επόμενο Επίπεδο`,
  denyButtonText: `Ξαναπαίξε το ίδιο Επίπεδο`,
  cancelButtonText: `Κλείσιμο Παραθύρου`,
}).then((result) => {
  if (result.isConfirmed) {
window.location.href = "levels/2/index.html";
  } else if (result.isDenied) {
    location.reload(); 
  }
})
            }
            }
            else {
            if (clicksCounter > 0) {
            clicksCounter--;
            document.getElementById("counterBox").innerHTML = clicksCounter;
            }
            }
          });        
        }
      });
      
      
      
      AFRAME.registerComponent('clickhandler2', {
        schema: {
          txt: {default:'default'}
        },        
        init: function () {
          var data = this.data;
          var el = this.el;        
          el.addEventListener('click', function () {            
           console.log(data.txt);
           
           if (colorChecker == 1) {
   
            colorChecker = getRandomInt(3);
            
             if (colorChecker == 0) {
            document.getElementById("perigrafi").style.display = "block";
            document.getElementById("perigrafi2").style.display = "none";
            document.getElementById("perigrafi3").style.display = "none";
            }
            else if (colorChecker == 1) {
            document.getElementById("perigrafi").style.display = "none";
            document.getElementById("perigrafi2").style.display = "block";
            document.getElementById("perigrafi3").style.display = "none";
            }
            else {
            document.getElementById("perigrafi").style.display = "none";
            document.getElementById("perigrafi2").style.display = "none";
            document.getElementById("perigrafi3").style.display = "block";
            }
            
            clicksCounter++;
            document.getElementById("counterBox").innerHTML = clicksCounter;
             if (clicksCounter == 10) {
               Swal.fire({
  title: 'Συγχαρητήρια, ολοκλήρωσες επιτυχώς το επίπεδο!',
  showDenyButton: true,
  showCancelButton: false,
  confirmButtonText: `Επόμενο Επίπεδο`,
  denyButtonText: `Ξαναπαίξε το ίδιο Επίπεδο`,
  cancelButtonText: `Κλείσιμο Παραθύρου`,
}).then((result) => {
  if (result.isConfirmed) {
window.location.href = "levels/2/index.html";
  } else if (result.isDenied) {
   location.reload(); 
  }
})
            }
            }
            else {
          if (clicksCounter > 0) {
            clicksCounter--;
            document.getElementById("counterBox").innerHTML = clicksCounter;
            }
            }
          });        
        }
      });
      
      
      
      AFRAME.registerComponent('clickhandler3', {
        schema: {
          txt: {default:'default'}
        },        
        init: function () {
          var data = this.data;
          var el = this.el;        
          el.addEventListener('click', function () {            
           console.log(data.txt);
           
           if (colorChecker == 2) {
      
           colorChecker = getRandomInt(3);
           
            if (colorChecker == 0) {
            document.getElementById("perigrafi").style.display = "block";
            document.getElementById("perigrafi2").style.display = "none";
            document.getElementById("perigrafi3").style.display = "none";
            }
            else if (colorChecker == 1) {
            document.getElementById("perigrafi").style.display = "none";
            document.getElementById("perigrafi2").style.display = "block";
            document.getElementById("perigrafi3").style.display = "none";
            }
            else {
            document.getElementById("perigrafi").style.display = "none";
            document.getElementById("perigrafi2").style.display = "none";
            document.getElementById("perigrafi3").style.display = "block";
            }
            
            clicksCounter++;
            document.getElementById("counterBox").innerHTML = clicksCounter;
             if (clicksCounter == 10) {
                 Swal.fire({
  title: 'Συγχαρητήρια, ολοκλήρωσες επιτυχώς το επίπεδο!',
  showDenyButton: true,
  showCancelButton: false,
  confirmButtonText: `Επόμενο Επίπεδο`,
  denyButtonText: `Ξαναπαίξε το ίδιο Επίπεδο`,
  cancelButtonText: `Κλείσιμο Παραθύρου`,
}).then((result) => {
  if (result.isConfirmed) {
window.location.href = "levels/2/index.html";
  } else if (result.isDenied) {
    location.reload(); 
  }
})
            }
            }
            else {
          if (clicksCounter > 0) {
            clicksCounter--;
            document.getElementById("counterBox").innerHTML = clicksCounter;
            }
            }
          });        
        }
      });