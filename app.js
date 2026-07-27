const tabs = document.querySelectorAll('.venture-tab');
const panels = document.querySelectorAll('.venture-panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.target;
    tabs.forEach(item => {
      const selected = item === tab;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-selected', String(selected));
    });
    panels.forEach(panel => {
      const selected = panel.dataset.panel === target;
      panel.classList.toggle('active', selected);
      panel.hidden = !selected;
    });
    requestAnimationFrame(() => {
      document.querySelectorAll(`#panel-${target} .reveal`).forEach(el => el.classList.add('visible'));
    });
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -4% 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const translations = {
  zh: {
    navVentures:'项目',
    navPlatform:'数字平台',
    navMarkets:'市场',
    navRoadmap:'路线',
    navContact:'合作',
    navCta:'先看网站为什么要做',
    eyebrow:'先落地，再放大。别一上来就把钱烧在看不见结果的地方。',
    heroLine1:'把想法先做出来，',
    heroLine2:'让客户真的能看、能点、能付钱。',
    heroText:'现在手里有两个方向：3D打印设备做新西兰和巴基斯坦；藏医文化健康做中国和新西兰。逻辑都一样——先做一个能用的版本，先拿真实反馈，能收钱最好，再决定后面投多少。',
    seePlatform:'先看数字平台方案',
    seeVentures:'再看两个项目',
    metricPlatform:'藏医项目首期网站预算',
    metricDays:'天先交可看版本',
    metricGoal:'套能展示、收款、推广的底座',
    visualPrint:'Additive Manufacturing',
    visualPrintSub:'新西兰 · 巴基斯坦',
    visualWellness:'Cultural Wellness',
    visualWellnessSub:'中国 · 新西兰',
    statement:'说白了，项目没有官网、后台、付款入口和内容承接，后面无论投广告、找客户还是谈投资，流量都接不住。不是一定要做得特别花，而是底座必须先有。',
    venturesTitle:'两个项目分开算，但启动逻辑其实差不多',
    venturesText:'打印机项目靠样机、机构方案和售后证明价值；藏医文化项目靠网站、内容、体验活动和产品预售证明有人愿意付钱。先做能成交的东西，不先做一堆看起来很大的规划。',
    tabPrint:'3D打印设备',
    tabWellness:'藏医文化健康',
    imagePrintLabel:'样机 · 培训 · 机构方案 · 售后',
    printTitle:'新西兰不是没市场，是不能只跟PB Tech拼价格。',
    printText:'要做就做学校、实验室、设计公司、工程原型和小型打印农场。巴基斯坦机会更大一点，但手续也更麻烦，授权、NOC、进口主体、保修和本地合作方没有确认之前，不建议先囤机器。',
    printNzTitle:'新西兰：卖整套方案',
    printNzText:'不是只卖一台机器，而是样机演示、安装培训、耗材、备件和维护一起卖。',
    printPkTitle:'巴基斯坦：先拿订单再进口',
    printPkText:'先把授权和NOC跑通，再找学校、工程公司和打印服务商收订金。',
    imageWellnessLabel:'文化 · 内容 · 体验 · 产品 · 交易',
    wellnessTitle:'藏医文化这边，第一步不是先投广告，是先把网站做完整。',
    wellnessText:'原因很直接：内容发出去以后要有地方承接，活动要能报名，产品要能展示，客户要能付款，合作方和投资人要能看到项目不是只有一份PDF。首期大约一万五的网站，不是装门面，是项目真正开始运转的基础设施。',
    wellnessCnTitle:'先把数字底座做好',
    wellnessCnText:'品牌内容、课程活动、产品展示、付款入口、客户数据和推广页面统一起来。',
    wellnessNzTitle:'再做内容和线下验证',
    wellnessNzText:'网站完成后，短视频、活动、藏香预售和新西兰双语体验才有稳定承接。',
    wellnessPlatformCta:'具体看一万五的网站要做什么',
    platformTitle:'藏医文化项目想往下走，建议先确认约一万五的网站开发预算',
    platformLead:'这个顺序不是因为开发者想把网站做大，而是因为没有数字平台，宣传、收款、用户沉淀、产品预售和投资展示全部是散的。先把底座做完，后面的每一笔推广费才不会白花。',
    platformPhase:'建议首期投入',
    platformPriceNote:'完整网站一期 · 具体范围以确认清单为准',
    platformLogic1:'没有网站先投流，用户看完视频就走了。',
    platformLogic2:'没有后台，内容和产品每次都要找开发改。',
    platformLogic3:'没有付款和订单路径，所谓“有兴趣”很难变成收入。',
    platformLogic4:'没有能看的Demo，投资人只会觉得项目还停留在想法阶段。',
    deliverable1Title:'客户看得懂的前台',
    deliverable1Text:'品牌故事、IP人物、藏医文化内容、课程、活动、产品和合作入口。手机端优先，中英文结构提前留好。',
    deliverable2Title:'自己能管理的后台',
    deliverable2Text:'文章、视频、商品、价格、库存、活动名额、订单和用户资料能自己更新，不是每改一个字都重新找人。',
    deliverable3Title:'能真正收钱的路径',
    deliverable3Text:'课程购买、活动报名、产品预售、订单查询和支付接口。支付资质没准备好时，也先把完整流程和接口位置做出来。',
    deliverable4Title:'能做推广和转化的页面',
    deliverable4Text:'不同活动和产品有独立落地页，预留广告位、推荐位、渠道参数和基础数据统计，知道客户从哪里来、在哪一步流失。',
    deliverable5Title:'给微信小程序留接口',
    deliverable5Text:'网站和后台先统一产品、订单、会员和内容结构，后面做微信小程序时不是推倒重来，而是接同一套数据。',
    deliverable6Title:'拿去谈合作和投资的Demo',
    deliverable6Text:'客户能现场打开、点击、报名、下单；投资人能看到业务流程、内容规划和后续扩展，不再只听口头描述。',
    sequenceTitle:'建议顺序很简单：先完成网站，再开始集中推广',
    sequence1:'确认网站范围、素材责任、付款节点和验收标准。',
    sequence2:'14天先交一个客户能完整体验的版本，不是只给截图。',
    sequence3:'把产品、活动、课程、付款和后台流程补齐，形成正式一期。',
    sequence4:'网站稳定后再投短视频、社群、线下活动和广告，所有流量回到同一个入口。',
    sequence5:'有真实访问、报名和订单数据后，再谈微信小程序、更多产品和外部融资。',
    platformBottomTitle:'这笔钱买的不是一个漂亮页面',
    platformBottomText:'买的是一个项目从“大家觉得不错”走到“客户可以使用、团队可以运营、投资人可以判断”的基础版本。',
    platformBottomCta:'先确认网站开发，项目就能开始',
    marketsTitle:'每个市场先解决一个问题，别同时什么都做',
    marketNzTitle:'成熟市场里怎么不拼最低价',
    marketNzText:'打印机靠本地演示、培训和售后；文化项目靠双语体验和合规表达。',
    marketPkTitle:'手续麻烦，反而可能有渠道价值',
    marketPkText:'前提是授权、NOC、进口主体和保修责任都明确，再用机构订单降低库存风险。',
    marketCnTitle:'先看用户为什么愿意付钱',
    marketCnText:'到底是文化、课程、体验、香味还是礼品属性。网站负责把这些数据收回来。',
    marketQuote:'“有网站不等于有生意，但没承接、没收款、没数据，后面的推广基本都在漏。”',
    budgetTitle:'资金分开算，先投入能带来下一步结果的部分',
    budgetProject:'项目',
    budgetMode:'初期用途',
    budgetRange:'建议预算',
    budgetPlatform:'藏医文化 · 数字平台一期',
    budgetPlatformMode:'前台＋后台＋内容＋交易路径＋推广承接',
    budgetPrintNz:'3D打印 · 新西兰',
    budgetPrintNzMode:'两台样机＋B2B演示',
    budgetPrintPk:'3D打印 · 巴基斯坦',
    budgetPrintPkMode:'授权/NOC＋一台样机',
    budgetWellnessCn:'藏医文化 · 中国验证',
    budgetWellnessCnMode:'网站完成后的内容＋两场付费活动',
    budgetWellnessNz:'藏医文化 · 新西兰验证',
    budgetWellnessNzMode:'双语工作坊与用户访谈',
    budgetNote:'网站开发和市场推广是两笔不同的钱：网站是资产和承接工具，推广是持续消耗。先把资产做好，再控制推广节奏。',
    roadmapTitle:'两周先看到网站，六周看到第一轮市场数据',
    week1Title:'确认内容和结构',
    week1Text:'把页面、产品、活动、后台、付款路径和双方提供的素材一次说清楚。',
    week2Title:'交付可体验版本',
    week2Text:'客户能打开、能点击、能看完整流程，及时提出集中修改意见。',
    week34Title:'完善交易和后台',
    week34Text:'补齐内容管理、活动、产品、订单、付款接口和推广落地页。',
    week56Title:'开始真实推广',
    week56Text:'短视频、社群、线下体验和合作拜访全部回流网站，用数据判断下一笔投入。',
    contactTitle:'先把网站开发确认下来，项目就不是一直停在讨论阶段。',
    contactText:'下一步建议直接确认：一期范围、约一万五预算、14天可看版本、素材由谁提供、修改次数和最终验收。范围确认后即可开始开发，同时准备后续内容和活动。',
    githubContact:'联系开发并确认一期',
    copyContact:'复制开发者主页',
    footerLocation:'Auckland, New Zealand',
    footerDisclaimer:'本页面用于项目方案展示与合作沟通。藏医文化内容不构成医疗建议，3D打印项目中的品牌授权范围以正式书面文件为准。'
  },
  en: {
    navVentures:'Ventures',
    navPlatform:'Digital platform',
    navMarkets:'Markets',
    navRoadmap:'Roadmap',
    navContact:'Partner',
    navCta:'Why the platform comes first',
    eyebrow:'Build first, then scale. Do not burn money before there is something measurable.',
    heroLine1:'Build the idea first,',
    heroLine2:'so customers can see it, use it and pay.',
    heroText:'Two tracks are currently being tested: 3D printing in New Zealand and Pakistan, and culture-led wellness in China and New Zealand. The logic is the same — build a usable version, collect real feedback, ideally collect payment, then decide how much to invest next.',
    seePlatform:'See the digital platform plan',
    seeVentures:'Explore both ventures',
    metricPlatform:'initial wellness website budget',
    metricDays:'days to a usable demo',
    metricGoal:'operational foundation for content, payment and promotion',
    visualPrint:'Additive Manufacturing',
    visualPrintSub:'New Zealand · Pakistan',
    visualWellness:'Cultural Wellness',
    visualWellnessSub:'China · New Zealand',
    statement:'Put simply: without a website, backend, payment path and content destination, advertising, customer outreach and investor conversations all leak. It does not need to be flashy, but the foundation must exist.',
    venturesTitle:'Separate budgets, similar launch logic.',
    venturesText:'The printer venture proves value with demo units, institutional packages and support. The wellness venture proves demand with a digital platform, content, paid experiences and product pre-orders. Build what can convert before building a grand story.',
    tabPrint:'3D Printing',
    tabWellness:'Cultural Wellness',
    imagePrintLabel:'Demo · Training · Institutional packages · Support',
    printTitle:'New Zealand has a market — but price competition with PB Tech is the wrong game.',
    printText:'Target schools, labs, design companies, engineering prototypes and small print farms. Pakistan may offer more channel value, but territory rights, NOC, importer, warranty and local partner responsibilities must be clear before stock is held.',
    printNzTitle:'New Zealand: sell the whole solution',
    printNzText:'Demo, installation, training, consumables, spares and maintenance — not only a machine.',
    printPkTitle:'Pakistan: orders before importing',
    printPkText:'Resolve territory and NOC first, then collect deposits from schools, engineering firms and print services.',
    imageWellnessLabel:'Culture · Content · Experience · Product · Transaction',
    wellnessTitle:'For the wellness venture, the first move is not advertising. It is completing the website.',
    wellnessText:'The reason is practical: content needs a destination, events need registration, products need presentation, customers need payment, and partners or investors need to see more than a PDF. An initial website budget of about ¥15,000 is not decoration; it is operating infrastructure.',
    wellnessCnTitle:'Build the digital foundation first',
    wellnessCnText:'Bring brand content, courses, events, products, payment, customer data and campaign pages into one system.',
    wellnessNzTitle:'Then validate content and live experiences',
    wellnessNzText:'Once the website is ready, short video, events, incense pre-orders and bilingual New Zealand workshops have a stable destination.',
    wellnessPlatformCta:'See what the ¥15,000 platform includes',
    platformTitle:'To move the wellness venture forward, confirm an initial website budget of about ¥15,000 first.',
    platformLead:'This order is not about making the build unnecessarily large. Without a digital platform, promotion, payment, customer retention, pre-sales and investor presentation remain fragmented. Build the base first so later marketing spend has somewhere to land.',
    platformPhase:'recommended initial investment',
    platformPriceNote:'complete phase-one website · final scope subject to confirmation',
    platformLogic1:'Run traffic without a website and users leave after the video.',
    platformLogic2:'Without a backend, every content or product change requires a developer.',
    platformLogic3:'Without payment and order flows, “interest” rarely becomes revenue.',
    platformLogic4:'Without a working demo, investors still see an idea rather than an operating venture.',
    deliverable1Title:'A customer-facing frontend',
    deliverable1Text:'Brand story, IP profiles, cultural content, courses, events, products and partnership entry points. Mobile-first with bilingual structure reserved.',
    deliverable2Title:'A manageable backend',
    deliverable2Text:'Update articles, videos, products, price, stock, event capacity, orders and user records without rebuilding the site for every change.',
    deliverable3Title:'A real path to payment',
    deliverable3Text:'Course purchase, event registration, product pre-orders, order lookup and payment integration. If payment credentials are pending, the complete flow and integration points are still prepared.',
    deliverable4Title:'Campaign and conversion pages',
    deliverable4Text:'Dedicated pages for products and events, with ad placements, recommendations, channel parameters and basic analytics to identify acquisition and drop-off.',
    deliverable5Title:'A foundation for WeChat Mini Program',
    deliverable5Text:'Unify product, order, member and content models first, so the Mini Program connects to the same data instead of rebuilding the business logic.',
    deliverable6Title:'A demo for partners and investors',
    deliverable6Text:'Customers can open, click, register and order. Investors can see the business flow, content plan and expansion path instead of hearing only a verbal pitch.',
    sequenceTitle:'The recommended order is simple: finish the website, then concentrate promotion.',
    sequence1:'Confirm scope, content responsibilities, payment milestones and acceptance criteria.',
    sequence2:'Deliver a complete customer-testable version in 14 days, not a set of screenshots.',
    sequence3:'Complete product, event, course, payment and backend flows for the formal first release.',
    sequence4:'Once stable, send short-video, community, live-event and paid-ad traffic back to one destination.',
    sequence5:'After real visits, registrations and orders exist, expand into a Mini Program, more products and external investment.',
    platformBottomTitle:'This budget is not buying a pretty page.',
    platformBottomText:'It buys the base version that moves the venture from “people like the idea” to “customers can use it, the team can operate it, and investors can evaluate it.”',
    platformBottomCta:'Confirm the website and start the venture',
    marketsTitle:'Solve one question per market. Do not launch everything at once.',
    marketNzTitle:'Differentiate without being the cheapest',
    marketNzText:'Printing competes through local demo, training and support; wellness through bilingual experience and compliant positioning.',
    marketPkTitle:'Complexity can create channel value',
    marketPkText:'Only when territory, NOC, importer and warranty responsibility are clear, with institutional orders reducing inventory risk.',
    marketCnTitle:'Find out why users actually pay',
    marketCnText:'Culture, course, experience, fragrance or gifting? The website brings those signals back into one place.',
    marketQuote:'“A website does not guarantee a business. But without destination, payment and data, most promotion leaks.”',
    budgetTitle:'Separate the budgets and fund what unlocks the next result.',
    budgetProject:'Venture',
    budgetMode:'Initial use',
    budgetRange:'Suggested budget',
    budgetPlatform:'Wellness · Digital platform phase one',
    budgetPlatformMode:'Frontend + backend + content + transaction flow + campaign destination',
    budgetPrintNz:'3D Printing · New Zealand',
    budgetPrintNzMode:'Two demo units + B2B demos',
    budgetPrintPk:'3D Printing · Pakistan',
    budgetPrintPkMode:'Territory/NOC + one demo unit',
    budgetWellnessCn:'Wellness · China validation',
    budgetWellnessCnMode:'Content + two paid events after platform completion',
    budgetWellnessNz:'Wellness · New Zealand validation',
    budgetWellnessNzMode:'Bilingual workshops and user interviews',
    budgetNote:'Website development and market promotion are different budgets: the website is an owned operating asset; promotion is ongoing spend. Build the asset first, then control the promotion pace.',
    roadmapTitle:'See the website in two weeks and the first market data in six.',
    week1Title:'Confirm content and structure',
    week1Text:'Agree pages, products, events, backend, payment flow and which materials each side provides.',
    week2Title:'Deliver a testable version',
    week2Text:'The client can open it, click through the full journey and provide one consolidated round of feedback.',
    week34Title:'Complete transaction and backend',
    week34Text:'Finish content management, events, products, orders, payment integration and campaign landing pages.',
    week56Title:'Start real promotion',
    week56Text:'Send short video, communities, live experiences and partner outreach back to the website, then decide the next budget from data.',
    contactTitle:'Confirm the website build so the project stops living only in discussion.',
    contactText:'The practical next step is to confirm phase-one scope, the roughly ¥15,000 budget, a 14-day testable version, content responsibilities, revision limits and final acceptance. Development can then start while content and events are prepared in parallel.',
    githubContact:'Contact the developer and confirm phase one',
    copyContact:'Copy developer profile',
    footerLocation:'Auckland, New Zealand',
    footerDisclaimer:'This page supports project presentation and partnership discussion. Wellness content is not medical advice, and any 3D-printing brand authorisation is subject to formal written documentation.'
  }
};

let lang = 'zh';
const langToggle = document.getElementById('langToggle');

function applyLanguage(next) {
  lang = next;
  document.documentElement.lang = next === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[next][key]) el.textContent = translations[next][key];
  });
  langToggle.textContent = next === 'zh' ? 'EN' : '中';
  localStorage.setItem('venture-lang', next);
}

langToggle.addEventListener('click', () => applyLanguage(lang === 'zh' ? 'en' : 'zh'));
applyLanguage(localStorage.getItem('venture-lang') || 'zh');

const copyButton = document.querySelector('.copy-link');
if (copyButton) {
  copyButton.addEventListener('click', async event => {
    const button = event.currentTarget;
    const value = button.dataset.copy;
    try {
      await navigator.clipboard.writeText(value);
      const label = button.querySelector('span');
      const original = label.textContent;
      label.textContent = lang === 'zh' ? '已复制' : 'Copied';
      setTimeout(() => { label.textContent = original; }, 1400);
    } catch {
      window.prompt(lang === 'zh' ? '复制这个链接：' : 'Copy this link:', value);
    }
  });
}
