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
let current=null,index=0;const todayIndex=()=>new Date().getDate()-1;const $=id=>document.getElementById(id);function render(){const x=messages[current].items[index];$('label').textContent=messages[current].label;$('phrase').textContent=x[0];$('verse').textContent='“'+x[1]+'”';$('reference').textContent=x[2];$('another').hidden=false}function show(k){current=k;index=todayIndex()%messages[k].items.length;render()}document.querySelectorAll('[data-emotion]').forEach(b=>b.onclick=()=>show(b.dataset.emotion));$('another').onclick=()=>{index=(index+1)%messages[current].items.length;render()};$('surprise').onclick=()=>{const k=Object.keys(messages);show(k[Math.floor(Math.random()*k.length)]);document.querySelector('.message').scrollIntoView({behavior:'smooth',block:'center'})};
const extraMessages={
llorar:{label:"Llora si lo necesitas",items:[
["Si necesitas llorar, llora. No tienes que esconder lo que sientes. Después de la lluvia también vuelve la calma.","Echa sobre Jehová tu carga, y él te sustentará.","Salmos 55:22"],
["No quiero que te sientas mal por sentir mucho. Tu corazón también merece espacio para soltar.","Jehová está cerca de los quebrantados de corazón.","Salmos 34:18"]]},
abrumada:{label:"Vamos despacio",items:[
["No tienes que cargar todo al mismo tiempo. Una cosa, un respiro y un paso a la vez.","Todo tiene su tiempo.","Eclesiastés 3:1"],
["Haz una pausa, mi amor. Lo urgente puede esperar unos minutos mientras vuelves a respirar.","En quietud y en confianza será vuestra fortaleza.","Isaías 30:15"]]},
miedo:{label:"Estoy contigo",items:[
["Aunque tengas miedo, no tienes que atravesar este momento sintiéndote sola. Respira y ve paso a paso.","No temas, porque yo estoy contigo.","Isaías 41:10"],
["No necesitas saber exactamente qué pasará para dar el siguiente paso.","Cuando pases por las aguas, yo estaré contigo.","Isaías 43:2"]]},
pensando:{label:"Apaga un poquito la mente",items:[
["No todos los pensamientos necesitan una respuesta ahora. Algunos solo necesitan pasar.","Tú guardarás en completa paz a aquel cuyo pensamiento en ti persevera.","Isaías 26:3"],
["Deja descansar tu mente por un momento. Mañana podrás volver a pensar con más calma.","Encomienda a Jehová tu camino, y confía en él.","Salmos 37:5"]]},
enamorada:{label:"Qué bonito es sentir amor",items:[
["Qué bonito saber que tu corazón está sintiendo algo tan especial. Disfrútalo sin miedo.","El amor nunca deja de ser.","1 Corintios 13:8"],
["Si estás sonriendo mientras lees esto, entonces misión cumplida. ❤️","Amémonos unos a otros; porque el amor es de Dios.","1 Juan 4:7"]]},
atencion:{label:"Ven, aquí estoy",items:[
["Si hoy quieres un poquito de atención, considéralo concedido: este mensaje es solo para ti. 💕","Sobre todas estas cosas vestíos de amor.","Colosenses 3:14"],
["Ven a buscar tu dosis de cariño. Te mando un abrazo, un beso y un poquito de mi corazón.","El amor es sufrido, es benigno.","1 Corintios 13:4"]]},
celebrar:{label:"¡Celebremos!",items:[
["Cuéntame todo aunque sea a través de este rincón. Tus alegrías también quiero celebrarlas contigo.","Gozaos con los que se gozan.","Romanos 12:15"],
["Hoy merece una pequeña celebración. Sonríe y disfruta lo que conseguiste.","Este es el día que hizo Jehová.","Salmos 118:24"]]},
dormir:{label:"Buenas noches, mi amor",items:[
["Cierra los ojos. Deja el teléfono un poquito y permite que tu cuerpo descanse. Te mando un beso de buenas noches. 🌙","En paz me acostaré, y asimismo dormiré.","Salmos 4:8"],
["No tienes que resolver nada esta noche. Mañana será otro día para intentarlo.","Él da a su amado el sueño.","Salmos 127:2"]]},
paz:{label:"Un momento de calma",items:[
["Inhala despacio, exhala lento. Quédate aquí unos segundos. No hay prisa.","Estad quietos, y conoced que yo soy Dios.","Salmos 46:10"],
["Que este pequeño rincón sea una pausa bonita dentro de tu día.","La paz os dejo, mi paz os doy.","Juan 14:27"]]},
tuyo:{label:"Algo escrito pensando en ti",items:[
["Si llegaste hasta aquí porque querías leer algo mío, entonces quiero que leas esto: te quiero y me importa cómo estás. ❤️","Dios es amor.","1 Juan 4:8"],
["No sé qué estabas sintiendo cuando abriste esta página, pero sí sé algo: mereces palabras bonitas y cariño sincero.","Amémonos unos a otros.","1 Juan 4:7"]]}
};
Object.assign(messages,extraMessages);

const reasons=[
  "Porque mereces que alguien te recuerde que estás haciendo lo mejor que puedes.",
  "Porque incluso en los días difíciles sigues avanzando.",
  "Porque tu esfuerzo diario tiene valor.",
  "Porque no tienes que poder con todo para ser valiosa.",
  "Porque descansar también es una forma de cuidarte.",
  "Porque mereces darte un poco de paciencia.",
  "Porque tus sentimientos importan.",
  "Porque está bien pedir ayuda cuando la necesitas.",
  "Porque no tienes que enfrentar todo sola.",
  "Porque también mereces recibir el apoyo que das a los demás.",
  "Porque tu bienestar importa.",
  "Porque mereces momentos de tranquilidad.",
  "Porque una mala jornada no define quién eres.",
  "Porque has superado días que alguna vez parecían imposibles.",
  "Porque tus pequeños avances también cuentan.",
  "Porque no necesitas ser perfecta.",
  "Porque puedes ir paso a paso.",
  "Porque tienes derecho a decir que hoy necesitas descansar.",
  "Porque cuidar de ti no es egoísmo.",
  "Porque mereces hablarte con amabilidad.",
  "Porque tus límites también merecen respeto.",
  "Porque puedes empezar de nuevo tantas veces como necesites.",
  "Porque pedir compañía está bien.",
  "Porque una pausa puede ser exactamente lo que necesitas.",
  "Porque no todo tiene que resolverse hoy.",
  "Porque tus preocupaciones merecen ser escuchadas.",
  "Porque puedes reconocer cuando necesitas un respiro.",
  "Porque tu esfuerzo aunque nadie lo vea sigue siendo esfuerzo.",
  "Porque tienes derecho a celebrar tus pequeños logros.",
  "Porque también puedes sentirte orgullosa de ti.",
  "Porque cada día trae una nueva oportunidad.",
  "Porque mereces rodearte de personas que te hagan bien.",
  "Porque tu voz merece ser escuchada.",
  "Porque tus necesidades también son importantes.",
  "Porque mereces relaciones basadas en respeto.",
  "Porque no tienes que esconder cuando algo te duele.",
  "Porque expresar lo que sientes puede ser un acto de valentía.",
  "Porque cuidarte hoy puede ayudarte mañana.",
  "Porque tu tranquilidad vale mucho.",
  "Porque mereces sentirte segura y acompañada.",
  "Porque incluso cuando dudas de ti, sigues intentando.",
  "Porque tus aprendizajes también forman parte de tus logros.",
  "Porque nadie tiene que tener la vida resuelta.",
  "Porque equivocarte no borra todo lo que has conseguido.",
  "Porque puedes aprender de un día difícil sin castigarte por él.",
  "Porque mereces descansar después de un día pesado.",
  "Porque una sonrisa pequeña también cuenta.",
  "Porque puedes disfrutar de las cosas sencillas.",
  "Porque mereces tener días tranquilos.",
  "Porque está bien cambiar de opinión.",
  "Porque está bien decir no cuando algo supera tus límites.",
  "Porque no necesitas justificar cada emoción que sientes.",
  "Porque mereces escuchar cosas bonitas sobre ti.",
  "Porque tu dedicación como enfermera también merece reconocimiento.",
  "Porque cuidar a otras personas requiere mucha entrega.",
  "Porque quien cuida también necesita ser cuidado.",
  "Porque tu trabajo puede ser difícil y aun así puedes darte permiso para descansar.",
  "Porque no tienes que llevar las preocupaciones del trabajo a cada momento de tu vida.",
  "Porque mereces desconectarte cuando termina tu jornada.",
  "Porque también necesitas momentos que no tengan nada que ver con responsabilidades.",
  "Porque tus manos que cuidan también merecen descanso.",
  "Porque puedes sentir orgullo por el bien que haces sin exigirte perfección.",
  "Porque cada paciente es importante, pero tú también importas.",
  "Porque tu bienestar también forma parte del cuidado.",
  "Porque después de cuidar a otros, puedes darte espacio para cuidarte.",
  "Porque mereces reconocer todo lo que aprendes en tu profesión.",
  "Porque incluso un día agotador termina.",
  "Porque mañana no tienes que resolver lo que hoy ya terminó.",
  "Porque tu salud emocional merece atención.",
  "Porque puedes hablar cuando algo se vuelve demasiado pesado.",
  "Porque pedir orientación no significa que hayas fallado.",
  "Porque nadie puede ser fuerte todo el tiempo.",
  "Porque respirar y detenerte también es avanzar.",
  "Porque mereces momentos de silencio y calma.",
  "Porque puedes darte permiso de no hacer nada por un rato.",
  "Porque una noche de descanso puede cambiar cómo ves el día siguiente.",
  "Porque tu cuerpo también te habla y merece ser escuchado.",
  "Porque comer, dormir y descansar también son parte de cuidarte.",
  "Porque mereces tomar agua, respirar y bajar el ritmo.",
  "Porque no todo mensaje necesita una respuesta inmediata.",
  "Porque no toda preocupación necesita resolverse ahora.",
  "Porque puedes dejar algunas cosas para mañana.",
  "Porque tus sueños siguen siendo importantes.",
  "Porque tienes derecho a imaginar un futuro bonito.",
  "Porque puedes construir tus metas poco a poco.",
  "Porque un paso pequeño sigue siendo un paso.",
  "Porque no necesitas compararte con nadie.",
  "Porque tu camino tiene su propio ritmo.",
  "Porque puedes volver a intentarlo.",
  "Porque mereces reconocer tus propias fortalezas.",
  "Porque hay cosas buenas que todavía pueden sorprenderte.",
  "Porque los días malos no duran para siempre.",
  "Porque los días buenos también merecen disfrutarse.",
  "Porque mereces encontrar motivos para sonreír.",
  "Porque un pequeño detalle puede cambiar un día.",
  "Porque un tulipán también puede ser un recordatorio de algo bonito. 🌷",
  "Porque hoy puede ser un buen día para ser amable contigo.",
  "Porque Pao, aunque hoy no lo sientas, tu esfuerzo vale.",
  "Porque siempre puedes darte otra oportunidad.",
  "Porque mereces apoyo, calma y cariño sincero."
];
const personal=[
"Si hoy estás leyendo esto, quiero que sepas que pensé en ti mientras lo hacía. ❤️",
"Cuando tengas un día bonito, quiero que recuerdes compartir un poquito de esa alegría conmigo.",
"Cuando tengas un día difícil, no quiero que sientas que tienes que esconderlo.",
"Si pudiera aparecer en este momento, probablemente primero te daría un abrazo.",
"Gracias por dejarme formar parte de tu historia.",
"Espero que este rincón siempre te saque aunque sea una pequeña sonrisa.",
"Quiero que encuentres aquí un lugar tranquilo cuando necesites cariño.",
"Y si alguna vez olvidas lo especial que eres, vuelve a leer cualquiera de estas palabras. 💕"
];

const daily=[
  "Hoy recuerda que no tienes que ser perfecta para estar orgullosa de ti.",
  "Respira profundo, Pao. Un momento difícil no define todo tu día.",
  "Hoy también mereces recibir el cariño y el apoyo que das a los demás.",
  "Si estás cansada, descansar no es rendirse.",
  "Tu esfuerzo diario tiene valor, incluso cuando nadie lo ve.",
  "No tienes que resolverlo todo hoy. Una cosa a la vez.",
  "Tu bienestar también merece un espacio en tu lista de prioridades.",
  "Hoy date permiso de ir un poquito más despacio.",
  "Lo estás intentando, y eso ya merece reconocimiento.",
  "Si algo pesa demasiado, hablarlo con alguien de confianza puede ayudar.",
  "Tu trabajo importa, pero tú también importas fuera de tu trabajo.",
  "Después de cuidar a otros, recuerda darte un momento para cuidarte.",
  "No necesitas tener todas las respuestas ahora.",
  "Hoy puede ser un buen día para tratarte con más paciencia.",
  "Tu valor no depende de cuánto haces durante el día.",
  "Una pausa también puede ser productiva cuando te ayuda a recuperar fuerzas.",
  "Si hoy no salió como esperabas, mañana puedes volver a intentarlo.",
  "Tu salud emocional merece el mismo cuidado que tu salud física.",
  "Está bien decir que necesitas ayuda.",
  "No minimices tus pequeños logros.",
  "Hoy celebra algo pequeño que hayas conseguido.",
  "Tu camino tiene su propio ritmo; no necesitas compararte.",
  "Permítete disfrutar de un momento tranquilo sin sentir culpa.",
  "Si tienes un día gris, recuerda que un día no es toda tu historia.",
  "Tu sonrisa también merece aparecer sin que tengas que forzarla.",
  "Hay personas que valoran tu presencia más de lo que imaginas.",
  "No tienes que ser fuerte todo el tiempo.",
  "Hoy puedes elegir una sola cosa importante y dejar lo demás para después.",
  "Tu descanso también forma parte de tu cuidado.",
  "Que hoy encuentres aunque sea cinco minutos de verdadera calma.",
  "Tu dedicación como enfermera merece reconocimiento, pero no tienes que sacrificarte siempre.",
  "Cuando termine tu jornada, intenta dejar algunas preocupaciones para mañana.",
  "También mereces momentos que no tengan nada que ver con responsabilidades.",
  "Tus límites son importantes y merecen respeto.",
  "Puedes cuidar de los demás sin olvidarte de ti.",
  "Si necesitas llorar, llorar también está bien.",
  "Si necesitas compañía, pedirla no te hace débil.",
  "Si estás ansiosa, vuelve al presente y respira lentamente.",
  "Si estás enojada, date un momento antes de responder.",
  "Si tienes miedo, concéntrate solamente en el siguiente paso.",
  "Si estás abrumada, empieza por lo más pequeño.",
  "Si piensas demasiado, dale a tu mente unos minutos de descanso.",
  "Hoy no necesitas demostrarle nada a nadie.",
  "Tu esfuerzo sigue teniendo valor aunque el resultado no sea perfecto.",
  "Mereces hablarte con la misma amabilidad que ofrecerías a alguien que quieres.",
  "Hay cosas bonitas que todavía pueden aparecer en tu camino.",
  "Un pequeño detalle puede cambiar el tono de un día entero.",
  "Que hoy encuentres una razón para sonreír y otra para descansar.",
  "Pao, cuídate mucho. Quien cuida a otros también merece ser cuidado. 🌷"
];

const hugTexts=["Abrazo recibido. 🫂❤️","Si pudiera, te abrazaría ahora mismo y no te soltaría todavía.","Un abrazo largo, suave y solo para ti. 💕","Imagina mis brazos alrededor de ti. Respira. Ya estás acompañada.","Abrazo virtual enviado con muchísimo cariño. 🫂"];
let reasonIndex=0;
document.getElementById("enter").onclick=()=>{document.getElementById("welcome").classList.add("hide");localStorage.setItem("loveVisited","1")};
if(localStorage.getItem("loveVisited"))document.getElementById("welcome").classList.add("hide");
document.getElementById("night").onclick=()=>{document.body.classList.toggle("night");localStorage.setItem("loveNight",document.body.classList.contains("night")?"1":"0")};
if(localStorage.getItem("loveNight")==="1")document.body.classList.add("night");
document.getElementById("hug").onclick=()=>{document.getElementById("hugResult").textContent=hugTexts[Math.floor(Math.random()*hugTexts.length)]};
function showReason(){reasonIndex=Math.floor(Math.random()*reasons.length);document.getElementById("reason").textContent=reasons[reasonIndex];document.getElementById("reasonCount").textContent=(reasonIndex+1)+" / 100";}document.getElementById("reasonBtn").onclick=showReason;
const dailyLetter=document.querySelector(".daily-letter");if(dailyLetter){dailyLetter.textContent=daily[new Date().getDate()%daily.length];document.getElementById("newLetter").onclick=()=>{let n=Math.floor(Math.random()*daily.length);dailyLetter.textContent=daily[n]};}
const moreVariety={
feliz:[
["Qué lindo que hoy tengas un motivo para sonreír. Guarda esta sensación y disfrútala sin prisa. 🌸","Servid a Jehová con alegría.","Salmos 100:2"],
["Tu alegría es contagiosa. Ojalá hoy recibas muchas razones para seguir sonriendo.","El corazón alegre alegra el rostro.","Proverbios 15:13"],
["Hoy quiero celebrar tu sonrisa, tus pequeños triunfos y todo lo bonito que llevas dentro.","Alégrense todos los que en ti confían.","Salmos 5:11"],
["Que este momento feliz se quede un poquito más contigo. Te mereces disfrutarlo.","Me mostrarás la senda de la vida; en tu presencia hay plenitud de gozo.","Salmos 16:11"],
["Sonríe, mi amor. A veces una pequeña alegría es exactamente lo que el corazón necesitaba.","La alegría del corazón hermosea el rostro.","Proverbios 15:13"]],
triste:[
["No tienes que apresurarte para estar bien. Date permiso de sanar a tu propio ritmo.","Él sana a los quebrantados de corazón.","Salmos 147:3"],
["Si hoy el mundo se siente gris, recuerda que no todos los días serán iguales.","Por la noche durará el lloro, y a la mañana vendrá la alegría.","Salmos 30:5"],
["Puedes descansar en mis palabras por un momento. No tienes que cargar sola con todo.","Echa sobre Jehová tu carga, y él te sustentará.","Salmos 55:22"],
["Tu tristeza no borra ninguna de las cosas hermosas que hay en ti.","Jehová sostiene a todos los que caen.","Salmos 145:14"],
["Te mando un abrazo para ese corazón que hoy necesita un poquito más de ternura. 🫂","Cercano está Jehová a los quebrantados de corazón.","Salmos 34:18"]],
ansiosa:[
["Mira solo el siguiente paso, no toda la escalera. Poco a poco, mi amor.","Confía en Jehová con todo tu corazón.","Proverbios 3:5"],
["Deja por un instante aquello que no puedes controlar. Ahora mismo solo necesitas respirar.","Encomienda a Jehová tus obras, y tus pensamientos serán afirmados.","Proverbios 16:3"],
["Tu mente puede estar haciendo mucho ruido, pero tú puedes elegir ir despacio.","Tú guardarás en completa paz a aquel cuyo pensamiento en ti persevera.","Isaías 26:3"],
["No tienes que resolver el futuro esta noche. Quédate en el presente.","No os afanéis por el día de mañana.","Mateo 6:34"],
["Respira conmigo: entra calma, sale tensión. Un momento a la vez. 🌷","El Señor es mi luz y mi salvación; ¿de quién temeré?","Salmos 27:1"]],
cansada:[
["Tu cuerpo también habla. Si pide descanso, escúchalo con cariño.","En Dios solamente está acallada mi alma.","Salmos 62:1"],
["Hoy puedes bajar el ritmo. No eres menos valiosa por necesitar una pausa.","Venid a mí todos los que estáis trabajados y cargados.","Mateo 11:28"],
["Déjate descansar sin culpa. Mañana habrá nuevas oportunidades.","Cada día trae su propio afán.","Mateo 6:34"],
["Te mando un abrazo tranquilo para que recuerdes que también mereces ser cuidada.","Jehová es mi pastor; nada me faltará.","Salmos 23:1"],
["A veces la mejor forma de continuar es detenerse un momento.","Mi presencia irá contigo, y te daré descanso.","Éxodo 33:14"]],
enojada:[
["Puedes sentir enojo y aun así elegir cuidar tus palabras y tu corazón.","La blanda respuesta quita la ira.","Proverbios 15:1"],
["Espera un poquito antes de reaccionar. Tu tranquilidad vale más que una respuesta inmediata.","El que tarda en airarse es grande de entendimiento.","Proverbios 14:29"],
["Si algo te dolió, también mereces expresarlo cuando estés más tranquila.","Todo hombre sea pronto para oír, tardo para hablar.","Santiago 1:19"],
["No dejes que un momento de enojo decida por ti. Respira primero.","Mejor es el que tarda en airarse que el fuerte.","Proverbios 16:32"],
["Aquí tienes un recordatorio: puedes poner límites y también conservar tu paz.","Seguid la paz con todos.","Hebreos 12:14"]],
sola:[
["Si hoy necesitas compañía, imagina que me siento a tu lado y simplemente me quedo contigo.","Nunca te dejaré, ni te desampararé.","Hebreos 13:5"],
["No necesitas tener algo importante que decir. También podemos compartir silencio.","Yo estoy con vosotros todos los días.","Mateo 28:20"],
["Tu corazón merece sentirse acompañado y escuchado.","Dios es nuestro amparo y nuestra fuerza.","Salmos 46:1"],
["Si pudiera estar ahí, te prepararía un abrazo enorme y me quedaría un ratito contigo.","Echa sobre Jehová tu carga.","Salmos 55:22"],
["Que estas palabras llenen aunque sea un poquito ese espacio que hoy se siente vacío.","Jehová está cerca de todos los que le invocan.","Salmos 145:18"]],
orgullosa:[
["Mira todo lo que has conseguido y date el crédito que mereces. ✨","No nos cansemos de hacer bien.","Gálatas 6:9"],
["Hay cosas que antes parecían imposibles y hoy forman parte de tu historia.","Todo lo puedo en Cristo que me fortalece.","Filipenses 4:13"],
["Tu esfuerzo merece reconocimiento, incluso cuando nadie más lo ve.","Jehová recompensará tu obra.","Rut 2:12"],
["Estoy feliz de verte avanzar a tu manera y a tu ritmo.","La senda de los justos es como la luz de la aurora.","Proverbios 4:18"],
["Nunca olvides cuántas veces seguiste adelante aun cuando fue difícil.","Esforzaos y cobrad ánimo.","Salmos 31:24"]],
amor:[
["Si estás buscando una razón para sentirte querida, empieza por esta: eres profundamente especial para mí. ❤️","Dios es amor.","1 Juan 4:8"],
["Te quiero en los días fáciles y también en los días en que necesitas un poco más de paciencia y cariño.","El amor todo lo sufre, todo lo cree, todo lo espera.","1 Corintios 13:7"],
["No hay una hora perfecta para decirte que te quiero. Este momento es perfecto.","Sobre todas estas cosas vestíos de amor.","Colosenses 3:14"],
["Quiero que cuando pienses en este rincón recuerdes una cosa: fue creado pensando en ti.","El amor nunca deja de ser.","1 Corintios 13:8"],
["Te quiero por quien eres, no por lo que haces. Nunca olvides eso.","Amémonos unos a otros.","1 Juan 4:7"]],
llorar:[
["Si las lágrimas quieren salir, déjalas. A veces el corazón necesita soltar antes de sentirse ligero.","Los que sembraron con lágrimas, con regocijo segarán.","Salmos 126:5"],
["No voy a pedirte que sonrías cuando necesitas llorar. Solo quiero que seas amable contigo.","Jehová oye cuando clamo a él.","Salmos 4:3"],
["Llora todo lo que necesites y luego respira. Yo seguiría aquí contigo.","Tú cuentas mis pasos; pon mis lágrimas en tu redoma.","Salmos 56:8"],
["Tus lágrimas no te hacen débil. También forman parte de tu historia.","Jehová enjugará toda lágrima.","Apocalipsis 21:4"],
["Después de dejar salir lo que duele, date un poquito de descanso.","El llanto puede durar una noche, pero a la mañana vendrá la alegría.","Salmos 30:5"]],
abrumada:[
["No intentes ordenar toda tu vida en una sola tarde. Empieza por una sola cosa.","Todo tiene su tiempo.","Eclesiastés 3:1"],
["Haz una lista mental de una sola prioridad y deja lo demás para después.","Encomienda a Jehová tus obras.","Proverbios 16:3"],
["No estás fallando por sentirte sobrepasada. A veces simplemente llevamos demasiado encima.","Mi presencia irá contigo, y te daré descanso.","Éxodo 33:14"],
["Paosa. Agua. Respiración. Una cosa a la vez. Eso también cuenta como avanzar.","Dios es nuestro amparo y nuestra fuerza.","Salmos 46:1"],
["No tienes que hacerlo todo sola. Pedir ayuda también es una forma de cuidarte.","Sobrellevad los unos las cargas de los otros.","Gálatas 6:2"]],
miedo:[
["Puedes sentir miedo y aun así dar un pequeño paso. No tienes que sentirte valiente todo el tiempo.","No temas, porque yo estoy contigo.","Isaías 41:10"],
["Mira a tu alrededor y vuelve al presente. Ahora mismo estás aquí, respirando.","Cuando pases por las aguas, yo estaré contigo.","Isaías 43:2"],
["No dejes que lo que todavía no ha ocurrido robe toda tu paz de hoy.","No os afanéis por el día de mañana.","Mateo 6:34"],
["Si necesitas detenerte, hazlo. Después podrás decidir el siguiente paso.","Espera en Jehová; esfuérzate, y aliéntese tu corazón.","Salmos 27:14"],
["Te mando calma para ese momento en que el miedo parece hablar demasiado fuerte.","Jehová es mi luz y mi salvación; ¿de quién temeré?","Salmos 27:1"]],
pensando:[
["No necesitas encontrar una respuesta para cada pensamiento. Algunos pueden quedarse sin resolver por ahora.","Estad quietos, y conoced que yo soy Dios.","Salmos 46:10"],
["Tu mente merece descanso también. Dale permiso de hacer una pausa.","En paz me acostaré, y asimismo dormiré.","Salmos 4:8"],
["Cuando aparezca otro pensamiento, déjalo pasar y vuelve a tu respiración.","Tú guardarás en completa paz.","Isaías 26:3"],
["No todo lo que imaginas va a suceder. Quédate con lo que sabes ahora.","Confía en Jehová con todo tu corazón.","Proverbios 3:5"],
["Esta noche no necesitas resolver la vida. Solo necesitas descansar un poco.","Él da a su amado el sueño.","Salmos 127:2"]],
enamorada:[
["Disfruta esa sonrisa que aparece cuando piensas en alguien especial. 🥰","Las muchas aguas no podrán apagar el amor.","Cantares 8:7"],
["Qué bonito cuando el corazón encuentra una persona que le hace ilusión.","El amor nunca deja de ser.","1 Corintios 13:8"],
["Permítete disfrutar de lo bonito sin analizar cada detalle.","Sobre todas estas cosas vestíos de amor.","Colosenses 3:14"],
["Si tu corazón está contento, hoy tenemos una razón más para sonreír.","Este es el día que hizo Jehová.","Salmos 118:24"],
["El amor también vive en los pequeños detalles, en los mensajes y en las sonrisas.","Amémonos unos a otros.","1 Juan 4:7"]],
atencion:[
["Si viniste por cariño, aquí tienes un poquito: te mando un abrazo enorme. 🫂","Amados, amémonos unos a otros.","1 Juan 4:7"],
["Hoy quiero que sientas que este mensaje fue escrito exclusivamente para ti.","El amor es sufrido, es benigno.","1 Corintios 13:4"],
["Ven, quédate un ratito. No necesitas ninguna excusa para querer sentirte querida.","Sobre todas estas cosas vestíos de amor.","Colosenses 3:14"],
["Te presto toda mi atención durante estas palabras: ¿cómo está ese corazón? ❤️","Sobrellevad los unos las cargas de los otros.","Gálatas 6:2"],
["Un beso, un abrazo y un recordatorio: aquí hay alguien que te quiere muchísimo.","Dios es amor.","1 Juan 4:8"]],
celebrar:[
["¡Eso merece una sonrisa enorme! Me alegra que tengas algo bonito que celebrar. 🎉","Gozaos con los que se gozan.","Romanos 12:15"],
["Guarda este momento en tu memoria. Las pequeñas victorias también cuentan muchísimo.","Este es el día que hizo Jehová.","Salmos 118:24"],
["Hoy no vamos a pensar en lo que falta. Hoy toca disfrutar lo que lograste.","Regocijaos en el Señor siempre.","Filipenses 4:4"],
["Estoy orgulloso de ti. Disfruta tu logro y date permiso de sentirte feliz.","Todo lo puedo en Cristo que me fortalece.","Filipenses 4:13"],
["Que nunca te dé pena celebrar tus propias victorias. Te las has ganado.","Jehová ha hecho grandes cosas con nosotros; estaremos alegres.","Salmos 126:3"]],
dormir:[
["Deja el día donde pertenece: en el pasado. Ahora toca descansar.","En paz me acostaré, y asimismo dormiré.","Salmos 4:8"],
["Cierra los ojos y suelta poquito a poquito las preocupaciones de hoy.","En paz me acostaré, y asimismo dormiré.","Salmos 4:8"],
["Mañana tendrás otra oportunidad para continuar. Esta noche mereces descanso.","Él da a su amado el sueño.","Salmos 127:2"],
["Que tu última sonrisa del día sea por este mensaje. Buenas noches, mi amor. 🌙","Yo me acosté y dormí, y desperté, porque Jehová me sustentaba.","Salmos 3:5"],
["Descansa tranquila. No todo tiene que solucionarse antes de dormir.","Encomienda a Jehová tu camino, y confía en él.","Salmos 37:5"]],
paz:[
["Quédate aquí unos segundos. Nada más. Respira y deja que el momento sea tranquilo.","Estad quietos, y conoced que yo soy Dios.","Salmos 46:10"],
["Que tu corazón encuentre hoy un lugar donde descansar.","La paz os dejo, mi paz os doy.","Juan 14:27"],
["No persigas la calma; dale espacio para llegar poco a poco.","Tú guardarás en completa paz.","Isaías 26:3"],
["Baja los hombros, respira y suelta un poquito de lo que pesa.","Jehová dará poder a su pueblo; Jehová bendecirá a su pueblo con paz.","Salmos 29:11"],
["Que nada tenga que ser perfecto para que puedas sentir un poco de paz.","El Señor de paz os dé siempre paz en toda manera.","2 Tesalonicenses 3:16"]],
tuyo:[
["Querías leer algo mío, así que aquí va: me importas más de lo que muchas veces sé explicar con palabras.","Amémonos unos a otros.","1 Juan 4:7"],
["Si hoy necesitabas una señal de cariño, toma esta como una: pensé en ti al escribirla.","Dios es amor.","1 Juan 4:8"],
["No importa qué emoción elegiste antes. Mi mensaje sigue siendo el mismo: te quiero.","Sobre todas estas cosas vestíos de amor.","Colosenses 3:14"],
["Este rincón puede cambiar de frases, pero hay algo que no cambia: el cariño con el que fue creado.","El amor nunca deja de ser.","1 Corintios 13:8"],
["Si pudiera escribirte una sola línea ahora mismo sería: ven, te abrazo. ❤️","Sobrellevad los unos las cargas de los otros.","Gálatas 6:2"]
]};
Object.keys(moreVariety).forEach(k=>messages[k].items.push(...moreVariety[k]));

/* PAU_SUPPORT_MODE */
const pauSupport={
feliz:"Pao, disfruta este momento bonito y date permiso de sonreír.",
triste:"Pao, no tienes que fingir que estás bien. Date permiso de sentir.",
ansiosa:"Pao, respira despacio. No tienes que resolver todo al mismo tiempo.",
cansada:"Pao, descansar también es cuidarte. No tienes que poder con todo.",
enojada:"Pao, está bien sentir enojo. Date un momento antes de reaccionar.",
sola:"Pao, si necesitas compañía, pedirla está bien. No tienes que cargar sola.",
orgullosa:"Pao, reconoce tus avances. Tu esfuerzo también merece ser celebrado.",
amor:"Pao, recuerda que mereces respeto, apoyo y cariño sincero.",
llorar:"Pao, si necesitas llorar, hazlo. No tienes que esconder lo que sientes.",
abrumada:"Pao, una cosa a la vez. No tienes que resolverlo todo hoy.",
miedo:"Pao, tener miedo no significa que no puedas avanzar. Ve paso a paso.",
pensando:"Pao, tu mente también necesita descanso. No todo pensamiento necesita respuesta.",
enamorada:"Pao, disfruta lo bonito con calma y sin olvidarte de cuidarte.",
atencion:"Pao, si necesitas atención o compañía, puedes pedirla.",
celebrar:"Pao, celebra lo bueno de hoy, incluso si parece pequeño.",
dormir:"Pao, deja por hoy lo que pueda esperar. Tu cuerpo necesita descansar.",
paz:"Pao, busca unos minutos de calma y respira sin prisa.",
tuyo:"Pao, este pequeño mensaje está aquí para recordarte que cuentas con apoyo."
};
Object.keys(pauSupport).forEach(k=>{
 if(messages[k]){
   messages[k].items=messages[k].items.map((x,i)=>[
     pauSupport[k]+" "+x[0].replace(/mi amor|todo mi amor|quererte|amarte|amor de mi vida|mi vida/gi,"tu bienestar"),
     x[1],x[2]
   ]);
 }
});
document.title="Para Pao 🌷";
/* PAU_FULL_SUPPORT_CLEANUP */
function cleanPaoText(v){
 if(typeof v!=="string") return v;
 return v
 .replace(/mi amor/gi,"Pao")
 .replace(/mi vida/gi,"Pao")
 .replace(/todo mi amor/gi,"todo mi apoyo")
 .replace(/con todo mi amor/gi,"con mucho aprecio")
 .replace(/te quiero/gi,"cuentas con mi apoyo")
 .replace(/quererte/gi,"apoyarte")
 .replace(/amarte/gi,"apoyarte")
 .replace(/verte feliz también me hace feliz/gi,"me alegra saber que estás bien")
 .replace(/nuestro tiempo/gi,"este momento")
 .replace(/nuestros recuerdos/gi,"tus recuerdos");
}
function cleanPaoCollection(v){
 if(Array.isArray(v)) return v.map(cleanPaoCollection);
 if(v&&typeof v==="object") return Object.fromEntries(Object.entries(v).map(([k,val])=>[k,cleanPaoCollection(val)]));
 return cleanPaoText(v);
}
if(typeof reasons!=="undefined") reasons=cleanPaoCollection(reasons);
if(typeof personal!=="undefined") personal=cleanPaoCollection(personal);
if(typeof daily!=="undefined") daily=cleanPaoCollection(daily);


/* 💎 Mensajes en ventana de vidrio */
(function(){
 function initMessageModal(){
  var modal=document.getElementById("messageModal"),close=document.getElementById("closeMessageModal");
  if(!modal)return;
  var phrase=document.getElementById("phrase"),verse=document.getElementById("verse"),reference=document.getElementById("reference");
  var modalPhrase=document.getElementById("modalPhrase"),modalVerse=document.getElementById("modalVerse"),modalReference=document.getElementById("modalReference");
  function openModal(){
   if(phrase&&modalPhrase)modalPhrase.textContent=phrase.textContent;
   if(verse&&modalVerse)modalVerse.textContent=verse.textContent;
   if(reference&&modalReference)modalReference.textContent=reference.textContent;
   modal.classList.add("open");modal.setAttribute("aria-hidden","false");document.body.classList.add("modal-open");
  }
  function closeModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.classList.remove("modal-open")}
  document.querySelectorAll(".emotions button").forEach(function(btn){btn.addEventListener("click",function(){setTimeout(openModal,0)})});
  if(close)close.addEventListener("click",closeModal);
  modal.addEventListener("click",function(e){if(e.target.hasAttribute("data-close-modal"))closeModal()});
  document.addEventListener("keydown",function(e){if(e.key==="Escape"&&modal.classList.contains("open"))closeModal()});
  var another=document.getElementById("modalAnother"),surprise=document.getElementById("modalSurprise");
  if(another&&document.getElementById("another"))another.onclick=function(){document.getElementById("another").click();setTimeout(openModal,0)};
  if(surprise&&document.getElementById("surprise"))surprise.onclick=function(){document.getElementById("surprise").click();setTimeout(openModal,0)};
 }
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",initMessageModal);else initMessageModal();
})();
