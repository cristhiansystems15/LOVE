const messages={feliz:{label:"Para celebrar contigo",items:[["Tu sonrisa tiene una manera muy bonita de hacer que todo parezca un poquito mejor. Disfruta este momento, mi amor, porque verte feliz también me hace feliz. ❤️","Este es el día que hizo Jehová; nos gozaremos y alegraremos en él.","Salmos 118:24"],["Qué bonito saber que hoy tu corazón está ligero. Guarda esta alegría y recuerda que siempre tendrás a alguien dispuesto a celebrarla contigo.","El corazón alegre hermosea el rostro.","Proverbios 15:13"]]},triste:{label:"Para abrazar tu corazón",items:[["No tienes que fingir estar bien conmigo. Puedes sentir, respirar y tomarte tu tiempo. Ojalá estas palabras puedan abrazarte un poquito hasta que pase la tormenta. 🫂","Cercano está Jehová a los quebrantados de corazón.","Salmos 34:18"],["A veces el corazón necesita descansar antes de volver a sonreír. Te quiero en tus días luminosos y también en los grises.","Él sana a los quebrantados de corazón, y venda sus heridas.","Salmos 147:3"]]},ansiosa:{label:"Respira conmigo",items:[["Respira despacito, mi amor. No tienes que resolverlo todo de una vez. Este momento también pasará. 🌷","Por nada estéis afanosos; sean conocidas vuestras peticiones delante de Dios.","Filipenses 4:6"],["Haz una pausa. Inhala. Exhala. Suelta un poquito de lo que pesa. Tu corazón merece un momento de calma.","Echando toda vuestra ansiedad sobre él, porque él tiene cuidado de vosotros.","1 Pedro 5:7"]]},cansada:{label:"Descansa, mi amor",items:[["Hoy no tienes que demostrarle nada a nadie. Descansa. Tu valor no depende de cuánto hagas en un día. 😴❤️","Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.","Mateo 11:28"],["Si pudiera estar ahí, te daría un abrazo y te diría: tranquila, mi vida, también está bien detenerse un poquito.","En paz me acostaré, y asimismo dormiré.","Salmos 4:8"]]},enojada:{label:"Un poquito de calma",items:[["Tienes derecho a sentirte molesta. Tómate tu espacio, respira y vuelve a ti poquito a poquito. ❤️","La blanda respuesta quita la ira.","Proverbios 15:1"],["No tienes que decidir nada en medio de una tormenta. Primero calma tu corazón; después podrás pensar con más claridad.","Mejor es el que tarda en airarse que el fuerte.","Proverbios 16:32"]]},sola:{label:"Aquí tienes un abrazo",items:[["Aunque ahora te sientas sola, espero que estas palabras te recuerden que hay alguien que desea verte bien, escucharte y abrazarte cuando lo necesites. 🫂","Nunca te dejaré, ni te desampararé.","Hebreos 13:5"],["Cierra los ojos un segundo e imagina que estoy frente a ti diciéndote: aquí estoy, mi amor.","Jehová está contigo, poderoso, él salvará.","Sofonías 3:17"]]},orgullosa:{label:"Estoy orgulloso de ti",items:[["Mira todo lo que has avanzado. Has crecido, has aprendido y sigues adelante. Celebra también todo lo que has logrado. ✨","Todo lo puedo en Cristo que me fortalece.","Filipenses 4:13"],["No minimices tus pequeños logros. También merecen celebrarse. Estoy feliz de ver en quién te estás convirtiendo.","Jehová cumplirá su propósito en mí.","Salmos 138:8"]]},amor:{label:"Un recordatorio de mi amor",items:[["Por si hoy necesitabas escucharlo: te quiero muchísimo. No solo cuando todo va bien; también cuando estás sensible, cansada o necesitas cariño. ❤️","Y sobre todas estas cosas vestíos de amor, que es el vínculo perfecto.","Colosenses 3:14"],["Hoy solo quiero decirte esto: me encanta tenerte en mi vida.","Las muchas aguas no podrán apagar el amor.","Cantares 8:7"]]}};
// Más variedad: cada emoción tiene muchos mensajes para que la experiencia no se repita.
messages.feliz.items.push(
["Me encanta imaginarte sonriendo. Disfruta esta felicidad sin pensar demasiado en mañana; este momento es tuyo. 💕","Gozaos y alegraos en Jehová.","Salmos 32:11"],
["Hoy tienes una luz especial. Que nada te haga olvidar lo bonito que es verte feliz.","El gozo de Jehová es vuestra fuerza.","Nehemías 8:10"],
["Quédate un ratito en esta alegría. Te mereces momentos que se sientan así de bonitos.","Regocijaos en el Señor siempre.","Filipenses 4:4"],
["Si pudiera guardar una imagen de ti para siempre, sería una en la que estés sonriendo de verdad.","Un corazón alegre constituye buen remedio.","Proverbios 17:22"],
["Celebra lo pequeño también, mi amor. Muchas veces ahí viven los momentos más bonitos.","Este es el día que hizo Jehová.","Salmos 118:24"]
);
messages.triste.items.push(
["Ven aquí, aunque sea a través de estas palabras. No tienes que ser fuerte todo el tiempo.","Jehová está cerca de los que tienen el corazón quebrantado.","Salmos 34:18"],
["Si hoy te cuesta sonreír, está bien. Descansa tu corazón y recuerda que mañana puede sentirse diferente.","El llanto puede durar una noche, pero a la mañana vendrá la alegría.","Salmos 30:5"],
["No voy a pedirte que dejes de sentir. Solo quiero recordarte que tus sentimientos también merecen ternura.","Él da esfuerzo al cansado.","Isaías 40:29"],
["Ojalá pudiera darte ahora mismo ese abrazo que no necesita palabras. Mientras tanto, recibe este pedacito de mi cariño.","Jehová sustentará al que cae.","Salmos 145:14"],
["Un día difícil no define tu vida ni todo lo bonito que eres. Hoy solo toca ir poquito a poquito.","No temas, porque yo estoy contigo.","Isaías 41:10"]
);
messages.ansiosa.items.push(
["No corras detrás de todos los pensamientos al mismo tiempo. Quédate aquí, conmigo, en este momento.","Estad quietos, y conoced que yo soy Dios.","Salmos 46:10"],
["Lo que hoy parece enorme puede verse diferente después de descansar. Respira y date tiempo.","Tú guardarás en completa paz a aquel cuyo pensamiento en ti persevera.","Isaías 26:3"],
["Pon una mano sobre tu corazón y respira lento. No necesitas tener todas las respuestas ahora.","Encomienda a Jehová tu camino, y confía en él.","Salmos 37:5"],
["Un pensamiento no siempre es una realidad. Déjalo pasar sin pelear con él.","Cuando pases por las aguas, yo estaré contigo.","Isaías 43:2"],
["Mi amor, paso a paso. Hoy no tienes que resolver toda la semana, solo este momento.","El Señor es mi pastor; nada me faltará.","Salmos 23:1"]
);
messages.cansada.items.push(
["Has hecho suficiente por hoy. Permítete descansar sin sentir culpa.","En lugares de delicados pastos me hará descansar.","Salmos 23:2"],
["No todo tiene que quedar terminado hoy. También es productivo cuidar de ti.","Él da a su amado el sueño.","Salmos 127:2"],
["Apaga un poquito el ruido del mundo y escucha lo que necesita tu corazón: descanso.","Mi presencia irá contigo, y te daré descanso.","Éxodo 33:14"],
["Te mando un abrazo suave para que recuerdes que no tienes que poder con todo siempre.","Los que esperan a Jehová tendrán nuevas fuerzas.","Isaías 40:31"],
["Descansar no significa rendirse. Significa darte fuerzas para continuar.","Venid a mí... y yo os haré descansar.","Mateo 11:28"]
);
messages.enojada.items.push(
["Antes de responder, regálate unos minutos. Tu paz también merece ser protegida.","Airaos, pero no pequéis; no se ponga el sol sobre vuestro enojo.","Efesios 4:26"],
["Está bien estar molesta. Lo importante es que el enojo no termine lastimando tu corazón.","Todo hombre sea pronto para oír, tardo para hablar, tardo para airarse.","Santiago 1:19"],
["No necesitas ganar una discusión para cuidar lo que sientes. Primero encuentra tu calma.","La paz os dejo, mi paz os doy.","Juan 14:27"],
["Respira antes de contestar. A veces unos segundos cambian completamente una conversación.","La respuesta de la lengua apacible es árbol de vida.","Proverbios 15:4"],
["Te abrazo desde aquí. Cuando pase un poquito la intensidad, podrás decidir qué quieres hacer.","El fruto del Espíritu es amor, gozo, paz...","Gálatas 5:22"]
);
messages.sola.items.push(
["Aunque el silencio se sienta grande, tu existencia importa muchísimo. No estás olvidada.","No te dejaré, ni te desampararé.","Hebreos 13:5"],
["Ojalá pudieras sentir este mensaje como un abrazo largo y tranquilo.","Yo estoy con vosotros todos los días.","Mateo 28:20"],
["Hay días en que necesitamos compañía más que consejos. Así que hoy solo quiero acompañarte.","Jehová es mi pastor; nada me faltará.","Salmos 23:1"],
["Si pudiera aparecer ahora mismo, probablemente no diría mucho. Solo te abrazaría.","Sobre ti extenderá su misericordia.","Salmos 103:4"],
["No tienes que esconder que necesitas cariño. Ser vulnerable también es una forma de ser valiente.","Sobrellevad los unos las cargas de los otros.","Gálatas 6:2"]
);
messages.orgullosa.items.push(
["Mira cuánto has crecido. La versión de ti de hace un tiempo estaría orgullosa de quien eres hoy.","La senda de los justos es como la luz de la aurora.","Proverbios 4:18"],
["Celebra tus avances aunque parezcan pequeños. Yo también quiero celebrar contigo.","Jehová hará prosperar la obra de tus manos.","Salmos 90:17"],
["No olvides todo lo que tuviste que superar para llegar hasta aquí.","Esforzaos y cobrad ánimo.","Salmos 31:24"],
["Hoy tienes permiso de decir: sí, lo hice. Y sí, estoy orgullosa de mí.","Bienaventurado el hombre que confía en Jehová.","Jeremías 17:7"],
["Sigue construyendo tu historia a tu ritmo. Lo que estás haciendo importa.","Todo tiene su tiempo.","Eclesiastés 3:1"]
);
messages.amor.items.push(
["Si alguna vez dudas de lo especial que eres para mí, vuelve aquí y recuerda: elegí hacer este pequeño rincón pensando en ti. ❤️","El amor nunca deja de ser.","1 Corintios 13:8"],
["Me gusta quererte en lo sencillo: en una conversación, una sonrisa, un mensaje y hasta en los silencios.","Amémonos unos a otros; porque el amor es de Dios.","1 Juan 4:7"],
["No necesito una fecha especial para decirte que te quiero. Hoy también es un buen día para recordártelo.","Dios es amor.","1 Juan 4:8"],
["Entre tantas personas y tantos caminos, qué bonito coincidir contigo.","Las muchas aguas no podrán apagar el amor.","Cantares 8:7"],
["Guarda este mensaje para esos días en los que necesites una prueba sencilla de mi cariño: te quiero muchísimo. ❤️","Sobre todas estas cosas vestíos de amor.","Colosenses 3:14"]
);
let current=null,index=0;const $=id=>document.getElementById(id);function render(){const x=messages[current].items[index];$('label').textContent=messages[current].label;$('phrase').textContent=x[0];$('verse').textContent='“'+x[1]+'”';$('reference').textContent=x[2];$('another').hidden=false}function show(k){current=k;index=0;render()}document.querySelectorAll('[data-emotion]').forEach(b=>b.onclick=()=>show(b.dataset.emotion));$('another').onclick=()=>{index=(index+1)%messages[current].items.length;render()};$('surprise').onclick=()=>{const k=Object.keys(messages);show(k[Math.floor(Math.random()*k.length)]);document.querySelector('.message').scrollIntoView({behavior:'smooth',block:'center'})};