import { Account } from "./Account";

export class EnterpriseAccount extends Account {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    public getLoan():void{ 
        try{
            if(this.validateStatus()){
                console.log("Empréstimo aprovado!");
            }else{
                console.log("Empréstimo negado!");
            }
        }catch(error){
            console.log("Erro ao tentar pegar o empréstimo!");
        }  
    }

    public setName(name: string): void {
        super.setName(name); 
        console.log("Nome foi alterado para " + name);
    }
}