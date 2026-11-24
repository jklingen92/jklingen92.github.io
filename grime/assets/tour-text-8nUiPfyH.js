(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=document.getElementById(`demo-version`);e&&(e.textContent=`v0.1.0+6035a97 · 2026-11-24 15:56`);var t=`grime-demo-tours-seen`,n=new Set;function r(){try{return new Set(JSON.parse(sessionStorage.getItem(t))||[])}catch{return n}}function i(e){let i=r();e.forEach(e=>i.add(e)),e.forEach(e=>n.add(e));try{sessionStorage.setItem(t,JSON.stringify([...i]))}catch{}}function a(e){let t=r(),n=Object.keys(e).filter(n=>e[n]?.length&&!t.has(n)),a=n.flatMap(t=>e[t]);if(!a.length||!window.bootstrap)return;i(n);let o=document.createElement(`div`);o.className=`modal fade`,o.tabIndex=-1,o.setAttribute(`aria-labelledby`,`demo-tour-title`),o.innerHTML=`
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title h5" id="demo-tour-title"></h2>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body"></div>
        <div class="modal-footer">
          <span class="text-muted small me-auto" data-tour="count"></span>
          <button type="button" class="btn btn-outline-secondary btn-sm" data-tour="back">Back</button>
          <button type="button" class="btn btn-grime btn-sm" data-tour="next"></button>
        </div>
      </div>
    </div>`,document.body.appendChild(o);let s=o.querySelector(`.modal-title`),c=o.querySelector(`.modal-body`),l=o.querySelector(`[data-tour="count"]`),u=o.querySelector(`[data-tour="back"]`),d=o.querySelector(`[data-tour="next"]`),f=new window.bootstrap.Modal(o),p=0;function m(){s.textContent=a[p].title,c.innerHTML=a[p].body,l.textContent=a.length>1?`${p+1} of ${a.length}`:``,u.hidden=p===0,d.textContent=p===a.length-1?`Done`:`Next`}u.addEventListener(`click`,()=>{--p,m()}),d.addEventListener(`click`,()=>{if(p===a.length-1)return f.hide();p+=1,m()}),o.addEventListener(`keydown`,e=>e.stopPropagation()),o.addEventListener(`hidden.bs.modal`,()=>{f.dispose(),o.remove()}),m(),f.show()}var o={dashboard:[{title:`Welcome to grime`,body:`<p>Grime is an archival document platform: it ingests scanned PDFs, runs OCR
        and named-entity recognition (NER), and gives archivists tools to correct and
        annotate each page.</p>
        <p>This is a static, browser-only copy.</p>`},{title:`What's switched off`,body:`<p>Anything that needs a server is shown but grayed out: uploading, running
        OCR/NER jobs, exports, and editing or deleting documents. Hover a grayed control
        to confirm.</p>`},{title:`Open a document`,body:`<p>Click a title to open it in the viewer. Each demo document includes one page.</p>`}],viewer:[{title:`The viewer`,body:`<p>The scanned page is on the left; the panel on the right has a tab per task:
        <strong>OCR</strong>, <strong>NER</strong> and <strong>Image</strong>.</p>
        <p>Ctrl/⌘ + scroll zooms.</p>`},{title:`OCR`,body:`<p>Each box is a word the OCR found, coloured by confidence. The OCR on this page
        was run poorly on purpose.</p>
        <ul>
          <li>Click a word to fix its text.</li>
          <li>Drag or shift-click to select several, then ditto or delete them.</li>
          <li>Press <kbd>A</kbd> to draw a box around a word the OCR missed.</li>
        </ul>`},{title:`Your edits`,body:`<p>Corrections are saved in this browser only. <strong>Reset page</strong> in the
        yellow banner restores the original.</p>`}],pages:{41:[{title:`American Protective League`,body:`<p>Page 6 of a 105-page document.</p>`}],34:[{title:`Declaration of Independence`,body:`<p>A single dense page with over 1,300 OCR words.</p>`}],1:[{title:`Hanford glossary of code words`,body:`<p>Page 1 of a 30-page glossary.</p>`}]},tabs:{ner:[{title:`NER`,body:`<p>Words tagged as people, places and organisations. Select words on the page or
          in the list to change or clear their entity label.</p>`}],image:[{title:`Image`,body:`<p>Adjust brightness, contrast, levels, rotation and threshold to make faded text
          legible. The preview is live; saving the adjusted image is off in the demo.</p>`}]}};export{a as n,o as t};