
     
        //switchTrend
        function switchTrend(trend){
        aud.src = trends[trend].url;
       image.src = trends[trend].image;
        art.innerHTML = trends[trend].artist;
        title.innerText = trends[trend].title;
       document.querySelector(".artist")[trend].style.color ="green";
        aud.currentTime = 0;
        duration.innerHTML = Math.round(aud.duration);
        stat.classList.remove("bxs-caret-right-circle");
                    stat.classList.add("bx-pause-circle");
        aud.play();
        speedRate();
        clearInterval(updateTime);
            updateTime =  setInterval(clock,1000);
           
            for(let i =0;i<likedSong.length;i++){
   
            if(likedSong[i] === trends[trend].title){
         
            likeBtn.classList.add("like");
    }
    else{
        likeBtn.classList.remove("like");
    }
    }
    
    }
    
function switchdwnld(save){
        
        aud.src = dwn[save].url;
       image.src = dwn[save].image;
        art.innerHTML = dwn[save].artist;
        title.innerText = dwn[save].title;
       
        title.classList.add("playing");
        aud.currentTime = 0;
        duration.innerHTML = Math.round(aud.duration);
        stat.classList.remove("bxs-caret-right-circle");
                    stat.classList.add("bx-pause-circle");
        aud.play();
        speedRate();
        clearInterval(updateTime);
            updateTime =  setInterval(clock,1000);
           
            for(let i =0;i<likedSong.length;i++){
   
            if(likedSong[i] === dwn[trend].title){
         
            likeBtn.classList.add("like");
    }
    else{
        likeBtn.classList.remove("like");
    }
    }
    
    }
    
        //switchPop
        function switchPop(trend){
        aud.src = pops[trend].url;
       image.src = pops[trend].image;
        art.innerHTML = pops[trend].artist;
        title.innerText = pops[trend].title;
        aud.currentTime = 0;
        duration.innerHTML = Math.round(aud.duration);
        stat.classList.remove("bxs-caret-right-circle");
                    stat.classList.add("bx-pause-circle");
        aud.play();
        speedRate();
        clearInterval(updateTime);
            updateTime =  setInterval(clock,1000);
           
            for(let i =0;i<likedSong.length;i++){
   
            if(likedSong[i] === pops[trend].title){
         
            likeBtn.classList.add("like");
 }
    }
    
    }
    
        //switchTrack 
   function switchTrack(track){
               aud.src = songs[track].url;
       image.src = songs[track].image;
        art.innerHTML = songs[track].artist;
        title.innerText = songs[track].title;
        aud.currentTime = 0;
        title.classList.add("playing");
        duration.innerHTML = Math.round(aud.duration);
        stat.classList.remove("bxs-caret-right-circle");
                    stat.classList.add("bx-pause-circle");
        aud.play();
        speedRate();
        clearInterval(updateTime);
            updateTime =  setInterval(clock,1000);
           
            for(let i =0;i<likedSong.length;i++){
   
            if(likedSong[i] === songs[track].title){
         
            likeBtn.classList.add("like");
    }
    else{
        likeBtn.classList.remove("like");
    }
    }
    
    }
    

