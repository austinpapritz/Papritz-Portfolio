import{r as h,j as e}from"./vendor.react-95be5020.js";import{c as I}from"./vendor.react-dom-f10f3df1.js";import{u as C,c as T,d as F,e as B,C as G,H as D,f as O,h as U,i as V}from"./vendor.@react-three-2d15087f.js";import{h as R,F as q,m as K,n as z,o as Y,p as Z,q as A,G as $,C as J,k as Q,r as X}from"./vendor.three-019387e0.js";import{u as ee,a as te}from"./vendor.@react-spring-4fb35cc6.js";import{l as k}from"./vendor.lerp-87ea67f0.js";import"./vendor.scheduler-765c72db.js";import"./vendor.@babel-98964cd2.js";import"./vendor.react-use-measure-7425ec55.js";import"./vendor.debounce-0e2b3bcf.js";import"./vendor.its-fine-ee4311f4.js";import"./vendor.react-reconciler-e28977e2.js";import"./vendor.suspend-react-be9769fb.js";import"./vendor.zustand-8955c5a6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const f={sections:9,pages:8,zoom:75,paragraphs:[{offset:1,factor:1.5,header:"Bio",image:"/climbing.jpg",aspect:1.2,text:"Dynamic and driven developer, motivated to solve big problems and work in communication-centered teams. Avid climber and runner."},{offset:2,factor:1.5,header:"Pokédex Search",image:"/pokedex_search_ss.png",aspect:1.75,text:"The Pokédex Web App. Search and add Pokémon to your lineup."},{offset:3,factor:1.5,header:"\\/aporWave Tic-Tac-Toe ",image:"/tic-tac-toe-ss.jpg",aspect:2,text:"Come take a trip thru the liminal hyperspace and enjoy a game of tic-tac-toe."},{offset:4,factor:1.5,header:"Agathos Design",image:"/agathos-ss.jpg",aspect:1.8,text:"Designed with Figma, Photoshop, and Spline."},{offset:5,factor:1.5,header:"Tech Stack",image:"/tech-stack.jpg",aspect:1.5,text:"{Tech stack icons}"},{offset:7,factor:1.05,header:"Contact Me",image:"/headshot2.jpg",aspect:.7,text:"{LinkedIn, GitHub, Email}"}],stripes:[{offset:0,color:"#123",height:13},{offset:6.3,color:"#123",height:20}],diamonds:[{x:0,offset:.04,pos:new R,scale:12,factor:6}],top:h.createRef()};function N({children:a,size:t=1,left:r,right:i,top:o,bottom:s,color:c="white",opacity:n=1,height:p=.01,layers:l=0,font:m="/MOONGET_Heavy.blob",...g}){const u=C(q,m),y=new K(a,{font:u,size:1,height:p,curveSegments:32}),w=h.useCallback(x=>{const b=new R;x.geometry.computeBoundingBox(),x.geometry.boundingBox.getSize(b),x.position.x=r?0:i?-b.x:-b.x/2,x.position.y=o?0:s?-b.y:-b.y/2},[r,i,o,s]),d=h.useRef();let v=f.top.current;return T(()=>{d.current.shift=k(d.current.shift,(f.top.current-v)/100,.1),v=f.top.current}),e.jsx("group",{...g,scale:[t,t,.1],children:e.jsx("mesh",{geometry:y,onUpdate:w,frustumCulled:!1,children:e.jsx("customMaterial",{ref:d,color:c,transparent:!0,opacity:n})})})}const oe=({text:a,size:t=1,lineHeight:r=1,position:i=[0,0,0],...o})=>a.split(`
`).map((s,c)=>e.jsx(N,{size:t,...o,position:[i[0],i[1]-c*r,i[2]],children:s},c));class re extends z{constructor(){super({vertexShader:`varying vec3 worldNormal;
      void main() {
        vec4 transformedNormal = vec4(normal, 0.);
        vec4 transformedPosition = vec4(position, 1.0);
        #ifdef USE_INSTANCING
          transformedNormal = instanceMatrix * transformedNormal;
          transformedPosition = instanceMatrix * transformedPosition;
        #endif
        worldNormal = normalize(modelViewMatrix * transformedNormal).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * transformedPosition;
      }`,fragmentShader:`varying vec3 worldNormal;
      void main() {
        gl_FragColor = vec4(worldNormal, 1.0);

      }`,side:Y})}}class se extends z{constructor(t){super({vertexShader:`varying vec3 worldNormal;
      varying vec3 viewDirection;
      void main() {
        vec4 transformedNormal = vec4(normal, 0.);
        vec4 transformedPosition = vec4(position, 1.0);
        #ifdef USE_INSTANCING
          transformedNormal = instanceMatrix * transformedNormal;
          transformedPosition = instanceMatrix * transformedPosition;
        #endif
        worldNormal = normalize( modelViewMatrix * transformedNormal).xyz;
        viewDirection = normalize((modelMatrix * vec4( position, 1.0)).xyz - cameraPosition);;
        gl_Position = projectionMatrix * modelViewMatrix * transformedPosition;
      }`,fragmentShader:`uniform sampler2D envMap;
      uniform sampler2D backfaceMap;
      uniform float refraction;
      uniform vec2 resolution;
      varying vec3 worldNormal;
      varying vec3 viewDirection;
      float fresnelFunc(vec3 viewDirection, vec3 worldNormal) {
        return pow(1.05 + dot(viewDirection, worldNormal), 100.0);
      }
      void main() {
        vec2 uv = gl_FragCoord.xy / resolution;
        vec3 normal = worldNormal * (1.0 - 0.7) - texture2D(backfaceMap, uv).rgb * 0.7;
        vec4 color = texture2D(envMap, uv += refract(viewDirection, normal, 1.0/refraction).xy);
        gl_FragColor = vec4(mix(color.rgb, vec3(0.4), fresnelFunc(viewDirection, normal)), 1.0);

      }`,uniforms:{envMap:{value:t.envMap},backfaceMap:{value:t.backfaceMap},resolution:{value:t.resolution},refraction:{value:1}}})}}const _=h.createContext(0);function j({children:a,offset:t,factor:r,blockWidth:i,blockHeight:o,blockDepth:s,...c}){const{offset:n,sectionHeight:p}=P(),l=h.useRef();return t=t!==void 0?t:n,T(()=>{const m=l.current.position.y,g=f.top.current;l.current.position.y=k(m,g/f.zoom*r,.1)}),e.jsx(_.Provider,{value:t,children:e.jsx("group",{...c,position:[0,-p*t*r,0],children:e.jsx("group",{ref:l,children:a})})})}function P(){const{sections:a,pages:t,zoom:r}=f,{size:i,viewport:o}=F(),s=h.useContext(_),c=o.width*r,n=o.height*r,p=c/r,l=n/r,m=i.width<700,g=p*(m?.2:.1),u=p*(m?.8:.6),y=l*((t-1)/(a-1)),w=(s+1)/a;return{viewport:o,offset:s,viewportWidth:c,viewportHeight:n,canvasWidth:p,canvasHeight:l,mobile:m,margin:g,contentMaxWidth:u,sectionHeight:y,offsetFactor:w}}const M=new Z;function ae(){const{nodes:a}=C($,"/diamond.glb");h.useLayoutEffect(()=>{a.pCone1_lambert1_0.geometry.center()},[]);const{size:t,gl:r,scene:i,camera:o,clock:s}=F(),{contentMaxWidth:c,sectionHeight:n,mobile:p}=P(),l=h.useRef(),m=r.getPixelRatio(),[g,u,y,w]=h.useMemo(()=>{const d=new A(t.width*m,t.height*m),v=new A(t.width*m,t.height*m),x=new re,b=new se({envMap:d.texture,backfaceMap:v.texture,resolution:[t.width*m,t.height*m]});return[d,v,x,b]},[t,m]);return T(()=>{f.diamonds.forEach((d,v)=>{const x=s.getElapsedTime()/2,{x:b,offset:E,scale:L,factor:W}=d,S=c/35*L;d.pos.set(p?0:b,k(d.pos.y,-n*E*W+f.top.current/f.zoom*W,.1),-35),l.current.position.z=400,M.position.copy(d.pos),M.rotation.set(0,x*.6,-.6),M.scale.set(S,S+11,S),M.updateMatrix(),l.current.setMatrixAt(v,M.matrix),l.current.instanceMatrix.needsUpdate=!0}),r.autoClear=!1,o.layers.set(0),r.setRenderTarget(g),r.clearColor(),r.render(i,o),r.clearDepth(),o.layers.set(1),l.current.material=y,r.setRenderTarget(u),r.clearDepth(),r.render(i,o),o.layers.set(0),r.setRenderTarget(null),r.render(i,o),r.clearDepth(),o.layers.set(1),l.current.material=w,r.render(i,o)},1),e.jsx("instancedMesh",{ref:l,layers:1,args:[a.pCone1_lambert1_0.geometry,null,f.diamonds.length],position:[0,0,50]})}class ie extends z{constructor(){super({vertexShader:`uniform float scale;
      uniform float shift;
      varying vec2 vUv;
      void main() {
        vec3 pos = position;
        pos.y = pos.y + ((sin(uv.x * 3.1415926535897932384626433832795) * shift * 2.0) * 0.125);
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);
      }`,fragmentShader:`uniform sampler2D tex;
      uniform float hasTexture;
      uniform float shift;
      uniform float scale;
      uniform vec3 color;
      uniform float opacity;
      varying vec2 vUv;
      void main() {
        float angle = 1.55;
        vec2 p = (vUv - vec2(0.5, 0.5)) * (1.0 - scale) + vec2(0.5, 0.5);
        vec2 offset = shift / 4.0 * vec2(cos(angle), sin(angle));
        vec4 cr = texture2D(tex, p + offset);
        vec4 cga = texture2D(tex, p);
        vec4 cb = texture2D(tex, p - offset);
        if (hasTexture == 1.0) gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);
        else gl_FragColor = vec4(color, opacity);
      }`,uniforms:{tex:{value:null},hasTexture:{value:0},scale:{value:0},shift:{value:0},opacity:{value:1},color:{value:new J("white")}}})}set scale(t){this.uniforms.scale.value=t}get scale(){return this.uniforms.scale.value}set shift(t){this.uniforms.shift.value=t}get shift(){return this.uniforms.shift.value}set map(t){this.uniforms.hasTexture.value=!!t,this.uniforms.tex.value=t}get map(){return this.uniforms.tex.value}get color(){return this.uniforms.color.value}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}}B({CustomMaterial:ie});const H=h.forwardRef(({color:a="white",shift:t=1,opacity:r=1,args:i,map:o,...s},c)=>{const{viewportHeight:n,offsetFactor:p}=P(),l=h.useRef();let m=f.top.current;return T(()=>{const{pages:g,top:u}=f;l.current.scale=k(l.current.scale,p-u.current/((g-1)*n),.1),l.current.shift=k(l.current.shift,(u.current-m)/t*1.5,.1),m=u.current}),e.jsxs("mesh",{ref:c,...s,children:[e.jsx("planeGeometry",{args:i}),e.jsx("customMaterial",{ref:l,color:a,map:o,transparent:!0,opacity:r})]})});function ne(){const a=h.useRef();return T(()=>a.current.material.opacity=k(a.current.material.opacity,0,.025)),e.jsx(H,{ref:a,color:"#0e0e0f",position:[0,0,200],scale:[100,100,1]})}function ce(){const a=["#21242d","#8bd8d2","#0d4663","#ffbcb7","#2d4a3e","#ea5158"],{viewport:t}=F(),[r,i]=h.useState(0);h.useEffect(()=>void setInterval(()=>i(s=>(s+1)%a.length),2500),[]);const{color:o}=ee({color:a[r]});return e.jsx(e.Fragment,{children:e.jsxs("mesh",{scale:[t.width,t.height,1],children:[e.jsx("planeGeometry",{}),e.jsx(te.meshPhongMaterial,{color:o,depthTest:!1})]})})}function le({image:a,index:t,offset:r,factor:i,header:o,aspect:s,text:c}){const{contentMaxWidth:n,canvasWidth:p,canvasHeight:l,margin:m,mobile:g}=P(),u=s<1&&!g?.65:1,y=(p-n*u-m)/2,w=n*f.zoom*u,d=!(t%2),v=t%2?"#d40733":"#2fe85d",x=1;return e.jsx(j,{factor:i,offset:r,blockWidth:p,blockHeight:l,blockDepth:x,children:e.jsxs("group",{position:[d?-y:y,0,0],children:[t!=3?e.jsx(H,{map:a,args:[1,1,32,32],shift:200,size:u,aspect:s,scale:[n*u,n*u/s,1],frustumCulled:!1}):e.jsx(ue,{}),e.jsx(D,{style:{width:w/(g?1:2),textAlign:d?"left":"right"},position:[d||g?-n*u/2:0,-n*u/2/s-.4,1],children:e.jsx("div",{tabIndex:t,children:c})}),e.jsx(N,{left:d,right:!d,size:n*.04,color:v,top:!0,position:[(d?-n:n)*u/2,n*u/s/2+.5,-1],children:o}),e.jsx(j,{factor:.2,blockWidth:p,blockHeight:l,blockDepth:x,children:e.jsx(N,{opacity:.5,size:n*.5,color:"#1A1E2A",position:[(d?n:-n)/2*u,n*u/s/1,-10],children:"0"+(t+1)})})]})})}function ue(){return O(820,505),e.jsxs("mesh",{scale:7,children:[e.jsx("planeGeometry",{}),e.jsx(h.Suspense,{fallback:e.jsx(me,{url:"headshot2.jpg"}),children:e.jsx(fe,{url:"agathos4.mp4"})})]})}function fe({url:a}){const t=U(a);return e.jsx("meshBasicMaterial",{map:t,toneMapped:!1})}function me({url:a}){const t=V(a);return e.jsx("meshBasicMaterial",{map:t,toneMapped:!1})}function de(){const a=C(Q,f.paragraphs.map(({image:s})=>s)),t=1;h.useMemo(()=>a.forEach(s=>s.minFilter=X),[a]);const{contentMaxWidth:r,canvasWidth:i,canvasHeight:o}=P();return e.jsxs(e.Fragment,{children:[e.jsxs(j,{factor:1,offset:0,blockWidth:i,blockHeight:o,blockDepth:t,children:[e.jsxs(j,{factor:1.2,blockWidth:i,blockHeight:o,blockDepth:t,children:[e.jsx(N,{left:!0,size:r*.16,position:[-r/2,3,-1],color:"#d40733",children:"AUSTIN"}),e.jsx(N,{left:!0,size:r*.16,position:[-r/2,-1,-1],color:"#d40733",children:"PAPRITZ"})]}),e.jsx(j,{factor:1,blockWidth:i,blockHeight:o,blockDepth:t,children:e.jsx(D,{className:"bottom-left",style:{color:"black"},position:[-i/2,-o/2,0],children:"Full Stack Software Engineer React || ASP.NET Core"})}),e.jsx(j,{factor:1,blockWidth:i,blockHeight:o,blockDepth:t,children:e.jsx(D,{position:[-i/10,-o/2,0],children:e.jsx("img",{className:"bottom-middle",src:"scroll.png"})})}),e.jsx(ce,{})]}),e.jsx(j,{factor:1.2,offset:5.7,blockWidth:i,blockHeight:o,blockDepth:t,children:e.jsx(oe,{top:!0,left:!0,size:r*.15,lineHeight:r/5,position:[-r/3.5,0,-1],color:"#2fe85d",text:`hire
me
now`})}),f.paragraphs.map((s,c)=>e.jsx(le,{index:c,...s,image:a[c]},c)),f.stripes.map(({offset:s,color:c,height:n},p)=>e.jsx(j,{factor:-1.5,offset:s,blockWidth:i,blockHeight:o,blockDepth:t,children:e.jsx(H,{args:[35,n,32,32],shift:-4,color:c,rotation:[0,0,Math.PI/8],position:[0,0,-10]})},p)),e.jsx(j,{factor:1.25,offset:8,blockWidth:i,blockHeight:o,blockDepth:t,children:e.jsx(D,{style:{color:"white"},className:"bottom-left",position:[-i/2,-o/2,0],children:"Copywrite 2024"})})]})}function he(){const a=h.useRef(),t=r=>f.top.current=r.target.scrollTop;return h.useEffect(()=>{t({target:a.current})},[]),e.jsxs(e.Fragment,{children:[e.jsxs(G,{gl:{antialias:!1},linear:!0,dpr:[1,2],orthographic:!0,camera:{zoom:f.zoom,position:[0,0,500]},onPointerMissed:()=>tileState.clicked=null,children:[e.jsx("ambientLight",{intensity:.5}),e.jsxs(h.Suspense,{fallback:e.jsx(D,{center:!0,className:"loading",children:"Loading..."}),children:[e.jsx(de,{}),e.jsx(ae,{}),e.jsx(ne,{})]})]}),e.jsx("div",{className:"scrollArea",ref:a,onScroll:t,children:new Array(f.sections).fill().map((r,i)=>e.jsx(e.Fragment,{children:e.jsx("div",{id:"0"+i,style:{height:`${f.pages/f.sections*100}vh`}},i)}))})]})}I(document.getElementById("root")).render(e.jsx(e.Fragment,{children:e.jsx(he,{})}));
//# sourceMappingURL=index-27e8f3e7.js.map
