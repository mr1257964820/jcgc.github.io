/**
 * 继承果创官网 - 导航组件
 */

const NAV_LINKS = [
  { key: 'home',       label: '首页',    href: './index.html' },
  { key: 'about',      label: '品牌故事', href: './about.html' },
  { key: 'products',   label: '产品系列', href: './products.html' },
  { key: 'experience', label: '庄园体验', href: './experience.html' },
  { key: 'news',       label: '最新动态', href: './news.html' },
];

const ICON_MENU  = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>`;
const ICON_CLOSE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`;

function renderNav(activePage) {
  const linksHtml = NAV_LINKS.map(link => {
    const isActive = link.key === activePage;
    const cls = isActive
      ? 'text-[#6c0008] border-b border-[#6c0008] pb-0.5 font-label text-xs tracking-widest uppercase'
      : 'text-stone-600 hover:text-[#6c0008] transition-colors font-label text-xs tracking-widest uppercase';
    return `<a class="${cls}" href="${link.href}">${link.label}</a>`;
  }).join('\n');

  const mobileLinksHtml = NAV_LINKS.map(link =>
    `<a class="block text-sm font-label tracking-widest uppercase text-stone-600 hover:text-[#6c0008] transition-colors py-2.5 border-b border-stone-100 last:border-0" href="${link.href}">${link.label}</a>`
  ).join('\n');

  const html = `
<nav class="fixed top-0 left-0 right-0 z-50 glass-nav" style="box-shadow:0 1px 0 rgba(0,0,0,0.06);">
  <div class="flex justify-between items-center w-full px-5 md:px-8 py-3 md:py-5 max-w-screen-2xl mx-auto">
    <a class="flex flex-col leading-none no-underline group shrink-0" href="./index.html">
      <span class="text-xl md:text-2xl font-serif tracking-tight text-[#6c0008] group-hover:opacity-80 transition-opacity">冀承果创</span>
      <span class="text-[8px] font-label tracking-[0.2em] text-stone-400 mt-0.5 uppercase">果三两酒业 · 来自燕山</span>
    </a>
    <div class="hidden md:flex items-center space-x-10">
      ${linksHtml}
    </div>
    <div class="flex items-center gap-3">
      <a href="./index.html#contact" class="hidden md:block bg-[#6c0008] text-white px-5 py-2 rounded-full font-label text-xs tracking-widest uppercase transition-all hover:bg-[#8b0010]">
        联系我们
      </a>
      <!-- 汉堡按钮 - 内联 SVG 不依赖图标字体 -->
      <button id="mobile-menu-btn"
        class="md:hidden text-[#6c0008] w-11 h-11 flex items-center justify-center rounded-lg hover:bg-stone-100 transition-colors touch-manipulation"
        aria-label="菜单" aria-expanded="false">
        <span id="menu-icon-open">${ICON_MENU}</span>
        <span id="menu-icon-close" style="display:none">${ICON_CLOSE}</span>
      </button>
    </div>
  </div>
  <!-- 移动端下拉菜单：外层控制 max-height，内层放 padding，防止 padding 穿透 -->
  <div id="mobile-menu" class="md:hidden overflow-hidden" style="max-height:0;transition:max-height 0.35s cubic-bezier(0.16,1,0.3,1);">
    <div class="bg-[#fdf9f0] border-t border-stone-200 px-5 pt-2 pb-4">
      ${mobileLinksHtml}
      <a href="./index.html#contact"
         class="block w-full bg-[#6c0008] text-white py-3 rounded-full font-label text-xs tracking-widest uppercase mt-4 text-center hover:bg-[#8b0010] transition-colors">
        联系我们
      </a>
    </div>
  </div>
</nav>`;

  const placeholder = document.getElementById('nav-placeholder');
  if (!placeholder) return;
  placeholder.innerHTML = html;

  const btn       = document.getElementById('mobile-menu-btn');
  const menu      = document.getElementById('mobile-menu');
  const iconOpen  = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');

  function openMenu() {
    menu.style.maxHeight = menu.scrollHeight + 'px';
    btn.setAttribute('aria-expanded', 'true');
    iconOpen.style.display  = 'none';
    iconClose.style.display = '';
  }

  function closeMenu() {
    menu.style.maxHeight = '0';
    btn.setAttribute('aria-expanded', 'false');
    iconOpen.style.display  = '';
    iconClose.style.display = 'none';
  }

  if (btn && menu) {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      menu.style.maxHeight === '0px' || menu.style.maxHeight === '0' ? openMenu() : closeMenu();
    });
    document.addEventListener('click', e => {
      if (!placeholder.contains(e.target)) closeMenu();
    });
  }
}
