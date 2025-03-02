
const colors = [
    "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF",
    "#33FFF5", "#F5FF33", "#FF8C33", "#8C33FF", "#33FF8C",
    "#FF336E", "#36FF33", "#33A1FF", "#FFAF33", "#B833FF",
    "#33FFF0", "#F033FF", "#33FFAF", "#FF3333", "#338CFF"
];

document.getElementById('themeButton').addEventListener('click', function () {
    const randomIndex = Math.floor(Math.random() * colors.length); 
    document.body.style.backgroundColor = colors[randomIndex];
});

    // apppend child section
    document.addEventListener("DOMContentLoaded", function () {
        const buttons = document.querySelectorAll("#button1, #button2, #button3, #button4, #button5, #button6");
    
        buttons.forEach(function(button, index) {
            button.addEventListener("click", function () {
                const clearHistory = document.getElementById("history");
                const taskNames = document.querySelectorAll("h6")[index].innerText;
                const pTag = document.createElement("p");
                pTag.classList.add("font-semibold", "text-gray-800", "bg-slate-100", "p-4","mt-4","gap-y-2","rounded-lg");
                pTag.innerHTML = `You have completed Task fix "${taskNames}" issue at ${new Date().toLocaleTimeString()}`;
    
                document.getElementById("emptydiv").appendChild(pTag);
                button.disabled = true;
                button.classList.add("opacity-50");
            });
        });
    });
    
    // clear history div section
    document.addEventListener("DOMContentLoaded", function () {
        const clearHistoryButton = document.getElementById("history");
        const emptyDiv = document.getElementById("emptydiv"); 
    
        if (clearHistoryButton) { 
            clearHistoryButton.addEventListener("click", function () {
                emptyDiv.innerHTML = "";
            });
        
        }
    });
   
    const buttons = document.querySelectorAll("#button1, #button2, #button3, #button4, #button5, #button6");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            alert("Board update succesfully");
        });
    }
    
    
    document.addEventListener("DOMContentLoaded", function () {
        const sixElement = document.getElementById("06");
        const twentythreeElement = document.getElementById("23");
    
        const buttons = document.querySelectorAll("#button1, #button2, #button3, #button4, #button5, #button6");
    
        buttons.forEach(function (button) {
            button.addEventListener("click", function () {
                let currentCount = parseInt(sixElement.innerText);
                let increment = parseInt(twentythreeElement.innerText);
    
                if (currentCount > 0) {
                    sixElement.innerText = currentCount - 1;
                }
    
                twentythreeElement.innerText = increment + 1;

                if (currentCount -1 === 0) { 
                    alert("congrats !!!! you have completed all the current tasks");
                }
            });
        });
    });
