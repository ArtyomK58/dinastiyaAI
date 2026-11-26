(()=>{
const {theory,bullData,bullEffects,leoImage,novelArt} = northstarContent;






const scenes = [
  {date:1,chapter:'Глава 1 · Возвращение в комнату',title:'Ключ и последнее сообщение',lines:[
    ['Миша','Твоя полка слева. Если дверь закроется с первого раза — напиши хозяевам, это важное событие.'],
    ['Мама','В этом месяце дополнительных переводов, скорее всего, не будет. Давай заранее договоримся, как ты справишься.'],
    ['Ася','К выпуску откроем общую комнату? Миша обещал фотографии.'],
    ['Миша','Сначала разрешение и уборка. Стулья и рамки найдём сами.']
  ]},
  {date:3,chapter:'Глава 1 · Первая заявка',title:'Купить часть компании',price:100,lines:[
    ['Миша','Теперь я работаю у ЛУНА Тех. За камеру пока вычитают только из моих мечтаний.'],
    ['Ты','А купить акцию — это тоже быть внутри?'],
    ['Миша','Ася говорит, это доля. Но ключ от офиса за неё не дают.']
  ],docs:[['Карточка ЛУНА Тех','Факт','3 марта','ЛУНА Тех производит устройства. Акция даёт долю участия, её цена меняется, а дивиденд возможен по решению компании. Возвращать цену акции к определённому сроку компания не обязана.','theory-03']]},
  {date:6,chapter:'Глава 2 · Три огонька в чате',title:'Все говорят, что акция вырастет',price:106,lines:[
    ['Миша','Презентация через неделю. В чате пишут, что акция точно вырастет.'],
    ['Ты','Они откуда знают?'],
    ['Миша','У них график. И очень уверенный голос.'],
    ['Ася','Я тоже открыла график. Потом ещё две страницы, которые к сообщению не приложили.']
  ],docs:[
    ['Пересланный пост','Слух','6 марта','«LUNA готовит хит. После презентации будет поздно». Автор показывает прошлый удачный прогноз. Подтверждения будущей прибыли нет.','theory-09'],
    ['Пресс-релиз компании','Заявление','6 марта','Первые поставки начнутся 12 марта. Предзаказы показывают интерес. Итоговые продажи и прибыль будут опубликованы позже.','theory-09'],
    ['Последний опубликованный отчёт','Факт','28 февраля','В сопоставимом периоде выручка составила 100 млн ₽, расходы — 90 млн ₽, прибыль — 10 млн ₽. Это прошлые результаты.','term-gross_profit'],
    ['Прогноз аналитика','Прогноз','6 марта','Аналитик Мария Белова ожидает прибыль 15 млн ₽ при росте продаж. Это оценка, основанная на допущении о продажах.','theory-09']
  ]},
  {date:10,chapter:'Глава 2 · Одна цифра на экране',title:'Заявка по своей цене',price:112,lines:[
    ['Миша','На графике сто двенадцать. А если я оставлю заявку по сто шесть?'],
    ['Нори','Заявка подождёт подходящей цены. Если продавца по этой цене нет, сделка не состоится.'],
    ['Ты','Тогда сначала решу, какую цену я готов заплатить.']
  ],docs:[['Черновик лимитной заявки','Условия','10 марта','Купить по 106 ₽ или дешевле. Средняя цена на экране — 112 ₽. Заявка останется без сделки, пока на рынке нет продавца по подходящей цене.','theory-11']]},
  {date:12,chapter:'Глава 2 · Презентация',title:'Очередь до лестницы',price:118,lines:[
    ['Миша','Очередь до лестницы. По-моему, всё получилось.'],
    ['Ася','Выпускать будут поэтапно. Очередь — одно сведение. Сроки и затраты — другие.']
  ],docs:[['Сообщение с презентации','Заявление','12 марта','Продукт представлен. Поставки разбиты на этапы. Данные о полной прибыли пока не опубликованы.','theory-09']]},
  {date:15,chapter:'Глава 2 · Трещина и первая проверка',title:'Цена и срок',price:110,lines:[
    ['Ты','На телефоне трещина. Чинить сейчас или подождать?'],
    ['Миша','А если подождать, пока акция снова вырастет?'],
    ['Нори','Срок расхода известен. Сколько стоит акция к этому сроку, мы узнаем позже.']
  ],docs:[['Бюллетень ЛУНА Тех','Заявление','15 марта','Часть поставок перенесена на две недели из-за комплектации. Влияние задержки на прибыль пока не раскрыто.','theory-08']]},
  {date:17,chapter:'Глава 2 · Северский вестник',title:'Вечерняя газета',price:109,lines:[
    ['Миша','На входе раздавали газету. Смотри, нашёл знакомое название.'],
    ['Ты','Прочту, что именно написано. В чате все пересказывают по-разному.'],
    ['Миша','Вот, держи. Внизу мелким шрифтом указан источник.']
  ],docs:[['Северский вестник','Пересказ заявления','17 марта','Газета ссылается на бюллетень ЛУНА Тех от 15 марта. Подтверждён перенос части поставок на две недели. Нового отчёта о прибыли пока нет.','theory-09']]},
  {date:19,chapter:'Глава 2 · Общая комната',title:'Место для выставки',price:111,lines:[
    ['Ася','Нам дали комнату на час. Расставим стулья, а первые фотографии прикрепим к доске.'],
    ['Миша','Всё нашлось. Осталось сообразить, что делать, если принтер попросит новые картриджи.'],
    ['Ты','Сначала запишу, что нам точно понадобится. С оценкой расходов разберёмся после.'],
    ['Ася','И с ЛУНА так же. Что уже известно, а что мы сами дорисовали?']
  ],docs:[['Список для выставки','Рабочая заметка','19 марта','Комната и мебель доступны. Печать фотографий зависит от числа работ и цены расходников. Ни того ни другого пока нет в утверждённом списке.','theory-12']]}

];

const terms = {
  bid_ask_spread:['Спред','Разница между ценой, по которой можно купить, и ценой, по которой можно продать.','11'],
  bond:['Облигация','Долговая бумага с условиями выплат и погашения.','04'],
  bond_amortization:['Амортизация облигации','Возврат номинала частями по графику.','04'],
  bond_default:['Дефолт','Неисполнение обязательств, например пропуск оговорённого платежа.','04'],
  bond_face_value:['Номинал облигации','Сумма долга на одну бумагу по условиям выпуска.','04'],
  cash_flow:['Денежный поток','Реальные поступления и выплаты денег за период. Прибыль и наличие денег на счёте могут различаться.','01'],
  company_assets:['Активы компании','Ресурсы бизнеса, например деньги, оборудование или запасы.','01'],
  company_liabilities:['Обязательства','Долги и другие суммы, которые компания должна выплатить или исполнить.','04'],
  cost_of_sales:['Себестоимость продаж','Расходы на производство или приобретение проданных товаров и услуг.','09'],
  credit_rating:['Кредитный рейтинг','Оценка способности заёмщика исполнить долговые обязательства.','04'],
  credit_risk:['Кредитный риск','Риск того, что должник запоздает с выплатой или не заплатит.','04'],
  cross_checking_information:['Перепроверка','Сравнение утверждения с независимыми источниками и оригиналом документа.','09'],
  currency_risk:['Валютный риск','Курс валюты может изменить результат вложения, даже если местная цена актива не менялась.','07'],
  debt_burden:['Долговая нагрузка','Насколько обслуживание долга обременяет денежный поток или доходы.','04'],
  exchange_rate:['Валютный курс','Цена одной валюты, выраженная в другой.','10'],
  financial_statements:['Финансовая отчётность','Документы о результатах, финансовом положении и потоках денег компании.','09'],
  floating_coupon_bond:['Облигация с плавающим купоном','Размер купона рассчитывается по формуле и меняется вслед за указанным ориентиром.','04'],
  gross_profit:['Валовая прибыль','Выручка минус себестоимость проданного. Если затраты растут быстрее, повышение выручки может сопровождаться снижением прибыли.','09'],
  information_disclosure:['Раскрытие информации','Публикация компанией существенных сведений о себе и событиях по установленным правилам.','09'],
  interest_rate_risk:['Процентный риск','Риск изменения цены или будущих доходов вслед за ставками.','10'],
  key_interest_rate:['Ключевая ставка','Ориентир стоимости денег, который устанавливает центральный банк.','10'],
  liquidity:['Ликвидность','Возможность быстро купить или продать актив с небольшим влиянием на цену.','11'],
  liquidity_risk:['Риск ликвидности','Риск того, что для быстрой продажи придётся существенно уступить в цене или ждать покупателя.','11'],
  market_order:['Рыночная заявка','Поручение совершить сделку по доступным ценам. Итоговая цена заранее неизвестна.','11'],
  market_risk:['Рыночный риск','Возможность потерь из-за изменения рыночных цен.','07'],
  net_debt:['Чистый долг','Процентный долг за вычетом денег и их эквивалентов.','04'],
  net_profit:['Чистая прибыль','Доходы за вычетом расходов, процентов и налогов по правилам отчётности.','09'],
  net_profit_margin:['Чистая маржа','Доля чистой прибыли в выручке.','09'],
  official_registry:['Официальный реестр','Список записей, который ведёт уполномоченный орган. Проверь, что запись подтверждает именно нужное утверждение.','09'],
  operating_profit:['Операционная прибыль','Результат основной деятельности после операционных расходов.','09'],
  phishing:['Фишинг','Обман, при котором под видом знакомого сайта или сообщения пытаются получить доступ к данным.','09'],
  portfolio_concentration:['Концентрация портфеля','Сильная зависимость портфеля от одного актива, эмитента или общего фактора.','07'],
  price_change_pct:['Изменение цены в процентах','Разница цен, делённая на прежнюю цену и умноженная на 100%.','06'],
  price_change_rub:['Изменение цены в рублях','Новая цена минус прежняя.','06'],
  primary_market:['Первичный рынок','Размещение новых бумаг. На вторичном рынке бумаги перепродаются между владельцами.','05'],
  primary_source:['Первичный источник','Исходный документ, запись или публикация, откуда взято утверждение.','09'],
  revenue:['Выручка','Сумма, которую компания признаёт за проданные товары и услуги до вычета расходов.','09'],
  share_buyback:['Обратный выкуп','Покупка компанией собственных акций по объявленным условиям.','03'],
  stock:['Акция','Бумага, представляющая долю в компании.','03'],
  stock_dividend:['Дивиденд','Выплата акционерам по решению компании и по установленным условиям.','03'],
  stock_market_cap:['Рыночная капитализация','Цена одной акции, умноженная на число выпущенных акций.','03'],
  stock_split:['Дробление акций','Число акций растёт, расчётная цена одной уменьшается пропорционально. Сам пересчёт сохраняет стоимость пакета.','03'],
  trading_volume:['Объём торгов','Количество бумаг, которыми торговали за период. Денежный оборот выражается в деньгах.','11']
};

const legacyNews = [
  ['Банк Лиоры сообщил о нехватке ликвидности','Банк Лиоры','Заявление','Опасения за банки могут повлиять на весь рынок.','Регулятор объявил о временной поддержке.',[-5,-3,-9,-5],'11'],
  ['Поставки энергии сокращены на 10%','Энергетическое ведомство','Факт','Дефицит может увеличить выручку поставщика и затраты магазина. Условия контрактов различаются.','У Orbit краткосрочный контракт. GreenVolt продаёт часть энергии по плавающей цене.',[-2,8,-1,-6],'10'],
  ['Astra представила продукт для анализа данных','Astra Tech','Заявление','Анонс может повлиять на ожидания. Фактическая выручка ещё неизвестна.','Данных о фактической выручке пока нет.',[7,0,0,1],'09'],
  ['Центробанк повысил ставку на один процентный пункт','Центробанк Лиоры','Факт','Заёмные средства могут подорожать. Влияние зависит от отрасли и компании.','NovaBank вырос в учебной модели. Его реакция зависит от условий конкретного сценария.',[-4,-3,2,-3],'10'],
  ['Анонимный автор заявляет о нарушениях в Orbit','Анонимный пост','Слух','Orbit объявила о проверке. Движение цены само по себе ничего не доказывает.','После заявления началась независимая проверка. Её выводы предстоит изучить.',[0,0,-1,-8],'09'],
  ['Производство выросло на 3%, результаты компаний различаются','Статистическое ведомство и отчёты','Факт','Общая статистика и отчёт отдельной компании отражают разные показатели.','Отчёт Orbit показал, что компания восстанавливается медленнее экономики.',[4,2,3,1],'10']
];

const by = id => document.getElementById(id);
const safe = value => esc(value ?? '');
const rub = cents => new Intl.NumberFormat('ru-RU',{style:'currency',currency:'RUB',maximumFractionDigits:cents % 100 ? 2 : 0}).format(cents / 100);
const signed = cents => (cents > 0 ? '+' : '') + rub(cents);
const percent = n => (n > 0 ? '+' : '') + n.toLocaleString('ru-RU',{maximumFractionDigits:2}) + '%';
const toCents = amount => Math.round(Number(amount) * 100);
const button = (label, action, value='', primary=false) => `<button type="button" class="ns-btn${primary?' ns-primary':''}" data-ns="${safe(action)}" data-value="${safe(value)}">${safe(label)}</button>`;
const termButton = id => button(id.startsWith('term-') ? terms[id.slice(5)]?.[0] || 'Термин' : theory[id]?.title || 'Теория','term',id);
const status = {fact:'Факт',statement:'Заявление',rumor:'Слух',forecast:'Прогноз'};
const lifeKey = 'first-million-life-v13';
const bullKey = 'first-million-bull-v13';
const stockById = Object.fromEntries(bullData.companies.map(c => [c.assetId,c]));
const effectsById = Object.fromEntries(bullEffects.map(e => [e.newsId,e]));
const newsById = Object.fromEntries(bullData.news.map(n => [n.id,n]));
const supported = new Set(['corporateActions']);
const schedule = bullData.news.filter(n => n.requiresFeatures.every(feature => supported.has(feature))).sort((a,b)=>a.day-b.day);
const initialLife = () => ({step:-1,prologue:-1,cash:1800000,qty:0,cost:0,price:10000,dayOpened:0,name:'',goal:'',plan:null,evening:null,repair:null,demo:false,demoStage:0,chosen:{},reviews:{},docs:{},tests:{},quizHelp:{},dialogue:{},paperRead:false,ledger:[],quotes:[],openedTools:false,finished:false,archive:[],checkpoint:null});
function load(key,fresh) {
  try {
    const state=JSON.parse(prototypeProgress.get(key));
    if(state && typeof state==='object') return {...fresh(),...state};
  } catch {}
  return fresh();
}
let life=load(lifeKey,initialLife);
function reindexLife(state){
  if(!state?.dayOpened)return;
  const step=scenes.findIndex(scene=>scene.date===state.dayOpened);
  if(step<0)return;
  state.step=step;
  if(state.finished&&step<scenes.length-1)state.finished=false;
}
reindexLife(life);
reindexLife(life.checkpoint);
life.archive.forEach(reindexLife);
// Import news already read and its price snapshots into the practical market.
const priorNews=load(bullKey,()=>({cursor:0,results:{},prices:{}}));
const newsMarketAssets=bullData.companies.map(c=>[c.assetId,c.name,c.industry,c.openingPrice,0]);
function initializePracticalNews(migrate=false){
  if(!lab.news) lab.news=migrate?{cursor:priorNews.cursor,results:priorNews.results}:{cursor:0,results:{}};
  for(const [id,,,openingPrice] of newsMarketAssets){
    if(lab.h[id]) continue;
    const price=migrate&&priorNews.prices[id] ? priorNews.prices[id]/100 : openingPrice;
    lab.h[id]=[price,price];
    lab.q[id]=0;
    lab.cost[id]=0;
  }
}
labAssets.push(...newsMarketAssets);
initializePracticalNews(true);
let activeView='story', archiveOpen=false, tourIndex=0, novelActionsOpen=false, laptopActivator=null;
function store(key,state) {
  try {prototypeProgress.set(key,JSON.stringify(state));}
  catch {by('ns-storage').hidden=false;}
}
function commitLife(){store(lifeKey,life);renderLife();renderNewsShelves();updateHeader();}

const goals={'city':'Работа в Северске','home':'Возвращение домой','project':'Собственный проект'};
const evenings={'cafe':['Кафе',45000,'Ася рисует будущую выставку на чеке.'],'tea':['Чай',10000,'Ася приходит с печеньем. У Миши находится вторая кружка.'],'rest':['Остаться дома',0,'Миша оставляет на столе кружку и записку.']};
const actions={observe:'Наблюдать',hold:'Сохранить позицию',buy:'Купить',sell:'Продать'};
const currentScene=()=>scenes[life.step];
const currentNews=()=>schedule[lab.news.cursor];
const available=(state=life)=>Math.max(0,state.cash-(state.plan ? state.plan.reserve+state.plan.laptop+Math.max(0,state.plan.food-foodPaid(state.dayOpened)) : 0));
function foodPaid(day){return day*16129;}
function lifeEntry(id,label,amount,day) {
  if(life.ledger.some(entry=>entry.id===id)) return;
  life.cash+=amount;
  life.ledger.push({id,label,amount,day});
}
function openLifeDay(step){
  const scene=scenes[step];
  life.step=step;
  if(!life.dayOpened){
    lifeEntry('income-01','Стипендия и работа',1200000,1);
    lifeEntry('rent-01','Жильё',-300000,1);
    lifeEntry('travel-01','Проезд',-100000,1);
  }
  for(let day=life.dayOpened+1;day<=scene.date;day++) lifeEntry('food-'+day,'Питание',-16129,day);
  if(scene.price){
    life.price=toCents(scene.price);
    if(!life.quotes.some(quote=>quote.day===scene.date))life.quotes.push({day:scene.date,price:life.price});
  }
  life.dayOpened=scene.date;
}
function showDialog(title,html){
  const dialog=by('ns-dialog');
  by('ns-dialog-title').textContent=title;
  by('ns-dialog-body').innerHTML=html;
  if(!dialog.open) dialog.showModal();
  by('ns-dialog-close').focus();
}
function closeDialog(){if(by('ns-dialog').open) by('ns-dialog').close();}
function showTerm(id){
  if(id.startsWith('term-')){
    const t=terms[id.slice(5)];
    if(!t) return;
    const lesson=theory['theory-'+t[2]];
    showDialog(t[0],`<p><b>Простыми словами</b></p><p>${safe(t[1])}</p><p><b>В Академии</b></p><p>${safe(lesson.title)}</p>${button('Открыть главу','academy-link','theory-'+t[2])}`);
    return;
  }
  const t=theory[id];
  if(t) showDialog(t.title,`<p><b>Простыми словами</b></p><p>${safe(t.simple)}</p><p><b>Теория и пример</b></p><p>${safe(t.text)}</p>${button('Открыть главу в Академии','academy-link',id)}`);
}
function renderAcademy(){
  by('ns-academy').innerHTML=Object.entries(theory).map(([id,item])=>{
    const links=Object.entries(terms).filter(([,term])=>'theory-'+term[2]===id);
    return `<details class="ns-card ns-chapter" id="ns-${id}"><summary><span>${safe(item.title)}</span></summary><p>${safe(item.simple)}</p><p>${safe(item.text)}</p><div class="ns-row">${links.map(([term])=>termButton('term-'+term)).join('')}</div></details>`;
  }).join('');
}
function showAcademy(id){
  closeDialog();
  document.querySelector('[data-view="academy"]').click();
  const entry=by('ns-'+id);
  if(entry){entry.open=true;entry.scrollIntoView({block:'start'});entry.querySelector('summary').focus({preventScroll:true});}
}
const sceneArtByDay = {
  1:['dusk','Общежитие · вечер','Ключи и кружка на столе в комнате общежития'],
  3:['desk','Общежитие · утро','Ноутбук и камера на столе у окна'],
  6:['desk','Общежитие · несколько дней спустя','Стол с ноутбуком, камерой и записями'],
  10:['night','Общежитие · вечер','Открытый ноутбук на столе у окна'],
  12:['hall','Зал презентации ЛУНА Тех','Небольшой зал с освещённой сценой'],
  15:['phone','Общежитие · дождь','Треснувший телефон лежит на столе у окна'],
  17:['commons','Общая комната · вечер','Общая комната общежития'],
  19:['commons','Общая комната · после занятий','Стулья и фотографии в общей комнате']
};
const sceneOpening = {
  1:'Я ставлю сумку у двери. На столе уже лежат ключи, а за окном темнеет.',
  3:'Миша кладёт пропуск рядом с камерой. На экране ноутбука открыта карточка ЛУНА Тех.',
  6:'В общем чате одно за другим загораются уведомления. Миша пододвигает ко мне ноутбук.',
  10:'В комнате стало темно. На открытом ноутбуке светятся график и форма заявки.',
  12:'Свет в зале гаснет. На сцену выносят первое устройство.',
  15:'Дождь стучит по подоконнику. Экран ещё работает, хотя трещина пересекла его от края до края.',
  17:'Из коридора доносится шорох бумаги. Миша толкает дверь плечом.',
  19:'Впервые за неделю солнце добралось до стены, на которую Миша собирается повесить снимки.'
};
const sceneShots={1:['corridor','night','message','dusk','kitchen'],3:['desk','desk','desk','night'],6:['message','desk','desk','desk','desk','kitchen'],10:['night','night','desk','night'],12:['hall','stage','stage'],15:['phone','phone','phone','phone'],17:['commons','arrival','arrival','arrival'],19:['commons','commons','commons','night','commons']};
const shotAlt={corridor:'Коридор общежития и приоткрытая дверь',message:'Светящийся телефон на столе общежития',kitchen:'Две кружки на столе в общей кухне',stage:'Сцена презентации со стороны кулис',night:'Открытый ноутбук на столе',arrival:'Миша входит с газетой',commons:'Общая комната общежития'};

const laptopBeats={
  1:'Разговор затихает. Я придвигаю стул к столу и замечаю открытую вкладку с биржей Лиоры.',
  3:'Миша кладёт камеру на полку. На ноутбуке осталась открыта биржа Лиоры.',
  10:'Я отодвигаю черновик заявки. Можно открыть биржу и сверить, что происходит на рынке.',
  17:'Я кладу газету рядом с ноутбуком. Пора посмотреть, что публикует сама биржа.',
  19:'Стулья расставлены. Я возвращаюсь к ноутбуку на столе у окна.'
};
const portraitBySpeaker={'Миша':'misha','Ася':'asya','Мама':'mother','Ты':'player'};
function novelLines(scene){
  const lines=[['',sceneOpening[scene.date]],...scene.lines];
  if(scene.date===6 && life.evening) lines.push(['',evenings[life.evening][2]]);
  if(laptopBeats[scene.date]) lines.push(['',laptopBeats[scene.date],true]);
  return lines;
}
function novelPosition(scene,lines){
  return Math.max(0,Math.min(lines.length-1,Number(life.dialogue?.[scene.date])||0));
}
function novelFrame(scene,lines){
  const position=novelPosition(scene,lines);
  const [fallback,,alt]=sceneArtByDay[scene.date];
  const available=lines[position][2]===true;
  const shot=available?'night':sceneShots[scene.date]?.[position]||fallback;
  const speaker=lines[position][0];
  const key=portraitBySpeaker[speaker];
  const sprite=shot==='arrival'?null:speaker==='Нори'?leoImage:novelArt['sprite_'+key];
  return `<img class="ns-vn-backdrop ${shot==='arrival'&&position===1?'ns-arrival-shot':''}" src="${novelArt[shot]||novelArt[fallback]}" alt="${safe(shotAlt[shot]||alt)}">
    ${sprite?`<img class="ns-vn-sprite ${speaker==='Нори'?'ns-vn-sprite-nori':''} ${speaker==='Ася'?'ns-vn-sprite-left':''}" src="${sprite}" alt="${safe(speaker==='Ты'?life.name||'Герой':speaker)}">`:''}
    ${available?`<button type="button" class="ns-laptop-point" data-ns="open-laptop" aria-label="Открыть Story Mode на ноутбуке"></button>`:''}
    ${scene.date===17&&position>0&&!available?button(life.paperRead?'Перечитать газету':'Взять газету','paper-open'):''}`;
}
function novelDialogue(scene,lines){
  const position=novelPosition(scene,lines);
  const [speaker,line]=lines[position];
  const canContinue=position<lines.length-1;
  const introduce=scene.date===1&&position===1&&!profileReady();
  return `<div class="ns-vn-quote ${speaker?'':'ns-vn-narration'}" aria-live="polite" aria-atomic="true">
    <div>${speaker?`<b class="ns-vn-speaker">${safe(speaker==='Ты'?life.name||'Ты':speaker)}</b>`:''}
    <p>${safe(line)}</p></div>
  </div>
  <div class="ns-vn-controls">
    <button type="button" class="ns-btn" data-ns="vn-line" data-value="-1" ${position===0?'disabled':''}>Назад</button>
    <span class="ns-vn-step" aria-label="Реплика ${position+1} из ${lines.length}">${position+1} / ${lines.length}</span>
    ${introduce?button('Представиться','profile','advance',true):canContinue?button('Дальше','vn-line','1',true):button('К действиям','vn-actions','',true)}
  </div>`;
}
function novelScene(scene){
  const [,location]=sceneArtByDay[scene.date];
  const lines=novelLines(scene);
  return `<section class="ns-vn" aria-label="Сцена">
    <div id="ns-vn-frame">${novelFrame(scene,lines)}</div>
    <header class="ns-vn-heading"><span class="ns-vn-place">${scene.date} марта · ${safe(location)}</span><h2>${safe(scene.title)}</h2></header>
    <div id="ns-vn-dialogue">${novelDialogue(scene,lines)}</div>
    ${novelToolbar(scene)}
  </section>`;
}
function novelToolbar(scene){
  const controls=scene.date===1?[['Записная книжка','ns-life-budget'],['Выбрать планы на вечер','ns-life-evening']]:[
    ['Документы','ns-life-documents'],[life.chosen[scene.date]?'Записанное решение':'Выбрать действие','ns-life-decision']
  ];
  if(scene.date>=12) controls.push(['Пересмотреть гипотезу','ns-life-replay']);
  if(scene.date===17) controls.push(['Газета','newspaper']);
  if(scene.date===15) controls.push(['Решить, что с телефоном','ns-life-repair']);
  return `<nav class="ns-vn-toolbar" aria-label="Действия в сцене">
    ${controls.map(([label,target])=>target==='newspaper'?button(label,'paper-open'):button(label,'vn-actions',target)).join('')}
    ${scene.date===1?button('Имя и цель','profile'):''}${scene.date===3?button('Учебный лот','demo'):''}
    ${button('Спросить Нори','nori')}
    ${button('Весь разговор','vn-transcript')}
  </nav>`;
}
function immersiveMenu(){
  return `<nav class="ns-immersive-menu" aria-label="Разделы игры"><b>✦ NORTHSTAR</b><div>
  ${button('Практика','go','simulator')}${button('Академия','go','academy')}${button('Мой прогресс','go','dashboard')}</div></nav>`;
}
function showNovelTranscript(){
  const lines=novelLines(currentScene());
  showDialog('Весь разговор',`<ol class="ns-full-transcript">${lines.map(([speaker,line])=>`<li>${speaker?`<b>${safe(speaker==='Ты'?life.name||'Ты':speaker)}.</b> `:''}${safe(line)}</li>`).join('')}</ol>`);
}
function showPaper(){
  showDialog('Северский вестник · 17 марта',`<div class="ns-paper" id="ns-paper">
    <img src="${novelArt.paper}" alt="Миша держит сложенную газету">
    <div class="ns-paper-pages"><article><small>СЕВЕРСКИЙ ВЕСТНИК</small><h3>ЛУНА Тех переносит часть поставок</h3><p>Поставки сдвинулись на две недели. Оценки влияния на прибыль в бюллетене компании пока нет.</p></article>
    <div class="ns-paper-fold" style="background-image:url('${novelArt.paperFold}')"></div></div>
  </div><div id="ns-paper-controls" class="ns-row">${button('Развернуть газету','paper-unfold','',true)}</div>`);
}
function unfoldPaper(){
  if(currentScene()?.date!==17)return;
  const picture=by('ns-paper');
  if(!picture||picture.classList.contains('ns-paper-open'))return;
  picture.classList.add('ns-paper-open');
  life.paperRead=true;
  life.docs[17]=[0];
  store(lifeKey,life);
  renderLife();
  const controls=by('ns-paper-controls');
  controls.innerHTML=button('Посмотреть на стол','paper-to-desk','',true)+button('Читать о первоисточниках','term','term-primary_source');
  controls.querySelector('button')?.focus({preventScroll:true});
}
function moveNovelLine(amount){
  const scene=currentScene(), lines=novelLines(scene);
  life.dialogue||={};
  life.dialogue[scene.date]=Math.max(0,Math.min(lines.length-1,(Number(life.dialogue[scene.date])||0)+amount));
  store(lifeKey,life);
  by('ns-vn-frame').innerHTML=novelFrame(scene,lines);
  const dialogue=by('ns-vn-dialogue');
  dialogue.innerHTML=novelDialogue(scene,lines);
  const focus=amount>0?(by('ns-vn-frame').querySelector('[data-ns="open-laptop"]')||dialogue.querySelector('.ns-primary')):dialogue.querySelector('[data-value="-1"]:not([disabled])')||dialogue.querySelector('.ns-primary');
  focus?.focus({preventScroll:true});
}

const prologueScenes=[
  ['prologueArrival','corridor','На пороге','Я ставлю рюкзак у двери и отряхиваю снег с ботинок. Из комнаты тянет теплом.'],
  ['prologueBoard','commons','Объявление в коридоре','На доске висит расписание последнего семестра. Рядом Ася прикрепила фотографию пустой комнаты. На обороте карандашом написано: «Здесь будет выставка».'],
  ['prologueDesk','dusk','До выпуска три месяца','На столе меня ждёт чистая тетрадь. Откладываю её до вечера. Сначала надо поздороваться с Мишей.']
];
function renderPrologue(){
  const position=life.prologue;
  if(position<0){
    return `${immersiveMenu()}<div class="ns-hero ns-vn-cover"><div class="ns-vn-cover-copy"><span class="ns-kicker">LIFE ON BALANCE · СЕВЕРСК</span><h2>Последний семестр</h2>
    <p>В Северске тает снег. До выпуска три месяца, а у Миши и Аси уже есть планы на старую комнату общежития.</p>
    <div class="ns-row ns-prologue-choice">${button('Начать пролог','prologue-step','1',true)}${button('Как играть','tour')}</div></div>
    <img class="ns-vn-cover-image" src="${novelArt.prologueCity||novelArt.dusk}" alt="Общежитие Северска в начале весны"></div>`;
  }
  const [asset,fallback,title,line]=prologueScenes[position];
  const last=position===prologueScenes.length-1;
  return `${immersiveMenu()}<section class="ns-vn ns-prologue" aria-label="Пролог">
    <div class="ns-prologue-frame"><img class="ns-vn-backdrop" src="${novelArt[asset]||novelArt[fallback]}" alt="${safe(title)}"></div>
    <header class="ns-vn-heading"><span class="ns-vn-place">Северск · Пролог</span><h2>${title}</h2></header>
    <div id="ns-vn-dialogue"><div class="ns-vn-quote ns-vn-narration"><p>${line}</p></div>
    <div class="ns-vn-controls">${button('Назад','prologue-step','-1')}<span class="ns-vn-step">${position+1} / ${prologueScenes.length}</span>
    ${last?button('Войти в комнату','prologue-enter','',true):button('Дальше','prologue-step','1',true)}</div></div>
  </section>`;
}
function movePrologue(amount){
  if(life.step>=0)return;
  life.prologue=Math.max(-1,Math.min(prologueScenes.length-1,life.prologue+amount));
  commitLife();
  by('ns-campaign').querySelector('.ns-primary')?.focus({preventScroll:true});
}
function enterFirstDay(){
  if(life.step>=0||life.prologue!==prologueScenes.length-1)return;
  life.checkpoint=checkpoint();
  openLifeDay(0);
  commitLife();
}
function profileReady(){return Boolean(life.name&&goals[life.goal]);}
function showProfile(advance=false){
  if(currentScene()?.date!==1)return;
  showDialog('Имя и цель',`
  <p>Миша ставит две кружки на стол. «Давай знакомиться. Как к тебе обращаться?»</p>
  <form data-ns-form="profile" class="ns-form">
    <input type="hidden" name="advance" value="${advance?'yes':'no'}">
    <label>Имя героя<input name="name" maxlength="32" value="${safe(life.name)}" placeholder="Введи имя" required></label>
    <label>Твоя цель после выпуска<select name="goal" required>
      <option value="" disabled ${life.goal?'':'selected'}>Выбери цель</option>
      ${Object.entries(goals).map(([id,label])=>`<option value="${id}" ${life.goal===id?'selected':''}>${label}</option>`).join('')}
    </select></label>
    <button class="ns-btn ns-primary">Записать имя и цель</button><p data-error role="alert"></p>
  </form>`);
  by('ns-dialog-body').querySelector('[name="name"]')?.focus({preventScroll:true});
}
function renderLife(){
  const view=by('ns-campaign');
  if(life.step<0){
    view.innerHTML=renderPrologue();
    return;
  }
  const scene=currentScene(), decision=life.chosen[scene.date];
  const before=life.step===0 ? 0 : scenes[life.step-1].date;
  const sidebar=`<aside class="ns-stack">
    <section class="ns-card"><h3>Деньги героя</h3><p class="ns-note">${life.name?'Игрок · '+safe(life.name):'Имя пока не записано'}</p>${metric('На счету',rub(life.cash))}${metric('Свободно по плану',rub(available()))}${metric('Вложено по текущей цене',rub(life.qty*life.price))}
    <p class="ns-note">${life.goal?safe(goals[life.goal])+' · цель после выпуска 6 000 ₽. ':'Цель после выпуска ещё не выбрана. '} Ноутбук 12 000 ₽ до 20 апреля.</p>${button('Открыть журнал денег','ledger')}${life.archive.length ? button('Архив попыток','archive') : ''}</section>
    ${scene.price ? `<section class="ns-card"><h3>ЛУНА Тех</h3>${metric('Средняя цена',rub(life.price))}${metric('В портфеле',life.qty+' шт.')}${metric('Результат позиции',signed(life.qty*life.price-life.cost))}<p class="ns-note">${life.quotes.map(q=>q.day+' мар. '+rub(q.price)).join(' · ')}</p>${termButton('term-bid_ask_spread')}</section>`:''}
    <section class="ns-card ns-guide"><div><h3>Спросить Нори</h3><p>Разобрать документы или вернуться к записи о решении.</p>${button('Открыть подсказки','nori')}</div><img src="${leoImage}" alt=""></section>
    </aside>`;
  if(life.finished){
    view.innerHTML=`${immersiveMenu()}<div class="ns-grid ns-ending"><div class="ns-stack"><div class="ns-hero ns-vn-epilogue"><img src="${novelArt.phone}" alt="Телефон и кружка в комнате общежития"><div><span class="ns-kicker">19 МАРТА</span><h2>Первый план проверен</h2><p>Сроки поставок изменились. Выставка и следующая часть семестра ещё впереди.</p></div></div>
    <section class="ns-card"><h3>Что осталось в блокноте</h3>${metric('Решения о рынке',Object.keys(life.chosen).length)}${metric('Просмотренные документы',Object.values(life.docs).reduce((sum,items)=>sum+items.length,0))}${metric('Проверки пройдены самостоятельно',Object.values(life.tests).filter(t=>t==='independent').length)}
    <div class="ns-row">${button('Журнал решений','journal')}${button('Начать заново','restart')}</div></section></div>${sidebar}</div>`;
    return;
  }
  const week=`<div class="ns-dates" aria-label="Календарь кампании">${scenes.map((item,index)=>`<span class="${index===life.step?'ns-current':index<life.step?'ns-past':''}" ${index===life.step?'aria-current="step"':''}>${item.date} мар.</span>`).join('')}</div>`;
  const repairDone=scene.date!==15 || life.repair!==null;
  const preview=scenes[life.step+1];
  const canAdvance=scene.date===1 ? profileReady() && life.plan !== null && life.evening!==null : Boolean(decision) && (scene.date!==3 || life.demo) && repairDone;
  view.innerHTML=`${immersiveMenu()}${novelScene(scene)}<section class="ns-action-drawer" id="ns-action-drawer" ${novelActionsOpen?'':'hidden'} aria-label="Действия в текущей сцене">
    <header><div><b>${safe(scene.title)}</b>${week}</div>${button('Закрыть действия','vn-close-actions')}</header>
    <div class="ns-grid" id="ns-vn-actions" tabindex="-1"><div class="ns-stack">
    ${scene.date===1 ? budgetMarkup() : `<section class="ns-card" id="ns-life-documents" tabindex="-1"><h3>Что известно сегодня</h3><p class="ns-note">Питание за ${scene.date-before} дн. · ${rub(foodPaid(scene.date-before))}</p>
      ${scene.docs.map(([name,kind,date],i)=>`<div class="ns-list-line"><div><b>${name}</b><small>${date} · ${kind}${(life.docs[scene.date]||[]).includes(i)?' · открыто':''}</small></div>${button('Читать','life-doc',i)}</div>`).join('')}</section>
      ${scene.date===3?demoMarkup():''}${scene.date>=12?replayMarkup():''}${scene.date===15?repairMarkup():''}${decision?decisionMarkup(decision):decisionForm(scene)}`}
    ${scene.date===1||scene.date===3||scene.date===15?quizMarkup(scene.date):''}
    <section class="ns-card ns-next"><div><b>${preview?'Ближайший переход':'Завершение фрагмента'}</b><p>${preview?`До ${preview.date} марта · питание ${rub(foodPaid(preview.date-scene.date))}.${scene.date===6?' Между сценами обновится котировка.':''}`:'Запись о решениях и результаты проверок останутся в журнале.'}</p>
    ${!canAdvance?`<p class="ns-note">${scene.date===1&&!profileReady()?'Запиши имя и цель, чтобы завершить день.':'Чтобы завершить день, заполни план или выбери действие в текущей сцене.'}</p>`:''}</div>
    <button type="button" class="ns-btn ns-primary" data-ns="life-next" ${canAdvance?'':'disabled'}>${preview?'Завершить день':'Завершить фрагмент'}</button></section>
    </div>${sidebar}</div></section>`;
}
function metric(label,value){return `<div class="ns-metric"><span>${safe(label)}</span><strong>${safe(value)}</strong></div>`;}
function budgetMarkup(){
  const plan=life.plan || {food:500000,laptop:1200000,reserve:600000};
  return `<section class="ns-card" id="ns-life-budget" tabindex="-1"><h3>Записная книжка</h3><p>К 18 000 ₽ накоплений прибавились 12 000 ₽. Жильё и проезд уже оплачены. На март запланировано 5 000 ₽ на питание, первый день учтён в журнале.</p>
    <form data-ns-form="budget" class="ns-form"><div class="ns-form-row">
    ${[['food','Питание'],['laptop','Ноутбук'],['reserve','Резерв']].map(([field,label])=>`<label>${label}, ₽<input name="${field}" type="number" min="0" max="26000" step="0.01" required value="${plan[field]/100}"></label>`).join('')}</div>
    <button class="ns-btn ns-primary">${life.plan?'Обновить план':'Сохранить план'}</button><p data-error role="alert"></p></form>
    <div class="ns-row">${termButton('theory-01')}${life.plan ? '<span class="ns-tag">План сохранён</span>' : ''}</div></section>
    <section class="ns-card" id="ns-life-evening" tabindex="-1"><h3>Планы на вечер</h3><div class="ns-row">${life.evening?'<span class="ns-tag">'+safe(evenings[life.evening][0])+'</span>':Object.entries(evenings).map(([key,[label,price]])=>button(label+' · '+rub(price),'evening',key)).join('')}</div></section>`;
}
function demoMarkup(){
  return `<section class="ns-card"><h3>Демонстрационная заявка</h3><p>На учебном счёте 1 000 ₽. Попробуй купить и продать три акции при средней цене 100 ₽.</p><div class="ns-row">${button(life.demo?'Посмотреть чек снова':'Открыть учебный лот','demo','',!life.demo)}${life.openedTools?button('Лента в практике','go','bull'):''}</div></section>`;
}
function decisionForm(scene){
  return `<section class="ns-card" id="ns-life-decision" tabindex="-1"><h3>До следующей новости</h3><form data-ns-form="life-decision" class="ns-form">
    <div class="ns-form-row"><label>Действие<select name="action">${Object.entries(actions).filter(([key])=>key!=='sell'&&key!=='hold'||life.qty>0).map(([key,label])=>`<option value="${key}">${label}</option>`).join('')}</select></label><label data-trade-only hidden>Количество акций<input type="number" name="qty" min="1" max="9999" step="1" value="1"></label></div>
    <div data-trade-quote class="ns-note" aria-live="polite"></div>
    <label>Что известно? <input name="fact" maxlength="240" placeholder="Например, поставки разделили на этапы"></label>
    <label>Что я предполагаю? <input name="guess" maxlength="240" placeholder="Например, продажи пока трудно оценить"></label>
    <label>Что заставит пересмотреть? <input name="trigger" maxlength="240" placeholder="Например, отчёт о выручке и затратах"></label>
    <button class="ns-btn ns-primary">Зафиксировать решение</button><p data-error role="alert"></p></form></section>`;
}
function decisionMarkup(decision){
  return `<section class="ns-card" id="ns-life-decision" tabindex="-1"><h3>Решение записано</h3><p><b>${actions[decision.action]}${decision.qty?' · '+decision.qty+' шт.':''}</b></p><p>${decision.fact?safe(decision.fact):'Запись можно прочитать в журнале.'}</p>${button('Журнал решений','journal')}</section>`;
}
function replayMarkup(){
  const previous=life.chosen[6] || life.chosen[3];
  if(!previous) return '';
  return `<section class="ns-card" id="ns-life-replay" tabindex="-1"><h3>Что изменилось с твоего решения?</h3>
    ${metric('Тогда',actions[previous.action]+' · '+previous.date+' марта')}${metric('Сейчас',rub(life.price))}${metric('Изменение цены с записи',signed(life.price-previous.price))}
    <p><b>Твоё условие пересмотра</b> · ${safe(previous.trigger||'В той записи условие не указано.')}</p><p>${safe(currentScene().docs[0][3])}</p>
    ${life.reviews[currentScene().date]?`<p class="ns-tag">${safe(life.reviews[currentScene().date])}</p>`:`<form data-ns-form="replay" class="ns-form"><label>Изменился ли план?<input name="review" required maxlength="240" placeholder="Сохраняю план или меняю его, потому что…"></label><button class="ns-btn">Записать пересмотр</button></form>`}</section>`;
}
function repairMarkup(){
  return `<section class="ns-card" id="ns-life-repair" tabindex="-1"><h3>Экран телефона</h3><p>Ремонт стоит 1 200 ₽. С трещиной телефон работает. При ремонте сначала используется назначенный резерв.</p><div class="ns-row">${life.repair===null?`${button('Починить за 1 200 ₽','repair','now')}${button('Отложить ремонт','repair','later')}`:`<span class="ns-tag">${life.repair==='now'?'Телефон отремонтирован':'Ремонт отложен'}</span>`}</div></section>`;
}
const quizzes={
  1:['На счёте 5 000 ₽. Через неделю нужно заплатить 4 000 ₽. Сколько остаётся без этого назначения?',['4 000 ₽','1 000 ₽','5 000 ₽'],1,'После вычитания обязательного платежа остаётся 1 000 ₽.'],
  3:['Обязана ли компания вернуть владельцу акции её цену через месяц?',['Да, при любой цене','Да, если есть прибыль','Нет, акция представляет долю'],2,'Цена акции меняется, а условия владения акцией не предусматривают возврата её покупной цены.'],
  15:['Новый поставщик раскрыл рост выручки со 100 до 120 млн ₽, а затрат — с 80 до 110 млн ₽. Что произошло с прибылью в примере?',['Упала с 20 до 10 млн ₽','Выросла с 20 до 40 млн ₽','Осталась 20 млн ₽'],0,'Вычти затраты из выручки. Получается 20 млн ₽ до изменений и 10 млн ₽ после.']
};
function quizMarkup(day){
  const [question,answers,,explain]=quizzes[day], result=life.tests[day];
  return `<section class="ns-card"><h3>Проверка навыка</h3><p>${question}</p>
  ${result?`<p class="ns-tag">${result==='independent'?'Верно с первой попытки':result==='assisted'?'Верно после подсказки':'Пропущено'}</p>`:''}
  ${life.quizHelp[day]||result&&result!=='skipped'?`<p>${explain}</p>`:''}
  ${result&&result!=='skipped'?'':`<div class="ns-row">${answers.map((a,i)=>button(a,'quiz',i)).join('')}${result?'':button('Пропустить','quiz','skip')}</div>`}</section>`;
}
const quote = (price,qty,side,wide=1) => {
  const unit=Math.round(price*(1000+(side==='buy'?wide:-wide))/1000);
  const gross=unit*qty, fee=Math.round(gross/1000);
  return {unit,gross,fee,total:side==='buy'?gross+fee:gross-fee};
};
const quoteMarkup = (q,side) => [metric('Цена исполнения за штуку',rub(q.unit)),metric('Стоимость бумаг',rub(q.gross)),metric('Комиссия',rub(q.fee)),metric(side==='buy'?'К списанию':'К зачислению',rub(q.total))].join('');
function validQty(value){const n=Number(value);return Number.isInteger(n)&&n>=1&&n<=9999?n:0;}
function showDemo(){
  const buy=quote(10000,3,'buy'), sell=quote(10000,3,'sell');
  const stage=life.demo?2:life.demoStage;
  const balance=100000-(stage>=1?buy.total:0)+(stage>=2?sell.total:0);
  showDialog('Учебный лот · три акции',`<p>Средняя цена 100 ₽. Купить можно по ${rub(buy.unit)}, продать по ${rub(sell.unit)}.</p>
    ${metric('Учебный счёт',rub(balance))}${metric('Позиция',stage===1?'3 акции':'0 акций')}
    ${stage===0?quoteMarkup(buy,'buy'):stage===1?quoteMarkup(sell,'sell'):`${quoteMarkup(buy,'buy')}${metric('Поступление от продажи',rub(sell.total))}${metric('Итог учебного счёта',rub(balance))}<p>Разница в 1,20 ₽ возникла из спреда и двух комиссий. Деньги этого лота ведутся отдельно от денег героя.</p>`}
    <div class="ns-row">${stage===0?button('Купить 3 учебные акции','demo-buy','',true):stage===1?button('Продать 3 учебные акции','demo-sell','',true):''}
    ${stage<2?button('Показать полный чек','demo-receipt'):''}${!life.demo&&stage===2?button('Разобрался с заявкой','demo-confirm','',true):''}</div>`);
}
function updateTradeQuote(form, showStress=true){
  const data=new FormData(form), side=data.get('action')||data.get('side');
  const trade=side==='buy'||side==='sell';
  const row=form.querySelector('[data-trade-only]');
  if(row){row.hidden=!trade;row.querySelector('input').disabled=!trade;}
  const out=form.querySelector('[data-trade-quote]');
  if(!out) return;
  const n=validQty(data.get('qty')||form.querySelector('[name="qty"]').value);
  if(!trade||!n){out.innerHTML='';return;}
  const q=quote(life.price,n,side,currentScene().date===15?3:1);
  out.innerHTML=quoteMarkup(q,side)+(side==='buy'&&showStress?`<p>Свободно по плану ${rub(available())}. При снижении средней цены на 20% позиция из этих акций потеряла бы около ${rub(Math.round(life.price*n/5))} стоимости.</p>`:'');
}
function journalMarkup(){
  return Object.values(life.chosen).map(d=>`<article class="ns-card"><h3>${d.date} марта · ${actions[d.action]}</h3><p>Средняя цена ${rub(d.price)} · изучено источников ${d.docs.length}${d.qty?' · '+d.qty+' шт.':''}</p>
    ${[['Что было известно',d.fact],['Гипотеза',d.guess],['Условие пересмотра',d.trigger]].map(([label,value])=>`<p><b>${label}</b> · ${safe(value||'Нет записи')}</p>`).join('')}
    ${life.reviews[d.date]?`<p><b>Пересмотр</b> · ${safe(life.reviews[d.date])}</p>`:''}</article>`).join('')||'<p>Рыночных решений пока нет.</p>';
}
function showLedger(){
  showDialog('Журнал денег',`<p>Начальный остаток · 18 000 ₽</p>${life.ledger.slice().reverse().map(e=>metric(e.day+' мар. · '+e.label,signed(e.amount))).join('')}`);
}
function checkpoint(){
  const {checkpoint,archive,...snapshot}=life;
  return JSON.parse(JSON.stringify(snapshot));
}
function showNori(){
  const scene=currentScene(), previous=life.chosen[6]||life.chosen[3];
  const prompt=scene.date===1?'Сложи запланированные суммы и сравни их с остатком после обязательных расходов.':scene.date===3?'Сравни две цены в чеке и найди комиссию на каждой стороне сделки.':scene.date===6?'Сравни пересланный пост с отчётом. Какой документ подтверждает фактическую прибыль?':'Вернись к условию пересмотра. Что именно сообщает новый документ о сроках и какую часть гипотезы ещё нельзя проверить?';
  showDialog('Нори',`<p>${prompt}</p>${previous?.trigger?`<p><b>Твоё условие пересмотра</b> · ${safe(previous.trigger)}</p>`:''}<div class="ns-row">${button('Журнал решений','journal')}${termButton('theory-12')}</div>`);
}
function canReadNews(item) {
  return !item.followsNewsId || Boolean(lab.news.results[item.followsNewsId]);
}
function newsBody(item) {
  return item.bodySegments.map(segment=>segment.termId
    ?button(segment.text,'term','term-'+segment.termId)
    :safe(segment.text)).join('');
}
function renderNewsShelves(){
  const opened=new Set(Array.from(by('ns-academy-news').querySelectorAll('details[open]'),d=>d.dataset.company));
  by('ns-academy-news').innerHTML=`<section class="ns-card ns-academy-news">
    <div class="ns-row ns-between"><div><h2>Бык в курсе</h2><p class="ns-note">Новости учебных компаний, вопросы к источникам и ссылки на теорию.</p></div>${button('Открыть ленту в практике','go','bull')}</div>
    <div class="ns-news-companies">${bullData.companies.map(company=>{
      const list=schedule.filter(article=>article.companyId===company.id&&canReadNews(article));
      return `<details class="ns-news-company" data-company="${safe(company.id)}"${opened.has(company.id)?' open':''}><summary><b>${safe(company.name)}</b> <span class="ns-note">${list.length}</span></summary>
      ${list.map(article=>`<div class="ns-list-line"><div><b>${safe(article.headline)}</b><small>${status[article.status]}${lab.news.results[article.id]?' · реакция открыта':''}</small></div>${button('Читать','academy-news',article.id)}</div>`).join('')}</details>`;
    }).join('')}</div>
    </section>`;
}
function showAcademyNews(id){
  const item=newsById[id];
  if(!item||!schedule.includes(item)||!canReadNews(item)) return;
  const result=lab.news.results[id];
  showDialog(item.headline,`<p class="ns-note">${status[item.status]} · ${safe(item.source)}</p>
  <p>${newsBody(item)}</p><div class="ns-task"><b>Вопрос к новости</b><p>${safe(item.playerQuestion)}</p></div>
  <div class="ns-row">${item.termIds.map(term=>termButton('term-'+term)).join('')}</div>
  ${result?`<hr>${reactionMarkup(result)}`:''}
  ${currentNews()?.id===id?`<div class="ns-row">${button('Разобрать в практике','go','bull')}</div>`:''}`);
}

function renderBull(){
  const item=currentNews(), history=Object.values(lab.news.results).reverse();
  by('ns-bull').innerHTML=`<details class="ns-card ns-practice-feed" id="ns-practice-feed" ${archiveOpen?'open':''}>
  <summary><span><b>Бык в курсе</b><small>Расширенная лента новостей</small></span><span class="ns-tag">${lab.news.cursor} / ${schedule.length}</span></summary>
  ${history[0]?`<div class="ns-card ns-outcome">${reactionMarkup(history[0])}</div>`:''}
  ${item?`<article class="ns-practice-article"><div class="ns-row"><span class="ns-tag">${status[item.status]}</span><span class="ns-note">${safe(item.source)}</span></div>
  <h3 class="ns-headline">${safe(item.headline)}</h3><p>${newsBody(item)}</p>
  ${item.followsNewsId&&lab.news.results[item.followsNewsId]?button('Предыдущая новость','academy-news',item.followsNewsId):''}
  <div class="ns-task"><b>Вопрос перед открытием</b><p>${safe(item.playerQuestion)}</p></div>
  <div class="ns-row">${item.termIds.map(id=>termButton('term-'+id)).join('')}</div>
  <form data-ns-form="bull-next" class="ns-form ns-bull-next"><label>Твоё наблюдение <span class="ns-note">по желанию</span><input name="note" maxlength="240" placeholder="Какой факт может повлиять на цену?"></label>
  <div class="ns-row"><button class="ns-btn ns-primary">Следующий торговый день</button>${button('Актив на бирже','bull-select',item.assets[0])}</div></form></article>`:'<p>Все доступные новости пройдены.</p>'}
  ${history.length?`<details class="ns-bull-archive"><summary>Архив новостей</summary>${history.map(entry=>`<div class="ns-list-line"><div><b>${safe(newsById[entry.id].headline)}</b><small>День ${entry.session}</small></div>${button('Читать','academy-news',entry.id)}</div>`).join('')}</details>`:''}
  </details>`;
  by('ns-practice-feed')?.addEventListener('toggle',event=>{archiveOpen=event.currentTarget.open;});
}
function reactionMarkup(entry){
  const effect=effectsById[entry.id], update=effect.update;
  return `<p class="ns-note">${status[update.status]} · ${safe(update.source)}</p><h3>${safe(update.headline)}</h3><p>${safe(update.body)}</p>
    ${entry.changes.map(change=>metric(stockById[change.assetId].displayTicker, rub(change.before)+' → '+rub(change.after)+' · '+percent(change.pct))).join('')}
    ${entry.split?`<p>Дробление 2:1 · количество ${entry.split.beforeQty} → ${entry.split.afterQty}, расчётная цена ${rub(entry.split.oldPrice)} → ${rub(entry.split.newPrice)}. Рыночный эффект указан после пересчёта.</p>`:''}
    ${effect.spilloverExplanations.map(item=>`<p class="ns-note">${safe(item.explanation||item.reason||'')}</p>`).join('')}
    ${entry.note?`<p><b>Твоя заметка до открытия</b> · ${safe(entry.note)}</p>`:''}`;
}
function resolveBull(note){
  const item=currentNews();
  const effect=item?effectsById[item.id]:null;
  const entry=item?{id:item.id,session:lab.day+1,note,changes:[]}:null;
  const split=effect?.corporateAction;
  const overrides={};
  if(split?.type==='stock_split'){
    const id=item.assets[0], ratio=split.splitNumerator/split.splitDenominator;
    const oldPrice=toCents(lp(id)), beforeQty=lab.q[id];
    lab.q[id]=beforeQty*ratio;
    overrides[id]=Math.round(oldPrice/ratio);
    // Cancel stale limits against pre-split prices.
    lab.orders=lab.orders.filter(order=>{
      if(order.id!==id)return true;
      lab.log.unshift('Ордер '+id+' отменён в связи с дроблением.');
      return false;
    });
    entry.split={oldPrice,newPrice:overrides[id],beforeQty,afterQty:lab.q[id]};
  }
  const common=(Math.random()-.5)*.025;
  lab.day++;
  for(const [id,,,,volatility] of labAssets){
    const before=overrides[id]??toCents(lp(id));
    const pct=effect?.afterDecisionChangesPct[id];
    const after=stockById[id]
      ? Math.max(1,Math.round(before*(100+(pct??0))/100))
      : Math.max(1,Math.round(before*(1+common*(id==='BND'?.2:1)+(Math.random()-.5)*volatility*2)));
    lab.h[id].push(after/100);
    if(lab.h[id].length>120)lab.h[id].shift();
    if(pct!==undefined)entry.changes.push({assetId:id,before,after,pct});
  }
  lab.orders=lab.orders.filter(order=>{
    if(!(order.side==='buy'?lp(order.id)<=order.limit:lp(order.id)>=order.limit)) return true;
    if(!labFill(order.id,order.side,order.n))lab.log.unshift('Ордер '+order.id+' отменён: недостаточно средств или акций.');
    return false;
  });
  if(item){
    lab.news.results[item.id]=entry;
    lab.news.cursor++;
  }
  labRender();
  renderBull();
  renderNewsShelves();
}
function handleForm(event){
  const form=event.target, type=form.dataset.nsForm;
  if(!type) return;
  event.preventDefault();
  const d=new FormData(form);
  const error=msg=>{const line=form.querySelector('[data-error]'); if(line)line.textContent=msg;};
  if(type==='profile'){
    if(currentScene()?.date!==1)return;
    const name=String(d.get('name')||'').trim();
    const goal=d.get('goal');
    if(!name||name.length>32||!Object.hasOwn(goals,goal))return error('Введи имя и выбери цель.');
    life.name=name;
    life.goal=goal;
    closeDialog();
    if(d.get('advance')==='yes'&&novelPosition(currentScene(),novelLines(currentScene()))===1)moveNovelLine(1);
    commitLife();
    by('ns-vn-dialogue').querySelector('.ns-primary')?.focus({preventScroll:true});
  } else if(type==='budget'){
    if(currentScene()?.date!==1) return;
    const plan=Object.fromEntries(['food','laptop','reserve'].map(k=>[k,toCents(d.get(k))]));
    if(Object.values(plan).some(v=>!Number.isFinite(v)||v<0)||plan.food>500000||plan.laptop>1200000) return error('Проверь суммы. Питание на март стоит 5 000 ₽, ноутбук — 12 000 ₽.');
    if(plan.food+plan.laptop+plan.reserve>life.cash+foodPaid(1)) return error('На эти назначения не хватает денег. Уменьши одну из сумм.');
    life.plan=plan;commitLife();
  } else if(type==='life-decision'){
    const scene=currentScene(), action=d.get('action');
    if(!scene?.price || life.chosen[scene.date]) return;
    const trade=action==='buy'||action==='sell', qty=trade?validQty(d.get('qty')):0;
    if(trade&&!qty) return error('Укажи целое количество акций.');
    if(trade){
      const q=quote(life.price,qty,action,scene.date===15?3:1);
      if(action==='buy'){
        if(q.total>available()) return error('На покупку не хватает свободных денег по плану.');
        lifeEntry('buy-'+scene.date,'Покупка LUNA · '+qty+' шт.',-q.total,scene.date);
        life.cost+=q.total;
        life.qty+=qty;
      } else {
        if(qty>life.qty) return error('У тебя меньше акций, чем указано.');
        lifeEntry('sell-'+scene.date,'Продажа LUNA · '+qty+' шт.',q.total,scene.date);
        life.cost-=Math.round(life.cost*qty/life.qty);
        life.qty-=qty;
      }
    }
    life.chosen[scene.date]={date:scene.date,action,qty,price:life.price,fact:String(d.get('fact')).trim(),guess:String(d.get('guess')).trim(),trigger:String(d.get('trigger')).trim(),docs:[...(life.docs[scene.date]||[])]};
    commitLife();
  } else if(type==='replay'){
    life.reviews[currentScene().date]=String(d.get('review')).trim();commitLife();
  } else if(type==='bull-next'){
    resolveBull(String(d.get('note')).trim());
  }
}
const tours=[
  ['Life on Balance','Сюжет начинается в Северске с личного плана. К личной истории можно возвращаться с биржи.','campaign'],
  ['Биржа Лиоры','В некоторых сценах на ноутбуке появляется светящаяся точка. Она открывает Story Mode с новостями биржи и Лео.','campaign'],
  ['Источники','«Бык в курсе» даёт дополнительные новости для изучения. Лента доступна в «Практике» и Академии.','academy'],
  ['Академия','Термины в новостях открывают пояснения. К главам можно вернуться в любой момент.','academy'],
  ['Мой прогресс','Решения, проверки и кошелёк кампании можно проверить отдельно.','dashboard']
];
function showTour(){
  const [title,description,view]=tours[tourIndex];
  showDialog('Как играть · '+(tourIndex+1)+' из '+tours.length,`<h3>${title}</h3><p>${description}</p><div class="ns-row">${button('Открыть раздел','go',view)}${tourIndex?button('Назад','tour-prev'):''}${button(tourIndex===tours.length-1?'Готово':'Дальше',tourIndex===tours.length-1?'close':'tour-next','',true)}</div>`);
}
function nav(view){
  closeDialog();
  if(view==='campaign'){
    document.querySelector('[data-view="story"]')?.click();
    by('story').scrollIntoView({block:'start'});
  }else if(view==='bull'){
    document.querySelector('[data-view="simulator"]')?.click();
    archiveOpen=true;
    const feed=by('ns-practice-feed');
    if(feed){feed.open=true;feed.scrollIntoView({block:'start'});}
  }else document.querySelector('[data-view="'+view+'"]')?.click();
}
function openLaptop(node){
  const scene=currentScene();
  if(!scene||life.finished||activeView!=='story'||novelActionsOpen)return;
  const lines=novelLines(scene);
  if(!lines[novelPosition(scene,lines)][2])return;
  const laptop=by('ns-laptop');
  if(laptop.open)return;
  laptopActivator=node;
  const widgets=by('ns-laptop-widgets');
  widgets.append(by('lion'),by('overlay'));
  laptop.showModal();
  updateHeader();
  by('ns-laptop-close').focus({preventScroll:true});
  drawChart();
}
function restoreLaptop(){
  document.body.append(by('lion'),by('overlay'));
  close();
  updateHeader();
  by('ns-laptop-scroll').scrollTop=0;
  laptopActivator?.focus?.({preventScroll:true});
  laptopActivator=null;
}
function updateHeader(){
  const titles={story:'Сюжет',academy:'Академия',dashboard:'Мой прогресс',simulator:'Практика'};
  by('heading').textContent=titles[activeView];
  by('day').textContent=activeView==='story'?(life.step<0?'Северск':currentScene().date+' марта'):activeView==='simulator'?'День '+lab.day:'Первый миллион';
  by('ns-laptop-day').textContent='День '+s.day;
  by('lion').style.display=activeView==='simulator'||by('ns-laptop').open?'grid':'none';
  document.body?.classList.toggle('ns-immersive',activeView==='story');
  by('ns-progress').innerHTML=`<div class="ns-card"><h3>Life on Balance</h3>${metric('Состояние',life.finished?'Фрагмент завершён':life.step<0?'Кампания ещё не начата':currentScene().date+' марта')}${metric('Решения',Object.keys(life.chosen).length)}${metric('Самостоятельные проверки',Object.values(life.tests).filter(v=>v==='independent').length)}<div class="ns-row">${button('Личная история','go','campaign')}${button('Журнал решений','journal')}${button('Как играть','tour')}</div></div>
  <div class="ns-card"><h3>Бык в курсе</h3>${metric('Разобрано новостей',lab.news.cursor+' / '+schedule.length)}${button('Лента в практике','go','bull')}</div>`;
}
function handleClick(event){
  const view=event.target.closest('[data-view]');
  if(view){
    activeView=view.dataset.view;
    updateHeader();
    return;
  }
  const node=event.target.closest('[data-ns]');
  if(!node) return;
  const action=node.dataset.ns, v=node.dataset.value;
  switch(action){
    case 'close':closeDialog();break;
    case 'go':nav(v);break;
    case 'prologue-step':movePrologue(Number(v));break;
    case 'prologue-enter':enterFirstDay();break;
    case 'profile':showProfile(v==='advance');break;
    case 'vn-line':moveNovelLine(Number(v));break;
    case 'vn-actions': {
      novelActionsOpen=true;
      by('ns-action-drawer').hidden=false;
      const target=by(v||'ns-vn-actions')||by('ns-vn-actions');
      target.focus({preventScroll:true});
      target.scrollIntoView({block:'nearest'});
      break;
    }
    case 'vn-close-actions':
      novelActionsOpen=false;
      by('ns-action-drawer').hidden=true;
      by('ns-campaign').querySelector('[data-ns="vn-actions"]')?.focus({preventScroll:true});
      break;
    case 'vn-transcript':showNovelTranscript();break;
    case 'paper-open':showPaper();break;
    case 'paper-unfold':unfoldPaper();break;
    case 'open-laptop':openLaptop(node);break;
    case 'paper-to-desk':
      closeDialog();
      novelActionsOpen=false;
      by('ns-action-drawer').hidden=true;
      moveNovelLine(novelLines(currentScene()).length);
      break;
    case 'academy-news':showAcademyNews(v);break;
    case 'term':showTerm(v);break;
    case 'academy-link':showAcademy(v);break;
    case 'tour':tourIndex=0;showTour();break;
    case 'tour-next':tourIndex++;showTour();break;
    case 'tour-prev':tourIndex--;showTour();break;
    case 'ledger':showLedger();break;
    case 'journal':showDialog('Журнал решений',journalMarkup());break;
    case 'nori':showNori();break;
    case 'demo':showDemo();break;
    case 'demo-buy':
    case 'demo-sell':
    case 'demo-receipt':
      if(life.demo || currentScene()?.date!==3) break;
      life.demoStage=action==='demo-buy'?Math.max(life.demoStage,1):2;
      store(lifeKey,life);showDemo();break;
    case 'demo-confirm':life.demo=true;life.openedTools=true;closeDialog();commitLife();renderBull();break;
    case 'life-doc': {
      const scene=currentScene(), index=Number(v);
      const [name,kind,date,text,term]=scene.docs[index];
      life.docs[scene.date]||=[];
      if(!life.docs[scene.date].includes(index)) life.docs[scene.date].push(index);
      store(lifeKey,life);
      const label=node.parentElement.querySelector('small');
      label.textContent=date+' · '+kind+' · открыто';
      showDialog(name,`<p class="ns-note">${date} · ${kind}</p><p>${text}</p>${termButton(term)}`);
      break;
    }
    case 'evening': {
      if(life.evening!==null) break;
      const [label,cost]=evenings[v];
      if(cost>life.cash){showDialog('Вечер','<p>На этот вариант не хватает денег.</p>');break;}
      life.evening=v;
      if(cost)lifeEntry('evening-01',label,-cost,1);
      commitLife();break;
    }
    case 'repair': {
      if(life.repair!==null) break;
      if(v==='now'){
        if(life.cash<120000){showDialog('Ремонт телефона','<p>На счёте меньше 1 200 ₽. Ремонт можно отложить.</p>');break;}
        lifeEntry('repair-15','Ремонт телефона',-120000,15);
        life.plan.reserve=Math.max(0,life.plan.reserve-120000);
      }
      life.repair=v;commitLife();break;
    }
    case 'quiz':{
      const day=currentScene().date;
      if(v==='skip')life.tests[day]='skipped';
      else if(Number(v)===quizzes[day][2])life.tests[day]=life.quizHelp[day]?'assisted':'independent';
      else life.quizHelp[day]=true;
      commitLife();break;
    }
    case 'life-next': {
      const day=currentScene().date, nextScene=scenes[life.step+1];
      if(life.finished || (day===1?!(profileReady()&&life.plan&&life.evening):!life.chosen[day] || (day===3&&!life.demo) || (day===15&&life.repair===null))) break;
      if(nextScene && life.cash<foodPaid(nextScene.date-day)){
        showDialog('Не хватает на следующий платёж',`<p>В журнале видно, какие расходы предстоят. Можно вернуться к контрольной точке и пересмотреть план.</p><div class="ns-row">${button('Открыть расчёт','ledger')}${button('Вернуться к контрольной точке','rollback')}</div>`);
        break;
      }
      if(day===3)life.checkpoint=checkpoint();
      if(nextScene)openLifeDay(life.step+1);else life.finished=true;
      novelActionsOpen=false;
      commitLife();
      by('story').scrollIntoView({block:'start'});break;
    }
    case 'rollback': {
      if(!life.checkpoint) break;
      const previous=checkpoint(), target=life.checkpoint, archive=[...life.archive,previous];
      life={...JSON.parse(JSON.stringify(target)),archive,checkpoint:target};
      openLifeDay(target.step<0?0:target.step+1);
      closeDialog();commitLife();break;
    }
    case 'archive':showDialog('Архив попыток',life.archive.map(a=>metric('Запись до '+a.dayOpened+' марта',rub(a.cash)+' · '+Object.keys(a.chosen).length+' решений')).join(''));break;
    case 'restart':showDialog('Начать кампанию заново',`<p>Деньги, решения и проверки кампании будут сброшены. Учебный счёт «Бык в курсе» ведётся отдельно.</p>${button('Начать заново','restart-confirm','',true)}`);break;
    case 'restart-confirm':life=initialLife();novelActionsOpen=false;closeDialog();commitLife();break;
    case 'bull-select':
      if(!stockById[v])break;
      lab.selected=v;
      labRender();
      by('simtitle').scrollIntoView({block:'center'});
      break;
    case 'legacy-quiz':showLegacyQuiz();break;
    case 'legacy-answer':checkLegacy(v);break;
    case 'legacy-credit':confirmLargePurchase(v);break;
  }
}
const legacyQuiz=[
  ['Наличные $600, акции $1 400 упали на 10%. На сколько уменьшился портфель?',['$60','$140','$200'],1,'Падение относится к акциям на $1 400. Итоговая стоимость портфеля — $1 860.'],
  ['Какой вариант учитывает обе возможные реакции на дефицит энергии?',['У всех вырастет прибыль','Издержки магазина могут вырасти, а выручка поставщика — увеличиться','У всех снизятся расходы'],1,'Влияние зависит от контрактов и того, продаёт компания энергию или потребляет её.'],
  ['Что подтверждает фактическую выручку от нового продукта?',['Реклама','Достоверный отчёт о продажах','Рост цены акции'],1,'Анонс и цена отражают ожидания. Для подтверждения выручки нужен отчёт.'],
  ['У кого важнее проверить стоимость нового кредита после повышения ставки?',['У компании, которая планирует большой заём','У компании, которая не планирует заём'],0,'Для компании, планирующей заём, стоимость нового кредита непосредственно влияет на расходы.'],
  ['Как отличить анонимное обвинение от публикации Orbit о начале проверки?',['Оба подтверждают обвинение','Первое — слух, второе — заявление о проверке','Оба — результаты проверки'],1,'Факт публикации заявления о проверке не подтверждает исходное обвинение.'],
  ['Производство страны выросло на 3%, выручка Orbit снизилась на 2%. Восстановились ли все компании?',['Да','Нет, результаты компаний различаются'],1,'Общая статистика и финансовые результаты отдельной компании могут двигаться по-разному.']
];
const legacyItems=['AST','GRN','NVB','ORB'];
const dailyTurnover={AST:1000,GRN:800,NVB:650,ORB:900};
function spentLegacy(id){return s.nsPurchases?.[s.day]?.[id]||0;}
function largeWarnings(id){
  return id && !s.resolved && s.cash>=price(id) && spentLegacy(id)<dailyTurnover[id]/5 && spentLegacy(id)+price(id)>=dailyTurnover[id]/5;
}
function largeWarning(id,kind){
  showDialog('Крупная покупка '+id,`<p>Условный дневной оборот — ${fmt(dailyTurnover[id])}. Порог крупной покупки — ${fmt(dailyTurnover[id]/5)} за день. После этой сделки у тебя будет исполнено покупок на ${fmt(spentLegacy(id)+price(id))}.</p><p>В учебной модели это добавляет 2 процентных пункта к реакции по этой акции один раз. Покупка проходит по текущей цене.</p>${button('Подтвердить покупку','legacy-credit',kind,true)}`);
}
function confirmLargePurchase(kind){
  closeDialog();
  if(kind.startsWith('choice:')) resolveLegacyChoice(Number(kind.split(':')[1]),true);
  else if(!s.resolved&&transact(kind,'buy')){s.news.push({day:s.day,text:'Твоя операция: покупка '+kind+'.'});render();}
}
function renderLegacyNews(){
  const item=legacyNews[s.idx%legacyNews.length];
  const [title,source,kind,possible,update,changes,chapter]=item;
  const selected=companies.find(c=>c.id===s.selected);
  const nextButton=by('next');
  if(nextButton){
    const quizButton=s.idx<6?button('Мини-тест','legacy-quiz'):'';
    by('eventbox').insertAdjacentHTML('beforeend','<div class="ns-row ns-cover-links">'+quizButton+'</div>');
  }
  const cards=(s.nsNews||[]).slice(-8).reverse().map(entry=>{
    const info=legacyNews[entry.index%6];
    return `<article><time>День ${entry.day} · Обновление</time><b>${safe(info[0])}</b><br>${safe(info[4])}<br>
    ${entry.actual.map(([id,p,bonus])=>id+' '+percent(p)+(bonus?' (крупный спрос +2 п. п.)':'')).join(' · ')}</article>`;
  }).join('');
  const large=legacyItems.filter(id=>spentLegacy(id)>=dailyTurnover[id]/5);
  const correction=s.idx%6===5?'<p>Ася сверила итог проверки Orbit: найдено нарушение процедуры учёта. Первоначальные анонимные обвинения подтверждены только частично.</p>':'';
  by('news').innerHTML=`<article><time>День ${s.day} · ${s.resolved?'ИСТОЧНИК ДО РЕАКЦИИ':'ДО РЕШЕНИЯ'}</time><b>${title}</b><br>${kind} · ${source}<p>${possible}</p>${correction}${termButton('theory-'+chapter)}</article>
    ${!s.resolved&&large.length?`<article><b>Крупная покупка</b><p>Биржевой обзор · Факт учебных торгов. По ${large.join(', ')} замечены крупные покупки. Личность инвестора не раскрыта.</p></article>`:''}${cards}`;
  if(selected)by('news').insertAdjacentHTML('afterbegin',`<p class="ns-note">${selected.id} · оборот ${fmt(dailyTurnover[selected.id])}, порог ${fmt(dailyTurnover[selected.id]/5)}</p>`);
}
function showLegacyQuiz(message=''){
  const q=legacyQuiz[s.idx];
  if(!q)return;
  showDialog('Мини-тест · Демо Лиоры',`<p>${q[0]}</p>${message?`<p>${safe(message)}</p>`:''}<div class="ns-row">${q[1].map((answer,index)=>button(answer,'legacy-answer',index)).join('')}${button('К теории','term','theory-'+legacyNews[s.idx][6])}${button('Закрыть','close')}</div>`);
}
function checkLegacy(v){
  const q=legacyQuiz[s.idx];
  s.nsTests||={};
  if(Number(v)===q[2])s.nsTests[s.idx]='done';
  save();
  showLegacyQuiz((Number(v)===q[2]?'Верно. ':'Попробуй ещё раз. ')+q[3]);
}
const legacyRender=render, legacyTransact=transact, legacyChoice=choice, legacyLabRender=labRender;
render=function(){
  legacyRender();
  renderLegacyNews();
  updateHeader();
};
transact=function(id,side,n=1){
  const cost=price(id)*n, before=!s.resolved;
  if(!legacyTransact(id,side,n))return false;
  if(side==='buy'&&before){
    s.nsPurchases||={};
    s.nsPurchases[s.day]||={};
    s.nsPurchases[s.day][id]=spentLegacy(id)+cost;
  }
  return true;
};
function resolveLegacyChoice(i,confirmed=false){
  if(s.resolved)return;
  const scene=scenarios[s.idx%scenarios.length];
  const action=scene.options[i]?.[1];
  if(!action || action==='research'){if(action==='research')legacyChoice(i);return;}
  const buyId={buy:s.selected,buygreen:'GRN',buyastra:'AST',buybank:'NVB',buyorbit:'ORB'}[action];
  if(!confirmed&&largeWarnings(buyId)){largeWarning(buyId,'choice:'+i);return;}
  const original=scene.impact, base=legacyNews[s.idx%6][5];
  const before=Object.fromEntries(legacyItems.map(id=>[id,price(id)]));
  const bonus=legacyItems.map(id=>spentLegacy(id)+(buyId===id&&s.cash>=price(id)?price(id):0)>=dailyTurnover[id]/5?2:0);
  scene.impact=Object.fromEntries(legacyItems.map((id,index)=>[id,(base[index]+bonus[index])/100]));
  try{legacyChoice(i);}finally{scene.impact=original;}
  if(s.resolved){
    s.nsNews||=[];
    s.nsNews.push({index:s.idx,day:s.day,actual:legacyItems.map((id,index)=>[id,(price(id)/before[id]-1)*100,bonus[index]])});
    renderLegacyNews();
    save();
  }
}
choice=resolveLegacyChoice;
labRender=function(){
  legacyLabRender();
  if(stockById[lab.selected])by('siminfo').textContent=stockById[lab.selected].industry+' · Цена меняется по событиям ленты.';
  if(activeView==='simulator')updateHeader();
};
by('simNext').onclick=()=>{
  const note=by('ns-bull').querySelector('[name="note"]')?.value.trim()||'';
  resolveBull(note);
};
by('simreset').onclick=()=>{
  if(!confirm('Сбросить практический счёт, заявки и ленту новостей?'))return;
  lab=labInit();
  initializePracticalNews();
  labRender();
  renderBull();
  renderNewsShelves();
};
labRender();
document.addEventListener('click',event=>{
  const trade=event.target.closest('[data-trade="buy"]');
  if(trade&&largeWarnings(trade.dataset.id)){
    event.stopImmediatePropagation();
    largeWarning(trade.dataset.id,trade.dataset.id);
  }
},true);
document.addEventListener('click',handleClick);
document.addEventListener('submit',handleForm);
document.addEventListener('input',event=>{
  const f=event.target.closest('[data-ns-form]');
  if(f?.dataset.nsForm==='life-decision')updateTradeQuote(f);
});
by('ns-dialog-close').addEventListener('click',closeDialog);
by('ns-laptop-close').addEventListener('click',()=>by('ns-laptop').close());
by('ns-laptop').addEventListener('close',restoreLaptop);
by('ns-laptop').addEventListener('cancel',event=>{
  if(!by('overlay').classList.contains('open'))return;
  event.preventDefault();
  close();
});
renderAcademy();
renderLife();
renderBull();
renderLegacyNews();
renderNewsShelves();
updateHeader();

})();
