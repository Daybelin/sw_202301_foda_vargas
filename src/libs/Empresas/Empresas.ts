
export interface IEmpresa{
   codigos: string;
   nombre: string;
   status: string;
   created: Date;
   update: Date; 
   Observacion ?: string; 
}

export class Empresas {
 private empresas: IEmpresa[];

 constructor(){
    this.empresas=[];
   
 }
 add(nuevaEmpresa : IEmpresa ) {
    const date= new Date();
    const nueva: IEmpresa = {
    ... nuevaEmpresa,
    codigos: (Math.random()*1000).toString()+new Date().getTime().toString(),
    created: date,
    update: date

    }
    this.empresas.push(nueva)
    return true;
}

getAll(){
    return this.empresas;
}
update (updateEmpresa:IEmpresa){
    const newEmpresas:IEmpresa[] = this.empresas.map((emp)=>{
        if (emp.codigos === updateEmpresa.codigos ) {
            return {...emp, ...updateEmpresa, updated: new Date()};
        }
        return emp;

    });
    this.empresas = newEmpresas;
    return true;

    };
}
