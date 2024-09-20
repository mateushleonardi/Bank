import { Account } from "./Account";
import { EnterpriseAccount } from "./EnterpriseAccount";

export class NormalAccount extends Account{

    doc_id: number

    constructor(doc_id:number,name:string,accountNumber:number){
        super(name,accountNumber);
        this.doc_id = doc_id;

    }
    public getLoan(): void {
        try {
            if (this.validateStatus()) {
                console.log("Empréstimo aprovado!");
            } else {
                console.log("Empréstimo negado!");
            }
        } catch (error) {
            console.log("Erro ao tentar pegar o empréstimo!");
        }
    }

}
