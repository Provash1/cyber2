// ==UserScript==
// @name         IVAC Automation Loader - Allex@cyber2
// @namespace    https://github.com/allex122
// @version      1.0
// @description  Loads IVAC automation script from GitHub - Created by Allex@cyber2
// @author       Allex@cyber2
// @match        https://payment.ivacbd.com/*
// @match        https://www.ivacbd.com/*
// @icon         https://www.ivacbd.com/favicon.ico
// @grant        none
// @connect      raw.githubusercontent.com
// @homepageURL  https://allex122.github.io/IVAC-AUTOMATION-BY-ALLEX-CYBER2/
// @updateURL    https://raw.githubusercontent.com/allex122/IVAC-AUTOMATION-BY-ALLEX-CYBER2/main/ivac-loader.user.js
// @downloadURL  https://raw.githubusercontent.com/allex122/IVAC-AUTOMATION-BY-ALLEX-CYBER2/main/ivac-loader.user.js
// ==/UserScript==

(function() {
    'use strict';
    
    // jsDelivr CDN直接从 GitHub加载 - এটাই সবচেয়ে সহজ উপায়
    const MAIN_SCRIPT_URL = 'https://cdn.jsdelivr.net/gh/allex122/IVAC-AUTOMATION-BY-ALLEX-CYBER2/ivac-main.js';
    
    console.log('🚀 IVAC Loader: Loading main script from jsDelivr...');
    
    // সরাসরি script tag create করুন
    const script = document.createElement('script');
    script.src = MAIN_SCRIPT_URL + '?v=' + Date.now();
    script.onload = function() {
        console.log('✅ IVAC Main Script loaded successfully!');
    };
    script.onerror = function() {
        console.error('❌ Failed to load main script');
    };
    
    document.head.appendChild(script);
    
})();
