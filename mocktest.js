const BANK = {
  ssc: [
  { q: " The mean proportional between 0.06 and 6 is:", opts:[" 0.06","0.6","60","6"], ans:"0.6" },
    { q: "The average of 10 observations is 40. It was realised later that an observation was misread as 34 in place of 4 : 3. Find the correct average ", opts:["39.9","43.9","41.9","40.9"], ans:"40.9" },
    { q: "The ratio of the market prices of gram and pea is 2 : 5, and the ratio of the quantities consumed by a family is 4 : 3. Find the ratio of the expenditure on gram to pea.", opts:["9 : 16","3 : 4","8 : 15","17 : 10"], ans:"8 : 15" },
    { q: " The average of first 13 whole numbers is:", opts:["6","6.5","5","7"], ans:"6" },// trick
     { q: " The volume of a solid cylinder is 5852 cm3 and its height is 38 cm. What is the total surface area of the solid cylinder? (Round your answer to the nearest integer.)", opts:["1969 cm2","1980 cm2","1954 cm2","1936 cm2"], ans:"1980 cm2" },
      { q: "  Who is the current Chief Minister of Delhi as of March 2025, and from which constituency was he/she elected in the 2025 Delhi Assembly elections?", opts:["Rekha Gupta from Rajindra Nagar","Rekha Gupta from Shalimar Bagh","Atishi Marlena from Kalkaji","Arvind Kejriwal from New Delhi"], ans:"Rekha Gupta from Shalimar Bagh" },
       { q: "The Swadeshi Movement, launched to oppose the partition of Bengal and promote Indian goods, began in which year?", opts:["1904","1906","1907","1905"], ans:"1905" },
        { q: " Who among the following has been appointed as the Chairman of Indian Space Research Organisation in January 2025?", opts:["Manish Singhal","Mayank Sharma","Dr. V. Narayanan ","Bhuvnesh Kumar"], ans:"Dr. V. Narayanan" },
        { q: "  In India, which of the following is a groundwater-based irrigation source?", opts:["Pond","Tank","River canal","Open-well"], ans:"Open-well" },
        { q: " In which city of India was the Arctic Circle India Forum held on 3–4 May 2025?", opts:["Kolkata","Patna","Chandigarh","New delhi"], ans:"New Delhi " },
        { q: "What does OCI stand for in the context of Indian citizenship?", opts:["Overseas Card for Indians","Official Citizen of India","Overseas Citizen of India","Original Citizen Identity"], ans:"Overseas Citizen of India" },
        { q: " In a certain code language, ‘GATE’ is coded as ‘4628’ and ‘TURN’ is coded as ‘3567’. What is the code for ‘T’ in the given code language?", opts:["4","6","3","2"], ans:"6" },
        { q: "  The sum of the present ages of a father and his son is 18 years more than 4 times the present age of the son. After 5 years, 4 times the father’s age will be 8 years less than 14 times the son’s age. The difference (in years) between the present ages of the father and the son is:", opts:["49","45","48","53"], ans:"48" },
        { q: "In a certain code language, ‘BLUE’ is coded as ‘4628’ and ‘LOAD’ is coded as ‘3567’. What is the code for ‘L’ in the given code language?", opts:["3","6","7","8"], ans:"16" },
        { q: "Find the surface area of a sphere whose diameter is equal to 112 cm.", opts:["36,976 cm2","38,980 cm2","37,948 cm2","39,424 cm2"], ans:"39,424 cm2" },
        { q: "Find the surface area of a sphere whose diameter is equal to 112 cm.", opts:["36,976 cm2","38,980 cm2","37,948 cm2","39,424 cm2"], ans:"39,424 cm2" },
  ],
  jee: [
    { q: "A thermally insulated vessel contains 150 g of water at 0°C. Then the air from the vessel is pumped out adiabatically. A fraction of water turns into ice and the rest evaporates at 0°C itself. The mass of evaporated water will be closest to : /n ((Latent heat of vaporization of water= 2.10 × 106 J kg–1 and Latent heat of Fusion of water = 3.36 × 105 J kg–1)", opts:["130 g","35 g","20 g","150 g"], ans:"20 g" },
    { q: "The temperature, at which the root mean square velocity of hydrogen molecules equals their escape velocity from the earth, is closest to : /n ([Boltzmann Constant kB = 1.38 × 10–23 J/K Avogadro Number NA = 6.02 × 1026 /kg Radius of Earth : 6.4 × 106 m Gravitational acceleration on Earth = 10ms–2)", opts:["650 K","3 x 10^5 K","10^4 K","800 K"], ans:"10^4 K" },
    { q: "Two lenses of power –15 D and +5 D are in  contact with each other. The focal length of the combination is :", opts:["-20 cm","-10 cm","+20 cm","+10 cm"], ans:"-10 cm" },
    { q: "In Young's experiment, the distance between two slits is made three times then the fringe width with become :-", opts:["9 times","1/9 times","3 times","1/3 times"], ans:"1/3 times" },
  ],
  neet: [
   { q:"A microscope has an objective of focal length 2 cm, eyepiece of focal length 4 cm and the tube length of 40 cm. If the distance of distinct vision of eye is 25 cm, the magnification in the microscope is", opts:["100","125","150","25"], ans:"125" },
    { q:" There are two inclined surfaces of equal length (L) and same angle of inclination 45º with the horizontal. One of them is rough and the other isperfectly smooth A given body takes 2 times as much time to slide down on rough surface than on the smooth surface. The coefficient of kinetic friction (k) between the object and the rough surface is close to", opts:["0.25","0.40","0.5","0.75"], ans:"0.75" },
    { q:" A 2 amp current is flowing through two different small circular copper coils having radii ratio 1:2. The ratio of their respective magnetic moments will be", opts:["1:4","1:2","2:1","4:1"], ans:"1:4" },
    { q:"The electric field in a plane electromagnetic wave is given by Ez = 60 cos (5x + 1.5 ×10^9 t)V/m. Then expression for the corresponding magnetic field is (here subscripts denote the direction of the field):", opts:["By = 2 × 10^–7 cos (5x + 1.5 × 10^9t)T","Bx = 2 × 10^–7 cos (5x + 1.5 × 10^9t)T","Bz = 60cos (5x + 1.5 × 10^9t)T","By = 60sin (5x + 1.5 × 10^9t)T"], ans:"By = 2 × 10^–7 cos (5x + 1.5 × 10^9t)T" },
     { q:"A ball of mass 0.5 kg is dropped from a height of 40 m. The ball hits the ground and rises to a height of 10 m. The impulse imparted to the ball during its collision with the ground is (Take g = 9.8 m/s2)", opts:["21 Ns","0 Ns","84 Ns","7 Ns"], ans:"21 Ns" },
      { q:" The ratio of the wavelengths of the light absorbed by a Hydrogen atom when it undergoes n = 2 → n = 3 and n = 4 → n = 6 transitions, respectively, is", opts:["1/36","1/16","1/9","1/4"], ans:"1/4" },
       { q:" Which among the following electronic configurations belong to main group elements? A. [Ne]3s1 B. [Ar]3d3 4s2 C. [Kr]4d105s25p5 D. [Ar]3d104s1 E. [Rn]5f06d27s2 Choose the correct answer from the options given below:", opts:["B and E only","1A and C only","D and E only","A, C and D only"], ans:"B and E only" },
        { q:"  Which one of the following compounds can exist as cis-trans isomers?", opts:["Pent-1-ene","2-Methylhex-2-ene","1,1-Dimethylcyclopropane","1,2-Dimethylcyclohexane"], ans:"1,2-Dimethylcyclohexane" },
         { q:"Dalton's Atomic theory could not explain which of the following?", opts:["Law of conservation of mass","1Law of constant proportion","Law of multiple proportion"," Law of gaseous volume"], ans:" Law of gaseous volume" },
          { q:"If the half-life (t1/2) for a first order reaction is 1 minute, then the time required for 99.9% completion of the reaction is closet to:", opts:["2 mins","4 mins","5 mins","10 mins"], ans:"10 mins" },
           { q:" The complex II of mitochondrial electron transport chain is also known as", opts:[" Cytochrome bc1","Succinate dehydrogenase","Cytochrome c oxidase","NADH dehydrogenase"], ans:"Succinate dehydrogenase" },
            { q:"Polymerase chain reaction (PCR) amplifies DNA following the equation.", opts:["N2","2n","2n + 1","2N2"], ans:"2n" },
             { q:" What are the potential drawbacks in adoption of the IVF method? A. High fatality risk to mother B. Expensive instruments and reagents C. Husband/wife necessary for being donors D. Less adoption of orphans E. Not available in India F. Possibility that the early embryo does not survive", opts:["B, D, F only.","A, C, D, F only","A, B, C, D only","A, B, C, E, F only"], ans:" B, D, F only." },
              { q:" What is the name of the blood vessel that carries deoxygenated blood from the body to the heart in a frog?", opts:[" Aorta"," Pulmonary artery","Pulmonary vein","Vena cava"], ans:"Vena cava" },
               { q:" Epiphytes that are growing on a mango branch is an example of which of the following?", opts:["Commensalism","Mutualism","Predation ","Amensalism"], ans:"Commensalism " },
                { q:" Epiphytes that are growing on a mango branch is an example of which of the following?", opts:["Commensalism","Mutualism","Predation ","Amensalism"], ans:"Commensalism " },
  ],
  nda: [
   { q:"There is more than .................. to get the job done.", opts:["One way","One ways","any ways","any way"], ans:"One way" },
    { q:" The class decided to organise ..................", opts:["picnic","a picnic","picnics","The picnic"], ans:"a picnic" },
    { q:"Coeval:", opts:["Person of roughly the same age."," Person or organisation that cooperates with others.","Person employed to drive a private car.","Person employed in taking."], ans:"Person of roughly the same age." },
    { q:"Imprest :", opts:["Surprise attack by people.","Money used to manage small expense.","Sudden occurrence of laughter.","Sudden increase in activity"], ans:"Ans : Money used to manage small expense." },
       { q:"The Constitution of India ensures proportionate representation from all regions.", opts:["balanced","partial","unlikely","suffragette"], ans:"partial" },
          { q:" What happens when the sunlight travels through the Earth’s atmosphere?", opts:["The blue colour is scattered more compared to the red colour."," The red colour is scattered more compared to the blue colour.","Both the blue and the red colours are scattered equally.","The blue colour is not scattered but the red colour is scattered the most."], ans:"The blue colour is scattered more compared to the red colour." },
             { q:" When a solid body is partially or completely immersed in a fluid, the fluid exerts an upward force on the body. The magnitude of the force is equal to 1. The mass of the body2. The weight of the displaced fluid by the body Which of the above is/are correct?", opts:["1 only","2 only","Both 1 and 2","Neither 1 nor 2"], ans:"2 only" },
                { q:" Which one of the following is dimensionless quantity?", opts:["Sress","Strain","Pressure","Force"], ans:"Strain" },
                   { q:"Which one among the following elements is known to be discovered the earliest?", opts:["Copper","Gold","Oxygen","Uranium"], ans:"Copper" },
                      { q:"If three resistors of 1 Ohm each, connect in parallel to each other, then resultant resistance is", opts:["1 Ohm","1/3 Ohm","3 Ohm","9 Ohm"], ans:"1/3 Ohm" },
                         { q:"One of the angles of the triangle is", opts:["15°","30°","45°","75°"], ans:"30°" },
                           { q:"Consider the following statements: I. The triangle is right-angled. II. One of the sides of the triangle is 3 times the other. III. The angles A, C and B of the triangle are in AP. Which of the statements give above is/are correct?", opts:[" I only","II and III only"," I and III only "," I, II and III"], ans:"I and III only" },
                             { q:"The sum of the first 8 terms of a GP is 5 times the sum of its first 4 terms. If r ¹ 1 is the common ratio, then what is the number of possible real values of k?", opts:["One","Two","Three","More than three"], ans:"Two" },
                             { q:" If one root of the equation x2– kx + k = 0 exceeds the other by 2 root 3 then which one of the following is a value of k?", opts:["3","6","9","12"], ans:"6" },
                             { q:"Consider the following statements: I. f(x) is an increasing function. II. f(x) has local maximum at x = 0 Which of the statements given above is/are correct?", opts:[" I only","II only","Both I and II ","Neither I nor II"], ans:"Neither I nor II" },
                             { q:"Consider the following statements: I. f(x) is an increasing function. II. f(x) has local maximum at x = 0 Which of the statements given above is/are correct?", opts:[" I only","II only","Both I and II ","Neither I nor II"], ans:"Neither I nor II" },
  ]
};

/* ---------- State ---------- */
let examKey = "";
let paper = [];
let current = 0;
let answers = [];       // user choice per question or null
let status = [];        // "not-visited" | "visited" | "answered" | "marked"
let timerId = null;
let totalSeconds = 20*60;   // set your exam time here (20 min demo)
let leftSeconds = totalSeconds;
let startedAt = null;

/* ---------- Utility ---------- */
const $ = (id)=>document.getElementById(id);

function resetAll(){
  $("examSel").value = "";
}

function startTest(){
  const sel = $("examSel").value;
  if(!sel){ alert("Please select an exam"); return; }
  examKey = sel;
  paper = BANK[sel].map(q=>({...q}));
  answers = Array(paper.length).fill(null);
  status = Array(paper.length).fill("not-visited");
  current = 0;
  startedAt = Date.now();

  $("examName").textContent = sel.toUpperCase();
  $("startScreen").classList.add("hidden");
  $("testScreen").classList.remove("hidden");

  buildPalette();
  visit(current);
  renderQuestion();

  leftSeconds = totalSeconds;
  timerId = setInterval(tick, 1000);
  tick();
}

function buildPalette(){
  const pal = $("palette");
  pal.innerHTML = "";
  paper.forEach((_,i)=>{
    const b = document.createElement("button");
    b.className = "pal-btn";
    b.textContent = i+1;
    b.onclick = ()=>{ saveTemp(); goTo(i); };
    pal.appendChild(b);
  });
  updatePalette();
}

function updatePalette(){
  const items = $("palette").children;
  let answeredCount = 0;
  [...items].forEach((el, i)=>{
    el.className = "pal-btn";
    if(status[i] === "answered") { el.classList.add("answered"); answeredCount++; }
    else if(status[i] === "marked") el.classList.add("marked");
    else if(status[i] === "visited") el.classList.add("visited");
    if(i === current) el.classList.add("current");
  });
  $("progressText").textContent = `${answeredCount}/${paper.length} answered`;
}

function renderQuestion(){
  const q = paper[current];
  $("qIndex").textContent = current+1;
  $("qText").textContent = q.q;

  const wrap = $("qOptions");
  wrap.innerHTML = "";
  q.opts.forEach(opt=>{
    const id = "opt-"+current+"-"+opt;
    const label = document.createElement("label");
    label.className = "opt";
    label.htmlFor = id;

    const input = document.createElement("input");
    input.type = "radio"; input.name = "ans"; input.value = opt; input.id = id;
    if(answers[current] === opt) input.checked = true;

    label.appendChild(input);
    label.appendChild(document.createTextNode(opt));
    wrap.appendChild(label);
  });

  updatePalette();
}

function getSelected(){
  const checked = document.querySelector("input[name='ans']:checked");
  return checked ? checked.value : null;
}

/* ---- Status helpers ---- */
function visit(i){
  const v = getSelected();
  if(v !== null){
    answers[current] = v;
    status[current] = "answered";
  }else if(status[current] !== "marked"){
    status[current] = "visited";
  }
  updatePalette();
  if(status[i] === "not-visited") status[i] = "visited";
}
function saveTemp(){ // do not move next, just store current choice as visited/answered
}

/* ---- Navigation and actions ---- */
function saveAndNext(){
  const v = getSelected();
  if(v === null){
    // no answer chosen
    status[current] = status[current] === "marked" ? "marked" : "visited";
  } else {
    answers[current] = v;
    status[current] = "answered";
  }
  nextQ();
}

function markForReview(){
  // keep current selection (if any) but mark the question
  const v = getSelected();
  if(v !== null) answers[current] = v;
  status[current] = "marked";
  nextQ();
}

function clearResponse(){
  answers[current] = null;
  const radios = document.querySelectorAll("input[name='ans']");
  radios.forEach(r=>r.checked = false);
  if(status[current] !== "marked") status[current] = "visited";
  updatePalette();
}

function nextQ(){
  if(current < paper.length-1){
    current++;
    visit(current);
    renderQuestion();
  }
}

function prevQ(){
  if(current > 0){
    current--;
    visit(current);
    renderQuestion();
  }
}

function goTo(i){
  current = i;
  visit(current);
  renderQuestion();
}

/* ---- Timer ---- */
function tick(){
  if(leftSeconds <= 0){
    clearInterval(timerId);
    doSubmit(true);
    return;
  }
  leftSeconds--;
  const m = Math.floor(leftSeconds/60);
  const s = leftSeconds%60;
  $("timer").textContent = `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
}

/* ---- Submit ---- */
function confirmSubmit(){
  const unanswered = answers.filter(v=>v===null).length;
  const marked = status.filter(s=>s==="marked").length;
  const ok = confirm(
    `Submit test?\nUnanswered: ${unanswered}\nMarked for review: ${marked}\nYou cannot change answers after submit.`
  );
  if(ok) doSubmit(false);
}

function doSubmit(auto=false){
  // count score
  let score = 0;
  paper.forEach((q,i)=>{ if(answers[i] === q.ans) score++; });

  $("testScreen").classList.add("hidden");
  $("resultScreen").classList.remove("hidden");

  const usedSec = Math.max(0, totalSeconds - leftSeconds);
  const um = Math.floor(usedSec/60), us = usedSec%60;

  $("scoreLine").textContent = `Score: ${score} / ${paper.length}` + (auto ? " (auto-submitted)" : "");
  $("timeUsed").textContent = `Time used: ${String(um).padStart(2,"0")}:${String(us).padStart(2,"0")}`;
}

function restart(){
  // back to start
  clearInterval(timerId);
  $("resultScreen").classList.add("hidden");
  $("startScreen").classList.remove("hidden");
  $("examSel").value = "";
}


  function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
  }

/* ---------- Theme toggle (dark/light, persisted) ---------- */
const RK_SUN_ICON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="4.2" y1="4.2" x2="5.6" y2="5.6"/><line x1="18.4" y1="18.4" x2="19.8" y2="19.8"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/><line x1="4.2" y1="19.8" x2="5.6" y2="18.4"/><line x1="18.4" y1="5.6" x2="19.8" y2="4.2"/></svg>';
const RK_MOON_ICON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
(function initTheme() {
  const saved = localStorage.getItem('rk-theme');
  if (saved === 'light') document.documentElement.setAttribute('data-theme', 'light');
})();
function toggleTheme() {
  const root = document.documentElement;
  const isLight = root.getAttribute('data-theme') === 'light';
  if (isLight) {
    root.removeAttribute('data-theme');
    localStorage.setItem('rk-theme', 'dark');
  } else {
    root.setAttribute('data-theme', 'light');
    localStorage.setItem('rk-theme', 'light');
  }
  const btn = document.getElementById('themeToggleBtn');
  if (btn) btn.innerHTML = root.getAttribute('data-theme') === 'light' ? RK_MOON_ICON : RK_SUN_ICON;
}
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('themeToggleBtn');
  if (btn) btn.innerHTML = document.documentElement.getAttribute('data-theme') === 'light' ? RK_MOON_ICON : RK_SUN_ICON;
});
