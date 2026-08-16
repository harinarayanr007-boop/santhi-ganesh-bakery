/**
 * Santhi Ganesh Bakery - Shared Security & Helper Utilities (js/utils.js)
 */

(function(window) {
  'use strict';

  const Utils = {
    /**
     * Escape HTML entities to prevent Cross-Site Scripting (XSS) attacks.
     * @param {string|any} str 
     * @returns {string} Sanitized HTML-safe string
     */
    escapeHTML: function(str) {
      if (str === null || str === undefined) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    },

    /**
     * Sanitize user text inputs by stripping control characters and excessive whitespace.
     * @param {string} input 
     * @param {number} maxLength 
     * @returns {string}
     */
    sanitizeInput: function(input, maxLength = 500) {
      if (!input || typeof input !== 'string') return '';
      return input
        .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
        .trim()
        .slice(0, maxLength);
    },

    /**
     * Safe JSON parser with fallback.
     * @param {string} jsonString 
     * @param {any} fallback 
     * @returns {any}
     */
    safeJSONParse: function(jsonString, fallback = null) {
      if (!jsonString || typeof jsonString !== 'string') return fallback;
      try {
        return JSON.parse(jsonString);
      } catch (e) {
        console.warn('JSON parse fallback triggered:', e.message);
        return fallback;
      }
    },

    /**
     * Format number as INR currency (₹).
     * @param {number|string} amount 
     * @returns {string}
     */
    formatCurrency: function(amount) {
      const num = Number(amount) || 0;
      return '₹' + num.toLocaleString('en-IN');
    },

    /**
     * Generate secure random reference code (e.g. SG-123456 or B2B-654321).
     * @param {string} prefix 
     * @returns {string}
     */
    generateRefCode: function(prefix = 'SG') {
      const rand = Math.floor(100000 + Math.random() * 900000);
      return `${prefix}-${rand}`;
    },

    /**
     * Rate limiter tracker for preventing spam on client actions (e.g. WhatsApp checkout, B2B forms).
     * @param {string} actionKey 
     * @param {number} cooldownMs 
     * @returns {{allowed: boolean, remainingSecs: number}}
     */
    checkRateLimit: function(actionKey, cooldownMs = 15000) {
      const storageKey = `sg_ratelimit_${actionKey}`;
      const lastTime = Number(sessionStorage.getItem(storageKey) || 0);
      const now = Date.now();
      
      if (now - lastTime < cooldownMs) {
        const remainingSecs = Math.ceil((cooldownMs - (now - lastTime)) / 1000);
        return { allowed: false, remainingSecs };
      }
      
      sessionStorage.setItem(storageKey, String(now));
      return { allowed: true, remainingSecs: 0 };
    }
  };

  // Export to global window scope
  window.SG_Utils = Utils;
  window.escapeHTML = Utils.escapeHTML;

})(typeof window !== 'undefined' ? window : this);
