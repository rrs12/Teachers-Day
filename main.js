var select = document.getElementById("teachers").value

function message() {
    select = document.getElementById("teachers").value
    if (select == "Krupa") {
        document.getElementById("message").innerHTML = "SS is a very hard subject if you don't understand it, thank you for explaining it very clearly."
    }
    if (select == "Anita") {
        document.getElementById("message").innerHTML = "Science is the subject I just liked earlier but thank you for making me love it."
    }
    if (select == "Niyati") {
        document.getElementById("message").innerHTML = "Apart from English you taught us many other things that no one else taught us. Thank You for communicating freely with us "
    }
    if (select == "Sandhya") {
        document.getElementById("message").innerHTML = "हमें हिंदी में बेहतर विद्यार्थी बनाना और हर एक चीज को शीतलता से समझने के लिए धन्यवाद।"
    }
    if (select == "Ekta") {
        document.getElementById("message").innerHTML = "Everyone hates maths but thank you for teaching each and every concept with perfection."
    }
    if (select == "Ami") {
        document.getElementById("message").innerHTML = "Thank You Ma'am for teaching me Vocal with perfection."
    }
    if (select == "Bhaumik") {
        document.getElementById("message").innerHTML = "पाठ्यक्रमादाधिकातरं ध्यानं व्याकरणं ददातुं भवते धन्यवाद।   "
    }
    if (select == "Hetal") {
        document.getElementById("message").innerHTML = "Thank You Sir for teaching interesting topics in every class."
    }
    if (select == "Prashant") {
        document.getElementById("message").innerHTML = "Thank You Sir for teaching me Art & Craft with perfection."
    }

}
