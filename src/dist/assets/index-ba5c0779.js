import{r as h,j as t}from"./vendor.react-95be5020.js";import{c as I}from"./vendor.react-dom-f10f3df1.js";import{u as S,c as P,d as F,e as G,C as O,H as D}from"./vendor.@react-three-2c238abe.js";import{h as R,F as U,k as B,l as z,m as V,n as q,o as _,G as K,C as Y,p as Z,q as $}from"./vendor.three-499bb9aa.js";import{u as J,a as Q}from"./vendor.@react-spring-b81dba36.js";import{l as k}from"./vendor.lerp-65c4591a.js";import"./vendor.scheduler-765c72db.js";import"./vendor.@babel-98964cd2.js";import"./vendor.react-use-measure-e2e43e06.js";import"./vendor.debounce-195b5a9e.js";import"./vendor.its-fine-ee4311f4.js";import"./vendor.react-reconciler-1b06a587.js";import"./vendor.zustand-8955c5a6.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const d={sections:9,pages:8,zoom:75,paragraphs:[{offset:1,factor:1.75,header:"Bio",image:"/climbing.jpg",aspect:.8,text:"Dynamic and driven developer, motivated to solve big problems and work in communication-centered teams. Avid climber and runner."},{offset:2,factor:2,header:"Pokédex Search",image:"/pokedex_search_ss.png",aspect:1.5,text:"The Pokédex Web Application presents users with an intuitive UI to search for Pokémon cards. The user can search Pokémon by name or type, then adding or removing a Pokémon from their personalized lineup with one click."},{offset:3,factor:2.25,header:"\\/aporWave Tic-Tac-Toe ",image:"/tic-tac-toe-ss.jpg",aspect:1.5,text:"Come take a trip thru liminal hyperspace and enjoy a game of tic-tac-toe. Context provider tracks the turn order, calculates the win conditions, and processes the display messages."},{offset:4,factor:2,header:"Agathos Design",image:"/agathos_design_ss.png",aspect:1.5,text:"Designed with Figma, Photoshop, and Spline."},{offset:5,factor:1.75,header:"Tech Stack",image:"/tech-stack.jpg",aspect:1.5,text:"{Tech stack icons}"},{offset:7,factor:1.05,header:"Contact Me",image:"/headshot2.jpg",aspect:.7,text:"{LinkedIn, GitHub, Email}"}],stripes:[{offset:0,color:"#123",height:13},{offset:6.3,color:"#123",height:20}],diamonds:[{x:0,offset:.04,pos:new R,scale:12,factor:6}],top:h.createRef()};function N({children:a,size:e=1,left:r,right:i,top:o,bottom:s,color:c="white",opacity:n=1,height:p=.01,layers:l=0,font:u="/MOONGET_Heavy.blob",...g}){const f=S(U,u),j=new B(a,{font:f,size:1,height:p,curveSegments:32}),w=h.useCallback(v=>{const b=new R;v.geometry.computeBoundingBox(),v.geometry.boundingBox.getSize(b),v.position.x=r?0:i?-b.x:-b.x/2,v.position.y=o?0:s?-b.y:-b.y/2},[r,i,o,s]),m=h.useRef();let x=d.top.current;return P(()=>{m.current.shift=k(m.current.shift,(d.top.current-x)/100,.1),x=d.top.current}),t.jsx("group",{...g,scale:[e,e,.1],children:t.jsx("mesh",{geometry:j,onUpdate:w,frustumCulled:!1,children:t.jsx("customMaterial",{ref:m,color:c,transparent:!0,opacity:n})})})}const X=({text:a,size:e=1,lineHeight:r=1,position:i=[0,0,0],...o})=>a.split(`
`).map((s,c)=>t.jsx(N,{size:e,...o,position:[i[0],i[1]-c*r,i[2]],children:s},c));class ee extends z{constructor(){super({vertexShader:`varying vec3 worldNormal;
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

      }`,side:V})}}class te extends z{constructor(e){super({vertexShader:`varying vec3 worldNormal;
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

      }`,uniforms:{envMap:{value:e.envMap},backfaceMap:{value:e.backfaceMap},resolution:{value:e.resolution},refraction:{value:1}}})}}const A=h.createContext(0);function y({children:a,offset:e,factor:r,blockWidth:i,blockHeight:o,blockDepth:s,...c}){const{offset:n,sectionHeight:p}=T(),l=h.useRef();return e=e!==void 0?e:n,P(()=>{const u=l.current.position.y,g=d.top.current;l.current.position.y=k(u,g/d.zoom*r,.1)}),t.jsx(A.Provider,{value:e,children:t.jsx("group",{...c,position:[0,-p*e*r,0],children:t.jsx("group",{ref:l,children:a})})})}function T(){const{sections:a,pages:e,zoom:r}=d,{size:i,viewport:o}=F(),s=h.useContext(A),c=o.width*r,n=o.height*r,p=c/r,l=n/r,u=i.width<700,g=p*(u?.2:.1),f=p*(u?.8:.6),j=l*((e-1)/(a-1)),w=(s+1)/a;return{viewport:o,offset:s,viewportWidth:c,viewportHeight:n,canvasWidth:p,canvasHeight:l,mobile:u,margin:g,contentMaxWidth:f,sectionHeight:j,offsetFactor:w}}const M=new q;function oe(){const{nodes:a}=S(K,"/diamond.glb");h.useLayoutEffect(()=>{a.pCone1_lambert1_0.geometry.center()},[]);const{size:e,gl:r,scene:i,camera:o,clock:s}=F(),{contentMaxWidth:c,sectionHeight:n,mobile:p}=T(),l=h.useRef(),u=r.getPixelRatio(),[g,f,j,w]=h.useMemo(()=>{const m=new _(e.width*u,e.height*u),x=new _(e.width*u,e.height*u),v=new ee,b=new te({envMap:m.texture,backfaceMap:x.texture,resolution:[e.width*u,e.height*u]});return[m,x,v,b]},[e,u]);return P(()=>{d.diamonds.forEach((m,x)=>{const v=s.getElapsedTime()/2,{x:b,offset:E,scale:L,factor:W}=m,C=c/35*L;m.pos.set(p?0:b,k(m.pos.y,-n*E*W+d.top.current/d.zoom*W,.1),-35),l.current.position.z=400,M.position.copy(m.pos),M.rotation.set(0,v*.6,-.6),M.scale.set(C,C+11,C),M.updateMatrix(),l.current.setMatrixAt(x,M.matrix),l.current.instanceMatrix.needsUpdate=!0}),r.autoClear=!1,o.layers.set(0),r.setRenderTarget(g),r.clearColor(),r.render(i,o),r.clearDepth(),o.layers.set(1),l.current.material=j,r.setRenderTarget(f),r.clearDepth(),r.render(i,o),o.layers.set(0),r.setRenderTarget(null),r.render(i,o),r.clearDepth(),o.layers.set(1),l.current.material=w,r.render(i,o)},1),t.jsx("instancedMesh",{ref:l,layers:1,args:[a.pCone1_lambert1_0.geometry,null,d.diamonds.length],position:[0,0,50]})}class re extends z{constructor(){super({vertexShader:`uniform float scale;
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
      }`,uniforms:{tex:{value:null},hasTexture:{value:0},scale:{value:0},shift:{value:0},opacity:{value:1},color:{value:new Y("white")}}})}set scale(e){this.uniforms.scale.value=e}get scale(){return this.uniforms.scale.value}set shift(e){this.uniforms.shift.value=e}get shift(){return this.uniforms.shift.value}set map(e){this.uniforms.hasTexture.value=!!e,this.uniforms.tex.value=e}get map(){return this.uniforms.tex.value}get color(){return this.uniforms.color.value}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}}G({CustomMaterial:re});const H=h.forwardRef(({color:a="white",shift:e=1,opacity:r=1,args:i,map:o,...s},c)=>{const{viewportHeight:n,offsetFactor:p}=T(),l=h.useRef();let u=d.top.current;return P(()=>{const{pages:g,top:f}=d;l.current.scale=k(l.current.scale,p-f.current/((g-1)*n),.1),l.current.shift=k(l.current.shift,(f.current-u)/e*1.5,.1),u=f.current}),t.jsxs("mesh",{ref:c,...s,children:[t.jsx("planeGeometry",{args:i}),t.jsx("customMaterial",{ref:l,color:a,map:o,transparent:!0,opacity:r})]})});function se(){const a=h.useRef();return P(()=>a.current.material.opacity=k(a.current.material.opacity,0,.025)),t.jsx(H,{ref:a,color:"#0e0e0f",position:[0,0,200],scale:[100,100,1]})}function ie(){const a=["#21242d","#8bd8d2","#0d4663","#ffbcb7","#2d4a3e","#ea5158"],{viewport:e}=F(),[r,i]=h.useState(0);h.useEffect(()=>void setInterval(()=>i(s=>(s+1)%a.length),2500),[]);const{color:o}=J({color:a[r]});return t.jsx(t.Fragment,{children:t.jsxs("mesh",{scale:[e.width,e.height,1],children:[t.jsx("planeGeometry",{}),t.jsx(Q.meshPhongMaterial,{color:o,depthTest:!1})]})})}function ae({image:a,index:e,offset:r,factor:i,header:o,aspect:s,text:c}){const{contentMaxWidth:n,canvasWidth:p,canvasHeight:l,margin:u,mobile:g}=T(),f=s<1&&!g?.65:1,j=(p-n*f-u)/2,w=n*d.zoom*f,m=!(e%2),x=e%2?"#d40733":"#2fe85d",v=1;return t.jsx(y,{factor:i,offset:r,blockWidth:p,blockHeight:l,blockDepth:v,children:t.jsxs("group",{position:[m?-j:j,0,0],children:[t.jsx(H,{map:a,args:[1,1,32,32],shift:200,size:f,aspect:s,scale:[n*f,n*f/s,1],frustumCulled:!1}),t.jsx(D,{style:{width:w/(g?1:2),textAlign:m?"left":"right"},position:[m||g?-n*f/2:0,-n*f/2/s-.4,1],children:t.jsx("div",{tabIndex:e,children:c})}),t.jsx(N,{left:m,right:!m,size:n*.04,color:x,top:!0,position:[(m?-n:n)*f/2,n*f/s/2+.5,-1],children:o}),t.jsx(y,{factor:.2,blockWidth:p,blockHeight:l,blockDepth:v,children:t.jsx(N,{opacity:.5,size:n*.5,color:"#1A1E2A",position:[(m?n:-n)/2*f,n*f/s/1,-10],children:"0"+(e+1)})})]})})}function ne(){const a=S(Z,d.paragraphs.map(({image:s})=>s)),e=1;h.useMemo(()=>a.forEach(s=>s.minFilter=$),[a]);const{contentMaxWidth:r,canvasWidth:i,canvasHeight:o}=T();return t.jsxs(t.Fragment,{children:[t.jsxs(y,{factor:1,offset:0,blockWidth:i,blockHeight:o,blockDepth:e,children:[t.jsxs(y,{factor:1.2,blockWidth:i,blockHeight:o,blockDepth:e,children:[t.jsx(N,{left:!0,size:r*.16,position:[-r/2,3,-1],color:"#d40733",children:"AUSTIN"}),t.jsx(N,{left:!0,size:r*.16,position:[-r/2,-1,-1],color:"#d40733",children:"PAPRITZ"})]}),t.jsx(y,{factor:1,blockWidth:i,blockHeight:o,blockDepth:e,children:t.jsx(D,{className:"bottom-left",style:{color:"black"},position:[-i/2,-o/2,0],children:"Full Stack Software Engineer React || ASP.NET Core"})}),t.jsx(y,{factor:1,blockWidth:i,blockHeight:o,blockDepth:e,children:t.jsx(D,{position:[-i/10,-o/2,0],children:t.jsx("img",{className:"bottom-middle",src:"scroll.png"})})}),t.jsx(ie,{})]}),t.jsx(y,{factor:1.2,offset:5.7,blockWidth:i,blockHeight:o,blockDepth:e,children:t.jsx(X,{top:!0,left:!0,size:r*.15,lineHeight:r/5,position:[-r/3.5,0,-1],color:"#2fe85d",text:`hire
me
now`})}),d.paragraphs.map((s,c)=>t.jsx(ae,{index:c,...s,image:a[c]},c)),d.stripes.map(({offset:s,color:c,height:n},p)=>t.jsx(y,{factor:-1.5,offset:s,blockWidth:i,blockHeight:o,blockDepth:e,children:t.jsx(H,{args:[35,n,32,32],shift:-4,color:c,rotation:[0,0,Math.PI/8],position:[0,0,-10]})},p)),t.jsx(y,{factor:1.25,offset:8,blockWidth:i,blockHeight:o,blockDepth:e,children:t.jsx(D,{style:{color:"white"},className:"bottom-left",position:[-i/2,-o/2,0],children:"Copywrite 2024"})})]})}function ce(){const a=h.useRef(),e=r=>d.top.current=r.target.scrollTop;return h.useEffect(()=>{e({target:a.current})},[]),t.jsxs(t.Fragment,{children:[t.jsxs(O,{gl:{antialias:!1},linear:!0,dpr:[1,2],orthographic:!0,camera:{zoom:d.zoom,position:[0,0,500]},onPointerMissed:()=>tileState.clicked=null,children:[t.jsx("ambientLight",{intensity:.5}),t.jsxs(h.Suspense,{fallback:t.jsx(D,{center:!0,className:"loading",children:"Loading..."}),children:[t.jsx(ne,{}),t.jsx(oe,{}),t.jsx(se,{})]})]}),t.jsx("div",{className:"scrollArea",ref:a,onScroll:e,children:new Array(d.sections).fill().map((r,i)=>t.jsx("div",{id:"0"+i,style:{height:`${d.pages/d.sections*100}vh`}},i))})]})}I(document.getElementById("root")).render(t.jsx(t.Fragment,{children:t.jsx(ce,{})}));
//# sourceMappingURL=index-ba5c0779.js.map
