const questions = [
  {
    tag:'tag-omission', tagLabel:'Omisión de información',
    text:'Una empresa sabe que un componente de su producto tiene una falla potencialmente peligrosa. No lo menciona en el manual de usuario ni informa al ente regulador, argumentando que el riesgo es "manejable internamente".',
    context:'El producto ya está siendo vendido. Miles de usuarios lo utilizan diariamente sin conocer el riesgo.',
    correct:'no',
    reveal_no:'No ético — por omisión deliberada. Ocultar información de seguridad a quienes dependen de ella viola el principio kantiano de tratar a las personas como fines: los usuarios no pueden tomar decisiones informadas si se les priva de información clave.',
    reveal_yes:'En realidad es No ético. Aunque pueda parecer "gestión de riesgos", omitir deliberadamente información de seguridad a reguladores y usuarios elimina su capacidad de consentimiento informado.',
    reveal_gray:'Aunque los matices existen, omitir información de seguridad conocida a usuarios y reguladores cruza la línea hacia lo no ético. El riesgo gestionable internamente no es el mismo que el riesgo que los afectados conocen y aceptan.'
  },
  {
    tag:'tag-pressure', tagLabel:'Presión comercial',
    text:'Una empresa lanza un producto antes de completar todas las pruebas de seguridad porque un competidor acaba de sacar al mercado un producto similar. El equipo de ingeniería advierte que se necesitan 6 meses más de pruebas.',
    context:'El retraso costaría cientos de millones en contratos ya firmados con clientes.',
    correct:'no',
    reveal_no:'No ético — desde el utilitarismo y la ética del deber. Priorizar el cronograma comercial sobre advertencias técnicas concretas convierte a los usuarios finales en instrumentos de la estrategia de mercado, sin su consentimiento.',
    reveal_yes:'En realidad es No ético. La presión competitiva es una realidad empresarial, pero no puede justificar ignorar advertencias técnicas de seguridad. El costo potencial en vidas humanas supera cualquier cálculo financiero de corto plazo.',
    reveal_gray:'La presión comercial es real, pero cuando hay advertencias técnicas concretas de seguridad, la zona gris desaparece. El equipo de ingeniería identificó el riesgo — ignorarlo deliberadamente es una decisión no ética.'
  },
  {
    tag:'tag-governance', tagLabel:'Gobernanza',
    text:'El equipo de certificación de una empresa negocia con el regulador para que ciertos sistemas de seguridad sean excluidos del proceso formal de revisión, argumentando que son "cambios menores" que no requieren escrutinio adicional.',
    context:'Este argumento ahorraría tiempo y dinero en el proceso de aprobación regulatoria.',
    correct:'no',
    reveal_no:'No ético — es manipulación regulatoria. Reclasificar deliberadamente características críticas para evitar escrutinio es una forma de engaño institucional que mina el propósito mismo de la regulación de seguridad.',
    reveal_yes:'En realidad es No ético. Independientemente del resultado, influir en cómo un regulador clasifica un sistema para reducir el escrutinio que recibirá es una forma de captura regulatoria éticamente impermisible.',
    reveal_gray:'Aunque hay espacio legítimo para debatir el alcance de la regulación, hacerlo con el objetivo de reducir deliberadamente la supervisión de sistemas de seguridad excede la zona gris.'
  },
  {
    tag:'tag-ethics', tagLabel:'Cultura organizacional',
    text:'Un ingeniero alerta internamente sobre una falla grave en un sistema de seguridad. Sus superiores le dicen que "el producto ya está aprobado" y que "no hay nada que hacer en este punto". El ingeniero decide no escalar más para no perjudicar su carrera.',
    context:'La falla que identificó podría causar accidentes bajo ciertas condiciones de operación.',
    correct:'gray',
    reveal_no:'Válido desde la ética de la virtud — el coraje moral exige alzar la voz. Pero también hay que reconocer que el ingeniero enfrenta represalias reales. La responsabilidad ética principal recae en la organización que no creó canales seguros para denuncias.',
    reveal_yes:'En realidad es una zona gris compleja. El ingeniero tiene responsabilidad moral de escalar, pero la organización tiene una responsabilidad estructural mayor de proteger a quienes identifican riesgos. Ambos fallan.',
    reveal_gray:'Correcto — es una zona gris con matices. El ingeniero tiene un deber ético de insistir, pero la organización es la primera responsable de crear condiciones donde el coraje moral no sea costoso. La responsabilidad es compartida, pero no equitativa.'
  },
  {
    tag:'tag-conflict', tagLabel:'Conflicto de interés',
    text:'Una empresa delega a sus propios empleados internos la tarea de certificar la seguridad de su propio producto, bajo supervisión nominal de un organismo regulador externo que raramente revisa los resultados.',
    context:'Este modelo ahorra tiempo y recursos al regulador. La empresa tiene incentivos financieros directos en que el producto sea aprobado rápidamente.',
    correct:'no',
    reveal_no:'No ético — es un conflicto de interés estructural. Cuando quien certifica la seguridad tiene incentivos directos en el resultado de esa certificación, el sistema pierde toda garantía de independencia. Es éticamente equivalente a un juez juzgando su propio caso.',
    reveal_yes:'En realidad es No ético. Aunque eficiente, un modelo donde el fabricante auto-certifica sus productos de seguridad elimina la independencia que hace valiosa a la certificación en primer lugar.',
    reveal_gray:'Aunque los modelos de auto-regulación tienen precedentes, cuando están en juego vidas humanas y hay incentivos financieros directos en el resultado, la zona gris se estrecha significativamente.'
  },
  {
    tag:'tag-omission', tagLabel:'Transparencia post-incidente',
    text:'Ocurre un accidente grave con un producto que mató a decenas de personas. La empresa no revela que conocía el defecto causante antes del accidente. Emite un comunicado culpando al "error humano" del operador.',
    context:'Revelar que conocían el defecto implicaría responsabilidad legal directa y daño reputacional severo.',
    correct:'no',
    reveal_no:'No ético — agravado por el contexto. Ocultar información causal después de un accidente mortal, mientras se culpa a terceros, combina deshonestidad, injusticia hacia las víctimas y obstaculización de la prevención de futuros accidentes.',
    reveal_yes:'En realidad es claramente No ético. Después de un accidente mortal, la transparencia sobre causas conocidas no es optativa — es una obligación ética y legal. Atribuir la causa a errores del operador cuando se conoce el defecto es una mentira activa.',
    reveal_gray:'Aunque las implicaciones legales son reales, la zona gris ética aquí es mínima. Encubrir causas conocidas de un accidente mortal mientras se culpa a terceros es una de las violaciones éticas más claras posibles.'
  },
  {
    tag:'tag-pressure', tagLabel:'Incentivos perversos',
    text:'Los ejecutivos de una empresa reciben bonificaciones multimillonarias atadas directamente a la velocidad con que el producto llega al mercado. El departamento de seguridad pide más tiempo; los ejecutivos aprueban el lanzamiento.',
    context:'Los ejecutivos argumentan que "confían en el criterio técnico del equipo" aunque ese equipo pidió explícitamente más tiempo.',
    correct:'no',
    reveal_no:'No ético — es el problema clásico de incentivos perversos. Cuando las recompensas personales dependen del resultado contrario al que la seguridad requiere, se genera una presión estructural para ignorar las advertencias. La responsabilidad del diseño de incentivos es de la organización.',
    reveal_yes:'En realidad es No ético. Argumentar que "confías en el equipo técnico" mientras se ignoran sus advertencias explícitas y se tiene un incentivo financiero directo en hacerlo es una racionalización, no una decisión ética.',
    reveal_gray:'Los incentivos ejecutivos son inevitablemente complejos, pero cuando hay advertencias técnicas explícitas y los incentivos personales apuntan en sentido contrario, ya no es zona gris.'
  },
  {
    tag:'tag-ethics', tagLabel:'Responsabilidad colectiva',
    text:'Decenas de personas en una organización conocían el riesgo: ingenieros, gerentes, abogados, ejecutivos. Cada uno individualmente consideró que "no era su responsabilidad" o que "alguien más lo resolvería". El producto nunca fue corregido.',
    context:'Ninguna persona tomó la decisión de lanzar el producto sabiendo que mataría gente. El resultado fue el producto de muchas inacciones individuales.',
    correct:'no',
    reveal_no:'No ético — dilución de responsabilidad no es lo mismo que ausencia de responsabilidad. La ética kantiana exige que cada persona actúe según su deber independientemente de lo que otros hagan. "Alguien más lo resolverá" es una falla de carácter individual replicada colectivamente.',
    reveal_yes:'En realidad es No ético. Aunque ningún individuo tomó la decisión final de causar daño, cada uno que conocía el riesgo y no actuó contribuyó al resultado. La responsabilidad ética no desaparece porque esté distribuida.',
    reveal_gray:'La dilución de responsabilidad es real como fenómeno psicológico, pero no como argumento ético. Cada persona con conocimiento del riesgo tenía una obligación moral de actuar. La zona gris está en los grados de responsabilidad, no en si existe.'
  }
];

let current = 0, answers = [], correct = 0, grays = 0, wrong = 0;

function startGame() {
  document.getElementById('s-intro').classList.remove('active');
  document.getElementById('s-game').classList.add('active');
  loadQ();
}

function loadQ() {
  const q = questions[current];
  document.getElementById('step-label').textContent = `Pregunta ${current + 1} de ${questions.length}`;
  document.getElementById('prog').style.width = `${(current / questions.length) * 100}%`;
  document.getElementById('q-tag').innerHTML = `<span class="tag ${q.tag}" style="margin-bottom:10px">${q.tagLabel}</span>`;
  document.getElementById('q-text').textContent = q.text;
  document.getElementById('q-context').textContent = q.context;
  document.getElementById('reveal-zone').style.display = 'none';
  ['btn-yes','btn-no','btn-gray'].forEach(b => {
    const el = document.getElementById(b);
    el.classList.remove('selected-yes','selected-no','selected-gray');
    el.disabled = false;
  });
  document.getElementById('btn-gray').classList.add('selected-gray');
  document.getElementById('next-btn').textContent = current === questions.length - 1 ? 'Ver resultados' : 'Siguiente pregunta';
}

function vote(choice) {
  const q = questions[current];
  answers.push({ q: q.text.substring(0,60)+'…', choice, correct: q.correct, tag: q.tagLabel });
  ['btn-yes','btn-no','btn-gray'].forEach(b => { document.getElementById(b).disabled = true; });
  if (choice === 'yes') document.getElementById('btn-yes').classList.add('selected-yes');
  if (choice === 'no')  document.getElementById('btn-no').classList.add('selected-no');
  if (choice === 'gray') document.getElementById('btn-gray').classList.add('selected-gray');
  const rc = document.getElementById('reveal-card');
  const rt = document.getElementById('reveal-title');
  const rb = document.getElementById('reveal-body');
  if (choice === q.correct) {
    rc.className = 'reveal-card reveal-yes';
    rt.className = 'reveal-title reveal-title-yes';
    rt.textContent = 'Tu respuesta coincide con el análisis ético';
    rb.textContent = q[`reveal_${q.correct}`];
  } else if (choice === 'gray') {
    rc.className = 'reveal-card reveal-mixed';
    rt.className = 'reveal-title reveal-title-mixed';
    rt.textContent = 'Zona gris — perspectiva ética';
    rb.textContent = q.reveal_gray;
  } else {
    rc.className = 'reveal-card reveal-no';
    rt.className = 'reveal-title reveal-title-no';
    rt.textContent = 'Perspectiva ética dominante difiere';
    rb.textContent = q[`reveal_${choice}`];
  }
  document.getElementById('reveal-zone').style.display = 'block';
}

function nextQ() {
  current++;
  if (current >= questions.length) { showResults(); return; }
  loadQ();
}

function showResults() {
  document.getElementById('s-game').classList.remove('active');
  document.getElementById('s-results').classList.add('active');
  correct = 0; grays = 0; wrong = 0;
  answers.forEach(a => {
    if (a.choice === a.correct) correct++;
    else if (a.choice === 'gray') grays++;
    else wrong++;
  });
  document.getElementById('r-correct').textContent = correct;
  document.getElementById('r-gray').textContent = grays;
  document.getElementById('r-wrong').textContent = wrong;
  const list = document.getElementById('result-list');
  list.innerHTML = '';
  answers.forEach((a, i) => {
    const isCorrect = a.choice === a.correct;
    const isGray = a.choice === 'gray';
    const dotClass = isCorrect ? 'fi-dot-yes' : isGray ? 'fi-dot-mixed' : 'fi-dot-no';
    const ansLabel = a.choice === 'yes' ? 'Ético' : a.choice === 'no' ? 'No ético' : 'Zona gris';
    const correctLabel = a.correct === 'yes' ? 'Ético' : a.correct === 'no' ? 'No ético' : 'Zona gris';
    list.innerHTML += `<div class="final-item"><div class="fi-dot ${dotClass}"></div><div><p class="fi-q">${i+1}. ${a.tag}</p><p class="fi-ans">Tu respuesta: <strong>${ansLabel}</strong> · Análisis ético: <strong>${correctLabel}</strong></p></div></div>`;
  });
}

function resetGame() {
  current = 0; answers = []; correct = 0; grays = 0; wrong = 0;
  document.getElementById('s-results').classList.remove('active');
  document.getElementById('s-intro').classList.add('active');
}
