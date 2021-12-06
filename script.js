
window.addEventListener("scroll", function(){
        var scroll = document.querySelector('.scrollTop');
        scroll.classList.toggle("active", window.scrollY > 500)
    })
function scrollToTop(){
    window.scrollTo({
        top: 0
    })
}

function showNotification()
{
    const notification = new Notification("Bine ai venit pe biogama.ro",
                                         {   
    body:"Multumim ca te-ai inscris la anunturile noastre promotionale!" 
          
                });
                notification.onclick = (e) =>{
                    window.location.href = "http://surj-yadav.epizy.com/";
                }
            }
                console.log(Notification.permission);
                if(Notification.permission ==="granted")
                {
                    showNotification();
                }
                else if (Notification.permission !== "denied")
                {
                    Notification.requestPermission().then(permission =>
                                                         { 
                    if (permission === "granted" )  
                    {
                        showNotification();
                    }                                      
                    });
                }

                const cookieContainer = document.querySelector(".cookie-container");
                const cookieButton = document.querySelector(".cookie-button");

                cookieButton.addEventListener("click", () =>{
                cookieContainer.classList.remove("active");
                localStorage.setItem("cookieBannerDisplayed", "true")
                });


                setTimeout( ()=>{
                    
                    cookieContainer.classList.add("active");
                }, 2000);

