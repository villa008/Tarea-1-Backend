const express = require('express') 
const app = express() 
const port = 8080 

//A) Crear una ruta que reciba nombre y apellido por medio de params
// (ruta parametrizada) y devuelva por un res.send un query string 
//armando un saludo (ej: res.send(`Hola ${nombre}`) ).

app.get('/persona/:nombre/:apellido', (req, res) => {
  res.send(`Hola bueno dias, ${req.params.nombre}`+" "+`${req.params.apellido}`)
}) //http://localhost:8080/persona/Sergio/Villagomez


// B)Crear una ruta “dividir” la cual reciba dos parámetros 
// (ruta parametrizada) divisor y dividendo, la misma tiene que devolver 
// un res.json({error: "no se puede dividir por cero"}) si el usuario 
// ingresa un 0, si no es el caso devolver res.json({resultado}).

app.get('/dividir/:dividendo/:divisor', (req, res) => {
    let resultado= req.params.dividendo / req.params.divisor;

  if (req.params.divisor==0) {
    res.json({error: "No se puede dividir por cero"})
  } else {
    res.json({resultado})
  } 
}) //http://localhost:8080/dividir/0/40

// C)Crear una ruta que sume dos valores (ruta parametrizada), pero poner 
// una condición de que no se puedan enviar números menores que cero, y el 
// resultado se debe devolver por medio de un res.json({resultado}).

app.get('/suma/:numero1/:numero2', (req, res) => {
    let resultado= Number(req.params.numero1) + Number(req.params.numero2);

  if (req.params.numero1 <0 || req.params.numero2 <0) {
    res.json({error: "No se pueden enviar numeros menores que cero"})
  } else {
    res.json({resultado})
  } 
}) //http://localhost:8080/suma/-25/119

app.get('/resta/:dato1/:dato2', (req, res) => {
    let resultados= Number(req.params.dato1) - Number(req.params.dato2);

  if (req.params.dato1 <0 || req.params.dato2 <0) {
    res.json({error: "No se pueden enviar numeros menores que cero"})
  } else {
    res.json({resultados})
  } 
}) //http://localhost:8080/resta/-25/119



// D)Crear una ruta que reciba un numero (ruta con query) si el número es 
// impar debe devolver un res.send("no autorizado") , y si el número es 
// par debe devolver res.send("autorizado").
app.get('/numbero', (req, res) => {
    value= req.query.num;
  if (value%2==1) {
    res.send("No Autorizado");
  } else{
    res.send("Autorizado");
  } 
}) //http://localhost:8080/numbero?num=27


// E)Crear una ruta “lista de compras” (ruta con query) que devuelva un 
// objeto con 5 productos, se debe usar res.json({objeto}).


app.get('/lista', (req, res) => {
    res.json({
        botines:req.query.bot,
        medias:req.query.med,
        balones:req.query.bal,
        canilleras:req.query.cani,
        bolsos:req.query.bol
    })
  })
  


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })