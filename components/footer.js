/**
 * 果三两酒业官网 - 页脚组件
 * Guo San Liang Winery - Footer Component
 */

function renderFooter() {
  const html = `
<footer class="bg-[#f7f3ea] w-full pt-16 pb-8 px-8">
  <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-screen-2xl mx-auto">
    <!-- 品牌简介 -->
    <div class="col-span-2 md:col-span-1">
      <div class="mb-5">
        <div class="text-xl font-serif text-[#6c0008] leading-tight">冀承果创</div>
        <div class="text-[9px] font-label tracking-[0.28em] text-stone-400 mt-1 uppercase">果三两酒业 · 来自燕山</div>
      </div>
      <p class="text-stone-500 text-sm leading-relaxed">
        冀承果创（果三两酒业），以承德国光苹果为核心，致力于呈现燕山风土的自然之美。
      </p>
    </div>
    <!-- 探索 -->
    <div class="flex flex-col gap-3">
      <h4 class="font-serif text-sm text-[#6c0008] mb-2">探索庄园</h4>
      <a class="text-stone-500 text-sm hover:text-[#6c0008] transition-colors" href="./about.html">品牌故事</a>
      <a class="text-stone-500 text-sm hover:text-[#6c0008] transition-colors" href="./products.html">产品系列</a>
      <a class="text-stone-500 text-sm hover:text-[#6c0008] transition-colors" href="./experience.html">庄园体验</a>
      <a class="text-stone-500 text-sm hover:text-[#6c0008] transition-colors" href="./news.html">最新动态</a>
    </div>
    <!-- 法律 -->
    <div class="flex flex-col gap-3">
      <h4 class="font-serif text-sm text-[#6c0008] mb-2">法律条款</h4>
      <a class="text-stone-500 text-sm hover:text-[#6c0008] transition-colors" href="#">隐私政策</a>
      <a class="text-stone-500 text-sm hover:text-[#6c0008] transition-colors" href="#">服务条款</a>
      <a class="text-stone-500 text-sm hover:text-[#6c0008] transition-colors" href="#">关于我们</a>
    </div>
    <!-- 联系 -->
    <div class="flex flex-col gap-4">
      <h4 class="font-serif text-sm text-[#6c0008] mb-2">联系我们</h4>
      <div class="flex items-start gap-3 text-stone-500 text-sm">
        <span class="material-symbols-outlined text-[#6c0008] text-base mt-0.5">location_on</span>
        <span>河北省承德市承德县高新技术产业开发区（大杖子园区）19号</span>
      </div>
      <div class="flex items-center gap-3 text-stone-500 text-sm">
        <span class="material-symbols-outlined text-[#6c0008] text-base">call</span>
        <a href="tel:+8603143016665" class="hover:text-[#6c0008] transition-colors">0314-3016665</a>
      </div>
      <div class="flex items-center gap-3 text-stone-500 text-sm">
        <span class="material-symbols-outlined text-[#6c0008] text-base">mail</span>
        <a href="mailto:beipingjiuye@163.com" class="hover:text-[#6c0008] transition-colors">beipingjiuye@163.com</a>
      </div>
      <div class="flex gap-4 mt-2">
        <a href="#" aria-label="官方网站" class="material-symbols-outlined cursor-pointer hover:text-[#6c0008] transition-colors text-stone-500 text-xl">public</a>
        <a href="#" aria-label="小红书" class="material-symbols-outlined cursor-pointer hover:text-[#6c0008] transition-colors text-stone-500 text-xl">photo_camera</a>
        <a href="#" aria-label="微信公众号" class="material-symbols-outlined cursor-pointer hover:text-[#6c0008] transition-colors text-stone-500 text-xl">chat</a>
      </div>
    </div>
  </div>
  <div class="mt-16 pt-8 border-t border-stone-200 text-center">
    <p class="text-stone-400 text-xs">© ${new Date().getFullYear()} 冀承果创 · 承德果三两酒业有限公司 · 燕山风土。冀ICP备XXXXXXXX号</p>
  </div>
</footer>

<!-- 全局购买/咨询引导弹窗 -->
<div id="buy-modal" class="hidden fixed inset-0 z-[100] flex items-center justify-center">
  <div class="modal-backdrop absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
  <div class="relative bg-surface rounded-lg shadow-2xl p-10 max-w-md w-full mx-6 animate-in">
    <button onclick="closeBuyModal()" class="absolute top-5 right-5 text-on-surface-variant hover:text-on-surface transition-colors" aria-label="关闭">
      <span class="material-symbols-outlined">close</span>
    </button>
    <h3 class="font-serif text-2xl text-primary mb-1">联系冀承果创</h3>
    <p class="text-on-surface-variant text-sm mb-8">选择您最便捷的沟通方式</p>
    <div class="space-y-3">
      <a href="tel:+8603143016665"
         class="flex items-center gap-4 p-4 border border-outline-variant/30 rounded hover:bg-surface-container-low transition-colors group">
        <span class="material-symbols-outlined text-primary text-xl">call</span>
        <div class="flex-1">
          <div class="text-sm font-bold text-on-surface">致电咨询</div>
          <div class="text-xs text-on-surface-variant">0314-3016665</div>
        </div>
        <span class="material-symbols-outlined text-sm text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
      </a>
      <a href="mailto:beipingjiuye@163.com"
         class="flex items-center gap-4 p-4 border border-outline-variant/30 rounded hover:bg-surface-container-low transition-colors group">
        <span class="material-symbols-outlined text-secondary text-xl">mail</span>
        <div class="flex-1">
          <div class="text-sm font-bold text-on-surface">发送邮件</div>
          <div class="text-xs text-on-surface-variant">beipingjiuye@163.com</div>
        </div>
        <span class="material-symbols-outlined text-sm text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
      </a>
      <div class="flex items-center gap-4 p-4 border border-outline-variant/30 rounded">
        <span class="material-symbols-outlined text-tertiary text-xl">chat</span>
        <div>
          <div class="text-sm font-bold text-on-surface">微信公众号</div>
          <div class="text-xs text-on-surface-variant">搜索：冀承果创</div>
        </div>
      </div>
      <a href="./index.html#contact"
         class="flex items-center gap-4 p-4 bg-primary text-on-primary rounded hover:bg-primary-container hover:text-on-primary-container transition-colors group">
        <span class="material-symbols-outlined text-xl">edit_note</span>
        <div class="flex-1">
          <div class="text-sm font-bold">在线留言</div>
          <div class="text-xs opacity-80">我们将在24小时内回复</div>
        </div>
        <span class="material-symbols-outlined text-sm">arrow_forward</span>
      </a>
    </div>
  </div>
</div>`;

  const placeholder = document.getElementById('footer-placeholder');
  if (placeholder) {
    placeholder.innerHTML = html;
  }
}
