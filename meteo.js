      
    function showCity() {
        let villeCourante =  document.getElementById( "ville" ).value;
        
         
         let cities = document.getElementsByClassName("city");
         
         let l = cities.length;
        for (let i=0; i<l; i++) {
            if(cities[i].id==villeCourante){
                cities[i].style.display= ""; 
              
              
            }else {
                cities[i].style.display= "none";    
            }
                
            
         }
       
        } 
