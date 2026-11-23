import{n as e,t}from"./tour-text-TnKeivRR.js";var n=`Not available in the demo`,r=e=>String(e).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),i=(e,t)=>`<span class="d-inline-block" title="${n}" tabindex="0"><button type="button" class="btn btn-sm ${e}" disabled aria-disabled="true">${t}</button></span>`;function a(e){let t=e.tags.length?`<div class="d-flex flex-wrap gap-1">${e.tags.map(e=>`<span class="badge" style="background-color:var(--grime-primary)">${r(e)}</span>`).join(``)}</div>`:`<span class="text-muted">—</span>`,n=e.pageCount||`<span class="text-muted">—</span>`;return`<tr>
    <td><a href="viewer.html?page=${e.pagePk}"><i class="fa-regular fa-file-pdf me-1"></i>${r(e.title)}</a></td>
    <td>${t}</td>
    <td>${n}</td>
    <td class="text-center">${i(`btn-outline-secondary`,`<i class="fa-solid fa-tags me-1"></i>${e.entityCount} entities`)}</td>
    <td><div class="d-flex gap-2 justify-content-end">
      ${i(`btn-outline-secondary`,`Download PDF`)}
      ${i(`btn-outline-primary`,`<i class="fa-solid fa-pencil"></i>`)}
      ${i(`btn-outline-danger`,`<i class="fa-solid fa-trash"></i>`)}
    </div></td>
  </tr>`}var o=await fetch(`/grime/manifest.json`),s=o.ok?await o.json():[];document.getElementById(`demo-doc-count`).textContent=s.length,document.getElementById(`demo-doc-rows`).innerHTML=s.map(a).join(``),e({dashboard:t.dashboard});