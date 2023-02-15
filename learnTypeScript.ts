function sayHello(yourName: string): string {
    return "Hello " + yourName;
}


sayHello("Noble");


interface IPerson {
    id: number;
    name: string;
    age: number;
    dob: Date;
    address: string;
    gender: Gender;
    status: "open" | "closed" | "minimized";
    accountStatus: AccountStatus
}


enum Gender {
    Male, Female
}


enum AccountStatus {
    banned = 88, "dbanned", "open"
}
const dob = new Date(1998, 3, 25);
const age = new Date(Date.now() - dob.getTime()).getFullYear() - 1970;


const user: IPerson = {
    id: 0,
    name: "",
    age: age,
    dob: dob,
    address: "",
    gender: Gender.Male,
    status: "open",
    accountStatus: AccountStatus.dbanned

}


console.log(user.accountStatus);
console.log(user.age);
console.log(user.dob.toUTCString());
