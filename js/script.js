const ASSET_BASE='https://sa23515193-hash.github.io/Al-Matiri-Fiber-Glass/assets/';
const VIDEO_BASE='https://raw.githubusercontent.com/sa23515193-hash/Al-Matiri-Fiber-Glass/master/public/assets/';
const MAP_URL='https://www.google.com/maps/search/?api=1&query=Al-Mutairi+Fiberglass%2C+30th+Street%2C+Jeddah+23448%2C+Saudi+Arabia';
const categories=[
 {name:'Tanks & Containers',desc:'Storage and container solutions.',image:'c1.jpeg'},
 {name:'Canopies & Shades',desc:'Shade and protective structures.',image:'c2.jpeg'},
 {name:'Doors & Windows',desc:'Practical, durable fixtures.',image:'c3.jpeg'},
 {name:'Industrial Fiberglass',desc:'Fiberglass for specialist use.',image:'c4.jpeg'},
 {name:'Marine & Outdoor',desc:'Outdoor and marine applications.',image:'c5.jpeg'},
 {name:'Custom Fabrication',desc:'Made around your requirements.',image:'c6.jpeg'},
 {name:'Decorative Fiberglass',desc:'Form and finish with purpose.',image:'c7.jpeg'},
 {name:'Repair & Maintenance',desc:'Discuss repair and restoration.',image:'c8.jpeg'}
];
const products=Array.from({length:50},(_,i)=>({id:i+1,name:`Fiberglass Product ${String(i+1).padStart(2,'0')}`,category:categories[i%categories.length].name,image:`pr${i+1}.jpeg`}));
const fallbackImages={hero:'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1800&q=85',about:'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1400&q=80',category:'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80',product:'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=800&q=80',document:'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80'};
function imageURL(file){return ASSET_BASE+file}
function applyImageFallback(img,type='product'){img.addEventListener('error',()=>{if(img.dataset.fallbackDone)return;img.dataset.fallbackDone='1';img.src=fallbackImages[img.dataset.fallback||type]||fallbackImages.product;img.classList.add('fallback-image')},{once:true})}
document.querySelectorAll('.asset-image').forEach(img=>applyImageFallback(img,img.dataset.fallback||'product'));
const categoryGrid=document.getElementById('categoryGrid');
categoryGrid.innerHTML=categories.map((c,i)=>`<button class="category-card" data-category="${c.name}" aria-label="Explore ${c.name}"><img src="${imageURL(c.image)}" alt="${c.name}" loading="lazy"><span class="cat-num">0${i+1}</span><span class="cat-arrow">↗</span><span class="cat-copy"><strong>${c.name}</strong><small>${c.desc}</small></span></button>`).join('');
categoryGrid.querySelectorAll('img').forEach(img=>applyImageFallback(img,'category'));
const filterPills=document.getElementById('filterPills');
filterPills.insertAdjacentHTML('beforeend',categories.map(c=>`<button class="filter-pill" data-category="${c.name}">${c.name}</button>`).join(''));
let activeCategory='All';
const productGrid=document.getElementById('productGrid'),searchInput=document.getElementById('productSearch'),resultCount=document.getElementById('resultCount');
function renderProducts(){const query=searchInput.value.trim().toLowerCase();const list=products.filter(p=>(activeCategory==='All'||p.category===activeCategory)&&(p.name.toLowerCase().includes(query)||p.category.toLowerCase().includes(query)));productGrid.innerHTML=list.length?list.map(p=>`<button class="product-card lightbox-trigger" data-file="${p.image}" data-caption="${p.name} · ${p.category}"><div class="product-image-wrap"><img src="${imageURL(p.image)}" alt="${p.name}" loading="lazy"><span class="view-tag">VIEW ↗</span></div><div class="product-meta"><small>${p.category}</small><strong>${p.name}</strong><span>Ask about specifications & pricing ↗</span></div></button>`).join(''):'<div class="empty-state">No products match your search. Try another keyword or choose “All products”.</div>';productGrid.querySelectorAll('img').forEach(img=>applyImageFallback(img,'product'));resultCount.textContent=`Showing ${list.length} of ${products.length} catalogue items`;productGrid.querySelectorAll('.lightbox-trigger').forEach(btn=>btn.addEventListener('click',()=>openLightbox(btn.dataset.file,btn.dataset.caption,products.map(p=>({image:p.image,caption:p.name+' · '+p.category})))))}
function setCategory(category){activeCategory=category;filterPills.querySelectorAll('button').forEach(btn=>btn.classList.toggle('active',btn.dataset.category===category));renderProducts()}
filterPills.addEventListener('click',e=>{const btn=e.target.closest('button[data-category]');if(btn)setCategory(btn.dataset.category)});
categoryGrid.addEventListener('click',e=>{const btn=e.target.closest('[data-category]');if(btn){setCategory(btn.dataset.category);document.getElementById('products').scrollIntoView({behavior:'smooth'})}});
searchInput.addEventListener('input',renderProducts);renderProducts();
// Video sources: use the GitHub media CDN first, then two alternate public CDNs,
// and finally the live GitHub Pages asset URL. Each clip cycles through sources if one fails.
const videoGrid=document.getElementById('videoGrid');
const videoSourceCandidates=i=>[
 `https://media.githubusercontent.com/media/sa23515193-hash/Al-Matiri-Fiber-Glass/master/public/assets/v${i}.mp4`,
 `https://cdn.jsdelivr.net/gh/sa23515193-hash/Al-Matiri-Fiber-Glass@master/public/assets/v${i}.mp4`,
 `https://raw.githubusercontent.com/sa23515193-hash/Al-Matiri-Fiber-Glass/master/public/assets/v${i}.mp4`,
 `https://sa23515193-hash.github.io/Al-Matiri-Fiber-Glass/assets/v${i}.mp4`
];
videoGrid.innerHTML=Array.from({length:10},(_,idx)=>{const i=idx+1;const poster=i<=4?imageURL(`v${i}.jpeg`):imageURL(`c${((i-1)%8)+1}.jpeg`);const sources=videoSourceCandidates(i);return `<article class="video-card"><div class="video-frame"><video controls preload="none" playsinline poster="${poster}" data-sources='${JSON.stringify(sources)}' data-source-index="0" aria-label="Al-Mutairi Fiber Glass showcase video ${i}"><source src="${sources[0]}" type="video/mp4">Your browser does not support video playback.</video><div class="video-fallback" hidden><span class="play-large">▶</span><strong>Clip ${String(i).padStart(2,'0')} temporarily unavailable</strong><small>Try opening the original clip directly, or check your connection.</small><a href="${sources[2]}" target="_blank" rel="noopener noreferrer">Open video link ↗</a></div></div><div class="video-label"><span>SHOWCASE CLIP ${String(i).padStart(2,'0')}</span><a href="${sources[0]}" target="_blank" rel="noopener noreferrer">OPEN VIDEO ↗</a></div></article>`}).join('');
videoGrid.querySelectorAll('video').forEach(video=>{
 const fallback=video.parentElement.querySelector('.video-fallback');
 const sources=JSON.parse(video.dataset.sources||'[]');
 video.addEventListener('error',()=>{
   const next=Number(video.dataset.sourceIndex||0)+1;
   if(next<sources.length){video.dataset.sourceIndex=String(next);video.querySelector('source').src=sources[next];video.load();return;}
   fallback.hidden=false;video.style.display='none';
 });
 video.addEventListener('play',()=>{videoGrid.querySelectorAll('video').forEach(other=>{if(other!==video)other.pause()})});
});
const documentGrid=document.getElementById('documentGrid');let allDocuments=false;
function renderDocuments(){const count=allDocuments?16:8;documentGrid.innerHTML=Array.from({length:count},(_,i)=>`<button class="document-card" data-file="d${i+1}.jpeg" data-caption="Company document image ${i+1}"><img src="${imageURL(`d${i+1}.jpeg`)}" alt="Company document image ${i+1}" loading="lazy"><span>Document image ${String(i+1).padStart(2,'0')} <b>↗</b></span></button>`).join('');documentGrid.querySelectorAll('img').forEach(img=>applyImageFallback(img,'document'));documentGrid.querySelectorAll('.document-card').forEach(btn=>btn.addEventListener('click',()=>openLightbox(btn.dataset.file,btn.dataset.caption,Array.from({length:16},(_,i)=>({image:`d${i+1}.jpeg`,caption:`Company document image ${i+1}`})))));document.getElementById('showAllDocs').textContent=allDocuments?'Show fewer documents ↑':'View all documents ↗'}
document.getElementById;
renderDocuments();document.getElementById('showAllDocs').addEventListener('click',()=>{allDocuments=!allDocuments;renderDocuments()});
const faqData=[['What products and services do you provide?','The website catalogue presents fiberglass product visuals and broad categories. Contact the team to confirm the exact product, dimensions, availability and service details.'],['Where are you located?','Al-Mutairi Fiber Glass is listed at Al-Rabwah District, 30th Street, near 60th Street, Jeddah, Saudi Arabia. Use the Google Maps link on this page to open directions.'],['Can I request a custom product?','Yes, you can send your requirements, dimensions, quantity and reference photos to the team to discuss a custom quotation.'],['How can I ask about pricing?','Call +966 50 251 1885 or use the WhatsApp buttons. Mention the product, size and quantity so the team can guide you.'],['Does the contact form send an email?','The form prepares your inquiry and opens WhatsApp. This static website does not save form submissions or send email automatically.'],['What if a product image or video does not load?','Media is linked to the original website asset folder. If a source file is missing or has a different filename, that item needs its correct asset path.']];
document.getElementById('faqList').innerHTML=faqData.map((f,i)=>`<div class="faq-item"><button class="faq-question" aria-expanded="${i===0}"><span class="faq-num">0${i+1}</span><strong>${f[0]}</strong><span class="faq-plus">${i===0?'−':'+'}</span></button><div class="faq-answer" ${i===0?'':'hidden'}>${f[1]}</div></div>`).join('');
document.getElementById('faqList').addEventListener('click',e=>{const btn=e.target.closest('.faq-question');if(!btn)return;const answer=btn.nextElementSibling,open=!answer.hidden;document.querySelectorAll('.faq-answer').forEach(el=>el.hidden=true);document.querySelectorAll('.faq-question').forEach(el=>{el.setAttribute('aria-expanded','false');el.querySelector('.faq-plus').textContent='+'});if(!open){answer.hidden=false;btn.setAttribute('aria-expanded','true');btn.querySelector('.faq-plus').textContent='−'}});
const menuToggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.main-nav');menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.textContent=open?'×':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.textContent='☰';nav.querySelectorAll('a').forEach(link=>link.classList.toggle('active',link.hash===a.hash))}));
const backTop=document.getElementById('backTop');window.addEventListener('scroll',()=>backTop.classList.toggle('show',window.scrollY>500));backTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('inquiryForm').addEventListener('submit',e=>{e.preventDefault();const data=new FormData(e.currentTarget);const name=data.get('name').trim(),phone=data.get('phone').trim(),interest=data.get('interest'),message=data.get('message').trim();const text=`Hello Al-Mutairi Fiber Glass, I would like to make an inquiry.\nName: ${name}\nPhone: ${phone}\nInterested in: ${interest}\nProject details: ${message}`;document.getElementById('formStatus').textContent='Opening WhatsApp with your inquiry…';window.open(`https://wa.me/966502511885?text=${encodeURIComponent(text)}`,'_blank','noopener')});
const lightbox=document.getElementById('lightbox'),lightboxImage=document.getElementById('lightboxImage'),lightboxCaption=document.getElementById('lightboxCaption');let lightboxItems=[],lightboxIndex=0;
function openLightbox(file,caption,items=[]){lightboxItems=items.length?items:[{image:file,caption}];lightboxIndex=Math.max(0,lightboxItems.findIndex(i=>i.image===file));showLightboxItem();lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');document.body.classList.add('locked')}
function showLightboxItem(){const item=lightboxItems[lightboxIndex];lightboxImage.src=imageURL(item.image);lightboxImage.onerror=()=>{lightboxImage.onerror=null;lightboxImage.src=fallbackImages.product};lightboxCaption.textContent=item.caption||''}
function closeLightbox(){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');document.body.classList.remove('locked')}
lightbox.querySelector('.lightbox-close').addEventListener('click',closeLightbox);lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox()}
