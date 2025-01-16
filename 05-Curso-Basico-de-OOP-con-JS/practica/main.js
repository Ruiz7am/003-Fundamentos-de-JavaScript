// esto es un objeto literal, heredan la propiedad __proto__ del Prototipo Objetct
const natalia = {
  name: "Natalia",
  age: 20,
  cursosAprobados: [
    "Curso Definitivo de HTML y CSS",
    "Curso Practico de HTML y CSS",
  ],
  /* aprobarCurso: function () {

  } */
  aprobarCurso (nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  }
};


// Hacer que natalia apruebe otro curso

natalia.cursosAprobados.push("Curso de Responsive Design");


// Prototipo
function Student ( name, age, cursosAprobados ) {
  this.name = name
  this.age = age
  this.cursosAprobados = cursosAprobados
  /* this.aprobarcurso = function ( nuevocurso ) {
    this.cursosAprobados.push(nuevocurso)
  } */
  Student.prototype.aprobarCurso = function ( nuevoCurso ) {
    this.cursosAprobados.push(nuevoCurso)
  }
}

const juanita = new Student(
  "Juanita Alejandra",
  15,
  [
    "Curso de introducción a la producción de VideoJuegos",
    "Curso de creación de personajes"
  ]
)

// Prototipos con la sintaxis de clases

class Teacher {
  constructor ( {
    name,
    age,
    cursosImpartidos = [],
    email,
    twitter,
    instagram,
    facebook,
  } ) {
    this.name = name
    this.age = age
    this.cursosImpartidos = cursosImpartidos
    this.email = email
    this.twitter = twitter
    this.instagram = instagram
    this.facebook = facebook
  }

  impartirNuevoCurso ( nuevoCurso ) {
    this.cursosImpartidos.push(nuevoCurso)
  }
}

const miguel = new Teacher ({
  name: "Miguel Angel",
  age: 34,
  email: "miguel.angel@gmail.com"
})

// RoRo = Recive object - Return object

// objetos literales
/* const Armando = {
  name: "Armando Ruiz",
  username: "ruiz7am",
  points: 7799,
  socialMedia: {
    twitter: "ruiz7am",
    instagram: "ruiz7am",
    facebook: "ArmandoRuiz"
  },
  approvedCourses: [
    "Curso Definitivo de HTML y CSS",
    "Curso Práctico de HTML y CSS"
  ],
  learningPaths: [
    {
      name: "Escuela de Desarrollo Web",
      courses: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
        "curso de Responsive Design",
      ]
    },
    {
      name: "Escuela de Videojuegos",
      courses: [
        "Curos de Introducción a la Producción de Videojuegos",
        "Curso de Unreal Engine",
        "Curso de Unity 3D",
      ]
    }
  ]
}

const Miguel = {
  name: "Miguel Carrera",
  username: "migueLuisCarrera",
  points: 100,
  socialMedia: {
    twitter: "miguellc",
    instagram: "miguellc",
    facebook: "MiguelLuis"
  },
  approvedCourses: [
    "Curso de Tailwind",
    "Curso de CSS Grid"
  ],
  learningPaths: [
    {
      name: "Escuela de Desarrollo Web",
      courses: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
        "curso de Responsive Design",
      ]
    }
  ]
} */

// Prototipos
class Estudiante {
  constructor ( {
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  } ) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
    }
}

const Silverio = new Student ( {
  name: "Silverio Durango",
  username: "DonSilver",
  email: "silver.don@proton.me",
  facebook: "DonSilver",
  instagram: "DonSilver",
  twitter: "DonSilver",
} )

class Class {
  constructor ( {
    name,
  } ) {
    this.name = name;
  }
}

class Course {
  constructor ( {
    name,
  } ) {
    this.name = name;
  }
} 
class LearningPath {
  constructor ( {
    name,
    courses = [],
  } ) {
    this.name = name;
    this.courses = courses;
  }
}

const escuelaWeb = new LearningPath ( {
  name: "Escuela de Desarrollo Web",
  courses: [
    "Curos de Frontend Developer",
    "Curso Práctico de Frontend Developer",
    "Curso Definitivo de HTML y CSS",
    "Curso Practico de HTML y CSS"
  ]
} )

const escuelaJs = new LearningPath ( {
  name: "Fundamentos de JavaScript",
  courses: [
    "Fundamentos de Javascript",
    "Closure y Scope con Javascript",
    "Estructuras de datos con Javascript",
    "Manipulación de Arrays en Javascript",
    "Curso Basico de Programación Orientada a Objetos"
  ]
} )

const escuelaFrontendJs = new LearningPath ( {
  name: "Frontend con Javascript",
  courses: [
    "Manipulación del DOM",
    "API REST",
    "Web Components",
    "Debugging con Chrome DevTools",
    "Testing con Javascript"
  ]
} )

const cursoProgBasica = new Course ( {
  name: "Curso Gratis de Programación Básica",
} )

const cursoFrontendDev = new Course ( {
  name: "Curos de Frontend Developer",
} )

const cursoPracticoFrontendDev = new Course ( {
  name: "Curso Práctico de Frontend Developer",
} )
