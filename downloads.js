    
    //download
    
        let dwn = [];
        let items = document.querySelectorAll(".musicHome");
          function save(e){
              if(navigator.onLine){  
              //allow one click
              e.disabled = "true";

             setTimeout(()=>{
                  document.querySelector(".alert-top").classList.add("slideDown");
              document.querySelector(".alert-top p").innerHTML = `Downloading song titled ${e.parentElement.parentElement.children[0].children[1].children[1].innerHTML}`;
              
              },1000);
              setTimeout(function(){ 
                  document.querySelector(".alert-top").classList.remove("slideDown");
              },4500);
               
               document.querySelector(".downloadSongs").innerHTML += `
                     <div class = "musicHome">
                       <div class = "music">
                        <img src= "${e.parentElement.parentElement.children[0].children[0].src}" alt="image" width="70" height="70"></img>
                       <div class = "musicDetail dwnDetail" onclick="dwnld(this)">
                           <h2 class = "artist">${e.parentElement.parentElement.children[0].children[1].children[0].innerHTML}</h2>
                           <h3 class = "song" title = "${e.parentElement.parentElement.children[0].children[1].children[1].title}">${e.parentElement.parentElement.children[0].children[1].children[1].innerHTML}</h3>
                             <div class="wrapper">  
          <div id="progress" ></div>
                                   <span class = "percent">0%</span>
                       </div>
                       </div>
                    <i class="bx bx-trash trash"  onclick="del(this)" style="color:red;" ></i>
               </div>
                   `;
               update();
                   
                      //to save key points to download
                    
        
dwn.push({
                  "title":`${e.parentElement.parentElement.children[0].children[1].children[1].innerHTML}`,
                      "url": `${e.parentElement.parentElement.children[0].children[1].children[1].title}`,
                   "image": `${e.parentElement.parentElement.children[0].children[0].src.slice(88)}` ,
                    "artist": `${e.parentElement.parentElement.children[0].children[1].children[0].innerHTML}`
                  
                   });
         localStorage.setItem("Downloads",JSON.stringify(dwn));
         localStorage.getItem("Downloads");
                  }
                else{
                    e.disabled = "true";
                    offline();
                    }
           }
           
                document.querySelectorAll(".save").forEach((e)=>{
              e.addEventListener("click",(e)=>{
      if(navigator.onLine){
              setTimeout(()=>{
                  document.querySelector(".alert-top").classList.add("slideDown");
              document.querySelector(".alert-top p").innerHTML = `Downloading song titled ${e.target.parentElement.parentElement.parentElement.parentElement.querySelector(".title").innerHTML} `;
              
              },1000);
              setTimeout(function(){ 
                  document.querySelector(".alert-top").classList.remove("slideDown");
              },3500);
               
                    document.querySelector(".downloadSongs").innerHTML += `
                     <div class = "musicHome">
                       <div class = "music">
                        <img src="${e.target.parentElement.parentElement.parentElement.parentElement.querySelector('img').src}" alt="image" width="70" height="70"></img>
                       <div class = "musicDetail dwnDetail" onclick="dwnld(this)">
                           <h2 class = "artist">${e.target.parentElement.parentElement.parentElement.parentElement.querySelector(".artist").innerHTML}</h2>
                           <h3 class = "song" title = "${e.target.parentElement.parentElement.parentElement.parentElement.querySelector('audio').src}">${e.target.parentElement.parentElement.parentElement.parentElement.querySelector(".title").innerHTML}</h3>
                            <div class="wrapper">  
          <div id="progress" ></div>
                                   <span class = "percent">0%</span>
                       </div>
                       </div>
                       
                    </div>
                              
                    <i class="bx bx-trash trash"  onclick="del(this)" style="color:red;" ></i>
               </div>
                   `;
                   
                  update();
              //to save key points to download
              dwn.push( `
                  "title":${e.target.parentElement.parentElement.parentElement.parentElement.querySelector('.title').innerHTML},
                      "url": ${e.target.parentElement.parentElement.parentElement.parentElement.querySelector('audio').src.slice(88)},
                   "image": ${e.target.parentElement.parentElement.parentElement.parentElement.querySelector('img').src.slice(88)},
                    "artist": ${e.target.parentElement.parentElement.parentElement.parentElement.querySelector('.artist').innerHTML}
                  
                 `  );
               localStorage.setItem("Downloads",JSON.stringify(dwn));
             }
              
                else{
                    offline();
                    }
                   })
             
                   let a = document.getElementById("a");
                   a.download = aud.src;
                   a.href = aud.src;
                })
         //store downloaded audio
                       function update() { 

  var element = document.getElementById("progress");    
var elem = document.querySelector(".percent");
  var width = 1; 

  var identity = setInterval(scene, 10); 

  function scene() { 

    if (width >= 100) { 

      clearInterval(identity); 
element.style.display ="none";
elem.innerHTML = "Downloaded";
    } else { 

      width++;  

      element.style.width = width + '%';  

      elem.innerHTML = width * 1  + '%'; 

    } 

  } 
} 
                       
                                 //play download music
          
                    function dwnld(e){
          
disAll.style.display = "none";
section1.style.display ="flex";
document.querySelector(".downloads").style.display ="none";
document.getElementById("discoverPage").style.display ="none";
document.getElementById("profile").src = `${e.parentElement.children[0].src}`;
            //add trendMusic to artist to distinguish it from other music
document.querySelector(".ne .artist").classList.remove("trendMusic");
document.querySelector(".ne .artist").classList.remove("popMusic");
document.querySelector(".ne .artist").classList.add("dwnMusic");
     //write out music details
 document.querySelector(".ne .artist").innerHTML = e.children[0].innerHTML;
document.querySelector(".ne .title").innerHTML = e.children[1].innerHTML;
              aud.src = e.children[1].title;
              aud.play();
              clearInterval(updateTime);
            updateTime =  setInterval(clock,1000);
              likedList.style.display="none";
document.querySelector(".play").classList.remove("bxs-caret-right-circle");
 document.querySelector(".play").classList.add("bx-pause-circle");
    
                                 }
         
               
    
    
                
            //delete downloaded song
        function del(e){
                        
                        document.querySelectorAll(".trash").forEach(e=>{
                           
 e.onclick = (e)=>{
     alert(e.target.parentElement.innerHTML);
                                if(confirm("Are you sure you want to remove this music from download?")){
                            e.target.parentElement.remove();
                            alert(localStorage.getItem("Downloads"));
                           // localStorage.removeItem("Downloads");
                        dwn.pop(document.querySelector(".downloadSongs").innerHTML);
                     }
                     }
                          });
                  
                }
                //load progress bar
             /*  function active(event){
                 
                          const inc =  setInterval(()=>{
                              
                              if( val == 101){
                                  clearInterval(inc);
                                  setTimeout(()=>{
                                      e.style.display="none";
                                      e.style.display ="none";
                                      event.classList.remove("bx-download");
                                      event.classList.add("bx-check-circle");
                               document.querySelector(".percent").innerText = "downloaded";
                            
                            setTimeout(()=>{
                  document.querySelector(".alert-top").classList.add("slideDown");
              document.querySelector(".alert-top p").innerHTML = ` has downloaded completely`;
              
              },1000);
              setTimeout(function(){ 
                  document.querySelector(".alert-top").classList.remove("slideDown");
              },4500);
                                      },500);
                              }
                             
                              else{
                                  
                                e.value = val;
                               document.querySelector(".percent").innerText = val + "%";
                                   val++;
                    
                           }
                          
                           },100);
                           }
                           */
                           function offline(){
                 
                          alert("offline");
                              if(val == 101){
                                 
                                      document.querySelector("progress").style.display="none";
                                      document.querySelector(".percent").innerText = "Downloaded";
                              e.classList.toggle("fa fa-check-square-o");
                              }
                             
                              else{
                                  if(val != 101){
                         //  document.querySelector("progress").value = val;
                           document.querySelector(".percent").innerText = "waiting for internet connection";
                           }
                           }
                         
                           }
                           
