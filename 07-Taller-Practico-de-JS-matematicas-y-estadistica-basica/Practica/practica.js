// Matemathics in Javascript
// Formulas Matematicas en JavaScript
// Calculando el area y el perimetro de un cuadrado y un triangulo.

// CUADRADO
console.group("Cuadrados");
    // medida del lado de un cuadrado
    const ladoCuadrado = 5;
    // perimetro de un cuadrado
    const perimetroCuadrado = ladoCuadrado * 4;
    // area de un cuadrado
    const areaCuadrado = ladoCuadrado * ladoCuadrado;
    // output en consola
    console.log(
        ladoCuadrado,
        perimetroCuadrado,
        areaCuadrado,
    );
    // output
    // 5 20 25
console.groupEnd("Cuadrados");


// TRIANGULO
console.group("Triangulos");
    const ladoTriangulo1 = 6;
    const ladoTriangulo2 = 6;
    const baseTriangulo = 4;
    const alturaTriangulo = 5.5;

    const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
    const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

    console.log(
        ladoTriangulo1,
        ladoTriangulo2,
        baseTriangulo,
        alturaTriangulo,
        perimetroTriangulo,
        areaTriangulo,
    );
console.groupEnd("Trinagulos");

// FUNCION PARA CALCULAR PERIMETRO Y AREA DE UN TRIANGULO
function calcularTriangulo(lado1, lado2, base, altura) {
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2,
    }
}

// FUNCION PARA CALCULAR PERIMETRO Y AREA DE UN CUADRADO
function calcularCuadrado(lado) {
    return {
        perimetro: lado * 4,
        area: lado ** 2,
    }
}

// Metodo Math en JavaScript
// Calculando circunferencia y area de un circulo
console.group("Circulos");

    const radioCirculo = 3;
    const diametroCirculo = radioCirculo * 2;
    const PI = 2.1415;

    const circunferencia = diametroCirculo * PI;
    const areaCirculo = (radioCirculo ** 2) * PI;

    console.log({
        radioCirculo,
        diametroCirculo,
        PI,
        circunferencia,
        areaCirculo
    })

console.groupEnd("Circulos");

function calcularCirculo(radio) {
    const diametro = radio * 2;
    const radioAlCuadrado = radio ** 2;
    const radioAlCuadradoConMath = Math.pow(radio, 2);
    return {
        circunferencia: (diametro * PI),
        area: radioAlCuadrado * PI,
    }
}


console.group("Triangulos2")
// ALTURA DE UN TRIANGULO
// Calcular perimetro, altura y area de un triangulo isosceles no equilatero
function calcularTriangulo2(lados, base) {
    let altura = alturaTriangulo2(lados, base);
    let perimetro = (lados*2) + base;
    let area = (base * altura);
    console.log(`
        Triangulo Isosceles no Equilatero 
        Lado 1 y lado 2 miden: ${lados}cm.
        La base mide ${base}cm.
        La altura es de ${altura.toFixed(3)}cm.
        El perimetro es de ${perimetro}cm.
        Y el area de ${area.toFixed(3)}cm.
        Gracias Vuelva pronto.
        `)
    return  {
        lados: lados,
        base: base,
        altura: altura,
        perimetro: perimetro,
        area: area,
    }
};

function alturaTriangulo2(lados, base){
    if (lados == base) {
        console.warn("Este no es un triángulo isósceles")
    } else {
        // h = raizCuadrada(lados ** 2 - (base ** 2) / 4)
        return Math.sqrt((lados**2)-((base**2))/4);
    };
};
console.groupEnd("Triangulos2")

// Teorema de pitagoras
// a**2 = h**2 + (b/2)**2

console.group("Escaleno")
// ALTURA DE UN TRIANGULO ESCALENO
// Sabiendo solo la medida de los 3 lados.
function calcularEscaleno(a,b,c){
    let perimetro = a + b + c;
    let semiPerimetro = perimetro / 2;
    let area = (Math.sqrt(semiPerimetro*(semiPerimetro-a)*(semiPerimetro-b)*(semiPerimetro-c))).toFixed(1);
    let altura = (2/a*area).toFixed(1);
    console.log(`
        Hola, buen dia, Soy el programa para calcular varias propiedades de un Triangulo Escaleno
        los lados que introdujiste son:
        Lado a: ${a},
        Lado b: ${b},
        Lado c: ${c}.
        Por lo tanto su Perímetro es ${perimetro},
        su Área es de ${area},
        y su Altura es de ${altura}.
    `)
    return {
        ladoA: a,
        ladoB: b,
        ladoC: c,
        perimetro: perimetro,
        semiPerimetro: semiPerimetro,
        area: area,
        altura: altura
    }
}
console.groupEnd("Escaleno")