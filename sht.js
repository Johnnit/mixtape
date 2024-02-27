     //bring play section down
             function pageDown(){
                 //update shortcut details
                 document.querySelector(".bx-chevron-down").classList.add("hover");
                 setTimeout(()=>{
                     document.querySelector(".bx-chevron-down").classList.remove("hover");
                 },500);
                 setTimeout(()=>{
                 document.querySelector(".shortcut i").className = document.querySelector(".play").className;
                 document.querySelector(".shtDetails img").src = image.src;
                    document.querySelector(".shtDetail h2").innerHTML = `${art.innerHTML}`;
                    document.querySelector(".shtDetail h3").innerHTML = `${title.innerHTML}`; 
                 section1.style.display ="none";
                document.getElementById("discoverPage").style.display ="flex";
                 document.querySelector(".shortcut").style.display = "flex";
             },1000);
             }
             
                 //music payer shortcut
                function sht(){
                    disAll.style.display ="none";
              //      seeAll.style.display = "none";
                    document.getElementById("discoverPage").style.display ="none";
                    document.querySelector(".play").className = document.querySelector(".shortcut i").className;
                       section1.style.display ="flex";
                 document.querySelector(".shortcut").style.display = "none";
                }
