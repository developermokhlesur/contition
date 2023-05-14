// let student_name = "Anukul";
// let father_name = "Jnai";
// let mother_name = "Some Mother"; // Add the mother_name variable here
// let institution = "joupur hat";
// let type = "regular";
// let roll = 5;
// let group = "science";
// let date_of_birth = "10 Feb 2001";
// let bengali, english, mathematics, religion, general_science, ict;
// bengali = 80;
// english = 20;
// mathematics = 100;
// religion = 30;
// general_science = 99;
// ict = 33;
// let total_mark = bengali + english + mathematics + religion + general_science + ict;
// let average_mark = total_mark / 6;
let student_name = prompt("Student Name");
let father_name =  prompt("Father Name");
let mother_name =  prompt("Mother Name"); 
let institution = prompt("Your Institution");
let type =  prompt("Type");
let roll =  prompt("Roll Number");
let group =  prompt("Select Your Group");
let date_of_birth =  prompt("Date Of Birth");
let bengali, english, mathematics, religion, general_science, ict;
bengali =  parseInt (prompt("Bengali"));
english = parseInt( prompt("English"));
mathematics = parseInt (prompt("Mathematics"));
religion = parseInt (prompt("Religion"));
general_science = parseInt( prompt("Genarel Science"));
ict = parseInt(prompt("ICT"));
let total_mark = bengali + english + mathematics + religion + general_science + ict;
let average_mark = total_mark / 6;

if (average_mark >= 80 && average_mark <= 100) {
  console.log(`
    Student Name: ${student_name}
    Father Name: ${father_name}
    Mother Name: ${mother_name}
    Name of institution: ${institution}
    Type: ${type}                  Roll no: ${roll}
    Group: ${group}                 Date of Birth: ${date_of_birth}
    Student Total mark: ${total_mark}        Student Average Mark: ${average_mark}
    Achievement:----   Congratulations! You got  A+ (5.00). 
  `);
} else if (average_mark >= 70 && average_mark <= 79) {
  console.log(`
    Student Name: ${student_name}
    Father Name: ${father_name}
    Mother Name: ${mother_name}
    Name of institution: ${institution}
    Type: ${type}                  Roll no: ${roll}
    Group: ${group}                 Date of Birth: ${date_of_birth}
    Student Total mark: ${total_mark}        Student Average Mark: ${average_mark}
    Achievement:----   Congratulations! You got  A (4.00).
  `);
} else if (average_mark >= 60 && average_mark <= 69) {
  console.log(`
    Student Name: ${student_name}
    Father Name: ${father_name}
    Mother Name: ${mother_name}
    Name of institution: ${institution}
    Type: ${type}                  Roll no: ${roll}
    Group: ${group}                 Date of Birth: ${date_of_birth}
    Student Total mark: ${total_mark}        Student Average Mark: ${average_mark}
    Achievement:----   Congratulations! You got  A- (3.50).
  `);
} else if (average_mark >= 50 && average_mark <= 59) {
  console.log(`
    Student Name: ${student_name}
    Father Name: ${father_name}
    Mother Name: ${mother_name}
    Name of institution: ${institution}
    Type: ${type}                  Roll no: ${roll}
    Group: ${group}                 Date of Birth: ${date_of_birth}
    Student Total mark: ${total_mark}        Student Average Mark: ${average_mark}
    Achievement:----   Congratulations! You got  B (3.0).
  `);
} else if (average_mark >= 40 && average_mark <= 49) {
  console.log(`
    Student Name: ${student_name}
    Father Name: ${father_name}
    Mother Name: ${mother_name}
    Name of institution: ${institution}
    Type: ${type}                  Roll no: ${roll}
    Group: ${group}                 Date of Birth: ${date_of_birth}
    Student Total mark: ${total_mark}        Student Average Mark: ${average_mark}
    Achievement:----   Congratulations! You got  C (2.0).
  `);
} else if (average_mark >= 33 && average_mark <= 39) {
  console.log(`
    Student Name: ${student_name}
    Father Name: ${father_name}
    Mother Name: ${mother_name}
    Name of institution: ${institution}
    Type: ${type}                  Roll no: ${roll}
    Group: ${group}                 Date of Birth: ${date_of_birth}
    Student Total mark: ${total_mark}        Student Average Mark: ${average_mark}
    Achievement:----   Congratulations! You got  D (1.0).
  `);
} else if (average_mark >= 0 && average_mark <= 32) {
  console.log(`
    Student Name: ${student_name}
    Father Name: ${father_name}
    Mother Name: ${mother_name}
    Name of institution: ${institution}
    Type: ${type}                  Roll no: ${roll}
    Group: ${group}                 Date of Birth: ${date_of_birth}
    Student Total mark: ${total_mark}        Student Average Mark: ${average_mark}
    Achievement:----   So Sad! You got  F (0.0).
  `);
} else {
  console.log(`Note:---  Content is not found!`);
}

