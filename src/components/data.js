import experimento1 from '../assets/experimento1.webp'
import experimento2 from '../assets/experimento2.webp'
import experimento3 from '../assets/experimento3.webp'
import experimento4 from '../assets/experimento4.webp'
import experimento5 from '../assets/experimento5.webp'
import experimento6 from '../assets/experimento6.webp'
import experimento7 from '../assets/experimento7.webp'
import experimento8 from '../assets/experimento8.webp'
import experimento9 from '../assets/experimento9.webp'

import cientifico1 from '../assets/cientifico1.png'
import cientifico2 from '../assets/cientifico2.png'
import cientifico3 from '../assets/cientifico3.png'
import cientifico4 from '../assets/cientifico4.png'
import cientifico5 from '../assets/cientifico5.png'
import cientifico6 from '../assets/cientifico6.png'
import cientifico7 from '../assets/cientifico7.png'
import cientifico8 from '../assets/cientifico8.png'
import cientifico9 from '../assets/cientifico9.png'

const EXPERIMENTOS = [
    {
        title: "VELA QUE SUBE EL AGUA",
        materiales: ["Agua", "Plato", "Vaso", "Fuego", "Vela"],
        proceso: ["pegar la vela al plato", "Echar agua en el recipiente", "Poner el vaso hacia abajo para que suba el agua", "El agua sube y la vela se apaga"],
        explicacion: `Cuando la vela se va
        apagando la presión de
        dentro del vaso va
        disminuyendo, la presión
        atmosférica exterior no ha
        cambiado y ahora está mayor
        que la interna, por eso se
        observa que se empuja el
        agua al interior hasta que las
        presiones internas y externas
        se igualan.`,
        imagen: experimento1,
        cientifico: cientifico1,
        color: "33D90F"
    },
    {
        title: "CASCADA DE HUMO",
        materiales: ["Agua", "Plato", "Vaso", "Fuego", "Vela"],
        proceso: ["Enrollar una hoja", "Quemar una hoja y prender hacia abajo", "Empieza a salir el humo y cae como cascada"],
        explicacion: `En este caso, el vaso donde
        hemos prendido el papel está
        completamente vacío. Dentro
        de este vaso no hay ninguna
        corriente que empuje al
        humo. Este está lleno de aire
        frío. Como el humo es más
        denso que el aire frío que hay
        en el interior del vaso, éste
        bajará por su propio peso,
        creando el efecto de una
        cascada`,
        imagen: experimento2,
        cientifico: cientifico2,
        color: "35D90F"
    },
    {
        title: "VOLCAN EN ERUPCIÓN",
        materiales: ["Pegamento", "Periódico,", "Plastilina", "Vinagre", "Bicarbonato", "Agua", "Arcilla"],
        proceso: ["Se mezcla la arcilla con la plastilina sobre la base para hacer una forma de volcán", "Se mezcla agua, colorante rojo, vinagre, después le mezcla todo.", "El bicarbonato de sodio y empieza hacer erupción"],
        explicacion: `Cuando mezclas el vinagre,
        un ácido, y el bicarbonato
        de sodio, una base, se
        produce dióxido de carbono
        el gas que provoca las
        burbujas que salen por el
        cráter del volcán. A causa
        del gas, la mezcla queda
        espumosa y se expande, de
        manera que se escapa de la
        botella.`,
        imagen: experimento3,
        cientifico: cientifico3,
        color: "BE6CDA"
    },
    {
        title: "VIBRACIONES",
        materiales: ["Cartón", "Pila", "Aluminio", "Palo de dulce", "Motor", "Silicona"],
        proceso: ["El motor y la pila se pegan en el cartón y las patas de aluminio son de soporte", "Se conecta y comienza la araña a moverse"],
        explicacion: `La araña comienza a
        moverse ya que tiene un
        movimiento oscilatorio de
        un cuerpo provocado por la
        oscilación de las partículas
        que lo forman, respecto a
        una posición de equilibrio,
        el motor es quien hace las
        vibraciones que genera que
        la araña se mueva.`,
        imagen: experimento4,
        cientifico: cientifico4,
        color: "33E3F8"
    },
    {
        title: "HUEVO SALTARIN",
        materiales: ["Huevo", "Vinagre"],
        proceso: ["Dejar 48 horas el huevo en el vinagre"],
        explicacion: `Después de dos días, ¡éste
        es el resultado! ¡Ahora
        tenemos un huevo saltarín!
        Podemos tirarlo las veces
        que queramos, pero no
        desde muy alto, ya que se
        puede romper. Al llevar a
        cabo el experimento el
        huevo ha aumentado
        ligeramente el tamaño y se
        ha vuelto elástico`,
        imagen: experimento5,
        cientifico: cientifico5,
        color: "F833AD"
    },
    {
        title: "GLOBO QUE SE INFLA SOLO",
        materiales: ["Bicarbonato", "Bomba", "Vinagre", "Botella"],
        proceso: ["Juntamos la base, vinagre y bicarbonato se produce energía", "Agua, sodio y dióxido de carbono"],
        explicacion: `El aire caliente que hay
        dentro de la botella se
        expande y al aplicar el agua
        fría se contrae provocando
        así que se succione el
        globo. Esto se produce
        porque el aire atrapado
        dentro de la botella se enfría
        gracias al efecto del agua
        fría que entra en contacto
        con el exterior de la botella.`,
        imagen: experimento6,
        cientifico: cientifico6,
        color: "A0E9EF"
    },
    {
        title: "LOS PULMONES",
        materiales: ["Botella", "Bomba", "Cinta", "Pitillos"],
        proceso: ["Realizar un pequeño orificio en la botella", "Taparlo de nuevo con cinta adhesiva"],
        explicacion: `El volumen dentro de la
        cavidad torácica
        disminuye, lo que hace
        que el aire salga de los
        pulmones. En nuestro
        modelo de pulmón, los
        globos dentro de la botella
        se contraen a su estado
        original a medida que se
        expulsa el aire dentro de
        ellos.`,
        imagen: experimento7,
        cientifico: cientifico7,
        color: "EDA0EF"
    },
    {
        title: "MASA NO NEWTONIANA",
        materiales: ["Agua", "Maizena"],
        proceso: ["Echar agua en la Maizena y revolver formando este tipo de masa"],
        explicacion: `El Fluido no newtoniano es
        aquel cuya viscosidad
        varía con la temperatura y
        con la tensión cortante
        aplicada, a diferencia de
        otros fluidos como el
        agua, que son
        newtonianos, y cuya
        viscosidad se mantiene
        constante`,
        imagen: experimento8,
        cientifico: cientifico8,
        color: "A0A2EF"
    },
    {
        title: "MAIZ BAILARIN",
        materiales: ["Bicarbontao", "Vinagre", "Agua", "Sal", "Maiz", "Vaso de vidrio"],
        proceso: ["Vierta la media taza de agua en el frasco o vaso alto.", "Agregue colorante para alimentos al agua y mezcle.", "Vierta el vinagre blanco", "Agregue los granos de maíz.", "Agregue bicarbonato de sodio y prepárese para el espectáculo."],
        explicacion: `El secreto del maíz bailarín
        mágico es la reacción química
        entre el bicarbonato de sodio y
        el vinagre. Las burbujas de
        dióxido de carbono levantan el
        maíz, pero a medida que las
        burbujas explotan, el maíz
        vuelve a caer. Puede repetir
        este experimento una y otra
        vez.`,
        imagen: experimento9,
        cientifico: cientifico9,
        color: "F53751"
    },
]

export default EXPERIMENTOS