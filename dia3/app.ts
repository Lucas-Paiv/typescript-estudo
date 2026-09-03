//Uma array também pode retornar tipos diferentes de valor, como:

function getTransactionId(amount: number, id:number): number | string {
    return "true"
}

type User = {
    id: number,
    nome: string
}

type Admin = User & {
    permisions: string[]
}

const admin: Admin = {
    id: 0,
    nome: "",
    permisions: ["create", "delete"]
}

interface U {
    id: number,
    nome: string
}

interface Adm extends U{
    permisions: string[]
}

const adm: Adm ={
    id: 0,
    nome: "",
    permisions: ["create", "delete"]
}
let a : Admin = {
    id: 0,
    nome: "",
    permisions: []
}
let b: Adm = {
    id: 0,
    nome: "",
    permisions: [ ]
}

//console.log(typeof(b))
//console.log(typeof(a))

function log(b: U){
    console.log(b)
}

log(adm)
log(admin)