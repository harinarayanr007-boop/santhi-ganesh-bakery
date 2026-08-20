/**
 * Santhi Ganesh Bakery - Shared Security, Helper & Luxury Brand Modal Utilities (js/utils.js)
 */

(function(window) {
  'use strict';

  // 1. Inject Brand Modal Styles dynamically
  function injectBrandModalStyles() {
    if (typeof document === 'undefined') return;
    if (document.getElementById('sg-brand-modal-styles')) return;
    const style = document.createElement('style');
    style.id = 'sg-brand-modal-styles';
    style.textContent = `
      /* ==========================================
         SANTHI GANESH LUXURY BRAND MODAL SYSTEM
         ========================================== */
      .sg-brand-modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(10, 4, 4, 0.72);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        z-index: 999999;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.22s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.22s;
      }

      .sg-brand-modal-backdrop.active {
        opacity: 1;
        visibility: visible;
      }

      .sg-brand-modal-card {
        background: #FFFFFF;
        border: 1.5px solid rgba(166, 96, 27, 0.25);
        border-radius: 24px;
        max-width: 380px;
        width: 100%;
        padding: 26px 22px 22px;
        text-align: center;
        box-shadow: 0 20px 48px rgba(26, 18, 11, 0.28), 0 0 0 1px rgba(255, 255, 255, 0.8) inset;
        transform: scale(0.92) translateY(12px);
        transition: transform 0.26s cubic-bezier(0.34, 1.56, 0.64, 1);
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
      }

      .sg-brand-modal-backdrop.active .sg-brand-modal-card {
        transform: scale(1) translateY(0);
      }

      .sg-modal-icon-badge {
        width: 58px;
        height: 58px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.65rem;
        margin-bottom: 14px;
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
      }

      .sg-modal-icon-badge.type-info, 
      .sg-modal-icon-badge.type-brand {
        background: #FAF6F0;
        color: #8B4513;
        border: 2px solid rgba(166, 96, 27, 0.28);
      }

      .sg-modal-icon-badge.type-warning {
        background: #FFFBEB;
        color: #D97706;
        border: 2px solid rgba(217, 119, 6, 0.3);
      }

      .sg-modal-icon-badge.type-error {
        background: #FEF2F2;
        color: #DC2626;
        border: 2px solid rgba(220, 38, 38, 0.3);
      }

      .sg-modal-icon-badge.type-success {
        background: #F0FDF4;
        color: #16A34A;
        border: 2px solid rgba(22, 163, 74, 0.3);
      }

      .sg-modal-title {
        font-family: 'Playfair Display', 'Aboreto', Georgia, serif;
        font-size: 1.22rem;
        font-weight: 700;
        color: #8B4513;
        margin-bottom: 8px;
        line-height: 1.3;
      }

      .sg-modal-message {
        font-family: 'Plus Jakarta Sans', 'Noto Sans Tamil', sans-serif;
        font-size: 0.88rem;
        color: #4A4A4A;
        line-height: 1.55;
        margin-bottom: 22px;
        white-space: pre-line;
        word-break: break-word;
        max-height: 55vh;
        overflow-y: auto;
      }

      .sg-modal-actions {
        display: flex;
        gap: 10px;
        width: 100%;
        justify-content: center;
      }

      .sg-btn-modal-confirm {
        flex: 1;
        background: linear-gradient(135deg, #A6601B 0%, #8B4513 100%);
        color: #FFFFFF;
        border: none;
        padding: 12px 18px;
        border-radius: 14px;
        font-family: 'Plus Jakarta Sans', 'Noto Sans Tamil', sans-serif;
        font-size: 0.92rem;
        font-weight: 700;
        cursor: pointer;
        box-shadow: 0 4px 14px rgba(139, 69, 19, 0.28);
        transition: all 0.15s ease;
      }

      .sg-btn-modal-confirm:active {
        transform: scale(0.97);
      }

      .sg-btn-modal-cancel {
        flex: 1;
        background: #FAF8F5;
        color: #666666;
        border: 1.5px solid rgba(166, 96, 27, 0.22);
        padding: 12px 18px;
        border-radius: 14px;
        font-family: 'Plus Jakarta Sans', 'Noto Sans Tamil', sans-serif;
        font-size: 0.92rem;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.15s ease;
      }

      .sg-btn-modal-cancel:active {
        background: #ECE7E0;
        transform: scale(0.97);
      }

      /* ==========================================
         BRAND TOAST FLOATING NOTIFICATIONS
         ========================================== */
      .sg-brand-toast-container {
        position: fixed;
        top: 24px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        z-index: 1000000;
        pointer-events: none;
        width: calc(100% - 32px);
        max-width: 400px;
      }

      .sg-brand-toast {
        pointer-events: auto;
        background: rgba(26, 18, 11, 0.94);
        color: #FFFFFF;
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(166, 96, 27, 0.45);
        padding: 10px 18px;
        border-radius: 16px;
        font-family: 'Plus Jakarta Sans', 'Noto Sans Tamil', sans-serif;
        font-size: 0.84rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 8px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
        animation: sgToastIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        transition: opacity 0.2s, transform 0.2s;
      }

      .sg-brand-toast.toast-success {
        border-color: rgba(34, 197, 94, 0.55);
      }

      .sg-brand-toast.toast-error {
        border-color: rgba(239, 68, 68, 0.55);
      }

      @keyframes sgToastIn {
        from {
          opacity: 0;
          transform: translateY(-16px) scale(0.94);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
    `;
    document.head.appendChild(style);
  }

  // Ensure DOM ready for styles injection
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', injectBrandModalStyles);
    } else {
      injectBrandModalStyles();
    }
  }

  // Core Utility Methods
  const Utils = {
    escapeHTML: function(str) {
      if (str === null || str === undefined) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    },

    sanitizeInput: function(input, maxLength = 500) {
      if (!input || typeof input !== 'string') return '';
      return input
        .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
        .trim()
        .slice(0, maxLength);
    },

    safeJSONParse: function(jsonString, fallback = null) {
      if (!jsonString || typeof jsonString !== 'string') return fallback;
      try {
        return JSON.parse(jsonString);
      } catch (e) {
        console.warn('JSON parse fallback triggered:', e.message);
        return fallback;
      }
    },

    formatCurrency: function(amount) {
      const num = Number(amount) || 0;
      return '₹' + num.toLocaleString('en-IN');
    },

    generateRefCode: function(prefix = 'SG') {
      const rand = Math.floor(100000 + Math.random() * 900000);
      return `${prefix}-${rand}`;
    },

    checkRateLimit: function(actionKey, cooldownMs = 15000) {
      if (typeof sessionStorage === 'undefined') return { allowed: true, remainingSecs: 0 };
      const storageKey = `sg_ratelimit_${actionKey}`;
      const lastTime = Number(sessionStorage.getItem(storageKey) || 0);
      const now = Date.now();
      
      if (now - lastTime < cooldownMs) {
        const remainingSecs = Math.ceil((cooldownMs - (now - lastTime)) / 1000);
        return { allowed: false, remainingSecs };
      }
      
      sessionStorage.setItem(storageKey, String(now));
      return { allowed: true, remainingSecs: 0 };
    },

    /**
     * Show a Luxury Brand Modal with custom buttons and icon.
     * @param {Object} options
     * @returns {Promise<boolean>}
     */
    showModal: function(options = {}) {
      if (typeof document === 'undefined') return Promise.resolve(true);
      injectBrandModalStyles();

      const {
        title = 'Santhi Ganesh Bakery',
        message = '',
        icon = '🥐',
        type = 'brand', // 'brand', 'info', 'warning', 'error', 'success'
        confirmText = (typeof currentMenuLang !== 'undefined' && currentMenuLang === 'ta') ? 'சரி' : 'OK',
        cancelText = (typeof currentMenuLang !== 'undefined' && currentMenuLang === 'ta') ? 'ரத்து' : 'Cancel',
        showCancel = false
      } = options;

      return new Promise((resolve) => {
        // Remove any existing active modal
        const oldBackdrop = document.getElementById('sg-brand-modal-backdrop');
        if (oldBackdrop) oldBackdrop.remove();

        const backdrop = document.createElement('div');
        backdrop.id = 'sg-brand-modal-backdrop';
        backdrop.className = 'sg-brand-modal-backdrop';

        const card = document.createElement('div');
        card.className = 'sg-brand-modal-card';

        let iconHTML = icon;
        if (icon === 'info') iconHTML = 'ℹ️';
        else if (icon === 'warning') iconHTML = '⚠️';
        else if (icon === 'error') iconHTML = '❌';
        else if (icon === 'success') iconHTML = '✅';
        else if (icon === 'gps') iconHTML = '';
        else if (icon === 'clock') iconHTML = '⏳';
        else if (icon === 'cake') iconHTML = '🎂';
        else if (icon === 'lock') iconHTML = '🔒';

        card.innerHTML = `
          <div class="sg-modal-icon-badge type-${type}">${iconHTML}</div>
          <h3 class="sg-modal-title">${Utils.escapeHTML(title)}</h3>
          <div class="sg-modal-message">${Utils.escapeHTML(message)}</div>
          <div class="sg-modal-actions">
            ${showCancel ? `<button class="sg-btn-modal-cancel" id="sg-modal-cancel-btn">${Utils.escapeHTML(cancelText)}</button>` : ''}
            <button class="sg-btn-modal-confirm" id="sg-modal-confirm-btn">${Utils.escapeHTML(confirmText)}</button>
          </div>
        `;

        backdrop.appendChild(card);
        document.body.appendChild(backdrop);

        // Force reflow and show
        void backdrop.offsetWidth;
        backdrop.classList.add('active');

        const cleanup = (result) => {
          backdrop.classList.remove('active');
          setTimeout(() => {
            if (backdrop.parentNode) backdrop.parentNode.removeChild(backdrop);
          }, 250);
          resolve(result);
        };

        const confirmBtn = card.querySelector('#sg-modal-confirm-btn');
        if (confirmBtn) {
          confirmBtn.addEventListener('click', () => cleanup(true));
          confirmBtn.focus();
        }

        const cancelBtn = card.querySelector('#sg-modal-cancel-btn');
        if (cancelBtn) {
          cancelBtn.addEventListener('click', () => cleanup(false));
        }

        // Close on backdrop click
        backdrop.addEventListener('click', (e) => {
          if (e.target === backdrop) {
            cleanup(false);
          }
        });
      });
    },

    /**
     * Drop-in Replacement for alert()
     */
    alert: function(message, title = 'Santhi Ganesh Bakery', type = 'brand', icon = '🥐') {
      if (typeof message === 'string' && (message.includes('⚠️') || message.includes('Please fill') || message.includes('தயவுசெய்து') || message.includes('required'))) {
        type = 'warning';
        icon = '⚠️';
      } else if (typeof message === 'string' && (message.includes('GPS') || message.includes('Location') || message.includes('இருப்பிடம்'))) {
        type = 'warning';
        icon = '';
      } else if (typeof message === 'string' && (message.includes('PIN') || message.includes('password') || message.includes('Incorrect'))) {
        type = 'error';
        icon = '🔒';
      } else if (typeof message === 'string' && (message.includes('') || message.includes('successfully') || message.includes('saved') || message.includes('restored'))) {
        type = 'success';
        icon = '✅';
      }
      return Utils.showModal({
        title,
        message,
        type,
        icon,
        showCancel: false
      });
    },

    /**
     * Drop-in Replacement for confirm()
     */
    confirm: function(message, title = 'Please Confirm', confirmText = 'Yes, Proceed', cancelText = 'Cancel') {
      return Utils.showModal({
        title,
        message,
        type: 'warning',
        icon: '⚠️',
        showCancel: true,
        confirmText,
        cancelText
      });
    },

    /**
     * Floating Brand Toast Notification
     */
    toast: function(message, type = 'brand', duration = 3000) {
      if (typeof document === 'undefined') return;
      injectBrandModalStyles();

      let container = document.getElementById('sg-brand-toast-container');
      if (!container) {
        container = document.createElement('div');
        container.id = 'sg-brand-toast-container';
        container.className = 'sg-brand-toast-container';
        document.body.appendChild(container);
      }

      const toast = document.createElement('div');
      toast.className = `sg-brand-toast toast-${type}`;
      
      let icon = '🥐';
      if (type === 'success') icon = '✅';
      else if (type === 'error') icon = '⚠️';

      toast.innerHTML = `<span>${icon}</span> <span>${Utils.escapeHTML(message)}</span>`;
      container.appendChild(toast);

      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-10px) scale(0.95)';
        setTimeout(() => {
          if (toast.parentNode) toast.parentNode.removeChild(toast);
        }, 250);
      }, duration);
    }
  };

  // Export to global window scope
  window.SG_Utils = Utils;
  window.escapeHTML = Utils.escapeHTML;
  window.showBrandModal = Utils.showModal;
  window.showBrandAlert = Utils.alert;
  window.showBrandConfirm = Utils.confirm;
  window.showBrandToast = Utils.toast;

  // Intercept default window.alert with luxury brand modal
  window.alert = function(msg) {
    Utils.alert(msg);
  };

})(typeof window !== 'undefined' ? window : this);
