console.log("Name:" + " Lisa Bamberg".toUpperCase());
console.log("Career: Frontend software developer");
console.log("Description: I am from Birmingham, AL. I am currently attending Innovate Bham's Full Stack Software Development course.");
console.log("My Interests:\n Technology \n Art \n Culture");
console.log("My Previous Experience:");

function displayPosition(name, title, description) {
    console.log(name + title + description);
}
let job1 = displayPosition("RxBenefits - ", "Data Integration Analysis - ", "Integrated client's data into database");
let job2 = displayPosition("UAB Computer Science Camp - ", "Facilitor - ", "Assisted in teaching kids computer science");

console.log("My skills:");

function displaySkill(name, bool) {
    if (bool == true) {
        console.log("BAM: " + name);
    } else {
        console.log(name);
    }
}
let skills1 = displaySkill("JavaScript", false);
let skills2 = displaySkill("HTML/CSS", false);
let skills3 = displaySkill("Violin", true);
let skills4 = displaySkill("Drawing", true);