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
}, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const translations = {
  zh: {
    navVentures:'项目', navMarkets:'市场', navRoadmap:'路线', navContact:'合作', navCta:'洽谈合作',
    eyebrow:'从原型到订单，以真实数据做决定', heroLine1:'把跨境想法', heroLine2:'做成可验证的生意。',
    heroText:'两个方向，四个试验市场：先进3D打印设备进入新西兰与巴基斯坦；藏医文化健康内容连接中国与新西兰。先演示、先预售、先拿订单，再扩大投入。',
    seeVentures:'查看项目', talkButton:'成为合作伙伴', metricVentures:'核心项目', metricMarkets:'验证市场', metricWeeks:'周启动周期',
    visualPrint:'Additive Manufacturing', visualPrintSub:'新西兰 · 巴基斯坦', visualWellness:'Cultural Wellness', visualWellnessSub:'中国 · 新西兰',
    statement:'我们不把预算押在“看起来很完整”的系统和库存上。每个项目都从一个能演示、能收款、能追踪转化的最小版本开始。',
    venturesTitle:'两个项目，共用一套验证纪律', venturesText:'技术项目靠设备演示、机构方案和售后建立壁垒；文化项目靠付费体验、内容IP和低监管产品建立第一笔收入。',
    tabPrint:'3D打印设备', tabWellness:'藏医文化健康', imagePrintLabel:'样机 · 培训 · 机构方案 · 售后',
    printTitle:'不做另一家卖机器的店，做能交付结果的本地服务商。', printText:'在新西兰避开PB Tech式零售竞争，主攻学校、设计公司和快速原型团队；在巴基斯坦先解决授权、NOC、进口主体和售后，再用演示与订金启动首批进口。',
    printNzTitle:'新西兰：B2B解决方案', printNzText:'样机演示、实验室套装、培训、耗材和年度维护。', printPkTitle:'巴基斯坦：订单驱动进口', printPkText:'先拿区域授权确认和机构订金，不在手续未明时囤货。',
    imageWellnessLabel:'文化 · 轻运动 · 体验 · 内容', wellnessTitle:'先卖一场体验，而不是先背一仓库“功效产品”。', wellnessText:'中国市场验证内容传播、付费活动和产品复购；新西兰市场用中英双语文化健康工作坊测试跨文化接受度。初期不做诊断、不销售入口藏药、不承诺治疗效果。',
    wellnessCnTitle:'中国：内容到付费', wellnessCnText:'短视频引流、线下体验、7天练习营和藏香预售。', wellnessNzTitle:'新西兰：文化体验', wellnessNzText:'社区场地、双语工作坊、合规表达和真实用户访谈。',
    marketsTitle:'每个市场，只回答一个关键问题', marketNzTitle:'成熟市场里的差异化', marketNzText:'客户是否愿意为本地演示、培训、售后和行业方案付费？', marketPkTitle:'复杂市场里的渠道价值', marketPkText:'在授权、NOC和进口合规成立后，机构订单能否覆盖首批进货风险？', marketCnTitle:'内容市场里的真实转化', marketCnText:'用户究竟为文化、运动、香味还是“神秘感”买单？', marketQuote:'“没有订金的兴趣，不算需求；没有复购的爆款，不算生意。”',
    budgetTitle:'先投验证成本，再投扩张成本', budgetProject:'项目', budgetMode:'初期模式', budgetRange:'建议预算', budgetPrintNz:'3D打印 · 新西兰', budgetPrintNzMode:'两台样机＋B2B演示', budgetPrintPk:'3D打印 · 巴基斯坦', budgetPrintPkMode:'授权/NOC＋一台样机', budgetWellnessCn:'文化健康 · 中国', budgetWellnessCnMode:'内容＋两场付费活动', budgetWellnessNz:'文化健康 · 新西兰', budgetWellnessNzMode:'双语工作坊验证', budgetNote:'注：预算为市场验证级，不含创始人开发工时、大批量库存和长期办公室成本。',
    roadmapTitle:'六周，把“听起来不错”变成可判断的数据', week1Title:'规则与报价', week1Text:'确认授权、合规边界、落地成本与客户报价。', week2Title:'样机与样品', week2Text:'完成演示资产、销售页面和活动物料。', week34Title:'演示与访谈', week34Text:'面对机构客户和真实用户进行演示、报价与付费活动。', week56Title:'订金与决策', week56Text:'以订单、订金、转化率和复购意向决定是否追加资金。',
    contactTitle:'寻找愿意一起验证，而不是一起空谈的人。', contactText:'欢迎本地经销商、学校与实验室、进口合作方、文化场地、内容伙伴和早期投资人联系。当前阶段优先交换资源、客户入口与真实订单。', githubContact:'通过 GitHub 联系', copyContact:'复制联系方式', footerLocation:'Auckland, New Zealand', footerDisclaimer:'本页面用于早期商业验证与合作沟通，不构成医疗建议、投资承诺或品牌官方授权声明。'
  },
  en: {
    navVentures:'Ventures', navMarkets:'Markets', navRoadmap:'Roadmap', navContact:'Partner', navCta:'Start a conversation',
    eyebrow:'FROM PROTOTYPE TO PAID PROOF', heroLine1:'Turn cross-border ideas', heroLine2:'into testable businesses.',
    heroText:'Two venture tracks across four test markets: advanced 3D printing for New Zealand and Pakistan, and culture-led wellness connecting China and New Zealand. Demonstrate first, pre-sell first, win orders first — then scale.',
    seeVentures:'Explore the ventures', talkButton:'Become a partner', metricVentures:'venture tracks', metricMarkets:'test markets', metricWeeks:'week sprint',
    visualPrint:'Additive Manufacturing', visualPrintSub:'New Zealand · Pakistan', visualWellness:'Cultural Wellness', visualWellnessSub:'China · New Zealand',
    statement:'We do not bet the budget on a “complete-looking” platform or warehouse. Every venture begins with the smallest version that can demonstrate, collect payment and measure conversion.',
    venturesTitle:'Two ventures. One validation discipline.', venturesText:'The technology venture builds a moat through live demos, institutional packages and support. The culture venture earns its first revenue through paid experiences, credible content and low-regulation products.',
    tabPrint:'3D Printing', tabWellness:'Cultural Wellness', imagePrintLabel:'Demo · Training · Institutional packages · Support',
    printTitle:'Not another printer shop — a local partner that delivers outcomes.', printText:'In New Zealand, avoid commodity retail competition and target schools, design firms and rapid-prototyping teams. In Pakistan, solve territory rights, NOC, importing and warranty first; then trigger the first shipment with demos and deposits.',
    printNzTitle:'New Zealand: B2B solutions', printNzText:'Live demos, lab packages, training, consumables and annual support.', printPkTitle:'Pakistan: order-led importing', printPkText:'Secure written territory clarity and institutional deposits before holding stock.',
    imageWellnessLabel:'Culture · Movement · Experience · Content', wellnessTitle:'Sell the first experience before filling a warehouse with “benefit” products.', wellnessText:'China validates content, paid events and repeat purchase. New Zealand tests cross-cultural acceptance through bilingual cultural wellness workshops. The pilot avoids diagnosis, ingestible Tibetan medicine and treatment claims.',
    wellnessCnTitle:'China: content to payment', wellnessCnText:'Short-form content, live workshops, a seven-day practice and incense pre-orders.', wellnessNzTitle:'New Zealand: cultural experience', wellnessNzText:'Community venues, bilingual workshops, compliant language and real interviews.',
    marketsTitle:'One market, one decisive question.', marketNzTitle:'Differentiate in a mature market', marketNzText:'Will customers pay for local demonstrations, training, support and sector-specific packages?', marketPkTitle:'Create value in a complex market', marketPkText:'Once territory, NOC and importing are viable, can institutional orders cover the first shipment risk?', marketCnTitle:'Measure real conversion in a content market', marketCnText:'Are people paying for culture, movement, fragrance — or merely curiosity?', marketQuote:'“Interest without a deposit is not demand. A hit without repeat purchase is not a business.”',
    budgetTitle:'Fund validation before expansion.', budgetProject:'Venture', budgetMode:'Pilot mode', budgetRange:'Suggested budget', budgetPrintNz:'3D Printing · New Zealand', budgetPrintNzMode:'Two demo units + B2B demos', budgetPrintPk:'3D Printing · Pakistan', budgetPrintPkMode:'Territory/NOC + one demo unit', budgetWellnessCn:'Wellness · China', budgetWellnessCnMode:'Content + two paid events', budgetWellnessNz:'Wellness · New Zealand', budgetWellnessNzMode:'Bilingual workshop pilot', budgetNote:'Pilot-level budgets only; excludes founder development time, bulk inventory and long-term office costs.',
    roadmapTitle:'Six weeks to turn “sounds promising” into decision-grade data.', week1Title:'Rules & pricing', week1Text:'Confirm territory, compliance boundaries, landed cost and customer offers.', week2Title:'Demo assets', week2Text:'Prepare machines or samples, sales pages and event materials.', week34Title:'Demos & interviews', week34Text:'Run institutional demonstrations, quotes and paid user experiences.', week56Title:'Deposits & decision', week56Text:'Use orders, deposits, conversion and repeat intent to decide the next funding gate.',
    contactTitle:'Looking for people who want to validate — not just speculate.', contactText:'Open to local distributors, schools and labs, importing partners, cultural venues, content collaborators and early investors. The current priority is shared access, customer channels and real orders.', githubContact:'Contact via GitHub', copyContact:'Copy contact link', footerLocation:'Auckland, New Zealand', footerDisclaimer:'This site supports early commercial validation and partnership discussions. It is not medical advice, an investment promise or an official brand authorisation statement.'
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

document.querySelector('.copy-link').addEventListener('click', async event => {
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
