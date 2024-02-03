import{r as i,j as o}from"./vendor.react-9b639354.js";import{l as u}from"./vendor.lerp-ba9a6d30.js";import{n as g,C as y}from"./vendor.three-e73e932e.js";import{e as d,c as j}from"./vendor.@react-three-b6a1ac5e.js";import{u as w,s as c}from"./index-3b054a47.js";import"./vendor.@babel-98964cd2.js";import"./vendor.react-use-measure-85d1a3ff.js";import"./vendor.debounce-58e152cb.js";import"./vendor.its-fine-0ea323a5.js";import"./vendor.react-reconciler-166f64eb.js";import"./vendor.react-dom-b6b12e70.js";import"./vendor.scheduler-765c72db.js";import"./vendor.zustand-bb355b56.js";import"./vendor.@react-spring-7aa42389.js";class C extends g{constructor(){super({vertexShader:`uniform float scale;
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
      }`,uniforms:{tex:{value:null},hasTexture:{value:0},scale:{value:0},shift:{value:0},opacity:{value:1},color:{value:new y("white")}}})}set scale(e){this.uniforms.scale.value=e}get scale(){return this.uniforms.scale.value}set shift(e){this.uniforms.shift.value=e}get shift(){return this.uniforms.shift.value}set map(e){this.uniforms.hasTexture.value=!!e,this.uniforms.tex.value=e}get map(){return this.uniforms.tex.value}get color(){return this.uniforms.color.value}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}}d({CustomMaterial:C});const H=i.forwardRef(({color:s="white",shift:e=1,opacity:l=1,args:n,map:f,...m},v)=>{const{viewportHeight:p,offsetFactor:h}=w(),t=i.useRef();let a=c.top.current;return j(()=>{const{pages:x,top:r}=c;t.current.scale=u(t.current.scale,h-r.current/((x-1)*p),.1),t.current.shift=u(t.current.shift,(r.current-a)/e*1.5,.1),a=r.current}),o.jsxs("mesh",{ref:v,...m,children:[o.jsx("planeGeometry",{args:n}),o.jsx("customMaterial",{ref:t,color:s,map:f,transparent:!0,opacity:l})]})});export{H as default};
//# sourceMappingURL=Plane-d1e5d0a0.js.map
