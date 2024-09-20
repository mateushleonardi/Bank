export abstract class Account {
    private name: string;
    private readonly accountNumber: number
    //balance: number
    private status: boolean; 


    constructor(name:string, accountNumber:number){
        this.name = name;
        this.accountNumber = accountNumber;
        this.status = true;
    }

    public setStatus(newStatus:boolean):void{
       this.status = newStatus;
    }

    public validateStatus():boolean{
       return this.status
    }

    public setName (name:string):void{
        this.name = name;
         console.log("Nome foi alterado para" + name);
    }
    getName = (): string=>{
        return this.name
    }

    // deposit = (): void => {
    //     if(this.validateStatus()){
    //         console.log("Você depositou")
    //     }
    // }
    // withdraw = ():void =>{
    //     if(this.validateStatus()){
    //         console.log("Você sacou")
    //         }
    // }
    // getBalance = (): void => {
    //     this.balance = 100
    //     console.log(this.balance)
    // }
}