import { EnterpriseAccount } from "./src/class/EnterpriseAccount";
import { NormalAccount } from "./src/class/NormalAccount";

// Conta Normal
 const normalAccount:NormalAccount = new NormalAccount(1000,"Mateus",100);
 console.log("Antes da mudança: ", normalAccount.validateStatus());
 console.log(normalAccount);
 console.log("-------------------------------------");

// Simulação de Erro
 normalAccount.setStatus(false);
 console.log("Status após a mudança: ", normalAccount.validateStatus());
 normalAccount.getLoan();
 console.log(normalAccount);


// Conta Enterprise
 const enterpriseAccount:EnterpriseAccount = new EnterpriseAccount("Mateus",2000);
 enterpriseAccount.setStatus(true);
 console.log("Status antes da mudança: ", enterpriseAccount.validateStatus());
 enterpriseAccount.getLoan();
 console.log(enterpriseAccount)

 // Simulação de Erro
 enterpriseAccount.setStatus(true);
 console.log("Status após a mudança: ", enterpriseAccount.validateStatus());
 enterpriseAccount.getLoan();
 console.log(enterpriseAccount)

