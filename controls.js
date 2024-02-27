  
   //play button
            function start(e){
                
            //play
                if(e.classList.contains("bxs-caret-right-circle")){
                    e.classList.remove("bxs-caret-right-circle");
                    e.classList.add("bx-pause-circle");
            aud.play();
            }
               
        
          //pause
        else{
            e.classList.add("bxs-caret-right-circle");
              e.classList.remove("bx-pause-circle");
                    aud.pause();
            }
            
              clearInterval(updateTime);
              
            updateTime =  setInterval(clock,1000);
             
           
          }
          
                 //time format
          function clock(){
              let count = 0;
             let audioLen = Math.round(aud.duration);
            let audioTim = Math.round(aud.currentTime);
            let currentMins = Math.floor(audioTim / 60);
            let currentSec = Math.floor(audioTim - currentMins * 60);
             let durationMins = Math.floor(audioLen / 60);
            let durationSec = Math.floor(audioLen - durationMins * 60);
          if(!(isNaN(aud.duration))){
              if(currentMins < 10 ){
                currentMins = "0" + currentMins;
            }
                if(currentSec < 10 ){
                currentSec = "0" + currentSec;
            }
            if(durationMins < 10){
                durationMins= "0" + durationMins;
            }
            if(durationSec < 10){
                durationSec = "0" + durationSec;
            }
            
            }
            else{
                durationMins,durationSec = "0";
            }
            

            //song progress under time function
        document.querySelector(".progress").value = (Math.round(aud.currentTime)* 100) / Math.round(aud.duration);
                duration.innerHTML = durationMins + ":" + durationSec;
                currentTime.innerHTML = currentMins + ":" + currentSec;
                
                //update shortcut details
                document.querySelector(".shtDetails img").src = image.src;
                    document.querySelector(".shtDetail h2").innerHTML = `${art.innerHTML}`;
                    document.querySelector(".shtDetail h3").innerHTML = `${title.innerHTML}`; 
          // repeat once ....
             
   if(document.getElementById("loop").classList.contains("fa-repeat") && duration.innerHTML === currentTime.innerHTML){
                 repeat();
             }
             
               else{
                    //autonext downloaded songs
                 if(document.querySelector(".ne .artist").classList.contains("dwnMusic")){
    
                       if(dwnCount < localStorage.getItem("Downloads").length -1 && duration.innerHTML === currentTime.innerHTML ){
                    dwnCount++; 
          
            switchdwnld(dwnCount); 
                    }
                    if(dwnCount === localStorage.getItem("Downloads").length - 1 &&  duration.innerHTML === currentTime.innerHTML){
                        dwnCount = 0;
                        switchdwnld(dwnCount);
                    }
                    
                    }
                    
                      //autonext trending songs
                 if(document.querySelector(".ne .artist").classList.contains("trendMusic")){
    
                       if(trendId < trends.length -1 && duration.innerHTML === currentTime.innerHTML ){
                    trendId++; 
          
            switchTrend(trendId); 
                    }
                    if(trendId === trends.length - 1 &&  duration.innerHTML === currentTime.innerHTML){
                        trendId = 0;
                        switchTrend(trendId);
                    }
                    
                    }
                    
                       //autonext songs from pop
                 if(document.querySelector(".ne .artist").classList.contains("popMusic")){
    
                       if(popId < pops.length -1&& duration.innerHTML === currentTime.innerHTML ){
                    popId++; 
          
            switchPop(popId); 
                    }
                    if(popId == (pops.length - 1) &&  duration.innerHTML == currentTime.innerHTML){
                        popId = 0;
                        switchPop(popId);
                    }
                    
                    }
                    //autonext track songs
                    
                        if(track < songs.length -1 && duration.innerHTML === currentTime.innerHTML ){
                    track++; 
          alert(document.querySelector(".ne .artist").className);
            switchTrack(track); 
                    }
                    
                    if(track == (songs.length - 1) &&  duration.innerHTML == currentTime.innerHTML){
                        track = 0;
                        switchTrack(track);
                        track++;
                    }   
                 } 
          }
          
//next button
              function next(){
                  
                  //next downloaded songs
                  if(document.querySelector(".ne .artist").classList.contains("dwnMusic")){
                     if(dwnCount < localStorage.getItem("Downloads").length -1 || dwnCount < saved.length -1 ){
                    dwnCount++; 
     
            switchdwnld(dwnCount); 
                    }
                    else{
                        dwnCount = 0;
                        switchdwnld(dwnCount); 
                    }
                  }
                  //next trending music
                  if(document.querySelector(".ne .artist").classList.contains("trendMusic")){
    
                       if(trendId < trends.length -1 ){
                    trendId++; 
          
            switchTrend(trendId); 
                    }
                    else{
                        trendId = 0;
                        switchTrend(trendId); 
                    }
                    }
                    //next pop songs
                    else if(document.querySelector(".ne .artist").classList.contains("popMusic")){
    
                       if(popId < pops.length -1 ){
                    popId++; 
          
            switchPop(popId); 
                    }
                    else{
                        popId = 0;
                        switchPop(popId); 
                    }
                    }
                    //next track songs
                    else{
                        if(track < songs.length -1  ){
                    track++; 
          
            switchTrack(track); 
                    }
                    else{
                        track = 0;
                        switchTrack(track);
                    }
                    }
                    
                    
                }
                
                        //previous button
                function prev(){
                      //prev download songs
                    if(document.querySelector(".ne .artist").classList.contains("dwnMusic")){
    
                       if(dwnCount >0 ){
                    dwnCount--; 
          
            switchdwnld(dwnCount); 
                    }
                    else{
                        dwnCount = localStorage.getItem("Downloads").length - 1;
                        switchdwnld(dwnCount); 
                    }
                    }
                    //prev trend songs
                    if(document.querySelector(".ne .artist").classList.contains("trendMusic")){
    
                       if(trendId > 0 ){
                    trendId--; 
          
            switchTrend(trendId); 
                    }
                    else{
                        trendId = trends.length - 1;
                        switchTrend(trendId); 
                    }
                    }
                    //prev pop songs
                    if(document.querySelector(".ne .artist").classList.contains("popMusic")){
    
                       if(popId > 0 ){
                    popId--; 
          
            switchPop(popId); 
                    }
                    else{
                        popId = pops.length - 1;
                        switchPop(popId); 
                    }
                    }
                    
                    //prev track songs
                    else{
                        if(track >0  ){
                    track--; 
          
            switchTrack(track); 
                    }
                    else{
                        track = songs.length -1;
                        switchTrack(track);
                    }
                    }
             
                }
                
                //loop button
                function shuf(e){
                        let loops = e.className;
                        switch(loops){
                            case "fa fa-random":
                            shuffle();
                            e.className = "fa fa-exchange";
                            break;
                          case "fa fa-exchange":
                          e.className = "fa fa-repeat";
                          break;
                          case "fa fa-repeat":
                           e.className = "fa fa-shuffle";
                           shuffle();
                          break;
                           default:
                             break;
                        }
                }
                //shuffle btn
              function shuffle(){
                 /*   let loops = e.className;
                    alert(loops);
                   //let rand =  Math.floor(Math.random() * (songs.length)) || Math.floor(Math.random() * (pops.length)) || Math.floor(Math.random() * (trends.length));
              switch(loops){
                           case "bx bx-shuffle": */
    if(document.querySelector(".ne .artist").classList.contains("popMusic")){
                       
                             let popRand =  Math.floor(Math.random() * (pops.length));
                   aud.src = pops[popRand].url;
                   image.src = pops[popRand].image;
        art.innerHTML =pops[popRand].artist;
        title.innerText = pops[popRand].title;
        stat.classList.remove("bxs-caret-right-circle");
                    stat.classList.add("bx-pause-circle");
                   aud.play();
                   }
                   if(document.querySelector(".ne .artist").classList.contains("trendMusic")){
                         let rand =  Math.floor(Math.random() * (trends.length));
                     aud.src = trends[rand].url;
                   image.src = trends[rand].image;
        art.innerHTML = trends[rand].artist;
        title.innerText = trends[rand].title;
        stat.classList.remove("bxs-caret-right-circle");
                    stat.classList.add("bx-pause-circle");
                   aud.play();
                   }else{
                           let rand =  Math.floor(Math.random() * (songs.length));
                   aud.src = songs[rand].url;
                   image.src = songs[rand].image;
        art.innerHTML = songs[rand].artist;
        title.innerText = songs[rand].title;
        stat.classList.remove("bxs-caret-right-circle");
                    stat.classList.add("bx-pause-circle");
                   aud.play();
                   }
                   clearInterval(updateTime);
              
            updateTime =  setInterval(clock,1000);
            }
                
                       
                //repeat song 
                function repeat(){
                    aud.currentTime = 0;
                    aud.play();
                    }
                    
                    //change song length
                    function range(){
                        aud.currentTime = (document.querySelector(".progress").value * Math.round(aud.duration))/100;
                         document.querySelector(".progress").value = aud.currentTime;
                    }
                    
             
                //change speed rate input 
                function speedRate(){
                      let prog = document.querySelector(".prog");
                      document.querySelector(".rangeVal").innerText = prog.value + "%";
                   aud.playbackRate = prog.value / 100;
                }
              
           
                            
