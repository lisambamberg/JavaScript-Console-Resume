console.log("Name:" + " Lisa Bamberg".toUpperCase());
console.log("Career: Frontend software developer");
console.log("Description: I am from Birmingham, AL. I am currently attending Innovate Bham's Full Stack Software Development course.");
console.log("My Interests:\n Technology \n Art \n Culture");
console.log("My Previous Experience:");

function displayPosition(name, title, description) {
    return name + title + description;
}
console.log(displayPosition("RxBenefits - ", "Data Integration Analysis - ", "Integrated client's data into database"));
console.log(displayPosition("UAB Computer Science Camp - ", "Facilitor - ", "Assisted in teaching kids computer science"));

console.log("My skills:");

function displaySkill(skill, bool) {
    if (bool == true) {
        return "BAM: " + skill;
    }  else {
        return skill;
    }
}
console.log(displaySkill("JavaScript", false));
console.log(displaySkill("HTML/CSS", false));
console.log(displaySkill("Violin", true));
console.log(displaySkill("Drawing", true));