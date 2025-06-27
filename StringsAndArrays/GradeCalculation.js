// Grade Calculation

function getGrade(score) {

    switch (true) {
        case score > 90:
            console.log("Grade A")
            break
        case (score >= 70):
            console.log("Grade B")
            break
        case (score >= 50):
            console.log("Grade C")
            break
        case (score <= 50):
            console.log("Grade D")
            break
        default:
            console.log("Invalid score")
            break
    }

}

getGrade(95)
getGrade(60)
getGrade(90)
getGrade(72)
getGrade("pass")
getGrade(35)