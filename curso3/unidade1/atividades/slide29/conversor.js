class Conversor {
    static metrosParaQuilometros(m) {
        return m/1000;
    }
    static QuilometrsoParaMetros(km) {
        return km*1000;
    }
}


console.log(Conversor.metrosParaQuilometros(2500) + " km"); // esperado: 2.5 km
console.log(Conversor.QuilometrsoParaMetros(.9)+ " m"); //esperado: 900 m
