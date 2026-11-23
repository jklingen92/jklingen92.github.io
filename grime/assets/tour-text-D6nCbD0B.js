(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){if(!e?.length||!window.bootstrap)return;let t=document.createElement(`div`);t.className=`modal fade`,t.tabIndex=-1,t.setAttribute(`aria-labelledby`,`demo-tour-title`),t.innerHTML=`
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
    </div>`,document.body.appendChild(t);let n=t.querySelector(`.modal-title`),r=t.querySelector(`.modal-body`),i=t.querySelector(`[data-tour="count"]`),a=t.querySelector(`[data-tour="back"]`),o=t.querySelector(`[data-tour="next"]`),s=new window.bootstrap.Modal(t),c=0;function l(){n.textContent=e[c].title,r.innerHTML=e[c].body,i.textContent=`${c+1} of ${e.length}`,a.hidden=c===0,o.textContent=c===e.length-1?`Done`:`Next`}a.addEventListener(`click`,()=>{--c,l()}),o.addEventListener(`click`,()=>{if(c===e.length-1)return s.hide();c+=1,l()}),t.addEventListener(`keydown`,e=>e.stopPropagation()),t.addEventListener(`hidden.bs.modal`,()=>{s.dispose(),t.remove()}),l(),s.show()}var t={dashboard:[{title:`Welcome to grime`,body:`<p>Grime is an archival document platform: it ingests scanned PDFs, runs OCR
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
        yellow banner restores the original.</p>`}],tabs:{ner:[{title:`NER`,body:`<p>Words tagged as people, places and organisations. Select words on the page or
          in the list to change or clear their entity label.</p>`}],image:[{title:`Image`,body:`<p>Adjust brightness, contrast, levels, rotation and threshold to make faded text
          legible. The preview is live; saving the adjusted image is off in the demo.</p>`}]}};export{e as n,t};