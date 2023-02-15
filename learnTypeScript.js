function sayHello(yourName) {
    return "Hello " + yourName;
}
sayHello("Noble");
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var AccountStatus;
(function (AccountStatus) {
    AccountStatus[AccountStatus["banned"] = 88] = "banned";
    AccountStatus[AccountStatus["dbanned"] = 89] = "dbanned";
    AccountStatus[AccountStatus["open"] = 90] = "open";
})(AccountStatus || (AccountStatus = {}));
var dob = new Date(1998, 3, 25);
var age = new Date(Date.now() - dob.getTime()).getFullYear() - 1970;
var user = {
    id: 0,
    name: "",
    age: age,
    dob: dob,
    address: "",
    gender: Gender.Male,
    status: "open",
    accountStatus: AccountStatus.dbanned
};
console.log(user.accountStatus);
console.log(user.age);
console.log(user.dob.toUTCString());
