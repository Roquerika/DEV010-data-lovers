# **Readme:**
## Índice
1. Preámbulo
2. Objetivos de aprendizaje 
3. Resumen del proyecto
4. Historias de usuarios 
5. Problemas de usabilidad
6. Prototipos
7. Enlace a Zeplin
8. Test implementados
9. Referencias
****

**1. Preámbulo**

**Breaking Bad**
Breaking Bad es una serie de televisión estadounidense creada y producida por Vince Gilligan. Situada y producida en Albuquerque, Nuevo México, consiste en la historia de Walter White, un profesor de química al que diagnostican un cáncer de pulmón inoperable. Walter pasa a una vida de crimen produciendo y distribuyendo metanfetamina junto a un ex-estudiante, Jesse Pinkman, con el objetivo de conseguir suficiente dinero para el futuro de su familia tras su inevitable muerte.

Los usurarios de este producto serán seguidores de la serie Breaking Bad y curiosos.

El objetivo del producto es poder brindar una página donde pueda ver todos los personajes que aparecen en la serie, con algunas características relevantes como apodo, nombre de los actores y actrices que los interpretan, ocupación, estatus de vida del personaje, así como en que temporada de la serie participaron.

#### En la interfaz podrán encontrar:
+ El nombre de su personaje y que actor lo interpreta, un filtro para poder realizar la búsqueda de el personaje de su interés.
+ Conocer que personajes aparecen en cada temporada.
+ Podrán ordenar su búsqueda de la A a la Z y de forma inversa.
+ Divertirse encontrando ¿Qué personaje podrías ser tú?, al ingresar los datos requeridos y obteniendo un personaje afín.
+ Advertencia de error en caso de que el personaje sea incorrecto o el input quede vacío.

Los usuarios podrán usar este producto cuando les surja alguna duda o curiosidad o quieran divertirse un rato recordando personajes de su serie favorita.

## ----**Let´s Cook!**

**2. Objetivos de aprendizaje**
Los objetivos de aprendizaje a abarcar en este proyecto son los siguientes:

HTML
 Uso de HTML semántico


CSS
 Uso de selectores de CSS

 Modelo de caja (box model): borde, margen, padding

 Uso de flexbox en CSS


Web APIs
 Uso de selectores del DOM

 Manejo de eventos del DOM (listeners, propagación, delegación)

 Manipulación dinámica del DOM


JavaScript
 Diferenciar entre tipos de datos primitivos y no primitivos

 Arrays (arreglos)

 Objetos (key, value)

 Variables (declaración, asignación, ámbito)

 Uso de condicionales (if-else, switch, operador ternario, lógica booleana)

 Uso de bucles/ciclos (while, for, for..of)

 Funciones (params, args, return)

 Pruebas unitarias (unit tests)

 Módulos de ECMAScript (ES Modules)

 Uso de linter (ESLINT)

 Uso de identificadores descriptivos (Nomenclatura y Semántica)

 Diferenciar entre expresiones (expressions) y sentencias (statements)


Control de Versiones (Git y GitHub)
 Git: Instalación y configuración

 Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)

 Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)

 GitHub: Creación de cuenta y repos, configuración de llaves SSH

 GitHub: Despliegue con GitHub Pages

 GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)


Centrado en el usuario

 Diseñar y desarrollar un producto o servicio poniendo a las usuarias en el centro


Diseño de producto

 Crear prototipos de alta fidelidad que incluyan interacciones

 Seguir los principios básicos de diseño visual


Investigación

 Planear y ejecutar testeos de usabilidad de prototipos en distintos niveles de fidelidad

Una vez culminado el proyecto consideremos que al menos el 70% de los objetivos a abarcar en el proyecto ha sido cubierto por ambas partcipantes.


**3. Resumen del proyecto**
Lo primero que hicimos al empezar el proyecto fue definir el tema a trabajar, el cual las dos integrantes teníamos muy claro, nos decidimos por la temática de la serie Breaking Bad por la afinidad que ambas tenemos hacia ella.

Después del estudio del README de proyecto empezamos a planificar los pasos a seguir. 

Acordamos trabajar con Trello para llevar a cabo la organización del proyecto:
![](/src/Image/Trello.png)


**4. Historias de usuario:**

##### Historia de Usuario 1
![](/src/Image/Imagenes/HU1.jpg)

![](/src/Image/Imagenes/HU1-1.jpg)

##### Historia de Usuario 2
![](/src/Image/Imagenes/HU2.jpg)

##### Historia de Usuario 3
![](/src/Image/Imagenes/HU3.jpg)

![](/src/Image/Imagenes/HU3-1.jpg)

##### Historia de Usuario 4
![](/src/Image/Imagenes/HU4.jpg)

##### Historia de Usuario 5
![](/src/Image/Imagenes/HU5.jpg)



**5. Problemas de usabilidad:**

En este proyecto no se realizaron pruebas de usabilidad en cuanto a la interacción de un usuario con la interfaz, salvo las creadoras de la misma, por tanto los siguientes problemas y soluciones planteados están dados a partir de las distintas demos semanes que tuvimos una vez finalizaba el Sprint, en este sentido consideramos a futuro abordar la problemática de usabilidad de acuerdo a lo recomendado en la literatura oficial.

En función de la presentación en la primera demo, inicialmente realizamos un bosquejo genérico de la interfaz del proyecto:

##### Problema uno: 
La usabilidad aún no estab definida, sin embargo un problema presentado era el fondo de trabajo ya que era muy oscuro y presentaba problemas de integración de colores, por tanto nos recomendaron seguir una paleta de colores y encontrar un fondo más claro.

##### solución: 
Se cambió el fondo y se buscó una paleta de colores para trabajar.


##### Problema dos:
Posteriormente el fondo de la interfaz quedó fijado conjunto al título como una imagen, en este punto el fondo no era problema pues sus colores eran más armónicos y llamativos, pero el título como parte del fondo presentaba un inconveniente a la hora de desplazar las imágenes a través de la página, ya que en un punto cubrían el título, a su vez nos indicaron que las imágenes representadas en tarjetas tenían colores que de alguna manera hacían ruido visual con el fondo.

##### solución: 
Para corregir las imágenes se empleó la propiedad filter en CSS con una escala de grises al 80%.
El título se eliminó de la imagen fondo y se colocó como imagen desde una URL en el header en index.HTML.


##### Problema tres: 
En otra demostración la página era un poco más funcional, se podía ordenar de A a Z y a la inversa los datos de Json, también se podía filtrar los personajes de acuerdo a su aparición en una temporada específica, teníamos dos filtros más, uno por actor o actriz y uno por apodo o personaje que aún no eran funcionales. En este punto nos indicaron que eran muchos filtros y por tanto podíamos unir estos dos últimos que áun no tenían funcionalidad en un buscador tipo input.

##### Solución: 
Eliminamos los filtros (actor/actriz), (personaje/apodo) y creamos un buscador con accesibilidad para personaje, actor, actriz y apodo.


##### Problema cuatro: 
En la interfaz al usar el buscador de forma incorrecta, es decir ingresar un dato inválido o pulsar buscar dejando el input vacío se generaba un alert que indicaba error, en este sentido nos indicaron que era muy pequeño y nos recomendaron un mensaje quizás a modo de pantalla que se activara en estos casos.

##### Solución: 
Se creó una imagen que alertara sobre un ingreso incorrecto y sobre el input vacío y se gestionó como una superposición al interfaz original.


##### Problema cinco: 
No teníamos un cálculo con los datos de Json ni como acceder a ese cálculo, nos recomendaron emplear un botón.

##### Solución: 
Se creó un botón que tendría la finalidad de llevar al usuario a otra pantalla que también estaría superpuesta a la interfaz original y donde se vería otra imagen alusiva a la serie y algunos cuadros de ingreso de texto asociados al cálculo, a esta altura del proyecto entre las diversas opciones de manipular los datos del Json para realizar un cálculo con ellos, el que más nos hizo sentido fue emplear el método math.random() sin embargo ya habíamos creado la pantalla dónde solicitábamos al usuario ingresar sus datos (nombre, signo zodiacal y elemento químico favorito) y a nivel de código transformábamos estos datos en ASCII y teníamos un promedio, pero ya que no logramos vincular esta información con los datos de Json a manera de que se generara una carta aleatoria, decidimos que el botón procesar además de obtener el promedio antes mencionado, ejecutara el método math.random() en conjunto de math.floor para que el valor final fuese entero y correspondiera a los datos de Json.


##### Problema seis: 
La tarjeta aleatoria no se mostraba en la interfaz asociada a cálculo. Nos recomendaron colocar display:none en Js a la interfaz de cálculo.

##### Solución: 
Como la interfaz de cálculo es una superposición de imágenes respecto a la interfaz original pero al generar la tarjeta aleatoria se está ultilizando la función que accede a los datos de Json vinculada a el main incial, la tarjeta aleatoria se mostraba aquí, por tanto añadimos display:none en la función de Js de la interfaz de cálculo justo antes de que se ejecutara la generación de la carta aleatoria.


##### Problema siete: 
La página tiene datos de los personajes en inglés pero los botones de accesibilidad están español.

##### Solución: 
Decidimos pasar todos los botones e información general de la interfaz que estaba en español a inglés.


##### Problema ocho: 
La carta aleatoria debería estar centrada.

##### Solución:
No encontramos solución, probámos variar propiedades y atributos en CSS para resolverlo pero al momento de culminar el proyecto no lo habíamos logrado.


##### Problema nueve:  
Los subtítulos de los datos no se observan.

##### Solución:
No encontramos solución, debido a la forma a la que accedemos a los datos de Json y como logramos mostrarlos en la interfaz, desconocemos como agregar los subtítulos, en el punto de finalizar el proyecto lo más que se nos ha ocurrido es modificar los datos en Json para que contengan tales valores, pero reconocemos que no es práctico y por tanto no es una forma correcta de trabajar.


**6.Prototipos:**

### #### ##Se creó el prototipo de baja fidelidad:
![](/src/Image/Imagenes/Prototipo_de_baja_fidelidad.png)

### #### ##Despúes se trabajó en el prototipo de alta fidelidad:
![](/src/Image/PrototipoAltaF.png)

### #### ##Finalmente el prototipo de la interfaz terminada en 4 fases es el siguiente:
Fase 1: Presentación inicial.
![](/src/Image/PrototipoFinalA.png)

Fase 2: Mensaje de error para personaje no válido o input vacío.
![](/src/Image/PrototipoFinalB.png)

Fase 3: Interfaz de ¿Qué personaje serías?.
![](/src/Image/PrototipoFinalC.png)

Fase 4: Resultado de ¿Qué personaje serías?.
![](/src/Image/PrototipoFinalD.png)


**7. Enlace a Zeplin**
En esta oportunidad trabajamos el esquema del proyecto en Trello y Pptx: los diversos elementos empleados se encuentran en el prototipo de baja fidelidad, de alta fidelidad y las distintas fases del prototipo final antes mostradas, también incluímos en esta descripción de proyecto una vista general de la planificación y los Sprints trabajados en TRELLO; no utilizamos figma ni herramientas a fines por tanto no resulta fluído a fechas de termino de proyecto llevar la información de Pptx a figma y de ahí a Zeplin, en ese sentido este objetivo se esperará cubrir en el próximo proyecto por ambas participantes.


**8.Test implementados:**

Los test se crearon a partir de un ejemplo básico preestablecido en el boilerplate del proyecto incial, un test por cada función asociada a la funcionalidad de la interfaz, estos fueron: filtrar, ordenarAZ, ordenarZA, temporada, textoAASCII y encontrar. Al correr los test creados con el comando npm test una vez todos estuvieron listos y sin fallas el resultado fue el siguiente:

![](/src/Image/ResultadosTest.png)


**9.Referencias:**

[Clave SSH](https://docs.github.com/es/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent "Clave SSH")

[Fork y PR](https://www.loom.com/share/adccc2b5b73940a3bf9835e3d3eb4ca8?sid=89d83378-08ed-4616-98c5-5ae665d23ca4 "Fork y PR")

[Git flujo de trabajo colaborativo](https://drive.google.com/file/d/1aIugYCkKdZtm4GHsE5y8ea_MLxaOGJ9T/view "Git flujo de trabajo colaborativo")

[Git/GitHub colaborativo](https://www.youtube.com/watch?v=EOO6Ze9_lDY "Git/GitHub colaborativo")

[Uso básico Git](https://diego.com.es/uso-basico-de-git "Uso básico Git")

[Json hero](https://jsonhero.io/j/GB3QFlROMeoC "Json hero")

[Trabajando con Json](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/JSON "Trabajando con Json")

[Diseño páginas web](https://www.behance.net/gallery/173840021/Cooking-up-trouble "Diseño páginas web")

[paleta de colores](https://colormagic.app/ "paleta de colores")

[paleta de colores con tu diseño previsto](https://color.adobe.com/explore "paleta de colores con tu diseño previsto")

[Galería de Imágenes con FETCH y DOM](https://www.youtube.com/watch?v=UyxILLXW2dQ "Galería de Imágenes con FETCH Y DOM")

[InnerHTML](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML "Inner.HTML")

[Grid Template](https://developer.mozilla.org/es/docs/Web/CSS/grid-template-columns "Grid Template")

[Crear un menú centrado](https://programacion.net/articulo/como_crear_un_menu_centrado_en_bootstrap_navbar_1854#:~:text=C%C3%B3digo%20HTML&text=El%20men%C3%BA%20se%20podr%C3%A1%20colocar,center%20para%20centrar%20el%20men%C3%BA. "Crear un menú centrado") 

[Cambiar nav al hacer scroll](https://www.lawebdelprogramador.com/foros/CSS/1708707-Como-cambiar-mi-nav-al-hacer-scroll.html#google_vignette "Cambiar nav al hacer scroll")

[Formato de botones](https://markodenic.com/tools/buttons-generator/ "Formato de botones")

[Etiqueta picture en HTML](https://blog.bitsrc.io/why-you-should-use-picture-tag-instead-of-img-tag-b9841e86bf8b "Etiqueta picture en HTML")

[Filter](https://developer.mozilla.org/en-US/docs/Web/CSS/filter "FILTER")

[Filter para una imagen](https://css-tricks.com/apply-a-filter-to-a-background-image/ "Filter para imagen" )

[Filter para una imagen](https://codepen.io/3dms/pen/abPgxm "Filter para imagen")

[Hover a una img](https://www.youtube.com/watch?v=Z5MoBm99w1Q "Hover a una img")

[Overlay en CSS](https://www.w3schools.com/howto/howto_css_overlay.asp "Overlay en CSS")

[Z-Index](https://developer.mozilla.org/es/docs/Web/CSS/z-index "Z-Index")

[Como crear una página error personalizada](https://www.youtube.com/watch?v=FconkeF_VZc "Como crear una página error personalizada" )

[If...else]( https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else "If...Else")

[JS proyectos](https://www.freecodecamp.org/ "JS proyectos")

[Métodos de arreglo](https://www.youtube.com/watch?v=bkgXlQp5hbI "Métodos de arreglo")

[Math.Random()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random "Math.Random()")

[Código ASCII](https://elcodigoascii.com.ar/ "Código ASCII")

[Guía testing](https://www.youtube.com/playlist?list=PLiAEe0-R7u8kqvibxkK9tqqoJXnhgtefg "Guía testing")

[Test Camp 17.08.23](https://drive.google.com/file/d/1fsgOKHYxGbZPE_5-PK-L7o3IXsGFhjud/view "Test Camp 17.08.23")

[Agregar música a una interfaz](https://www.youtube.com/watch?v=h762vNl-djM "Agregar música a una interfaz")

[Música Breaking Bad](https://www.youtube.com/watch?v=-KfC7Nl8V4E "Música Breaking Bad")

[Responsive](https://www.youtube.com/watch?v=Km_Fug5Xs5w&t=94s "Responsive")

[Responsive](https://www.youtube.com/watch?v=yUfcpPkOajA "Responsive")

[Simulador Responsive](https://chrome.google.com/webstore/detail/mobile-simulator-responsi/ckejmhbmlajgoklhgbapkiccekfoccmk "Simulador Responsive")

[Eslint](https://www.freecodecamp.org/espanol/news/que-es-linting-y-eslint/ "Eslint")

[Bibliografía Readme](https://scrum.menzinsky.com/2021/09/como-entender-la-diferencia-entre.html "Bibliografía Readme")

[Escribir readme Markdown](https://pandao.github.io/editor.md/en.html "Escribir readme Markdown")

[Markdown guide](https://www.markdownguide.org/cheat-sheet/ "Mardown guide")
