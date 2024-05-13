import{r as d,j as e}from"./vendor.react-95be5020.js";import{c as I}from"./vendor.react-dom-f10f3df1.js";import{u as C,c as N,d as F,e as B,C as G,H as D,f as O,h as U,i as V}from"./vendor.@react-three-2d15087f.js";import{h as _,F as q,m as K,n as z,o as Y,p as Z,q as R,G as $,C as J,k as Q,r as X}from"./vendor.three-019387e0.js";import{u as ee,a as te}from"./vendor.@react-spring-4fb35cc6.js";import{l as M}from"./vendor.lerp-87ea67f0.js";import"./vendor.scheduler-765c72db.js";import"./vendor.@babel-98964cd2.js";import"./vendor.react-use-measure-7425ec55.js";import"./vendor.debounce-0e2b3bcf.js";import"./vendor.its-fine-ee4311f4.js";import"./vendor.react-reconciler-e28977e2.js";import"./vendor.suspend-react-be9769fb.js";import"./vendor.zustand-8955c5a6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const u={sections:9,pages:8,zoom:75,paragraphs:[{offset:1,factor:1.5,header:"Bio",image:"/climbing.jpg",aspect:1.6,text:"Dynamic and driven developer, motivated to solve big problems and work in communication-centered teams. Avid climber and runner."},{offset:2,factor:1.5,header:"Agathos 3D Design",image:"/agathos-ss.jpg",aspect:1.8,text:"Designed with Figma, Photoshop, and Spline."},{offset:3,factor:1.5,header:"Pokédex Search",image:"/pokedex_search_ss.png",aspect:1.75,text:"The Pokédex Web App. Search and add Pokémon to your lineup."},{offset:4,factor:1.5,header:"\\/aporWave Tic-Tac-Toe ",image:"/tic-tac-toe-ss.jpg",aspect:2,text:"Come take a trip thru the liminal hyperspace and enjoy a game of tic-tac-toe."},{offset:5,factor:1.5,header:"Tech Stack",image:"/tech-stack.jpg",aspect:1.5,text:"{Tech stack icons}"},{offset:7,factor:1.05,header:"Contact Me",image:"/headshot2.jpg",aspect:.7,text:"{LinkedIn, GitHub, Email}"}],stripes:[{offset:0,color:"#123",height:13},{offset:6.3,color:"#123",height:20}],diamonds:[{x:0,offset:.04,pos:new _,scale:12,factor:6}],top:d.createRef()};function P({children:a,size:t=1,left:r,right:i,top:o,bottom:s,color:n="white",opacity:c=1,height:p=.01,layers:l=0,font:f="/MOONGET_Heavy.blob",...g}){const m=C(q,f),j=new K(a,{font:m,size:1,height:p,curveSegments:32}),w=d.useCallback(x=>{const b=new _;x.geometry.computeBoundingBox(),x.geometry.boundingBox.getSize(b),x.position.x=r?0:i?-b.x:-b.x/2,x.position.y=o?0:s?-b.y:-b.y/2},[r,i,o,s]),h=d.useRef();let v=u.top.current;return N(()=>{h.current.shift=M(h.current.shift,(u.top.current-v)/100,.1),v=u.top.current}),e.jsx("group",{...g,scale:[t,t,.1],children:e.jsx("mesh",{geometry:j,onUpdate:w,frustumCulled:!1,children:e.jsx("customMaterial",{ref:h,color:n,transparent:!0,opacity:c})})})}const oe=({text:a,size:t=1,lineHeight:r=1,position:i=[0,0,0],...o})=>a.split(`
`).map((s,n)=>e.jsx(P,{size:t,...o,position:[i[0],i[1]-n*r,i[2]],children:s},n));class re extends z{constructor(){super({vertexShader:`varying vec3 worldNormal;
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

      }`,uniforms:{envMap:{value:t.envMap},backfaceMap:{value:t.backfaceMap},resolution:{value:t.resolution},refraction:{value:1}}})}}const A=d.createContext(0);function y({children:a,offset:t,factor:r,blockWidth:i,blockHeight:o,blockDepth:s,...n}){const{offset:c,sectionHeight:p}=T(),l=d.useRef();return t=t!==void 0?t:c,N(()=>{const f=l.current.position.y,g=u.top.current;l.current.position.y=M(f,g/u.zoom*r,.1)}),e.jsx(A.Provider,{value:t,children:e.jsx("group",{...n,position:[0,-p*t*r,0],children:e.jsx("group",{ref:l,children:a})})})}function T(){const{sections:a,pages:t,zoom:r}=u,{size:i,viewport:o}=F(),s=d.useContext(A),n=o.width*r,c=o.height*r,p=n/r,l=c/r,f=i.width<700,g=p*(f?.2:.1),m=p*(f?.8:.6),j=l*((t-1)/(a-1)),w=(s+1)/a;return{viewport:o,offset:s,viewportWidth:n,viewportHeight:c,canvasWidth:p,canvasHeight:l,mobile:f,margin:g,contentMaxWidth:m,sectionHeight:j,offsetFactor:w}}const k=new Z;function ae(){const{nodes:a}=C($,"/diamond.glb");d.useLayoutEffect(()=>{a.pCone1_lambert1_0.geometry.center()},[]);const{size:t,gl:r,scene:i,camera:o,clock:s}=F(),{contentMaxWidth:n,sectionHeight:c,mobile:p}=T(),l=d.useRef(),f=r.getPixelRatio(),[g,m,j,w]=d.useMemo(()=>{const h=new R(t.width*f,t.height*f),v=new R(t.width*f,t.height*f),x=new re,b=new se({envMap:h.texture,backfaceMap:v.texture,resolution:[t.width*f,t.height*f]});return[h,v,x,b]},[t,f]);return N(()=>{u.diamonds.forEach((h,v)=>{const x=s.getElapsedTime()/2,{x:b,offset:E,scale:L,factor:W}=h,S=n/35*L;h.pos.set(p?0:b,M(h.pos.y,-c*E*W+u.top.current/u.zoom*W,.1),-35),l.current.position.z=400,k.position.copy(h.pos),k.rotation.set(0,x*.6,-.6),k.scale.set(S,S+11,S),k.updateMatrix(),l.current.setMatrixAt(v,k.matrix),l.current.instanceMatrix.needsUpdate=!0}),r.autoClear=!1,o.layers.set(0),r.setRenderTarget(g),r.clearColor(),r.render(i,o),r.clearDepth(),o.layers.set(1),l.current.material=j,r.setRenderTarget(m),r.clearDepth(),r.render(i,o),o.layers.set(0),r.setRenderTarget(null),r.render(i,o),r.clearDepth(),o.layers.set(1),l.current.material=w,r.render(i,o)},1),e.jsx("instancedMesh",{ref:l,layers:1,args:[a.pCone1_lambert1_0.geometry,null,u.diamonds.length],position:[0,0,50]})}class ie extends z{constructor(){super({vertexShader:`uniform float scale;
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
      }`,uniforms:{tex:{value:null},hasTexture:{value:0},scale:{value:0},shift:{value:0},opacity:{value:1},color:{value:new J("white")}}})}set scale(t){this.uniforms.scale.value=t}get scale(){return this.uniforms.scale.value}set shift(t){this.uniforms.shift.value=t}get shift(){return this.uniforms.shift.value}set map(t){this.uniforms.hasTexture.value=!!t,this.uniforms.tex.value=t}get map(){return this.uniforms.tex.value}get color(){return this.uniforms.color.value}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}}B({CustomMaterial:ie});const H=d.forwardRef(({color:a="white",shift:t=1,opacity:r=1,args:i,map:o,...s},n)=>{const{viewportHeight:c,offsetFactor:p}=T(),l=d.useRef();let f=u.top.current;return N(()=>{const{pages:g,top:m}=u;l.current.scale=M(l.current.scale,p-m.current/((g-1)*c),.1),l.current.shift=M(l.current.shift,(m.current-f)/t*1.5,.1),f=m.current}),e.jsxs("mesh",{ref:n,...s,children:[e.jsx("planeGeometry",{args:i}),e.jsx("customMaterial",{ref:l,color:a,map:o,transparent:!0,opacity:r})]})});function ne(){const a=d.useRef();return N(()=>a.current.material.opacity=M(a.current.material.opacity,0,.025)),e.jsx(H,{ref:a,color:"#0e0e0f",position:[0,0,200],scale:[100,100,1]})}function ce(){const a=["#21242d","#8bd8d2","#0d4663","#ffbcb7","#2d4a3e","#ea5158"],{viewport:t}=F(),[r,i]=d.useState(0);d.useEffect(()=>void setInterval(()=>i(s=>(s+1)%a.length),2500),[]);const{color:o}=ee({color:a[r]});return e.jsx(e.Fragment,{children:e.jsxs("mesh",{scale:[t.width,t.height,1],children:[e.jsx("planeGeometry",{}),e.jsx(te.meshPhongMaterial,{color:o,depthTest:!1})]})})}function le({image:a,index:t,offset:r,factor:i,header:o,aspect:s,text:n}){const{contentMaxWidth:c,canvasWidth:p,canvasHeight:l,margin:f,mobile:g}=T(),m=s<1&&!g?.65:1,j=(p-c*m-f)/2,w=c*u.zoom*m,h=!(t%2),v=t%2?"#d40733":"#2fe85d",x=1;return e.jsx(y,{factor:i,offset:r,blockWidth:p,blockHeight:l,blockDepth:x,children:e.jsxs("group",{position:[h?-j:j,0,0],children:[t!=1?e.jsx(H,{map:a,args:[1,1,32,32],shift:200,size:m,aspect:s,scale:[c*m,c*m/s,1],frustumCulled:!1}):e.jsx(ue,{}),e.jsx(D,{style:{width:w/(g?1:2),textAlign:h?"left":"right"},position:[h||g?-c*m/2:0,-c*m/2/s-.4,1],children:e.jsx("div",{tabIndex:t,children:n})}),e.jsx(P,{left:h,right:!h,size:c*.04,color:v,top:!0,position:[(h?-c:c)*m/2,c*m/s/2+.5,-1],children:o})]})})}function ue(){return O(820,505),e.jsxs("mesh",{scale:11,position:[-8,0,0],children:[e.jsx("planeGeometry",{}),e.jsx(d.Suspense,{fallback:e.jsx(me,{url:"agathos-ss.jpg"}),children:e.jsx(fe,{url:"agathos-demo.mp4"})})]})}function fe({url:a}){const t=U(a);return e.jsx("meshBasicMaterial",{map:t,toneMapped:!1})}function me({url:a}){const t=V(a);return e.jsx("meshBasicMaterial",{map:t,toneMapped:!1})}function de(){const a=C(Q,u.paragraphs.map(({image:s})=>s)),t=1;d.useMemo(()=>a.forEach(s=>s.minFilter=X),[a]);const{contentMaxWidth:r,canvasWidth:i,canvasHeight:o}=T();return e.jsxs(e.Fragment,{children:[e.jsxs(y,{factor:1,offset:0,blockWidth:i,blockHeight:o,blockDepth:t,children:[e.jsxs(y,{factor:1.2,blockWidth:i,blockHeight:o,blockDepth:t,children:[e.jsx(P,{left:!0,size:r*.16,position:[-r/2,3,-1],color:"#d40733",children:"AUSTIN"}),e.jsx(P,{left:!0,size:r*.16,position:[-r/2,-1,-1],color:"#d40733",children:"PAPRITZ"})]}),e.jsx(y,{factor:1,blockWidth:i,blockHeight:o,blockDepth:t,children:e.jsx(D,{className:"bottom-left",style:{color:"black"},position:[-i/2,-o/2,0],children:"Full Stack Software Engineer React || ASP.NET Core"})}),e.jsx(y,{factor:1,blockWidth:i,blockHeight:o,blockDepth:t,children:e.jsx(D,{position:[-i/10,-o/2,0],children:e.jsx("img",{className:"bottom-middle",src:"scroll.png"})})}),e.jsx(ce,{})]}),e.jsx(y,{factor:1.2,offset:5.7,blockWidth:i,blockHeight:o,blockDepth:t,children:e.jsx(oe,{top:!0,left:!0,size:r*.15,lineHeight:r/5,position:[-r/3.5,0,-1],color:"#2fe85d",text:`hire
me
now`})}),u.paragraphs.map((s,n)=>e.jsx(le,{index:n,...s,image:a[n]},n)),u.stripes.map(({offset:s,color:n,height:c},p)=>e.jsx(y,{factor:-1.5,offset:s,blockWidth:i,blockHeight:o,blockDepth:t,children:e.jsx(H,{args:[35,c,32,32],shift:-4,color:n,rotation:[0,0,Math.PI/8],position:[0,0,-10]})},p)),e.jsx(y,{factor:1.25,offset:8,blockWidth:i,blockHeight:o,blockDepth:t,children:e.jsx(D,{style:{color:"white"},className:"bottom-left",position:[-i/2,-o/2,0],children:"Copywrite 2024"})})]})}function he(){const a=d.useRef(),t=r=>u.top.current=r.target.scrollTop;return d.useEffect(()=>{t({target:a.current})},[]),e.jsxs(e.Fragment,{children:[e.jsxs(G,{gl:{antialias:!1},linear:!0,dpr:[1,2],orthographic:!0,camera:{zoom:u.zoom,position:[0,0,500]},onPointerMissed:()=>tileState.clicked=null,children:[e.jsx("ambientLight",{intensity:.5}),e.jsxs(d.Suspense,{fallback:e.jsx(D,{center:!0,className:"loading",children:"Loading..."}),children:[e.jsx(de,{}),e.jsx(ae,{}),e.jsx(ne,{})]})]}),e.jsx("div",{className:"scrollArea",ref:a,onScroll:t,children:new Array(u.sections).fill().map((r,i)=>e.jsx(e.Fragment,{children:e.jsx("div",{id:"0"+i,style:{height:`${u.pages/u.sections*100}vh`}},i)}))})]})}I(document.getElementById("root")).render(e.jsx(e.Fragment,{children:e.jsx(he,{})}));
//# sourceMappingURL=index-66483453.js.map
