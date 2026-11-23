import"./demo-BkBuVAL_.js";var e=`Not available in the demo`,t=e=>String(e).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),n=(t,n)=>`<span class="d-inline-block" title="${e}" tabindex="0"><button type="button" class="btn btn-sm ${t}" disabled aria-disabled="true">${n}</button></span>`;function r(e){let r=e.tags.length?`<div class="d-flex flex-wrap gap-1">${e.tags.map(e=>`<span class="badge" style="background-color:var(--grime-primary)">${t(e)}</span>`).join(``)}</div>`:`<span class="text-muted">—</span>`,i=e.pageCount||`<span class="text-muted">—</span>`;return`<tr>
    <td><a href="viewer.html?page=${e.pagePk}"><i class="fa-regular fa-file-pdf me-1"></i>${t(e.title)}</a></td>
    <td>${r}</td>
    <td>${i}</td>
    <td class="text-center">${n(`btn-outline-secondary`,`<i class="fa-solid fa-tags me-1"></i>${e.entityCount} entities`)}</td>
    <td><div class="d-flex gap-2 justify-content-end">
      ${n(`btn-outline-secondary`,`Download PDF`)}
      ${n(`btn-outline-primary`,`<i class="fa-solid fa-pencil"></i>`)}
      ${n(`btn-outline-danger`,`<i class="fa-solid fa-trash"></i>`)}
    </div></td>
  </tr>`}var i=await fetch(`/grime/manifest.json`),a=i.ok?await i.json():[];document.getElementById(`demo-doc-count`).textContent=a.length,document.getElementById(`demo-doc-rows`).innerHTML=a.map(r).join(``);