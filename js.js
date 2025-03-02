
   
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    document.getElementById('themeButton').addEventListener('click', function() {
        document.body.style.backgroundColor = getRandomColor();
    });

    document.addEventListener("DOMContentLoaded", function () {
        const countElement = document.getElementById("06");
        const incrementElement = document.getElementById("23");
        
        const buttons = document.querySelectorAll("#button1, #button2, #button3, #button4, #button5, #button6");
    
        buttons.forEach(function (button) {
            button.addEventListener("click", function () {
                let currentCount = parseInt(countElement.innerText);
                let currentIncrement = parseInt(incrementElement.innerText);
                if (currentCount > 0) {
                    countElement.innerText = currentCount - 1;
                }
                incrementElement.innerText = currentIncrement + 1;
    
              
            })
        })
    })
    document.addEventListener("DOMContentLoaded", function () {
        const buttons = document.querySelectorAll("#button1, #button2, #button3, #button4, #button5, #button6");
    
        buttons.forEach((button, index) => {
            button.addEventListener("click", function () {
                const clearHistory = document.getElementById("history");
                const taskNames = document.querySelectorAll("h6")[index].innerText;
                const pTag = document.createElement("p");
                pTag.classList.add("font-semibold", "text-gray-800", "bg-slate-100", "p-4","mt-4","gap-y-2","rounded-lg");
                pTag.innerHTML = `You have completed Task "${taskNames}" at ${new Date().toLocaleTimeString()}`;
    
                
                document.getElementById("emptydiv").appendChild(pTag);
                
    
            
                button.disabled = true;
                button.classList.add("opacity-50");
            });
        });
    });
    
    
    
  
    