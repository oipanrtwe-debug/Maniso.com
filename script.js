/* ============================================
   مانیسو | MANISO — script.js
   ============================================ */
(function(){
'use strict';
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

/* ---------- داده‌ها ---------- */
const DB = [
 {id:1, fa:'تک‌روی سطح‌بندی', en:'Solo Leveling', slug:'solo-leveling', type:'منهوا', genres:['اکشن','فانتزی','سیستمی'], rating:9.8, views:8420000, chs:201, time:'۲۳ دقیقه پیش', day:1, hot:true, featured:true,
  desc:'سونگ جین‌وو، ضعیف‌ترین شکارچی رتبه‌ی E، در سیاه‌چالی مرگبار جانش را از دست می‌دهد؛ اما به‌جای مرگ، «سیستم» را دریافت می‌کند — قدرتی که فقط به او اجازه‌ی سطح‌بندی می‌دهد.'},
 {id:2, fa:'خواننده‌ی دانای کل', en:"Omniscient Reader's Viewpoint", slug:'omniscient-reader', type:'منهوا', genres:['فانتزی','سیستمی','درام'], rating:9.6, views:6150000, chs:165, time:'۱ ساعت پیش', day:4, hot:true, featured:true,
  desc:'کیم دوک‌جا تنها خواننده‌ی رمانی ۳۱۴۹ قسمتی است که هیچ‌کس نخوانده… تا روزی که دنیای واقعی دقیقاً همان رمان می‌شود.'},
 {id:3, fa:'آغازی پس از پایان', en:'The Beginning After The End', slug:'beginning-after-end', type:'منهوا', genres:['فانتزی','تناسخ','ماجراجویی'], rating:9.5, views:5820000, chs:214, time:'۳ ساعت پیش', day:2, featured:true,
  desc:'پادشاهی قدرتمند پس از مرگ در دنیایی جادویی دوباره متولد می‌شود؛ این‌بار با خاطرات یک عمر پادشاهی.'},
 {id:4, fa:'بازگشت فرقه‌ی کوه هوا', en:'Return of the Mount Hua Sect', slug:'mount-hua', type:'منهوا', genres:['رزمی','تاریخی','کمدی'], rating:9.4, views:4910000, chs:148, time:'دیروز', day:3, hot:true, featured:true,
  desc:'چونگ‌میونگ صد سال بعد در فرقه‌ای ورشکسته چشم باز می‌کند. وقت بازسازی است — با مشت و شمشیر!'},
 {id:5, fa:'ماشین نانو', en:'Nano Machine', slug:'nano-machine', type:'منهوا', genres:['رزمی','اکشن','علمی‌تخیلی'], rating:9.2, views:4230000, chs:176, time:'۵ دقیقه پیش', day:5, hot:true},
 {id:6, fa:'برج خدا', en:'Tower of God', slug:'tower-of-god', type:'منهوا', genres:['فانتزی','ماجراجویی','رمز و راز'], rating:9.1, views:3940000, chs:590, time:'۲ روز پیش', day:0},
 {id:7, fa:'افسانه‌ی شمشیر شمالی', en:'Legend of the Northern Blade', slug:'northern-blade', type:'منهوا', genres:['رزمی','تاریخی','درام'], rating:9.3, views:3410000, chs:187, time:'۴ ساعت پیش', day:1},
 {id:8, fa:'جادوی بازگشته باید ویژه باشد', en:"A Returner's Magic Should Be Special", slug:'returner-magic', type:'منهوا', genres:['بازگشتی','فانتزی','مدرسه‌ای'], rating:8.9, views:2870000, chs:264, time:'دیروز', day:6},
 {id:9, fa:'ظاهرگرایی', en:'Lookism', slug:'lookism', type:'منهوا', genres:['درام','مدرسه‌ای','اکشن'], rating:8.8, views:2650000, chs:505, time:'۲ روز پیش', day:4},
 {id:10, fa:'الیسید', en:'Eleceed', slug:'eleceed', type:'منهوا', genres:['اکشن','کمدی','ماورایی'], rating:8.7, views:2310000, chs:312, time:'۶ ساعت پیش', day:2},
 {id:11, fa:'جهان پس از سقوط', en:'The World After the Fall', slug:'world-after-fall', type:'منهوا', genres:['فانتزی','بازگشتی','اکشن'], rating:8.6, views:2140000, chs:143, time:'دیروز', day:0},
 {id:12, fa:'افسانه‌ی آهنگر', en:'Overgeared', slug:'overgeared', type:'منهوا', genres:['فانتزی','سیستمی','ماجراجویی'], rating:8.5, views:1890000, chs:233, time:'۳ روز پیش', day:3},
 {id:13, fa:'قهرمان ضعیف', en:'Weak Hero', slug:'weak-hero', type:'منهوا', genres:['مدرسه‌ای','اکشن','روان‌شناختی'], rating:8.9, views:1740000, chs:278, time:'دیروز', day:5},
 {id:14, fa:'ثبت‌نام مزدور', en:'Mercenary Enrollment', slug:'mercenary-enrollment', type:'منهوا', genres:['اکشن','درام','مدرسه‌ای'], rating:8.7, views:1620000, chs:189, time:'۸ ساعت پیش', day:1},
 {id:15, fa:'وان‌پیس', en:'One Piece', slug:'one-piece', type:'مانگا', genres:['ماجراجویی','اکشن','کمدی'], rating:9.7, views:7210000, chs:1122, time:'۱ روز پیش', day:0, hot:true},
 {id:16, fa:'جوجوتسو کایسن', en:'Jujutsu Kaisen', slug:'jujutsu-kaisen', type:'مانگا', genres:['اکشن','مدرسه‌ای','ماورایی'], rating:9.2, views:5060000, chs:271, time:'۳ روز پیش', day:4},
 {id:17, fa:'برزخ', en:'Berserk', slug:'berserk', type:'مانگا', genres:['اکشن','روان‌شناختی','تاریکی'], rating:9.9, views:4380000, chs:375, time:'۱ هفته پیش', day:5},
 {id:18, fa:'soul Land: خدای دریایی', en:'Soul Land', slug:'soul-land', type:'مانهوا', genres:['فانتزی','رزمی','ماجراجویی'], rating:8.4, views:1230000, chs:452, time:'دیروز', day:6},
 {id:19, fa:'داستان بازگشت استاد ارشد', en:'Senior Return', slug:'senior-return', type:'مانهوا', genres:['رزمی','بازگشتی','فانتزی'], rating:8.6, views:1120000, chs:210, time:'۲ روز پیش', day:3},
 {id:20, fa:'شمشیرزن نابغه‌ی آکادمی جادو', en:'Genius Swordsman of Magic Academy', slug:'genius-swordsman', type:'منهوا', genres:['فانتزی','مدرسه‌ای','اکشن'], rating:8.4, views:980000, chs:96, time:'۱ ساعت پیش', day:2},
];
const TIMES=['۵ دقیقه پیش','۲۳ دقیقه پیش','۱ ساعت پیش','۳ ساعت پیش','۶ ساعت پیش','دیروز','۲ روز پیش','۳ روز پیش'];
const DAYS=['شنبه','یک‌شنبه','دوشنبه','سه‌شنبه','چهارشنبه','پنج‌شنبه','جمعه'];
const NEWS=[
 {slug:'anime-season-news',tag:'انیمه',t:'فهرست کامل انیمه‌های فصل پاییز اعلام شد',d:'۱۲ مرداد ۱۴۰۵',p:'استودیوها فهرست نهایی آثار فصل جدید را منتشر کردند.'},
 {slug:'manhwa-adaptation',tag:'منهوا',t:'اقتباس لایو‌اکشن از یک منه‌وای پرفروش کلید خورد',d:'۱۰ مرداد ۱۴۰۵',p:'شبکه‌ی پخش‌کننده بازیگران اصلی و کارگردان را معرفی کرد.'},
 {slug:'manga-award',tag:'مانگا',t:'برندگان جایزه‌ی سالانه‌ی مانگا معرفی شدند',d:'۷ مرداد ۱۴۰۵',p:'یک سری کمتر از دو سال موفق به کسب جایزه‌ی بزرگ شد.'},
];

/* ---------- ابزارها ---------- */
const faNum = n => String(n).replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
const fmt = n => n.toLocaleString('fa-IR');
const fmtViews = v => v>=1e6 ? faNum((v/1e6).toFixed(1)).replace('.','٫')+' میلیون' : fmt(Math.round(v/1e3))+' هزار';
const typeClass = t => t==='منهوا'?'t-manhwa':t==='مانگا'?'t-manga':'t-manhua';
const img = (seed,w,h)=>`https://picsum.photos/seed/${seed}/${w}/${h}`;
const marks = new Set(JSON.parse(localStorage.getItem('mu_marks')||'[]'));

function toast(msg, type='success'){
  const iconMap = {success:'i-check', error:'i-error', info:'i-bolt'};
  const t=document.createElement('div');t.className='toast';
  t.innerHTML=`<svg><use href="#${iconMap[type]||iconMap.info}"/></svg>${msg}`;
  $('#toasts').appendChild(t);
  setTimeout(()=>{t.classList.add('out');setTimeout(()=>t.remove(),350)},2800);
}

/* ========== سیستم احراز هویت ========== */
const AUTH_KEY = 'maniso_users';
const SESSION_KEY = 'maniso_session';
function getUsers(){ return JSON.parse(localStorage.getItem(AUTH_KEY)||'[]'); }
function saveUsers(users){ localStorage.setItem(AUTH_KEY, JSON.stringify(users)); }
function getSession(){ return JSON.parse(localStorage.getItem(SESSION_KEY)||'null'); }
function setSession(user){ localStorage.setItem(SESSION_KEY, JSON.stringify(user)); }
function clearSession(){ localStorage.removeItem(SESSION_KEY); }

function updateAuthUI(){
  const session = getSession();
  const area = $('#authArea');
  if(session){
    const initial = session.username.charAt(0).toUpperCase();
    area.innerHTML = `
      <div class="user-menu">
        <div class="user-avatar" id="userAvatar">${initial}</div>
        <div class="user-drop" id="userDrop">
          <div style="padding:14px 16px;border-bottom:1px solid var(--line)">
            <div style="font-weight:800;font-size:14px">${session.username}</div>
            <div style="font-size:11px;color:var(--dim);margin-top:2px">${session.email}</div>
          </div>
          <button id="profileBtn"><svg><use href="#i-user"/></svg>پروفایل من</button>
          <button id="settingsBtn"><svg><use href="#i-settings"/></svg>تنظیمات</button>
          <button class="logout" id="logoutBtn"><svg><use href="#i-logout"/></svg>خروج از حساب</button>
        </div>
      </div>`;
    $('#userAvatar').onclick = () => $('#userDrop').classList.toggle('open');
    $('#logoutBtn').onclick = () => { clearSession(); updateAuthUI(); toast('با موفقیت خارج شدید','info'); };
    $('#profileBtn').onclick = () => { $('#userDrop').classList.remove('open'); toast('صفحه‌ی پروفایل به‌زودی اضافه می‌شود!','info'); };
    $('#settingsBtn').onclick = () => { $('#userDrop').classList.remove('open'); toast('صفحه‌ی تنظیمات به‌زودی اضافه می‌شود!','info'); };
    document.addEventListener('click', function closeDrop(e){
      if(!e.target.closest('.user-menu')){ const drop=$('#userDrop'); if(drop) drop.classList.remove('open'); }
    });
  } else {
    area.innerHTML = `<button class="hbtn auth-btn" id="authOpenBtn"><svg><use href="#i-user"/></svg><span>ورود</span></button>`;
    $('#authOpenBtn').onclick = () => openAuthModal();
  }
}

let authMode = 'login';
function openAuthModal(mode='login'){
  authMode = mode; updateAuthTabs();
  $('#authModal').classList.add('open'); document.body.classList.add('lock');
  $$('.form-error').forEach(e => e.classList.remove('show'));
  $$('#authModal input').forEach(i => i.value = '');
}
function closeAuthModal(){ $('#authModal').classList.remove('open'); document.body.classList.remove('lock'); }
function updateAuthTabs(){
  $$('.auth-tab').forEach(t => t.classList.toggle('on', t.dataset.auth === authMode));
  $('#loginForm').style.display = authMode === 'login' ? 'flex' : 'none';
  $('#registerForm').style.display = authMode === 'register' ? 'flex' : 'none';
}
$$('.auth-tab').forEach(t => t.onclick = () => { authMode = t.dataset.auth; updateAuthTabs(); $$('.form-error').forEach(e => e.classList.remove('show')); });
$('#authModal [data-close]').onclick = closeAuthModal;
$('#authModal').addEventListener('click', e => { if(e.target.id === 'authModal') closeAuthModal(); });

$('#loginForm').onsubmit = function(e){
  e.preventDefault();
  const user = $('#loginUser').value.trim();
  const pass = $('#loginPass').value;
  const errEl = $('#loginError');
  const users = getUsers();
  const found = users.find(u => (u.username === user || u.email === user) && u.password === pass);
  if(found){ setSession(found); closeAuthModal(); updateAuthUI(); toast(`خوش آمدید، ${found.username}!`,'success'); }
  else { errEl.querySelector('span').textContent = 'نام کاربری یا رمز عبور اشتباه است'; errEl.classList.add('show'); }
};

$('#registerForm').onsubmit = function(e){
  e.preventDefault();
  const user = $('#regUser').value.trim();
  const email = $('#regEmail').value.trim();
  const pass = $('#regPass').value;
  const errEl = $('#regError');
  if(user.length < 3){ errEl.querySelector('span').textContent = 'نام کاربری باید حداقل ۳ کاراکتر باشد'; errEl.classList.add('show'); return; }
  if(pass.length < 6){ errEl.querySelector('span').textContent = 'رمز عبور باید حداقل ۶ کاراکتر باشد'; errEl.classList.add('show'); return; }
  const users = getUsers();
  if(users.find(u => u.username === user)){ errEl.querySelector('span').textContent = 'این نام کاربری قبلاً ثبت شده'; errEl.classList.add('show'); return; }
  if(users.find(u => u.email === email)){ errEl.querySelector('span').textContent = 'این ایمیل قبلاً ثبت شده'; errEl.classList.add('show'); return; }
  const newUser = { username: user, email: email, password: pass, joined: new Date().toISOString() };
  users.push(newUser); saveUsers(users); setSession(newUser);
  closeAuthModal(); updateAuthUI(); toast(`حساب ${user} با موفقیت ساخته شد!`,'success');
};
updateAuthUI();

/* ---------- تاریخ ---------- */
$('#faDate').textContent = new Intl.DateTimeFormat('fa-IR',{weekday:'long',day:'numeric',month:'long',year:'numeric'}).format(new Date());

/* ---------- تیکر ---------- */
(function(){
  const items = DB.slice(0,9).map(m=>`<span><span class="sep"><svg><use href="#i-bolt"/></svg></span> فصل <b>${faNum(m.chs)}</b> «${m.fa}» منتشر شد</span>`);
  $('#tickerTrack').innerHTML = items.join('')+items.join('');
  if(RM) return;
  const track=$('#tickerTrack'); let pos=0; let hover=false;
  track.parentElement.addEventListener('mouseenter',()=>hover=true);
  track.parentElement.addEventListener('mouseleave',()=>hover=false);
  (function loop(){ if(!hover){ pos-=.6; const half=track.scrollWidth/2; if(-pos>=half) pos+=half; track.style.transform=`translateX(${pos}px)`;} requestAnimationFrame(loop);})();
})();

/* ---------- اسکرمبل ---------- */
function scramble(el,text){
  if(RM){el.textContent=text;return;}
  const pool='ابپتثجچحخدذرزسشصطعفقکگلمنوهی';
  let f=0, total=16;
  clearInterval(el._sc);
  el._sc=setInterval(()=>{
    f++;
    const done=Math.floor(text.length*(f/total));
    el.textContent=text.slice(0,done)+[...text.slice(done)].map(c=>c===' '?' ':pool[Math.random()*pool.length|0]).join('');
    if(f>=total){el.textContent=text;clearInterval(el._sc);}
  },30);
}

/* ---------- اسپات‌لایت ---------- */
const FEAT = DB.filter(m=>m.featured);
let spIdx=0, spTimer;
function setSpot(i){
  spIdx=(i+FEAT.length)%FEAT.length;
  const m=FEAT[spIdx];
  $('#spBg').src=img(m.slug+'-banner',1600,900);
  $('#spCover').src=img(m.slug,460,640);
  scramble($('#spTitle'),m.fa);
  $('#spEn').textContent=m.en;
  $('#spDesc').textContent=m.desc;
  $('#spBadgeText').textContent='فصل '+faNum(m.chs);
  $('#spMeta').innerHTML=`<span class="mchip rate"><svg><use href="#i-star"/></svg>امتیاز ${faNum(m.rating.toFixed(1)).replace('.','٫')}</span>`+
    `<span class="mchip">${m.type}</span>`+`<span class="mchip"><svg><use href="#i-eye"/></svg>${fmtViews(m.views)}</span>`+
    m.genres.map(g=>`<span class="mchip">${g}</span>`).join('');
  $('#spCur').textContent=faNum(String(spIdx+1).padStart(2,'0'));
  const markSvg = marks.has(m.id) ? '#i-bookmark-filled' : '#i-bookmark';
  $('#spMark').innerHTML = `<svg><use href="${markSvg}"/></svg>`;
  $('#spMark').classList.toggle('marked',marks.has(m.id));
  const bar=$('#spProgBar');bar.classList.remove('run');void bar.offsetWidth;if(!RM)bar.classList.add('run');
}
$('#spTot').textContent=faNum(FEAT.length);
function spAuto(){clearInterval(spTimer);spTimer=setInterval(()=>setSpot(spIdx+1),6500);}
$('#spNext').onclick=()=>{setSpot(spIdx+1);spAuto();};
$('#spPrev').onclick=()=>{setSpot(spIdx-1);spAuto();};
const spotSec=$('#home');
spotSec.addEventListener('mouseenter',()=>clearInterval(spTimer));
spotSec.addEventListener('mouseleave',spAuto);
$('#spRead').onclick=()=>openReader(FEAT[spIdx].id,FEAT[spIdx].chs);
$('#spDetail').onclick=()=>openDetail(FEAT[spIdx].id);
$('#spMark').onclick=()=>toggleMark(FEAT[spIdx].id);
setSpot(0);spAuto();

/* ---------- گرید به‌روزرسانی ---------- */
let curType='all', curGenre='all';
function renderChips(){
  const gens=[...new Set(DB.flatMap(m=>m.genres))].slice(0,10);
  $('#genreChips').innerHTML=`<button class="gchip on" data-g="all">همه‌ی ژانرها</button>`+
    gens.map(g=>`<button class="gchip" data-g="${g}">${g}</button>`).join('');
  $$('#genreChips .gchip').forEach(b=>b.onclick=()=>{
    $$('#genreChips .gchip').forEach(x=>x.classList.remove('on'));
    b.classList.add('on');curGenre=b.dataset.g;renderGrid();
  });
}
function renderGrid(){
  let list=DB.filter(m=>(curType==='all'||m.type===curType)&&(curGenre==='all'||m.genres.includes(curGenre)));
  const g=$('#updatesGrid');
  if(!list.length){g.innerHTML=`<div class="empty-state"><svg><use href="#i-search"/></svg><div class="fd">هیچ اثری پیدا نشد!</div>فیلترها را تغییر بده.</div>`;return;}
  g.innerHTML=list.map((m,i)=>`
  <article class="card reveal" style="--d:${i*45}ms" data-id="${m.id}">
    <div class="cov ${m.hot?'hot':''}">
      <img loading="lazy" src="${img(m.slug,420,574)}" alt="${m.fa}">
      <span class="chip-type ${typeClass(m.type)}">${m.type}</span>
      <button class="bkm ${marks.has(m.id)?'on':''}" data-mark="${m.id}" title="نشان کردن"><svg><use href="${marks.has(m.id)?'#i-bookmark-filled':'#i-bookmark'}"/></svg></button>
      <div class="cov-shade"></div>
      <h3 class="cov-t">${m.fa}</h3>
      <span class="ch-b"><svg><use href="#i-book"/></svg>فصل ${faNum(m.chs)}</span>
    </div>
    <div class="c-foot"><span><svg><use href="#i-clock"/></svg>${m.time}</span><span class="rate"><svg><use href="#i-star"/></svg>${faNum(m.rating.toFixed(1)).replace('.','٫')}</span></div>
  </article>`).join('');
  bindCards(g); observeReveals(g);
}
function bindCards(scope){
  scope.querySelectorAll('.card').forEach(c=>{
    c.addEventListener('click',e=>{ if(e.target.closest('[data-mark]'))return; openDetail(+c.dataset.id); });
  });
  scope.querySelectorAll('[data-mark]').forEach(b=>{
    b.addEventListener('click',e=>{e.stopPropagation();toggleMark(+b.dataset.mark);});
  });
}
$$('#typeTabs .ftab').forEach(b=>b.onclick=()=>{
  $$('#typeTabs .ftab').forEach(x=>x.classList.remove('on'));
  b.classList.add('on');curType=b.dataset.type;renderGrid();
});
renderChips();renderGrid();

/* ---------- برترین‌ها ---------- */
(function(){
  const top=[...DB].sort((a,b)=>b.rating-a.rating||b.views-a.views).slice(0,10);
  const chg=['up','same','up','down','same','new','up','down','same','up'];
  const arrow={up:'▲ ۲',down:'▼ ۱',same:'—',new:'✦ جدید'};
  const arrowIcon={up:'#i-arrow-up',down:'#i-arrow-up',same:'',new:'#i-star'};
  $('#rankList').innerHTML=top.map((m,i)=>{
    const chgClass=chg[i]; const rotStyle=chgClass==='down'?'style="transform:rotate(180deg)"':'';
    const svgUse=arrowIcon[chgClass]?`<svg ${rotStyle}><use href="${arrowIcon[chgClass]}"/></svg>`:'';
    return `<li class="rank-item reveal" style="--d:${i*60}ms" data-id="${m.id}">
      <span class="rank-num">${faNum(String(i+1).padStart(2,'0'))}</span>
      <img src="${img(m.slug,120,160)}" alt="${m.fa}" loading="lazy">
      <div><div class="rank-t">${m.fa}</div>
        <div class="rank-m"><span><svg><use href="#i-star"/></svg>${faNum(m.rating.toFixed(1)).replace('.','٫')}</span><span class="v"><svg><use href="#i-eye"/></svg>${fmtViews(m.views)}</span><span>${m.type}</span></div>
      </div>
      <span class="rank-chg ${chgClass}">${svgUse}${arrow[chgClass]}</span>
    </li>`;
  }).join('');
  $$('#rankList .rank-item').forEach(li=>li.onclick=()=>openDetail(+li.dataset.id));
})();

/* ---------- نشان‌شده‌ها ---------- */
function saveMarks(){localStorage.setItem('mu_marks',JSON.stringify([...marks]));$('#markCnt').textContent=faNum(marks.size);renderCont();}
function toggleMark(id){
  const m=DB.find(x=>x.id===id);
  if(marks.has(id)){marks.delete(id);toast(`«${m.fa}» حذف شد`,'info');}
  else{marks.add(id);toast(`«${m.fa}» اضافه شد`,'success');}
  saveMarks();
  $$(`[data-mark="${id}"]`).forEach(b=>{
    const isMarked=marks.has(id); b.classList.toggle('on',isMarked);
    b.innerHTML=`<svg><use href="${isMarked?'#i-bookmark-filled':'#i-bookmark'}"/></svg>`;
  });
  if(FEAT[spIdx]&&FEAT[spIdx].id===id){
    const isMarked=marks.has(id);
    $('#spMark').innerHTML=`<svg><use href="${isMarked?'#i-bookmark-filled':'#i-bookmark'}"/></svg>`;
    $('#spMark').classList.toggle('marked',isMarked);
  }
  if(curDetail&&curDetail.id===id){
    const isMarked=marks.has(id);
    $('#dmMark').innerHTML=`<svg><use href="${isMarked?'#i-bookmark-filled':'#i-bookmark'}"/></svg>${isMarked?'نشان شده':'نشان کردن'}`;
  }
}
function renderCont(){
  const strip=$('#contStrip');
  if(!marks.size){strip.innerHTML=`<div class="cont-empty"><svg><use href="#i-library"/></svg>هنوز چیزی نشان نکرده‌ای!</div>`;return;}
  strip.innerHTML=[...marks].map(id=>{const m=DB.find(x=>x.id===id);if(!m)return'';
    return `<div class="cont-card" data-id="${m.id}">
      <img src="${img(m.slug,150,200)}" alt="${m.fa}">
      <div><div class="t">${m.fa}</div><div class="c"><svg><use href="#i-book"/></svg>${m.type} • ${faNum(m.chs)} فصل</div>
      <span class="cont-go">ادامه از فصل ${faNum(m.chs)} <svg><use href="#i-chevron-left"/></svg></span></div></div>`;}).join('');
  strip.querySelectorAll('.cont-card').forEach(c=>c.onclick=()=>openReader(+c.dataset.id,DB.find(x=>x.id===+c.dataset.id).chs));
}
$('#markBtn').onclick=()=>{ if(!marks.size){toast('اول چند اثر را نشان کن!','info');return;} $('#continue').scrollIntoView({behavior:RM?'auto':'smooth'}); };
saveMarks();

/* ---------- تقویم ---------- */
let curDay=new Date().getDay(); curDay=(curDay+1)%7;
function renderDays(){
  $('#dayTabs').innerHTML=DAYS.map((d,i)=>{
    const n=DB.filter(m=>m.day===i).length;
    return `<button class="day-tab ${i===curDay?'on':''}" data-d="${i}">${d}<span class="d">${faNum(n)} اثر</span></button>`;
  }).join('');
  $$('#dayTabs .day-tab').forEach(b=>b.onclick=()=>{
    $$('#dayTabs .day-tab').forEach(x=>x.classList.remove('on'));
    b.classList.add('on');curDay=+b.dataset.d;renderSched();
  });
}
function renderSched(){
  const list=DB.filter(m=>m.day===curDay);
  $('#schedList').innerHTML=list.length?list.map(m=>{
    const h=(m.id*7)%24, mn=(m.id*13)%60;
    return `<div class="sched-item reveal" data-id="${m.id}">
      <img src="${img(m.slug,110,146)}" alt="${m.fa}">
      <div><div class="t">${m.fa}</div><div class="n"><svg><use href="#i-book"/></svg>فصل ${faNum(m.chs+1)} • ساعت ${faNum(h)}:${faNum(String(mn).padStart(2,'0'))}</div></div>
      <span class="cd"><svg><use href="#i-bell"/></svg>${faNum((m.id%3)+1)} ساعت مانده</span></div>`;
  }).join(''):`<div class="cont-empty" style="width:100%"><svg><use href="#i-calendar"/></svg>امروز انتشاری ثبت نشده</div>`;
  $('#schedList').querySelectorAll('.sched-item').forEach(s=>s.onclick=()=>openDetail(+s.dataset.id));
  observeReveals($('#schedList'));
}
renderDays();renderSched();

/* ---------- آمار شمارشی ---------- */
(function(){
  const els=$$('.stat .n');
  const io=new IntersectionObserver(es=>es.forEach(e=>{
    if(!e.isIntersecting)return; io.unobserve(e.target);
    const target=+e.target.dataset.n;
    if(RM){e.target.textContent=fmt(target);return;}
    const t0=performance.now(),dur=1400;
    (function tick(t){const p=Math.min(1,(t-t0)/dur),ea=1-Math.pow(1-p,3);
      e.target.textContent=fmt(Math.round(target*ea));
      if(p<1)requestAnimationFrame(tick);})(t0);
  }),{threshold:.4});
  els.forEach(el=>io.observe(el));
})();

/* ---------- اخبار ---------- */
$('#newsGrid').innerHTML=NEWS.map((n,i)=>`
  <article class="news-card reveal" style="--d:${i*90}ms">
    <div class="im"><img loading="lazy" src="${img(n.slug,640,400)}" alt="${n.t}"></div>
    <div class="news-body"><span class="news-tag"><svg><use href="#i-bolt"/></svg>${n.tag}</span><h3>${n.t}</h3><p>${n.p}</p><span class="news-date"><svg><use href="#i-calendar"/></svg>${n.d}</span></div>
  </article>`).join('');
$$('#newsGrid .news-card').forEach(c=>c.onclick=()=>toast('صفحه‌ی خبر به‌زودی باز می‌شود','info'));

/* ---------- مودال جزئیات ---------- */
let curDetail=null;
function openDetail(id){
  const m=DB.find(x=>x.id===id);curDetail=m;
  $('#dmCover').src=img(m.slug,420,574);
  $('#dmTitle').textContent=m.fa;
  $('#dmEn').textContent=m.en;
  $('#dmChips').innerHTML=`<span class="mchip rate"><svg><use href="#i-star"/></svg>${faNum(m.rating.toFixed(1)).replace('.','٫')}</span><span class="mchip">${m.type}</span>`+m.genres.map(g=>`<span class="mchip">${g}</span>`).join('');
  $('#dmStats').innerHTML=`<span>وضعیت: <b>در حال انتشار</b></span><span>فصل‌ها: <b>${faNum(m.chs)}</b></span><span>بازدید: <b class="gold">${fmtViews(m.views)}</b></span><span>آخرین: <b>${m.time}</b></span>`;
  $('#dmDesc').textContent=m.desc;
  const isMarked=marks.has(id);
  $('#dmMark').innerHTML=`<svg><use href="${isMarked?'#i-bookmark-filled':'#i-bookmark'}"/></svg>${isMarked?'نشان شده':'نشان کردن'}`;
  const rows=[];
  for(let c=m.chs;c>Math.max(0,m.chs-16);c--)
    rows.push(`<div class="ch-row" data-ch="${c}"><b>فصل ${faNum(c)}</b>${c>m.chs-3?'<span class="nbn">جدید</span>':''}<span class="tm" style="margin-right:auto">${TIMES[(m.chs-c)%TIMES.length]}</span><svg style="width:16px;height:16px;fill:var(--accent)"><use href="#i-book"/></svg></div>`);
  $('#chRows').innerHTML=rows.join('');
  $('#chRows').scrollTop=0;
  $('#chRows').querySelectorAll('.ch-row').forEach(r=>r.onclick=()=>{closeDetail();openReader(m.id,+r.dataset.ch);});
  $('#detailModal').classList.add('open');document.body.classList.add('lock');
}
function closeDetail(){$('#detailModal').classList.remove('open');document.body.classList.remove('lock');}
$('#dmRead').onclick=()=>{closeDetail();openReader(curDetail.id,1);};
$('#dmLatest').onclick=()=>{closeDetail();openReader(curDetail.id,curDetail.chs);};
$('#dmMark').onclick=()=>{toggleMark(curDetail.id);};
$$('#detailModal [data-close]').forEach(b=>b.onclick=closeDetail);
$('#detailModal').addEventListener('click',e=>{if(e.target.id==='detailModal')closeDetail();});

/* ---------- کتاب‌خوان ---------- */
let rManga=null,rCh=1;
function openReader(id,ch){
  rManga=DB.find(x=>x.id===id);rCh=ch;
  $('#rTitle').textContent=rManga.fa;
  $('#rCh').textContent=`فصل ${faNum(ch)} از ${faNum(rManga.chs)}`;
  $('#rLabel').textContent='فصل '+faNum(ch);
  $('#rNext').disabled=ch>=rManga.chs;$('#rPrev').disabled=ch<=1;
  const pages=$('#rPages');
  const count=9+((id*7+ch)%5);
  pages.innerHTML=`<div class="r-loading"><svg><use href="#i-bolt"/></svg>در حال بارگذاری…</div>`;
  const frag=[];
  for(let i=1;i<=count;i++)frag.push(`<img src="${img(rManga.slug+'-ch'+ch+'-p'+i,900,1400)}" alt="صفحه ${faNum(i)}" loading="${i>2?'lazy':'eager'}">`);
  setTimeout(()=>{pages.innerHTML=frag.join('');},RM?0:250);
  $('#reader').classList.add('open');document.body.classList.add('lock');
  $('#rBody').scrollTop=0;$('#rProg').style.width='0';
}
function closeReader(){$('#reader').classList.remove('open');document.body.classList.remove('lock');}
$('#rClose').onclick=closeReader;
$('#rNext').onclick=()=>{if(rCh<rManga.chs)openReader(rManga.id,rCh+1);else toast('آخرین فصل منتشرشده است','info');};
$('#rPrev').onclick=()=>{if(rCh>1)openReader(rManga.id,rCh-1);};
$('#rTopGo').onclick=()=>$('#rBody').scrollTo({top:0,behavior:RM?'auto':'smooth'});
$('#rWidth').onclick=function(){this.classList.toggle('on');$('#rPages').classList.toggle('wide');this.innerHTML=this.classList.contains('on')?'<svg><use href="#i-width"/></svg>عرض استاندارد':'<svg><use href="#i-width"/></svg>تمام‌عرض';};
$('#rBody').addEventListener('scroll',function(){
  const p=this.scrollTop/(this.scrollHeight-this.clientHeight||1);
  $('#rProg').style.width=(p*100)+'%';
});

/* ---------- جست‌وجو ---------- */
const sInput=$('#searchInput'),sDrop=$('#searchDrop');
sInput.addEventListener('input',()=>{
  const q=sInput.value.trim();
  if(!q){sDrop.classList.remove('open');return;}
  const res=DB.filter(m=>m.fa.includes(q)||m.en.toLowerCase().includes(q.toLowerCase())||m.genres.some(g=>g.includes(q))).slice(0,6);
  sDrop.innerHTML=res.length?res.map(m=>`
    <div class="sr-item" data-id="${m.id}">
      <img src="${img(m.slug,80,108)}" alt=""><div><div class="t">${m.fa}</div><div class="m"><svg><use href="#i-star"/></svg>${m.type} • فصل ${faNum(m.chs)} • ${faNum(m.rating.toFixed(1)).replace('.','٫')}</div></div>
    </div>`).join(''):`<div class="sr-none"><svg><use href="#i-search"/></svg>«${q}» پیدا نشد</div>`;
  sDrop.classList.add('open');
  sDrop.querySelectorAll('.sr-item').forEach(it=>it.onclick=()=>{sDrop.classList.remove('open');sInput.value='';openDetail(+it.dataset.id);});
});
sInput.addEventListener('keydown',e=>{if(e.key==='Enter'){const f=sDrop.querySelector('.sr-item');if(f)f.click();}});
document.addEventListener('click',e=>{if(!e.target.closest('.hsearch'))sDrop.classList.remove('open');});

/* ---------- دکمه‌های هدر ---------- */
$('#randomBtn').onclick=()=>{
  const m=DB[Math.random()*DB.length|0], ch=1+(Math.random()*m.chs|0);
  toast(`فصل شانسی: «${m.fa}» — فصل ${faNum(ch)}`,'info');
  openReader(m.id,ch);
};
$('#themeBtn').onclick=function(){
  document.body.classList.toggle('light');
  const isLight=document.body.classList.contains('light');
  $('#themeIcon').innerHTML=`<use href="${isLight?'#i-sun':'#i-moon'}"/>`;
  toast(isLight?'پوسته‌ی روشن فعال شد':'پوسته‌ی تاریک فعال شد','info');
};
$('#burger').onclick=()=>$('#mobMenu').classList.toggle('open');
$$('#mobMenu a').forEach(a=>a.onclick=()=>$('#mobMenu').classList.remove('open'));
$('#newsForm').addEventListener('submit',e=>{e.preventDefault();toast('عضویتت در خبرنامه ثبت شد!','success');e.target.reset();});

/* ---------- اسکرول‌ها ---------- */
addEventListener('scroll',()=>{
  const h=document.documentElement,max=h.scrollHeight-h.clientHeight;
  $('#scrollProg').style.width=(max?h.scrollTop/max*100:0)+'%';
  $('#header').classList.toggle('scrolled',h.scrollTop>10);
  $('#toTop').classList.toggle('show',h.scrollTop>600);
},{passive:true});
$('#toTop').onclick=()=>scrollTo({top:0,behavior:RM?'auto':'smooth'});

/* ناوبری فعال */
const navLinks=$$('nav.main-nav a');
const secIO=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){navLinks.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id));}
}),{rootMargin:'-40% 0px -55%'});
['home','updates','top','schedule','news'].forEach(id=>{const s=document.getElementById(id);if(s)secIO.observe(s);});

/* ---------- ریویل ---------- */
function observeReveals(scope){
  (scope||document).querySelectorAll('.reveal:not(.obs)').forEach(el=>{
    el.classList.add('obs');revIO.observe(el);
  });
}
const revIO=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');revIO.unobserve(e.target);}}),{threshold:.1});
observeReveals();
$$('.lm').forEach(el=>revIO.observe(el));

/* ---------- کیبورد ---------- */
document.addEventListener('keydown',e=>{
  if($('#reader').classList.contains('open')){
    if(e.key==='Escape')closeReader();
    if(e.key==='ArrowLeft')$('#rNext').click();
    if(e.key==='ArrowRight')$('#rPrev').click();
    return;
  }
  if($('#authModal').classList.contains('open')){ if(e.key==='Escape')closeAuthModal(); return; }
  if(e.key==='Escape')closeDetail();
});

})();

/* ============================================
   پایان script.js — اگر این خط رو می‌بینی، فایل کامله ✔
   ============================================ */
