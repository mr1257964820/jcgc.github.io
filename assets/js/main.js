/**
 * 果三两酒业官网 - 全局公共脚本
 * Guo San Liang Winery - Global Script
 */

(function () {
  'use strict';

  /* ================================================
     1. 滚动入场动画 (IntersectionObserver)
     ================================================ */
  function initReveal() {
    const classes = ['.reveal', '.reveal-left', '.reveal-right'];
    const elements = document.querySelectorAll(classes.join(', '));
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
  }

  /* ================================================
     2. 导航滚动加深效果
     ================================================ */
  function initNavScroll() {
    const nav = document.querySelector('.glass-nav');
    if (!nav) return;

    const toggle = () => nav.classList.toggle('nav-scrolled', window.scrollY > 60);
    toggle();
    window.addEventListener('scroll', toggle, { passive: true });
  }

  /* ================================================
     3. 动态季节 / 年份标注（动态页用）
     ================================================ */
  function initSeasonTag() {
    const tag = document.getElementById('season-tag');
    if (!tag) return;

    const m = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const season =
      m <= 2 || m === 12 ? '冬季' :
      m <= 5  ? '春季' :
      m <= 8  ? '夏季' : '秋季';

    tag.textContent = `时令：${year} ${season}`;
  }

  /* ================================================
     4. 联系表单前端反馈
     ================================================ */
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.textContent;

      btn.disabled = true;
      btn.textContent = '发送中…';

      setTimeout(() => {
        btn.textContent = '✓ 已收到，我们将在24小时内联系您';
        btn.classList.add('bg-secondary', 'text-on-secondary');
        btn.classList.remove('bg-primary');
        form.reset();

        setTimeout(() => {
          btn.disabled = false;
          btn.textContent = original;
          btn.classList.remove('bg-secondary', 'text-on-secondary');
          btn.classList.add('bg-primary');
        }, 5000);
      }, 800);
    });
  }

  /* ================================================
     5. 购买渠道弹窗（全局）
     ================================================ */
  function initBuyModal() {
    const modal = document.getElementById('buy-modal');
    if (!modal) return;

    window.openBuyModal = function () {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    };
    window.closeBuyModal = function () {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    };

    modal.querySelector('.modal-backdrop')?.addEventListener('click', window.closeBuyModal);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') window.closeBuyModal?.();
    });
  }

  /* ================================================
     6. 产品页 Tab 切换
     ================================================ */
  function initProductTabs() {
    const tabBtns = document.querySelectorAll('[data-tab-btn]');
    const tabPanels = document.querySelectorAll('[data-tab-panel]');
    if (!tabBtns.length) return;

    tabBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tabBtn;

        tabBtns.forEach((b) => {
          b.classList.remove('text-primary', 'border-b-2', 'border-primary');
          b.classList.add('text-on-surface-variant');
        });
        btn.classList.add('text-primary', 'border-b-2', 'border-primary');
        btn.classList.remove('text-on-surface-variant');

        tabPanels.forEach((panel) => {
          panel.classList.toggle('hidden', panel.dataset.tabPanel !== target);
        });

        // 重新触发动画
        const newPanel = document.querySelector(`[data-tab-panel="${target}"]`);
        newPanel?.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
          el.classList.remove('visible');
          setTimeout(() => el.classList.add('visible'), 50);
        });
      });
    });
  }

  /* ================================================
     初始化入口
     ================================================ */
  document.addEventListener('DOMContentLoaded', () => {
    initReveal();
    initNavScroll();
    initSeasonTag();
    initContactForm();
    initBuyModal();
    initProductTabs();
  });
})();
