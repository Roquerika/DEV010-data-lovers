# **Readme:**
## Índice
1. Preámbulo
2. Resumen del proyecto
3. Objetivos de aprendizaje
4. Problemas de usabilidad
5. Historias de usuarios
6. Prototipos
7. Test implementados
****

**1. Preámbulo**

**Breaking Bad**
Breaking Bad es una serie de televisión estadounidense creada y producida por Vince Gilligan. Situada y producida en Albuquerque, Nuevo México, consiste en la historia de Walter White, un profesor de química al que diagnostican un cáncer de pulmón inoperable. Walter pasa a una vida de crimen produciendo y distribuyendo metanfetamina junto a un ex-estudiante, Jesse Pinkman, con el objetivo de conseguir suficiente dinero para el futuro de su familia tras su inevitable muerte.

Los usurarios de este producto serán seguidores de la serie Breaking Bad y curiosos.

El objetivo del producto es poder brindar una página donde pueda ver todos los personajes que aparecen en la serie, con algunas características relevantes como apodo, nombre de los actores y actrices que los interpretan, ocupación, estatus de vida del personaje, así como en que temporada de la serie participaron.

####En la interfaz podrán encontrar:
+ El nombre de su personaje y que actor lo interpreta, un filtro para poder realizar la búsqueda de el personaje de su interés.
+ Conocer que personajes aparecen en cada temporada.
+ Podrán ordenar su búsqueda de la A a la Z y de forma inversa.
+ Divertirse encontrando ¿Qué personaje podrías ser tú?, al ingresar los datos requeridos y obteniendo un personaje afín.
+ Advertencia de error en caso de que el personaje sea incorrecto o el input quede vacío.

Los usuarios podrán usar este producto cuando les surja alguna duda o curiosidad de los personajes o quieran divertirse un rato recordando personajes de su serie favorita.

## ----**Let´s Cook!**


**2. Resumen del proyecto**
Lo primero que hicimos al empezar el proyecto fue definir el tema a trabajar, el cual las dos integrantes teníamos muy claro, nos decidimos por la temática de la serie Breaking Bad por la afinidad que ambas tenemos hacia ella.
Después del estudio del README de proyecto empezamos a planificar los pasos a seguir. 

Acordamos trabajar con Trello para llevar a cabo la organización del proyecto:
![](/src/Image/Trello.png)

### #### ## 4. Problemas de usabilidad:

Inicialmente realizamos un bosquejo genérico de la interfaz del proyecto:

Problema uno: La usabilidad aún no estab definida, sin embargo un problema presentado era el fondo de trabajo ya que era muy oscuro y presentaba problemas de integración de colores, por tanto nos recomendaron seguir una paleta de colores y encontrar un fondo más claro.

solución: se cambió el fondo y se buscó una paleta de colores para trabajar.

Problema dos: Posteriormente el fondo de la interfaz quedó fijado conjunto al título como una imagen, en este punto el fondo no era problema pues sus colores eran más armónicos y llamativos, pero el título como parte del fondo presentaba un inconveniente a la hora de desplazar las imágenes a través de la página, ya que en un punto cubrían el título, a su vez nos indicaron que las imágenes representadas en tarjetas tenían colores que de alguna manera hacían ruido visual con el fondo.

solución: Para corregir las imágenes se empleó la propiedad filter en CSS con una escala de grises al 80%.
 El título se eliminó de la imagen fondo y se colocó como imagen desde un URL en el header en index.HTML

Problema tres: En otra demostración la página era un poco más funcional, se podía ordenar de A a Z y a la inversa los datos de Json, también se podía filtrar por temporadas, teníamos dos filtros más, uno por actor o actriz y uno por apodo o perspnaje que aún no eran funcionales. En este punto nos indcaron que eran muchos filtros y por tanto podíamos unir estos dos últimos que áun no tenían funcionlidad en un buscador tipo input.

Solución: eliminamos los filtros (actor/actriz), (personaje/apodo) y creamos un buscador con accesibilidad para personaje, actor, actriz y apodo.

Problema cuatro: En la interfaz al usar el buscador de forma incorrecta, es decir ingresar un dato inálido o pulsar buscar dejando el input vacío se generaba un alert que indicaba error, en este sentido nos indicaron que era muy pequeño y nos recomendaron un mensaje quizás a modo de pantalla que se activara en estos casos.

Solución: Se creó una imagen que alertara sobre un ingreso incorrecto y sobre el input vacío y se gestionó como una superposición al interfaz original.

Problema cinco: No teníamos un cálculo con los datos de Json ni como acceder a ese cálculo, nos recomendaron emplear un botón.

Solución: Se creó un botón que tendría la finalidad de llevar al usuario a otra pantalla que también estaría superpuesta a la interfaz original y donde se vería otra imagen alusiva a la serie y algunos cuadros de ingreso de texto asociados al cálculo, a esta altura del proyecto entre las diversas opciones de manipular los datos del Json para realizar un cálculo con ellos, el que más nos hizo sentido fue emplear el método math.random() sin embargo ya habíamos creado la pantalla dónde solicitábamos al usuario ingresar sus datos (nombre, signo zodiacal y elemento químico favorito) y a nivel de código transformabamos estos datos en ASCII y teníamos un promedio, pero ya que no logramos vincular esta información con los datos de Json a manera de que se generará una carta aleatoria, decidimos que el botón procesar además de obtener el promedio antes mencionado, ejecutará el método math.random() en conjunto de math.floor para que el valor final fuese entero y correspondiera a los datos de Json.

Problema seis: La tarjeta aleatoria no se mostraba en la interfaz asociada a cálculo. Nos recomendaron colocar display:none en Js a la interfaz de cálculo.
Solución: como la interfaz de cálculo es una superposición de imágenes respecto a la interfaz original pero al generar la tarjeta aleatoria se está ultilizando la función que accede a los datos de Json vinculada a el main incial, la tarjeta aleatoria se mostraba aquí, por tanto añadimos display:none en la función de Js de la interfaz de cálculo justo antes de que se ejecutara la generación de la carta aleatoria.

Problema siete: La página tiene datos de los personajes en inglés pero los botones de accesibilidad están español.
Solución: Decidimos pasar todos los botones e información general de la interfaz que estaba en español a inglés.

Problema ocho: La carta aleatoria debería estar centrada.
No encontramos solución, probámos variar propiedades y atributos en CSS para resolverlo pero al momento de culminar el proyecto no lo habíamos logrado.

Problema nueve:  Los subtítulos de los datos no se observan.
No encontramos solución, debido a la forma a la que accedemos a los datos de Json y como logramos mostrarlos en la interfaz, desconocemos como agregar los subtítulos, en el punto de finalizar el proyecto lo más que se nos ha ocurrido es modificar los datos en Json para que contengan tales valores, pero reconocemos que no es práctico y por tanto no es una forma correcta de trabajar.


Se definieron las historias de usuario,

### #### ## 5. Historias de usuario:
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

### #### ## 6.Prototipos:

### #### ##Se creó el prototipo de baja fidelidad:
![](/src/Image/Imagenes/Prototipo_de_baja_fidelidad.png)

### #### ##Despúes se trabajó en el prototipo de alta fidelidad:
![](/src/Image/PrototipoAltaF.png)

### #### ##Finalmente el prototipo de la interfaz terminada en 4 fases es el siguiente:
Fase 1: Presentación inicial.
![](/src/Image/PrototipoFinalA.png)

Fase 2: Mensaje de error para personaje no válido o input vacío.
![](/src/Image/PrototipoFinalB.png)

Fase 3: Interfaz de ¿Qué personaaje serías?.
![](/src/Image/PrototipoFinalC.png)

Fase 3: Resultado de ¿Qué personaaje serías?.
![](/src/Image/PrototipoFinalD.png)

### #### ## 7.Test implementados: 
Los test se crearon a partir de un ejemplo básico preestablecido en el boilerplate del proyecto incial, un test por cada función asociada a la funcionalidad de la interfaz, estos fueron: filtrar, ordenarAZ, ordenarZA, temporada, textoAASCII y encontrar. Al correr los test creados con el comando npm test una vez todos estuvieron listos y sin fallas el resultado fue el siguiente:

![](/src/Image/ResultadosTest.png)





