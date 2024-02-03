import{r as h,j as t}from"./vendor.react-95be5020.js";import{c as I}from"./vendor.react-dom-f10f3df1.js";import{u as C,c as N,d as F,e as B,C as G,H as T}from"./vendor.@react-three-2c238abe.js";import{h as O,F as U,k as V,T as q,l as H,m as $,n as K,o as E,G as Y,C as Z,p as R,q as J}from"./vendor.three-499bb9aa.js";import{u as Q,a as X}from"./vendor.@react-spring-b81dba36.js";import{l as k}from"./vendor.lerp-65c4591a.js";import"./vendor.scheduler-765c72db.js";import"./vendor.@babel-98964cd2.js";import"./vendor.react-use-measure-e2e43e06.js";import"./vendor.debounce-195b5a9e.js";import"./vendor.its-fine-ee4311f4.js";import"./vendor.react-reconciler-1b06a587.js";import"./vendor.zustand-8955c5a6.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();const f={sections:9,pages:8,zoom:75,paragraphs:[{offset:1,factor:1.75,header:"Bio",image:"/climbing.jpg",aspect:.8,text:"Dynamic and driven developer, motivated to solve big problems and work in communication-centered teams. Avid climber and runner."},{offset:2,factor:2,header:"Pokédex Search",image:"/pokedex_search_ss.png",aspect:1.5,text:"The Pokédex Web Application presents users with an intuitive UI to search for Pokémon cards. The user can search Pokémon by name or type, then adding or removing a Pokémon from their personalized lineup with one click."},{offset:3,factor:2.25,header:"\\/aporWave Tic-Tac-Toe ",image:"/tic-tac-toe-ss.jpg",aspect:1.5,text:"Come take a trip thru liminal hyperspace and enjoy a game of tic-tac-toe. Context provider tracks the turn order, calculates the win conditions, and processes the display messages."},{offset:4,factor:2,header:"Pierre's Tasty Treats",image:"/Habanero-Potato-Empanada.jpg",aspect:1.5,text:"Pierre's Tasty Treats is a web app that allows users to see what new treats and flavor combos are in the works at Pierre's Bakery. Admins can easily add, edit, and delete new treats and flavors."},{offset:5,factor:1.75,header:"Tech Stack",image:"/tech-stack.jpg",aspect:1.5,text:"{Tech stack icons}"},{offset:7,factor:1.05,header:"Contact",image:"/headshot.jpeg",aspect:1.5,text:"{LinkedIn. GitHub. Email.}"}],stripes:[{offset:0,color:"#123",height:13},{offset:6.3,color:"#123",height:20}],diamonds:[{x:0,offset:.04,pos:new O,scale:12,factor:6}],top:h.createRef()},{Vector3:ee}=q;function P({children:i,size:e=1,left:r,right:s,top:o,bottom:a,color:c="white",opacity:n=1,height:p=.01,layers:l=0,font:m="/MOONGET_Heavy.blob",...g}){const d=C(U,m),j=new V(i,{font:d,size:1,height:p,curveSegments:32}),w=h.useCallback(v=>{const b=new ee;v.geometry.computeBoundingBox(),v.geometry.boundingBox.getSize(b),v.position.x=r?0:s?-b.x:-b.x/2,v.position.y=o?0:a?-b.y:-b.y/2},[r,s,o,a]),u=h.useRef();let x=f.top.current;return N(()=>{u.current.shift=k(u.current.shift,(f.top.current-x)/100,.1),x=f.top.current}),t.jsx("group",{...g,scale:[e,e,.1],children:t.jsx("mesh",{geometry:j,onUpdate:w,frustumCulled:!1,children:t.jsx("customMaterial",{ref:u,color:c,transparent:!0,opacity:n})})})}const te=({text:i,size:e=1,lineHeight:r=1,position:s=[0,0,0],...o})=>i.split(`
`).map((a,c)=>t.jsx(P,{size:e,...o,position:[s[0],s[1]-c*r,s[2]],children:a},c));class oe extends H{constructor(){super({vertexShader:`varying vec3 worldNormal;
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

      }`,side:$})}}class re extends H{constructor(e){super({vertexShader:`varying vec3 worldNormal;
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

      }`,uniforms:{envMap:{value:e.envMap},backfaceMap:{value:e.backfaceMap},resolution:{value:e.resolution},refraction:{value:1}}})}}const _=h.createContext(0);function y({children:i,offset:e,factor:r,blockWidth:s,blockHeight:o,blockDepth:a,...c}){const{offset:n,sectionHeight:p}=D(),l=h.useRef();return e=e!==void 0?e:n,N(()=>{const m=l.current.position.y,g=f.top.current;l.current.position.y=k(m,g/f.zoom*r,.1)}),t.jsx(_.Provider,{value:e,children:t.jsx("group",{...c,position:[0,-p*e*r,0],children:t.jsx("group",{ref:l,children:i})})})}function D(){const{sections:i,pages:e,zoom:r}=f,{size:s,viewport:o}=F(),a=h.useContext(_),c=o.width*r,n=o.height*r,p=c/r,l=n/r,m=s.width<700,g=p*(m?.2:.1),d=p*(m?.8:.6),j=l*((e-1)/(i-1)),w=(a+1)/i;return{viewport:o,offset:a,viewportWidth:c,viewportHeight:n,canvasWidth:p,canvasHeight:l,mobile:m,margin:g,contentMaxWidth:d,sectionHeight:j,offsetFactor:w}}const M=new K;function se(){const{nodes:i}=C(Y,"/diamond.glb");h.useLayoutEffect(()=>{i.pCone1_lambert1_0.geometry.center()},[]);const{size:e,gl:r,scene:s,camera:o,clock:a}=F(),{contentMaxWidth:c,sectionHeight:n,mobile:p}=D(),l=h.useRef(),m=r.getPixelRatio(),[g,d,j,w]=h.useMemo(()=>{const u=new E(e.width*m,e.height*m),x=new E(e.width*m,e.height*m),v=new oe,b=new re({envMap:u.texture,backfaceMap:x.texture,resolution:[e.width*m,e.height*m]});return[u,x,v,b]},[e,m]);return N(()=>{f.diamonds.forEach((u,x)=>{const v=a.getElapsedTime()/2,{x:b,offset:A,scale:L,factor:W}=u,S=c/35*L;u.pos.set(p?0:b,k(u.pos.y,-n*A*W+f.top.current/f.zoom*W,.1),-35),l.current.position.z=400,M.position.copy(u.pos),M.rotation.set(0,v*.6,-.6),M.scale.set(S,S+11,S),M.updateMatrix(),l.current.setMatrixAt(x,M.matrix),l.current.instanceMatrix.needsUpdate=!0}),r.autoClear=!1,o.layers.set(0),r.setRenderTarget(g),r.clearColor(),r.render(s,o),r.clearDepth(),o.layers.set(1),l.current.material=j,r.setRenderTarget(d),r.clearDepth(),r.render(s,o),o.layers.set(0),r.setRenderTarget(null),r.render(s,o),r.clearDepth(),o.layers.set(1),l.current.material=w,r.render(s,o)},1),t.jsx("instancedMesh",{ref:l,layers:1,args:[i.pCone1_lambert1_0.geometry,null,f.diamonds.length],position:[0,0,50]})}class ae extends H{constructor(){super({vertexShader:`uniform float scale;
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
      }`,uniforms:{tex:{value:null},hasTexture:{value:0},scale:{value:0},shift:{value:0},opacity:{value:1},color:{value:new Z("white")}}})}set scale(e){this.uniforms.scale.value=e}get scale(){return this.uniforms.scale.value}set shift(e){this.uniforms.shift.value=e}get shift(){return this.uniforms.shift.value}set map(e){this.uniforms.hasTexture.value=!!e,this.uniforms.tex.value=e}get map(){return this.uniforms.tex.value}get color(){return this.uniforms.color.value}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}}B({CustomMaterial:ae});const z=h.forwardRef(({color:i="white",shift:e=1,opacity:r=1,args:s,map:o,...a},c)=>{const{viewportHeight:n,offsetFactor:p}=D(),l=h.useRef();let m=f.top.current;return N(()=>{const{pages:g,top:d}=f;l.current.scale=k(l.current.scale,p-d.current/((g-1)*n),.1),l.current.shift=k(l.current.shift,(d.current-m)/e*1.5,.1),m=d.current}),t.jsxs("mesh",{ref:c,...a,children:[t.jsx("planeGeometry",{args:s}),t.jsx("customMaterial",{ref:l,color:i,map:o,transparent:!0,opacity:r})]})});function ie(){const i=h.useRef();return N(()=>i.current.material.opacity=k(i.current.material.opacity,0,.025)),t.jsx(z,{ref:i,color:"#0e0e0f",position:[0,0,200],scale:[100,100,1]})}function ne(){const i=["#21242d","#8bd8d2","#0d4663","#ffbcb7","#2d4a3e","#ea5158"],{viewport:e}=F(),[r,s]=h.useState(0);h.useEffect(()=>void setInterval(()=>s(a=>(a+1)%i.length),2500),[]);const{color:o}=Q({color:i[r]});return t.jsx(t.Fragment,{children:t.jsxs("mesh",{scale:[e.width,e.height,1],children:[t.jsx("planeGeometry",{}),t.jsx(X.meshPhongMaterial,{color:o,depthTest:!1})]})})}function ce({image:i,index:e,offset:r,factor:s,header:o,aspect:a,text:c}){const{contentMaxWidth:n,canvasWidth:p,canvasHeight:l,margin:m,mobile:g}=D(),d=a<1&&!g?.65:1,j=(p-n*d-m)/2,w=n*f.zoom*d,u=!(e%2),x=e%2?"#d40733":"#2fe85d",v=1;return t.jsx(y,{factor:s,offset:r,blockWidth:p,blockHeight:l,blockDepth:v,children:t.jsxs("group",{position:[u?-j:j,0,0],children:[t.jsx(z,{map:i,args:[1,1,32,32],shift:200,size:d,aspect:a,scale:[n*d,n*d/a,1],frustumCulled:!1}),t.jsx(T,{style:{width:w/(g?1:2),textAlign:u?"left":"right"},position:[u||g?-n*d/2:0,-n*d/2/a-.4,1],children:t.jsx("div",{tabIndex:e,children:c})}),t.jsx(P,{left:u,right:!u,size:n*.04,color:x,top:!0,position:[(u?-n:n)*d/2,n*d/a/2+.5,-1],children:o}),t.jsx(y,{factor:.2,blockWidth:p,blockHeight:l,blockDepth:v,children:t.jsx(P,{opacity:.5,size:n*.5,color:"#1A1E2A",position:[(u?n:-n)/2*d,n*d/a/1,-10],children:"0"+(e+1)})})]})})}function le(){const i=C(R,f.paragraphs.map(({image:c})=>c));C(R,"/scroll.png");const e=1;h.useMemo(()=>i.forEach(c=>c.minFilter=J),[i]);const{contentMaxWidth:r,canvasWidth:s,canvasHeight:o,mobile:a}=D();return t.jsxs(t.Fragment,{children:[t.jsxs(y,{factor:1,offset:0,blockWidth:s,blockHeight:o,blockDepth:e,children:[t.jsxs(y,{factor:1.2,blockWidth:s,blockHeight:o,blockDepth:e,children:[t.jsx(P,{left:!0,size:r*.16,position:[-r/2,3,-1],color:"#d40733",children:"AUSTIN"}),t.jsx(P,{left:!0,size:r*.16,position:[-r/2,-1,-1],color:"#d40733",children:"PAPRITZ"})]}),t.jsx(y,{factor:1,blockWidth:s,blockHeight:o,blockDepth:e,children:t.jsx(T,{className:"bottom-left",style:{color:"black"},position:[-s/2,-o/2,0],children:"Full Stack Software Engineer React || ASP.NET Core"})}),t.jsx(y,{factor:1,blockWidth:s,blockHeight:o,blockDepth:e,children:t.jsx(T,{position:[-s/10,-o/2,0],children:t.jsx("img",{className:"bottom-middle",src:"scroll.png"})})}),t.jsx(ne,{})]}),t.jsx(y,{factor:1.2,offset:5.7,blockWidth:s,blockHeight:o,blockDepth:e,children:t.jsx(te,{top:!0,left:!0,size:r*.15,lineHeight:r/5,position:[-r/3.5,0,-1],color:"#2fe85d",text:`hire
me
now`})}),f.paragraphs.map((c,n)=>t.jsx(ce,{index:n,...c,image:i[n]},n)),f.stripes.map(({offset:c,color:n,height:p},l)=>t.jsx(y,{factor:-1.5,offset:c,blockWidth:s,blockHeight:o,blockDepth:e,children:t.jsx(z,{args:[35,p,32,32],shift:-4,color:n,rotation:[0,0,Math.PI/8],position:[0,0,-10]})},l)),t.jsx(y,{factor:1.25,offset:8,blockWidth:s,blockHeight:o,blockDepth:e,children:t.jsx(T,{style:{color:"white"},className:"bottom-left",position:[-s/2,-o/2,0],children:"Copywrite 2023"})})]})}function de(){const i=h.useRef(),e=r=>f.top.current=r.target.scrollTop;return h.useEffect(()=>{e({target:i.current})},[]),t.jsxs(t.Fragment,{children:[t.jsxs(G,{gl:{antialias:!1},linear:!0,dpr:[1,2],orthographic:!0,camera:{zoom:f.zoom,position:[0,0,500]},onPointerMissed:()=>tileState.clicked=null,children:[t.jsx("ambientLight",{intensity:.5}),t.jsxs(h.Suspense,{fallback:t.jsx(T,{center:!0,className:"loading",children:"Loading..."}),children:[t.jsx(le,{}),t.jsx(se,{}),t.jsx(ie,{})]})]}),t.jsx("div",{className:"scrollArea",ref:i,onScroll:e,children:new Array(f.sections).fill().map((r,s)=>t.jsx("div",{id:"0"+s,style:{height:`${f.pages/f.sections*100}vh`}},s))})]})}I(document.getElementById("root")).render(t.jsx(t.Fragment,{children:t.jsx(de,{})}));
//# sourceMappingURL=index-7d95ac4a.js.map
