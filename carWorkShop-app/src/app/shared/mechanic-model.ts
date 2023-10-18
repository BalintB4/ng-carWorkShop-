export class Mechanic{
    lastName: string = "Doe";
    firstName:string = "John";
    hireDate: Date =  new Date("2020 -01 -01")
    constructor( lastname:string,firstName:string, hireDate:Date){
        this.lastName = lastname;
        this.firstName = firstName;
        this.hireDate = hireDate

    }
}