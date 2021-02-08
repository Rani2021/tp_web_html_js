
            
           
    function showCity() {
        let villeCourante =  document.getElementById( "ville" ).value;
        
         console.log(villeCourante); 
         let cities = document.getElementsByClassName("city").item;
         let l = cities.length;
        for (let i=0; i<l; i++) {
            if(villeCourante!="lyon" || villeCourante=="paris" || villeCourante=="lille"){
                cities[i].style.display= "none";
            }else{
                var result = cities[i].options[cities[i].selectedIndex].text;
                cities[i].style.display= result;
               
                
            }
                
            
         }
        } 
