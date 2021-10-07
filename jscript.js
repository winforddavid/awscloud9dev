let tmpName1 = "Winford ";
let tmpName2 = "David";
let profession = prompt("Please enter your occupation title?");
// let fullname = ("Hi my name is " + tmpName1 + tmpName2);
// document.write(fullname);
let objFullname = {
        oFName: tmpName1,
        oSName: tmpName2,
        oTitle: profession,
}
//document.write("Hi My name is " + objFullname.oFName, objFullname.oSName + "My Profession is " objFullname.oTitle);
document.write("My Fullname Name is " + objFullname.oFName + objFullname.oSName + "," + "My Profession is " + objFullname.oTitle);
