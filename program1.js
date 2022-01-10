let students = [
    {name: "Aleeyeen", score: 80},
    {name: "Alaina", score: 70},
    {name: "Aseeyah", score: 50}
];

for (let student of students){
    if (student.score >= 80 && student.score <= 100)
    {
        console.log("%s Your Grade is A", student.name);
    }

    else if (student.score >= 70 && student.score < 80)
    {
        console.log("%s your Grade is B", student.name);
    }

    else if (student.score >= 60 && student.score < 70)
    {
        console.log("%s your Grade is C", student.name);
    }

    else if (student.score >= 50 && student.score < 60)
    {
        console.log("%s your Grade is D", student.name);
    }

    else if (student.score >= 0 && student.score < 50)
    {
        console.log("%s your Grand is E", student.name);
    }
    else 
    {
        console.log("Error ! Your score not range");
    }
}
