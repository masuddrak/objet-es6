// nexted obejet
const company={
    name:'GP',
    work:{
        seo:'digital marketar',
        name:'sadek',
        fremwork:'Laravel',
        developer:{
            name:'rabbi',
            elemt:'html,css,javascript'
        }
    }
}
const {name,elemt}=company.work.developer
console.log(name,elemt);