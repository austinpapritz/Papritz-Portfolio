(this.webpackJsonpmoksha=this.webpackJsonpmoksha||[]).push([[0],{48:function(e,t,o){},49:function(e,t,o){"use strict";o.r(t);var r=o(8),n=o(22),a=o.n(n),i=o(7),c=o(11),s=o(51),l=o(0),f=o(15),u=o.n(f),h=o(14),d=o(23),m={sections:9,pages:8,zoom:75,paragraphs:[{offset:1,factor:1.75,header:"District 4",image:"/photo-1515036551567-bf1198cccc35.jpeg",aspect:1.51,text:"Two thousand pharmacologists and bio-chemists were subsidized. Six years later it was being produced commercially."},{offset:2,factor:2,header:"Diamond Road",image:"/photo-1519608487953-e999c86e7455.jpeg",aspect:1.5,text:"The man who comes back through the Door in the Wall will never be quite the same as the man who went out. He will be wiser but less sure, happier but less self-satisfied, humbler in acknowledging his ignorance yet better equipped to understand the relationship of words to things, of systematic reasoning to the unfathomable mystery which it tries, forever vainly, to comprehend."},{offset:3,factor:2.25,header:"Catalina",image:"/ph1.jpg",aspect:1.5037,text:"The substance can take you to heaven but it can also take you to hell. Or else to both, together or alternately. Or else (if you're lucky, or if you've made yourself ready) beyond either of them. And then beyond the beyond, back to where you started from \u2014 back to here, back to New Rotham sted, back to business as usual. Only now, of course, business as usual is completely different."},{offset:4,factor:2,header:"Building 21",image:"/ph3.jpg",aspect:.665,text:"We\u2019ve found that the people whose EEG doesn\u2019t show any alpha-wave activity when they\u2019re relaxed aren\u2019t likely to respond significantly to the substance. That means that, for about fifteen percent of the population, we have to find other approaches to liberation."},{offset:5,factor:1.75,header:"Sector 8",image:"/photo-1533577116850-9cc66cad8a9b.jpeg",aspect:1.55,text:"By cultivating the state of mind that makes it possible for the dazzling ecstatic insights to become permanent and habitual illuminations. By getting to know oneself to the point where one won\u2019t be compelled by one\u2019s unconscious to do all the ugly, absurd, self-stultifying things that one so often finds oneself doing."},{offset:7,factor:1.05,header:"The Factory",image:"/photo-1548191265-cc70d3d45ba1.jpeg",aspect:1.77,text:"Education and enlightenment."}],stripes:[{offset:0,color:"#000",height:13},{offset:6.3,color:"#000",height:20}],diamonds:[{x:0,offset:.15,pos:new l.Vector3,scale:14,factor:4},{x:2,offset:1.1,pos:new l.Vector3,scale:1.8,factor:2.1},{x:-5,offset:2,pos:new l.Vector3,scale:1.8,factor:2.5},{x:0,offset:3.2,pos:new l.Vector3,scale:1.8,factor:1.75},{x:0,offset:4,pos:new l.Vector3,scale:1.8,factor:2.5},{x:2,offset:5.5,pos:new l.Vector3,scale:2.25,factor:.85},{x:-5,offset:7,pos:new l.Vector3,scale:1.8,factor:2},{x:0,offset:8,pos:new l.Vector3,scale:2.5,factor:6}],top:Object(i.createRef)()},p=o(9),v=["children","size","left","right","top","bottom","color","opacity","height","layers","font"],b=["text","size","lineHeight","position"];function j(e){var t=e.children,o=e.size,n=void 0===o?1:o,a=e.left,s=e.right,f=e.top,b=e.bottom,j=e.color,g=void 0===j?"white":j,x=e.opacity,O=void 0===x?1:x,y=e.height,w=void 0===y?.01:y,M=(e.layers,e.font),z=void 0===M?"/MOONGET_Heavy.blob":M,k=Object(h.a)(e,v),N=Object(c.d)(l.FontLoader,z),D=Object(d.a)((function(){return new Promise((function(e){return e(new l.TextBufferGeometry(t,{font:N,size:1,height:w,curveSegments:32}))}))}),[t]),C=Object(i.useCallback)((function(e){var t=new l.Vector3;e.geometry.computeBoundingBox(),e.geometry.boundingBox.getSize(t),e.position.x=a?0:s?-t.x:-t.x/2,e.position.y=f?0:b?-t.y:-t.y/2}),[a,s,f,b]),T=Object(i.useRef)(),S=m.top.current;return Object(c.c)((function(){T.current.shift=u()(T.current.shift,(m.top.current-S)/100,.1),S=m.top.current})),Object(p.jsx)("group",Object(r.a)(Object(r.a)({},k),{},{scale:[n,n,.1],children:Object(p.jsx)("mesh",{geometry:D,onUpdate:C,frustumCulled:!1,children:Object(p.jsx)("customMaterial",{ref:T,color:g,transparent:!0,opacity:O})})}))}var g=function(e){var t=e.text,o=e.size,n=void 0===o?1:o,a=e.lineHeight,i=void 0===a?1:a,c=e.position,s=void 0===c?[0,0,0]:c,l=Object(h.a)(e,b);return t.split("\n").map((function(e,t){return Object(p.jsx)(j,Object(r.a)(Object(r.a)({size:n},l),{},{position:[s[0],s[1]-t*i,s[2]],children:e}),t)}))},x=o(12),O=o(41),y=o(2),w=o(1),M=o(3),z=o(4),k=function(e){Object(M.a)(o,e);var t=Object(z.a)(o);function o(){return Object(w.a)(this,o),t.call(this,{vertexShader:"varying vec3 worldNormal;\n      void main() {\n        vec4 transformedNormal = vec4(normal, 0.);\n        vec4 transformedPosition = vec4(position, 1.0);\n        #ifdef USE_INSTANCING\n          transformedNormal = instanceMatrix * transformedNormal;\n          transformedPosition = instanceMatrix * transformedPosition;\n        #endif\n        worldNormal = normalize(modelViewMatrix * transformedNormal).xyz;\n        gl_Position = projectionMatrix * modelViewMatrix * transformedPosition;\n      }",fragmentShader:"varying vec3 worldNormal;\n      void main() {\n        gl_FragColor = vec4(worldNormal, 1.0);\n      }",side:l.BackSide})}return Object(y.a)(o)}(l.ShaderMaterial),N=function(e){Object(M.a)(o,e);var t=Object(z.a)(o);function o(e){return Object(w.a)(this,o),t.call(this,{vertexShader:"varying vec3 worldNormal;\n      varying vec3 viewDirection;\n      void main() {\n        vec4 transformedNormal = vec4(normal, 0.);\n        vec4 transformedPosition = vec4(position, 1.0);\n        #ifdef USE_INSTANCING\n          transformedNormal = instanceMatrix * transformedNormal;\n          transformedPosition = instanceMatrix * transformedPosition;\n        #endif\n        worldNormal = normalize( modelViewMatrix * transformedNormal).xyz;\n        viewDirection = normalize((modelMatrix * vec4( position, 1.0)).xyz - cameraPosition);;\n        gl_Position = projectionMatrix * modelViewMatrix * transformedPosition;\n      }",fragmentShader:"uniform sampler2D envMap;\n      uniform sampler2D backfaceMap;\n      uniform vec2 resolution;\n      varying vec3 worldNormal;\n      varying vec3 viewDirection;\n      float fresnelFunc(vec3 viewDirection, vec3 worldNormal) {\n        return pow(1.05 + dot(viewDirection, worldNormal), 100.0);\n      }\n      void main() {\n        vec2 uv = gl_FragCoord.xy / resolution;\n        vec3 normal = worldNormal * (1.0 - 0.7) - texture2D(backfaceMap, uv).rgb * 0.7;\n        vec4 color = texture2D(envMap, uv += refract(viewDirection, normal, 1.0/1.5).xy);\n        //gl_FragColor = vec4(mix(color.rgb, vec3(0.15), fresnelFunc(viewDirection, normal)), 1.0);\n        gl_FragColor = vec4(mix(color.rgb, vec3(0.4), fresnelFunc(viewDirection, normal)), 1.0);\n      }",uniforms:{envMap:{value:e.envMap},backfaceMap:{value:e.backfaceMap},resolution:{value:e.resolution}}})}return Object(y.a)(o)}(l.ShaderMaterial),D=["children","offset","factor"],C=Object(i.createContext)(0);function T(e){var t=e.children,o=e.offset,n=e.factor,a=Object(h.a)(e,D),s=S(),l=s.offset,f=s.sectionHeight,d=Object(i.useRef)();return o=void 0!==o?o:l,Object(c.c)((function(){var e=d.current.position.y,t=m.top.current;d.current.position.y=u()(e,t/m.zoom*n,.1)})),Object(p.jsx)(C.Provider,{value:o,children:Object(p.jsx)("group",Object(r.a)(Object(r.a)({},a),{},{position:[0,-f*o*n,0],children:Object(p.jsx)("group",{ref:d,children:t})}))})}function S(){var e=m.sections,t=m.pages,o=m.zoom,r=Object(c.e)(),n=r.size,a=r.viewport,s=Object(i.useContext)(C),l=a.width*o,f=a.height*o,u=l/o,h=f/o,d=n.width<700;return{viewport:a,offset:s,viewportWidth:l,viewportHeight:f,canvasWidth:u,canvasHeight:h,mobile:d,margin:u*(d?.2:.1),contentMaxWidth:u*(d?.8:.6),sectionHeight:h*((t-1)/(e-1)),offsetFactor:(s+1)/e}}var F=new l.Object3D;function P(){var e=Object(c.d)(O.a,"/diamond.glb").nodes;Object(i.useLayoutEffect)((function(){return e.pCone1_lambert1_0.geometry.center()}),[]);var t=Object(c.e)(),o=t.size,r=t.gl,n=t.scene,a=t.camera,s=t.clock,f=S(),h=f.contentMaxWidth,d=f.sectionHeight,v=f.mobile,b=Object(i.useRef)(),j=r.getPixelRatio(),g=Object(i.useMemo)((function(){var e=new l.WebGLRenderTarget(o.width*j,o.height*j),t=new l.WebGLRenderTarget(o.width*j,o.height*j);return[e,t,new k,new N({envMap:e.texture,backfaceMap:t.texture,resolution:[o.width*j,o.height*j]})]}),[o,j]),y=Object(x.a)(g,4),w=y[0],M=y[1],z=y[2],D=y[3];return Object(c.c)((function(){m.diamonds.forEach((function(e,t){var o=s.getElapsedTime()/2,r=e.x,n=e.offset,a=e.scale,i=e.factor,c=h/35*a;e.pos.set(v?0:r,u()(e.pos.y,-d*n*i+m.top.current/m.zoom*i,.1),0),F.position.copy(e.pos),t===m.diamonds.length-1?F.rotation.set(0,o,0):F.rotation.set(o,o,o),F.scale.set(c,c,c),F.updateMatrix(),b.current.setMatrixAt(t,F.matrix),b.current.instanceMatrix.needsUpdate=!0})),r.autoClear=!1,a.layers.set(0),r.setRenderTarget(w),r.clearColor(),r.render(n,a),r.clearDepth(),a.layers.set(1),b.current.material=z,r.setRenderTarget(M),r.clearDepth(),r.render(n,a),a.layers.set(0),r.setRenderTarget(null),r.render(n,a),r.clearDepth(),a.layers.set(1),b.current.material=D,r.render(n,a)}),1),Object(p.jsx)("instancedMesh",{ref:b,layers:1,args:[e.pCone1_lambert1_0.geometry,null,m.diamonds.length],position:[0,0,50]})}var R=function(e){Object(M.a)(o,e);var t=Object(z.a)(o);function o(){return Object(w.a)(this,o),t.call(this,{vertexShader:"uniform float scale;\n      uniform float shift;\n      varying vec2 vUv;\n      void main() {\n        vec3 pos = position;\n        pos.y = pos.y + ((sin(uv.x * 3.1415926535897932384626433832795) * shift * 2.0) * 0.125);\n        vUv = uv;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);\n      }",fragmentShader:"uniform sampler2D tex;\n      uniform float hasTexture;\n      uniform float shift;\n      uniform float scale;\n      uniform vec3 color;\n      uniform float opacity;\n      varying vec2 vUv;\n      void main() {\n        float angle = 1.55;\n        vec2 p = (vUv - vec2(0.5, 0.5)) * (1.0 - scale) + vec2(0.5, 0.5);\n        vec2 offset = shift / 4.0 * vec2(cos(angle), sin(angle));\n        vec4 cr = texture2D(tex, p + offset);\n        vec4 cga = texture2D(tex, p);\n        vec4 cb = texture2D(tex, p - offset);\n        if (hasTexture == 1.0) gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);\n        else gl_FragColor = vec4(color, opacity);\n      }",uniforms:{tex:{value:null},hasTexture:{value:0},scale:{value:0},shift:{value:0},opacity:{value:1},color:{value:new l.Color("white")}}})}return Object(y.a)(o,[{key:"scale",get:function(){return this.uniforms.scale.value},set:function(e){this.uniforms.scale.value=e}},{key:"shift",get:function(){return this.uniforms.shift.value},set:function(e){this.uniforms.shift.value=e}},{key:"map",get:function(){return this.uniforms.tex.value},set:function(e){this.uniforms.hasTexture.value=!!e,this.uniforms.tex.value=e}},{key:"color",get:function(){return this.uniforms.color.value}},{key:"opacity",get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms&&(this.uniforms.opacity.value=e)}}]),o}(l.ShaderMaterial);Object(c.b)({CustomMaterial:R});var _=["color","shift","opacity","args","map"],E=Object(i.forwardRef)((function(e,t){var o=e.color,n=void 0===o?"white":o,a=e.shift,s=void 0===a?1:a,l=e.opacity,f=void 0===l?1:l,d=e.args,v=e.map,b=Object(h.a)(e,_),j=S(),g=j.viewportHeight,x=j.offsetFactor,O=Object(i.useRef)(),y=m.top.current;return Object(c.c)((function(){var e=m.pages,t=m.top;O.current.scale=u()(O.current.scale,x-t.current/((e-1)*g),.1),O.current.shift=u()(O.current.shift,(t.current-y)/s*1.5,.1),y=t.current})),Object(p.jsxs)("mesh",Object(r.a)(Object(r.a)({ref:t},b),{},{children:[Object(p.jsx)("planeBufferGeometry",{args:d}),Object(p.jsx)("customMaterial",{ref:O,color:n,map:v,transparent:!0,opacity:f})]}))}));o(48);function V(){var e=Object(i.useRef)();return Object(c.c)((function(){return e.current.material.opacity=u()(e.current.material.opacity,0,.025)})),Object(p.jsx)(E,{ref:e,color:"#0e0e0f",position:[0,0,200],scale:[100,100,1]})}function H(e){var t=e.image,o=e.index,r=e.offset,n=e.factor,a=e.header,i=e.aspect,c=e.text,l=S(),f=l.contentMaxWidth,u=l.canvasWidth,h=l.margin,d=l.mobile,v=i<1&&!d?.65:1,b=(u-f*v-h)/2,g=f*m.zoom*v,x=!(o%2),O=o%2?"#D40749":"#2FE8C3";return Object(p.jsx)(T,{factor:n,offset:r,children:Object(p.jsxs)("group",{position:[x?-b:b,0,0],children:[Object(p.jsx)(E,{map:t,args:[1,1,32,32],shift:75,size:v,aspect:i,scale:[f*v,f*v/i,1],frustumCulled:!1}),Object(p.jsx)(s.a,{style:{width:g/(d?1:2),textAlign:x?"left":"right"},position:[x||d?-f*v/2:0,-f*v/2/i-.4,1],children:Object(p.jsx)("div",{tabIndex:o,children:c})}),Object(p.jsx)(j,{left:x,right:!x,size:.04*f,color:O,top:!0,position:[(x?-f:f)*v/2,f*v/i/2+.5,-1],children:a}),Object(p.jsx)(T,{factor:.2,children:Object(p.jsx)(j,{opacity:.5,size:.5*f,color:"#1A1E2A",position:[(x?f:-f)/2*v,f*v/i/1,-10],children:"0"+(o+1)})})]})})}function W(){var e=Object(c.d)(l.TextureLoader,m.paragraphs.map((function(e){return e.image})));Object(i.useMemo)((function(){return e.forEach((function(e){return e.minFilter=l.LinearFilter}))}),[e]);var t=S(),o=t.contentMaxWidth,n=t.canvasWidth,a=t.canvasHeight,f=t.mobile;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(T,{factor:1,offset:0,children:[Object(p.jsx)(T,{factor:1.2,children:Object(p.jsx)(j,{left:!0,size:.15*o,position:[-o/3.2,.5,-1],color:"#d40749",children:"MOKSHA"})}),Object(p.jsx)(T,{factor:1,children:Object(p.jsxs)(s.a,{className:"bottom-left",style:{color:"white"},position:[-n/2,-a/2,0],children:["It was the year 2076.",f?Object(p.jsx)("br",{}):" ","The substance had arrived."]})})]}),Object(p.jsx)(T,{factor:1.2,offset:5.7,children:Object(p.jsx)(g,{top:!0,left:!0,size:.15*o,lineHeight:o/5,position:[-o/3.5,0,-1],color:"#2fe8c3",text:"four\nzero\nzero"})}),m.paragraphs.map((function(t,o){return Object(p.jsx)(H,Object(r.a)(Object(r.a)({index:o},t),{},{image:e[o]}),o)})),m.stripes.map((function(e,t){var o=e.offset,r=e.color,n=e.height;return Object(p.jsx)(T,{factor:-1.5,offset:o,children:Object(p.jsx)(E,{args:[50,n,32,32],shift:-4,color:r,rotation:[0,0,Math.PI/8],position:[0,0,-10]})},t)})),Object(p.jsx)(T,{factor:1.25,offset:8,children:Object(p.jsx)(s.a,{style:{color:"white"},className:"bottom-left",position:[-n/2,-a/2,0],children:"Culture is not your friend."})})]})}function A(){var e=Object(i.useRef)(),t=function(e){return m.top.current=e.target.scrollTop};return Object(i.useEffect)((function(){t({target:e.current})}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(c.a,{linear:!0,dpr:[1,2],orthographic:!0,camera:{zoom:m.zoom,position:[0,0,500]},children:Object(p.jsxs)(i.Suspense,{fallback:Object(p.jsx)(s.a,{center:!0,className:"loading",children:"Loading..."}),children:[Object(p.jsx)(W,{}),Object(p.jsx)(P,{}),Object(p.jsx)(V,{})]})}),Object(p.jsx)("div",{className:"scrollArea",ref:e,onScroll:t,children:new Array(m.sections).fill().map((function(e,t){return Object(p.jsx)("div",{id:"0"+t,style:{height:"".concat(m.pages/m.sections*100,"vh")}},t)}))})]})}a.a.render(Object(p.jsx)(A,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.d3e03fa8.chunk.js.map