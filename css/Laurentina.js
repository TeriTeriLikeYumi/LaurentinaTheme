/*
  Name: Laurentina
  Author: TeriYumi / Justyna Valentine#2222
  Version: 1.0
*/
function insertCss(css) {
   const style = document.createElement("style");
   style.textContent = css;
   document.body.append(style);
 }
 
 window.addEventListener("DOMContentLoaded", () => {
   insertCss(require("laurentina.css"));
 });
 
 window.addEventListener('load', () => {
   // Wait for viewport root
   const interval = setInterval(() => {
       const manager = document.getElementById('rcp-fe-viewport-root')
       if (manager) {
           clearInterval(interval)
           new MutationObserver(mutations => {
             document.querySelector('.regalia-loaded').shadowRoot.querySelector('.regalia-profile-banner-backdrop.regalia-banner-loaded').setAttribute('style', 'opacity: 0.5; filter: grayscale(100%) brightness(3);');
             const socialChatGroup = document.querySelectorAll('.group-header');
             for (let i = 0; i < socialChatGroup.length; i++) {
               socialChatGroup[i].setAttribute('style', 'background: rgba(0,0,0,0); color: dimgray;');
             }
             const member_name = document.querySelectorAll('.member-name');
             for (let j = 0; j < member_name.length; j++) {
               member_name[j].setAttribute('style', 'color: dimgray;');
             }
           }).observe(manager, {
               childList: true,
               subtree: true
           })
       }
   }, 500)
 })
console.clear();
console.log('Larentina Waifu :3');
console.log('By TeriYumi');
console.log('Yabeeeeeeee <3');