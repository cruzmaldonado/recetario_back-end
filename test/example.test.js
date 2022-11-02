const {it,describe} = require("mocha")

const {assert} = require("chai")

const {getAllUsers}=require("../src/users/users.controllers")

const sumar = (a,b)=> a+b

// !it= test

describe("Test de la funcion sumar",() => {
    it("deberia retornar 12 caundo le pasamos 8 y 4",(done)=>{
        const response =sumar(8,4)
        //* primero la funcion luego el valor esperado
        assert.equal(response,12)

        // ?donde es como un return o un break
        done()
    })
    it("deberia retornar 5 cuando le pasamos 2 y 3",(done)=>{
        const response =sumar(2,3)
        assert.equal(response,5)
        done()

    })
})
// describe("test de controladores de usuarios",()=>{
//     it("deberia retornar todos los usuarios",(done)=>{
//         const data = await getAllUsers()
//         assert.typeOf(data,"array")
//         done
//     })
// })