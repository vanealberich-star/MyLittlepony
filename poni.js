const preguntas = [
    {
        pregunta: "Un amigo hizo algo mal, tú:",
        opciones: [
            { texto: "Le dices la verdad aunque se enoje", valor: "honestidad" },
            { texto: "Intentas no hacerlo sentir mal", valor: "amabilidad" },
            { texto: "Lo apoyas pase lo que pase", valor: "lealtad" },
            { texto: "Tratas de entender por qué lo hizo", valor: "empatia" },
            { texto: "Lo ayudas a arreglar su error", valor: "generosidad" },
            { texto: "No tomo en cuenta su sentir", valor: "sinvalores" }
        ]
    },
    {
        pregunta: "Ves a alguien triste, tú:",
        opciones: [
            { texto: "Lo escuchas y lo comprendes", valor: "empatia" },
            { texto: "Lo animas con algo divertido", valor: "amabilidad" },
            { texto: "Le das algo que le guste", valor: "generosidad" },
            { texto: "Te quedas con él sin abandonarlo", valor: "lealtad" },
            { texto: "Le dices lo que necesita escuchar", valor: "honestidad" },
            { texto: "Lo ignoro", valor: "sinvalores" }
        ]
    },
    {
        pregunta: "En un trabajo en equipo:",
        opciones: [
            { texto: "Dices lo que piensas claramente", valor: "honestidad" },
            { texto: "Ayudas a todos", valor: "generosidad" },
            { texto: "Te aseguras de que todos estén bien", valor: "empatia" },
            { texto: "Nunca abandonas al equipo", valor: "lealtad" },
            { texto: "Mantienes un ambiente agradable", valor: "amabilidad" },
            { texto: "Haces todo el trabajo o esperas a que los demás lo hagan por ti", valor: "sinvalores" }
        ]
    },
    {
        pregunta: "Si cometes un error:",
        opciones: [
            { texto: "Lo admites", valor: "honestidad" },
            { texto: "Intentas arreglarlo ayudando", valor: "generosidad" },
            { texto: "Piensas cómo afecta a otros", valor: "empatia" },
            { texto: "No te rindes y sigues", valor: "lealtad" },
            { texto: "Tratas de no causar problemas", valor: "amabilidad" },
            { texto: "Yo nunca cometo errores", valor: "sinvalores" }
        ]
    },
    {
        pregunta: "Un amigo necesita ayuda urgente:",
        opciones: [
            { texto: "Vas inmediatamente", valor: "lealtad" },
            { texto: "Le ayudas con lo que tengas", valor: "generosidad" },
            { texto: "Escuchas cómo se siente", valor: "empatia" },
            { texto: "Lo tratas con cariño", valor: "amabilidad" },
            { texto: "Le dices la verdad de la situación", valor: "honestidad" },
            { texto: "Que lo arregle el mismo", valor: "sinvalores" }
        ]
    },
    {
        pregunta: "Cuando alguien te pide consejo:",
        opciones: [
            { texto: "Dices la verdad", valor: "honestidad" },
            { texto: "Piensas en sus sentimientos", valor: "empatia" },
            { texto: "Eres amable al hablar", valor: "amabilidad" },
            { texto: "Lo apoyas siempre", valor: "lealtad" },
            { texto: "Le ayudas activamente", valor: "generosidad" },
            { texto: "Ignorarlo", valor: "sinvalores" }
        ]
    },
    {
        pregunta: "Si alguien es nuevo en el grupo:",
        opciones: [
            { texto: "Lo haces sentir bienvenido", valor: "amabilidad" },
            { texto: "Intentas entender cómo se siente", valor: "empatia" },
            { texto: "Le compartes cosas tuyas", valor: "generosidad" },
            { texto: "Te quedas a su lado", valor: "lealtad" },
            { texto: "Eres sincero con él", valor: "honestidad" },
            { texto: "Lo ignoras", valor: "sinvalores" }
        ]
    },
    {
        pregunta: "Si tienes algo que otros necesitan:",
        opciones: [
            { texto: "Lo compartes", valor: "generosidad" },
            { texto: "Piensas en cómo se sienten", valor: "empatia" },
            { texto: "Lo haces con gusto", valor: "amabilidad" },
            { texto: "Ayudas a tus amigos primero", valor: "lealtad" },
            { texto: "Dices claramente lo que puedes dar", valor: "honestidad" },
            { texto: "No lo ofreces", valor: "sinvalores" }
        ]
    },
    {
        pregunta: "Cuando hay un problema entre amigos:",
        opciones: [
            { texto: "Dices la verdad", valor: "honestidad" },
            { texto: "Intentas que todos estén bien", valor: "amabilidad" },
            { texto: "Entiendes a ambas partes", valor: "empatia" },
            { texto: "No abandonas a ninguno", valor: "lealtad" },
            { texto: "Ayudas a resolverlo", valor: "generosidad" },
            { texto: "Hablas mal de ellos a sus espaldas", valor: "sinvalores" }
        ]
    },
    {
        pregunta: "¿Qué es más importante para ti?",
        opciones: [
            { texto: "Decir siempre la verdad", valor: "honestidad" },
            { texto: "Ser amable con todos", valor: "amabilidad" },
            { texto: "Ayudar a los demás", valor: "generosidad" },
            { texto: "Estar para tus amigos", valor: "lealtad" },
            { texto: "Entender a las personas", valor: "empatia" },
            { texto: "No tengo algo importante en la vida", valor: "sinvalores" }
        ]
    }
];

// Datos de los personajes
const personajes = {
    honestidad: {
        nombre: "Applejack",
        imagen: "imagenes/Honestidad.png",
        descripcion: "¡Eres Applejack! Tu valor fundamental es la HONESTIDAD. Eres sincera, confiable y siempre dices la verdad, aunque sea difícil. Los demás confían en ti porque saben que puedes ser honesta en todo momento. Tu integridad es inquebrantable.",
        fortalezas: "Sinceridad, confiabilidad, integridad, valentía para decir la verdad",
        como_amigo: "Otros saben que pueden contar contigo para recibir consejo honesto y sin filtros. Aunque a veces puedas ser un poco directa, tus amigos aprecian tu transparencia."
    },
    amabilidad: {
        nombre: "Fluttershy",
        imagen: "imagenes/Amabilidad.png",
        descripcion: "¡Eres Fluttershy! Tu valor fundamental es la AMABILIDAD. Tienes un corazón puro y siempre buscas ser amable con todos. Tu gentileza y comprensión hacen que los demás se sientan cómodos a tu alrededor. Eres un rayo de luz en la vida de otros.",
        fortalezas: "Gentileza, paciencia, comprensión, cuidado hacia los demás",
        como_amigo: "Eres la amiga que todos necesitan. Tu presencia tranquila y amable hace que las personas se sientan seguras y valoradas. Tienes el don de hacer sentir bien a los demás."
    },
    generosidad: {
        nombre: "Rarity",
        imagen: "imagenes/Generosidad.png",
        descripcion: "¡Eres Rarity! Tu valor fundamental es la GENEROSIDAD. Te encanta ayudar y compartir con los demás. Tu generosidad no conoce límites y siempre estás dispuesta a dar lo mejor de ti. Tu altruismo inspira a otros a ser mejores.",
        fortalezas: "Generosidad, disposición a ayudar, altruismo, entrega",
        como_amigo: "Tus amigos saben que siempre pueden contar con tu ayuda. Eres la persona que da sin esperar nada a cambio. Tu generosidad es una inspiración para todos."
    },
    lealtad: {
        nombre: "Rainbow Dash",
        imagen: "imagenes/Lealtad.png",
        descripcion: "¡Eres Rainbow Dash! Tu valor fundamental es la LEALTAD. Eres una amiga inquebrantable que nunca abandona a los suyos. Tu compromiso y dedicación son ejemplares. Para ti, estar con tus amigos es lo más importante.",
        fortalezas: "Lealtad, determinación, coraje, apoyo incondicional",
        como_amigo: "Tus amigos saben que puedes contar con tu apoyo en los buenos y malos momentos. Eres la amiga que siempre está ahí, sin importar qué. Tu lealtad es inquebrantable."
    },
    empatia: {
        nombre: "Derpy Hooves",
        imagen: "imagenes/Empatia.png",
        descripcion: "¡Eres Derpy Hooves! Tu valor fundamental es la EMPATÍA. Tienes una capacidad especial para entender los sentimientos de otros. Tu sensibilidad emocional te permite conectar profundamente con las personas. Eres un reflejo del corazón compasivo.",
        fortalezas: "Empatía, sensibilidad emocional, comprensión, conexión emocional",
        como_amigo: "Eres la amiga que escucha y entiende verdaderamente lo que sienten los demás. Tu capacidad para empatizar hace que otros se sientan realmente comprendidos y apoyados."
    },
    sinvalores: {
        nombre: "Reina Chrysalis",
        imagen: "imagenes/cris.png",
        descripcion: "¡Eres la Reina Chrysalis! No tienes VALORES de amistad. Tu comportamiento demuestra que no te importan los sentimientos, la honestidad o el bienestar de otros. Vives solo pensando en ti mismo y en lo que puedes obtener de los demás, sin dar nada a cambio.",
        fortalezas: "Ninguna - Tu egoísmo es tu única característica",
        como_amigo: "No eres amiga de nadie. Las personas no pueden confiar en ti porque siempre actúas de forma egoísta. Necesitas aprender que la amistad se construye con valores, respeto y consideración hacia los demás."
    }
};

// Variables globales
let preguntaActual = 0;
let respuestas = [];
let puntuaciones = {
    honestidad: 0,
    amabilidad: 0,
    generosidad: 0,
    lealtad: 0,
    empatia: 0,
    sinvalores: 0
};

// Función para iniciar el test
function iniciarTest() {
    // Reiniciar variables
    preguntaActual = 0;
    respuestas = [];
    puntuaciones = {
        honestidad: 0,
        amabilidad: 0,
        generosidad: 0,
        lealtad: 0,
        empatia: 0,
        sinvalores: 0
    };

    // Cambiar sección
    document.getElementById("inicio").classList.remove("activa");
    document.getElementById("test").classList.add("activa");

    // Cargar primera pregunta
    cargarPregunta();
    
    // Scroll al inicio
    window.scrollTo(0, 0);
}

// Función para abrir modal de imagen
function abrirModal(src, alt) {
    const modal = document.getElementById("modal-imagen");
    const modalImagen = document.getElementById("imagen-modal");
    const modalTitulo = document.getElementById("modal-titulo");
    
    modalImagen.src = src;
    modalImagen.alt = alt;
    modalTitulo.textContent = alt;
    modal.classList.add("activo");
}

// Función para cerrar modal
function cerrarModal() {
    const modal = document.getElementById("modal-imagen");
    modal.classList.remove("activo");
}

// Cerrar modal al hacer clic fuera
document.addEventListener('click', function(event) {
    const modal = document.getElementById("modal-imagen");
    if (event.target === modal) {
        cerrarModal();
    }
});

// Cerrar modal con tecla Escape
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        cerrarModal();
    }
});

// Función para cargar una pregunta
function cargarPregunta() {
    const formulario = document.getElementById("formulario-test");
    const pregunta = preguntas[preguntaActual];

    // Actualizar barra de progreso
    const progreso = ((preguntaActual + 1) / preguntas.length) * 100;
    document.getElementById("progreso").style.width = progreso + "%";
    document.getElementById("contador").textContent = `Pregunta ${preguntaActual + 1} de ${preguntas.length}`;

    // Crear HTML de la pregunta
    let html = `
        <div class="pregunta">
            <h3>${pregunta.pregunta}</h3>
            <div class="opciones">
    `;

    pregunta.opciones.forEach((opcion, index) => {
        html += `
            <div class="opcion">
                <input type="radio" id="opcion-${index}" name="respuesta" value="${opcion.valor}">
                <label for="opcion-${index}">${opcion.texto}</label>
            </div>
        `;
    });

    html += `
            </div>
        </div>
        <div class="botones-navegacion">
            <button class="boton boton-secundario" onclick="preguntaAnterior()" ${preguntaActual === 0 ? 'disabled' : ''}>← Anterior</button>
            <button class="boton boton-primario" onclick="siguientePregunta()" id="boton-siguiente">Siguiente →</button>
        </div>
    `;

    formulario.innerHTML = html;

    // Restaurar respuesta anterior si existe
    if (respuestas[preguntaActual]) {
        const radioSeleccionado = document.querySelector(`input[name="respuesta"][value="${respuestas[preguntaActual]}"]`);
        if (radioSeleccionado) {
            radioSeleccionado.checked = true;
        }
    }

    // Scroll al inicio
    window.scrollTo(0, 0);
}

// Función para ir a la siguiente pregunta
function siguientePregunta() {
    const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');

    if (!respuestaSeleccionada) {
        alert("Por favor, selecciona una opción para continuar.");
        return;
    }

    // Guardar respuesta
    respuestas[preguntaActual] = respuestaSeleccionada.value;
    puntuaciones[respuestaSeleccionada.value]++;

    // Ir a la siguiente pregunta
    if (preguntaActual < preguntas.length - 1) {
        preguntaActual++;
        cargarPregunta();
    } else {
        mostrarResultados();
    }
}

// Función para ir a la pregunta anterior
function preguntaAnterior() {
    if (preguntaActual > 0) {
        preguntaActual--;
        cargarPregunta();
    }
}

// Función para mostrar resultados
function mostrarResultados() {
    // Verificar si todas las respuestas son "sinvalores"
    const todasSinValores = respuestas.every(respuesta => respuesta === "sinvalores");
    
    let valorGanador;
    
    if (todasSinValores) {
        valorGanador = "sinvalores";
    } else {
        // Encontrar el valor con mayor puntuación (excluyendo sinvalores si hay otras respuestas)
        valorGanador = Object.keys(puntuaciones).reduce((a, b) => {
            if (a === "sinvalores" && puntuaciones[a] !== puntuaciones[b]) return b;
            if (b === "sinvalores" && puntuaciones[a] !== puntuaciones[b]) return a;
            return puntuaciones[a] > puntuaciones[b] ? a : b;
        });
    }

    const personaje = personajes[valorGanador];

    // Crear HTML de resultados
    let html = `
        <img src="${personaje.imagen}" alt="${personaje.nombre}" class="resultado-personaje">
        <h2>${personaje.nombre}</h2>
        <p><strong>Tu Valor:</strong> ${valorGanador.charAt(0).toUpperCase() + valorGanador.slice(1)}</p>
    `;

    const resultadoValor = document.getElementById("resultado-valor");
    resultadoValor.innerHTML = html;
    resultadoValor.className = `resultado-valor ${valorGanador}-bg`;

    // Descripción
    html = `
        <h3>Tu Perfil:</h3>
        <p>${personaje.descripcion}</p>
        <p><strong>Tus Fortalezas:</strong> ${personaje.fortalezas}</p>
        <p><strong>Como Amiga:</strong> ${personaje.como_amigo}</p>
    `;

    document.getElementById("resultado-descripcion").innerHTML = html;

    // Estadísticas
    const totalPuntos = Object.values(puntuaciones).reduce((a, b) => a + b, 0);
    html = ``;

    const valores = [
        { clave: "honestidad", nombre: "Honestidad" },
        { clave: "amabilidad", nombre: "Amabilidad" },
        { clave: "generosidad", nombre: "Generosidad" },
        { clave: "lealtad", nombre: "Lealtad" },
        { clave: "empatia", nombre: "Empatía" },
        { clave: "sinvalores", nombre: "Sin Valores" }
    ];

    valores.forEach(valor => {
        const puntos = puntuaciones[valor.clave];
        const porcentaje = (puntos / totalPuntos) * 100;

        html += `
            <div class="barra-estadistica">
                <div class="barra-titulo">
                    <span class="barra-titulo-nombre">${valor.nombre}</span>
                    <span class="barra-titulo-valor">${puntos}/${totalPuntos}</span>
                </div>
                <div class="barra-fondo">
                    <div class="barra-relleno" style="width: 0%;" data-porcentaje="${porcentaje}"></div>
                </div>
            </div>
        `;
    });

    document.getElementById("resultado-estadisticas").innerHTML = html;

    // Animar barras de estadísticas
    setTimeout(() => {
        document.querySelectorAll(".barra-relleno").forEach(barra => {
            const porcentaje = barra.getAttribute("data-porcentaje");
            barra.style.width = porcentaje + "%";
        });
    }, 100);

    // Cambiar sección
    document.getElementById("test").classList.remove("activa");
    document.getElementById("resultados").classList.add("activa");
    
    // Scroll al inicio
    window.scrollTo(0, 0);
}

// Función para reiniciar el test
function reiniciarTest() {
    document.getElementById("resultados").classList.remove("activa");
    document.getElementById("inicio").classList.add("activa");
    window.scrollTo(0, 0);
}

// Cargar preguntas al iniciar
window.addEventListener('DOMContentLoaded', () => {
    console.log("Test de Valores de Amistad cargado exitosamente");
});