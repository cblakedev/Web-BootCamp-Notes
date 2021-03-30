/* For In Loops */

// for in does no require that the thing you loop through be numbered

let student = {name: "Peter", awesome: true, degree: "javascript", week:1};

for (item in student){
    console.log(item);
    console.log(student[item]);
}

let catArray = ["tabby", "birtish shorthair", "burmese", "maine coon", "rag doll"];

for (let cat in catArray){
    console.log(cat);
    console.log(catArray[cat]);
}

// lets write a for-in loop that capitalizes the first letter of a name

let instructor = "paul";
let capName;

for (n in instructor){
    if (n == 0 ){
        capName = instructor[n].toUpperCase();
    } else {
        capName += instructor[n].toLowerCase();
    }
}

console.log(capName);