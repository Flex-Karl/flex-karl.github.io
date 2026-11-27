"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[264],{125:(e,t,r)=>{var i=r(2115),n="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=i.useState,o=i.useEffect,a=i.useLayoutEffect,l=i.useDebugValue;function u(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!n(e,r)}catch(e){return!0}}var h="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),i=s({inst:{value:r,getSnapshot:t}}),n=i[0].inst,h=i[1];return a(function(){n.value=r,n.getSnapshot=t,u(n)&&h({inst:n})},[e,r,t]),o(function(){return u(n)&&h({inst:n}),e(function(){u(n)&&h({inst:n})})},[e]),l(r),r};t.useSyncExternalStore=void 0!==i.useSyncExternalStore?i.useSyncExternalStore:h},258:(e,t,r)=>{r.d(t,{Hl:()=>c});var i=r(6595),n=r(2115),s=r(7548);function o(e,t){let r;return(...i)=>{window.clearTimeout(r),r=window.setTimeout(()=>e(...i),t)}}let a=["x","y","top","bottom","left","right","width","height"];var l=r(4735),u=r(5155);function h({ref:e,children:t,fallback:r,resize:l,style:h,gl:c,events:f=i.f,eventSource:d,eventPrefix:m,shadows:v,linear:p,flat:g,legacy:x,orthographic:b,frameloop:_,dpr:w,performance:y,raycaster:T,camera:S,scene:M,onPointerMissed:C,onCreated:B,...D}){n.useMemo(()=>(0,i.e)(s),[]);let U=(0,i.u)(),[E,R]=function({debounce:e,scroll:t,polyfill:r,offsetSize:i}={debounce:0,scroll:!1,offsetSize:!1}){var s,l,u;let h=r||("undefined"==typeof window?class{}:window.ResizeObserver);if(!h)throw Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");let[c,f]=(0,n.useState)({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),d=(0,n.useRef)({element:null,scrollContainers:null,resizeObserver:null,lastBounds:c,orientationHandler:null}),m=e?"number"==typeof e?e:e.scroll:null,v=e?"number"==typeof e?e:e.resize:null,p=(0,n.useRef)(!1);(0,n.useEffect)(()=>(p.current=!0,()=>void(p.current=!1)));let[g,x,b]=(0,n.useMemo)(()=>{let e=()=>{let e,t;if(!d.current.element)return;let{left:r,top:n,width:s,height:o,bottom:l,right:u,x:h,y:c}=d.current.element.getBoundingClientRect(),m={left:r,top:n,width:s,height:o,bottom:l,right:u,x:h,y:c};d.current.element instanceof HTMLElement&&i&&(m.height=d.current.element.offsetHeight,m.width=d.current.element.offsetWidth),Object.freeze(m),p.current&&(e=d.current.lastBounds,t=m,!a.every(r=>e[r]===t[r]))&&f(d.current.lastBounds=m)};return[e,v?o(e,v):e,m?o(e,m):e]},[f,i,m,v]);function _(){d.current.scrollContainers&&(d.current.scrollContainers.forEach(e=>e.removeEventListener("scroll",b,!0)),d.current.scrollContainers=null),d.current.resizeObserver&&(d.current.resizeObserver.disconnect(),d.current.resizeObserver=null),d.current.orientationHandler&&("orientation"in screen&&"removeEventListener"in screen.orientation?screen.orientation.removeEventListener("change",d.current.orientationHandler):"onorientationchange"in window&&window.removeEventListener("orientationchange",d.current.orientationHandler))}function w(){d.current.element&&(d.current.resizeObserver=new h(b),d.current.resizeObserver.observe(d.current.element),t&&d.current.scrollContainers&&d.current.scrollContainers.forEach(e=>e.addEventListener("scroll",b,{capture:!0,passive:!0})),d.current.orientationHandler=()=>{b()},"orientation"in screen&&"addEventListener"in screen.orientation?screen.orientation.addEventListener("change",d.current.orientationHandler):"onorientationchange"in window&&window.addEventListener("orientationchange",d.current.orientationHandler))}return s=b,l=!!t,(0,n.useEffect)(()=>{if(l)return window.addEventListener("scroll",s,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",s,!0)},[s,l]),u=x,(0,n.useEffect)(()=>(window.addEventListener("resize",u),()=>void window.removeEventListener("resize",u)),[u]),(0,n.useEffect)(()=>{_(),w()},[t,b,x]),(0,n.useEffect)(()=>_,[]),[e=>{e&&e!==d.current.element&&(_(),d.current.element=e,d.current.scrollContainers=function e(t){let r=[];if(!t||t===document.body)return r;let{overflow:i,overflowX:n,overflowY:s}=window.getComputedStyle(t);return[i,n,s].some(e=>"auto"===e||"scroll"===e)&&r.push(t),[...r,...e(t.parentElement)]}(e),w())},c,g]}({scroll:!0,debounce:{scroll:50,resize:0},...l}),P=n.useRef(null),F=n.useRef(null);n.useImperativeHandle(e,()=>P.current);let z=(0,i.a)(C),k=n.useCallback(e=>null==z.current?void 0:z.current(e),[z]),[A,I]=n.useState(!1),[O,L]=n.useState(!1);if(A)throw A;if(O)throw O;let j=n.useRef(null),[H,V]=(0,i.b)(),q=n.useRef(null),Q=()=>d?(0,i.i)(d)?d.current:d:F.current;n.useInsertionEffect(()=>()=>{let e=j.current;j.current=null,null==e||e.unmount()},[]),(0,i.c)(()=>{let e=P.current;R.width>0&&R.height>0&&e&&(j.current||(j.current=(0,i.d)(e)),j.current.configure({gl:c,scene:M,events:f,shadows:v,linear:p,flat:g,legacy:x,orthographic:b,frameloop:_,dpr:w,performance:y,raycaster:T,camera:S,size:R,onPointerMissed:k,onCreated:e=>{var t;q.current=e,null==e.events.connect||e.events.connect(null!=(t=Q())?t:F.current),m&&e.setEvents({compute:(e,t)=>{let r=e[m+"X"],i=e[m+"Y"];t.pointer.set(r/t.size.width*2-1,-(2*(i/t.size.height))+1),t.raycaster.setFromCamera(t.pointer,t.camera)}}),null==B||B(e)}}).catch(L),"fulfilled"===j.current.ready.status?j.current.render((0,u.jsx)(U,{children:(0,u.jsx)(i.E,{set:L,children:(0,u.jsx)(n.Suspense,{fallback:(0,u.jsx)(i.B,{set:I}),children:null!=t?t:null})})})):"pending"===j.current.ready.status&&V(j.current.ready))}),n.useEffect(()=>{var e;let t=null==(e=q.current)?void 0:e.get(),r=Q();t&&r&&t.events.connected!==r&&(null==t.events.connect||t.events.connect(r))}),n.useEffect(()=>{let e=P.current;return()=>{var t;e.isConnected||null==(t=j.current)||t.unmount()}},[]);let W=d?"none":"auto";return(0,u.jsxs)("div",{ref:F,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",pointerEvents:W,...h},...D,children:[(0,u.jsx)("div",{ref:E,style:{width:"100%",height:"100%"},children:(0,u.jsx)("canvas",{ref:P,style:{display:"block"},children:r})}),H]})}function c(e){return(0,u.jsx)(l.Af,{children:(0,u.jsx)(h,{...e})})}r(9914)},1039:(e,t,r)=>{r.d(t,{s:()=>d});var i=r(8945),n=r(2115),s=r(5339),o=r(6595),a=r(8587);class l extends s.BKk{constructor(){super({uniforms:{time:{value:0},pixelRatio:{value:1}},vertexShader:`
        uniform float pixelRatio;
        uniform float time;
        attribute float size;  
        attribute float speed;  
        attribute float opacity;
        attribute vec3 noise;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vOpacity;

        void main() {
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);
          modelPosition.y += sin(time * speed + modelPosition.x * noise.x * 100.0) * 0.2;
          modelPosition.z += cos(time * speed + modelPosition.x * noise.y * 100.0) * 0.2;
          modelPosition.x += cos(time * speed + modelPosition.x * noise.z * 100.0) * 0.2;
          vec4 viewPosition = viewMatrix * modelPosition;
          vec4 projectionPostion = projectionMatrix * viewPosition;
          gl_Position = projectionPostion;
          gl_PointSize = size * 25. * pixelRatio;
          gl_PointSize *= (1.0 / - viewPosition.z);
          vColor = color;
          vOpacity = opacity;
        }
      `,fragmentShader:`
        varying vec3 vColor;
        varying float vOpacity;
        void main() {
          float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
          float strength = 0.05 / distanceToCenter - 0.1;
          gl_FragColor = vec4(vColor, strength * vOpacity);
          #include <tonemapping_fragment>
          #include <${a.r>=154?"colorspace_fragment":"encodings_fragment"}>
        }
      `})}get time(){return this.uniforms.time.value}set time(e){this.uniforms.time.value=e}get pixelRatio(){return this.uniforms.pixelRatio.value}set pixelRatio(e){this.uniforms.pixelRatio.value=e}}let u=e=>e&&e.constructor===Float32Array,h=e=>e instanceof s.I9Y||e instanceof s.Pq0||e instanceof s.IUQ,c=e=>Array.isArray(e)?e:h(e)?e.toArray():[e,e,e];function f(e,t,r){return n.useMemo(()=>{if(void 0!==t)if(u(t))return t;else{if(t instanceof s.Q1f){let r=Array.from({length:3*e},()=>[t.r,t.g,t.b]).flat();return Float32Array.from(r)}if(h(t)||Array.isArray(t)){let r=Array.from({length:3*e},()=>c(t)).flat();return Float32Array.from(r)}return Float32Array.from({length:e},()=>t)}return Float32Array.from({length:e},r)},[t])}let d=n.forwardRef(({noise:e=1,count:t=100,speed:r=1,opacity:a=1,scale:h=1,size:d,color:m,children:v,...p},g)=>{n.useMemo(()=>(0,o.e)({SparklesImplMaterial:l}),[]);let x=n.useRef(null),b=(0,o.D)(e=>e.viewport.dpr),_=c(h),w=n.useMemo(()=>Float32Array.from(Array.from({length:t},()=>_.map(s.cj9.randFloatSpread)).flat()),[t,..._]),y=f(t,d,Math.random),T=f(t,a),S=f(t,r),M=f(3*t,e),C=f(void 0===m?3*t:t,u(m)?m:new s.Q1f(m),()=>1);return(0,o.F)(e=>{x.current&&x.current.material&&(x.current.material.time=e.clock.elapsedTime)}),n.useImperativeHandle(g,()=>x.current,[]),n.createElement("points",(0,i.A)({key:`particle-${t}-${JSON.stringify(h)}`},p,{ref:x}),n.createElement("bufferGeometry",null,n.createElement("bufferAttribute",{attach:"attributes-position",args:[w,3]}),n.createElement("bufferAttribute",{attach:"attributes-size",args:[y,1]}),n.createElement("bufferAttribute",{attach:"attributes-opacity",args:[T,1]}),n.createElement("bufferAttribute",{attach:"attributes-speed",args:[S,1]}),n.createElement("bufferAttribute",{attach:"attributes-color",args:[C,3]}),n.createElement("bufferAttribute",{attach:"attributes-noise",args:[M,3]})),v||n.createElement("sparklesImplMaterial",{transparent:!0,pixelRatio:b,depthWrite:!1}))})},2006:(e,t,r)=>{r.d(t,{s:()=>u});var i=r(5339),n=r(2049),s=r(3617);class o extends s.o{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof i.BKk?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=i.LlO.clone(e.uniforms),this.material=new i.BKk({name:void 0!==e.name?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new s.F(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this._fsQuad.material=this.material,this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)),this._fsQuad.render(e)}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class a extends s.o{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){let i,n,s=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0),this.inverse?(i=0,n=1):(i=1,n=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,i,0xffffffff),o.buffers.stencil.setClear(n),o.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,0xffffffff),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class l extends s.o{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class u{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),void 0===t){let r=e.getSize(new i.I9Y);this._width=r.width,this._height=r.height,(t=new i.nWS(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:i.ix0})).texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new o(n.Z),this.copyPass.material.blending=i.XIg,this.clock=new i.zD7}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);-1!==t&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){void 0===e&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),r=!1;for(let t=0,i=this.passes.length;t<i;t++){let i=this.passes[t];if(!1!==i.enabled){if(i.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),i.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),i.needsSwap){if(r){let t=this.renderer.getContext(),r=this.renderer.state.buffers.stencil;r.setFunc(t.NOTEQUAL,1,0xffffffff),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),r.setFunc(t.EQUAL,1,0xffffffff)}this.swapBuffers()}void 0!==a&&(i instanceof a?r=!0:i instanceof l&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(void 0===e){let t=this.renderer.getSize(new i.I9Y);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,(e=this.renderTarget1.clone()).setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let r=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(r,i),this.renderTarget2.setSize(r,i);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(r,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}},2049:(e,t,r)=>{r.d(t,{Z:()=>i});let i={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`}},2697:(e,t,r)=>{r.d(t,{d:()=>c});var i=r(8945),n=r(2115),s=r(5339),o=r(6595),a=r(8587);class l extends s.BKk{constructor(e=new s.I9Y){super({uniforms:{inputBuffer:new s.nc$(null),depthBuffer:new s.nc$(null),resolution:new s.nc$(new s.I9Y),texelSize:new s.nc$(new s.I9Y),halfTexelSize:new s.nc$(new s.I9Y),kernel:new s.nc$(0),scale:new s.nc$(1),cameraNear:new s.nc$(0),cameraFar:new s.nc$(1),minDepthThreshold:new s.nc$(0),maxDepthThreshold:new s.nc$(1),depthScale:new s.nc$(0),depthToBlurRatioBias:new s.nc$(.25)},fragmentShader:`#include <common>
        #include <dithering_pars_fragment>      
        uniform sampler2D inputBuffer;
        uniform sampler2D depthBuffer;
        uniform float cameraNear;
        uniform float cameraFar;
        uniform float minDepthThreshold;
        uniform float maxDepthThreshold;
        uniform float depthScale;
        uniform float depthToBlurRatioBias;
        varying vec2 vUv;
        varying vec2 vUv0;
        varying vec2 vUv1;
        varying vec2 vUv2;
        varying vec2 vUv3;

        void main() {
          float depthFactor = 0.0;
          
          #ifdef USE_DEPTH
            vec4 depth = texture2D(depthBuffer, vUv);
            depthFactor = smoothstep(minDepthThreshold, maxDepthThreshold, 1.0-(depth.r * depth.a));
            depthFactor *= depthScale;
            depthFactor = max(0.0, min(1.0, depthFactor + 0.25));
          #endif
          
          vec4 sum = texture2D(inputBuffer, mix(vUv0, vUv, depthFactor));
          sum += texture2D(inputBuffer, mix(vUv1, vUv, depthFactor));
          sum += texture2D(inputBuffer, mix(vUv2, vUv, depthFactor));
          sum += texture2D(inputBuffer, mix(vUv3, vUv, depthFactor));
          gl_FragColor = sum * 0.25 ;

          #include <dithering_fragment>
          #include <tonemapping_fragment>
          #include <${a.r>=154?"colorspace_fragment":"encodings_fragment"}>
        }`,vertexShader:`uniform vec2 texelSize;
        uniform vec2 halfTexelSize;
        uniform float kernel;
        uniform float scale;
        varying vec2 vUv;
        varying vec2 vUv0;
        varying vec2 vUv1;
        varying vec2 vUv2;
        varying vec2 vUv3;

        void main() {
          vec2 uv = position.xy * 0.5 + 0.5;
          vUv = uv;

          vec2 dUv = (texelSize * vec2(kernel) + halfTexelSize) * scale;
          vUv0 = vec2(uv.x - dUv.x, uv.y + dUv.y);
          vUv1 = vec2(uv.x + dUv.x, uv.y + dUv.y);
          vUv2 = vec2(uv.x + dUv.x, uv.y - dUv.y);
          vUv3 = vec2(uv.x - dUv.x, uv.y - dUv.y);

          gl_Position = vec4(position.xy, 1.0, 1.0);
        }`,blending:s.XIg,depthWrite:!1,depthTest:!1}),this.toneMapped=!1,this.setTexelSize(e.x,e.y),this.kernel=new Float32Array([0,1,2,2,3])}setTexelSize(e,t){this.uniforms.texelSize.value.set(e,t),this.uniforms.halfTexelSize.value.set(e,t).multiplyScalar(.5)}setResolution(e){this.uniforms.resolution.value.copy(e)}}class u{constructor({gl:e,resolution:t,width:r=500,height:i=500,minDepthThreshold:n=0,maxDepthThreshold:o=1,depthScale:a=0,depthToBlurRatioBias:u=.25}){this.renderToScreen=!1,this.renderTargetA=new s.nWS(t,t,{minFilter:s.k6q,magFilter:s.k6q,stencilBuffer:!1,depthBuffer:!1,type:s.ix0}),this.renderTargetB=this.renderTargetA.clone(),this.convolutionMaterial=new l,this.convolutionMaterial.setTexelSize(1/r,1/i),this.convolutionMaterial.setResolution(new s.I9Y(r,i)),this.scene=new s.Z58,this.camera=new s.i7d,this.convolutionMaterial.uniforms.minDepthThreshold.value=n,this.convolutionMaterial.uniforms.maxDepthThreshold.value=o,this.convolutionMaterial.uniforms.depthScale.value=a,this.convolutionMaterial.uniforms.depthToBlurRatioBias.value=u,this.convolutionMaterial.defines.USE_DEPTH=a>0;let h=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),c=new Float32Array([0,0,2,0,0,2]),f=new s.LoY;f.setAttribute("position",new s.THS(h,3)),f.setAttribute("uv",new s.THS(c,2)),this.screen=new s.eaF(f,this.convolutionMaterial),this.screen.frustumCulled=!1,this.scene.add(this.screen)}render(e,t,r){let i,n,s,o=this.scene,a=this.camera,l=this.renderTargetA,u=this.renderTargetB,h=this.convolutionMaterial,c=h.uniforms;c.depthBuffer.value=t.depthTexture;let f=h.kernel,d=t;for(n=0,s=f.length-1;n<s;++n)i=(1&n)==0?l:u,c.kernel.value=f[n],c.inputBuffer.value=d.texture,e.setRenderTarget(i),e.render(o,a),d=i;c.kernel.value=f[n],c.inputBuffer.value=d.texture,e.setRenderTarget(this.renderToScreen?null:r),e.render(o,a)}}class h extends s._4j{constructor(e={}){super(e),this._tDepth={value:null},this._distortionMap={value:null},this._tDiffuse={value:null},this._tDiffuseBlur={value:null},this._textureMatrix={value:null},this._hasBlur={value:!1},this._mirror={value:0},this._mixBlur={value:0},this._blurStrength={value:.5},this._minDepthThreshold={value:.9},this._maxDepthThreshold={value:1},this._depthScale={value:0},this._depthToBlurRatioBias={value:.25},this._distortion={value:1},this._mixContrast={value:1},this.setValues(e)}onBeforeCompile(e){var t;null!=(t=e.defines)&&t.USE_UV||(e.defines.USE_UV=""),e.uniforms.hasBlur=this._hasBlur,e.uniforms.tDiffuse=this._tDiffuse,e.uniforms.tDepth=this._tDepth,e.uniforms.distortionMap=this._distortionMap,e.uniforms.tDiffuseBlur=this._tDiffuseBlur,e.uniforms.textureMatrix=this._textureMatrix,e.uniforms.mirror=this._mirror,e.uniforms.mixBlur=this._mixBlur,e.uniforms.mixStrength=this._blurStrength,e.uniforms.minDepthThreshold=this._minDepthThreshold,e.uniforms.maxDepthThreshold=this._maxDepthThreshold,e.uniforms.depthScale=this._depthScale,e.uniforms.depthToBlurRatioBias=this._depthToBlurRatioBias,e.uniforms.distortion=this._distortion,e.uniforms.mixContrast=this._mixContrast,e.vertexShader=`
        uniform mat4 textureMatrix;
        varying vec4 my_vUv;
      ${e.vertexShader}`,e.vertexShader=e.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
        my_vUv = textureMatrix * vec4( position, 1.0 );
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );`),e.fragmentShader=`
        uniform sampler2D tDiffuse;
        uniform sampler2D tDiffuseBlur;
        uniform sampler2D tDepth;
        uniform sampler2D distortionMap;
        uniform float distortion;
        uniform float cameraNear;
			  uniform float cameraFar;
        uniform bool hasBlur;
        uniform float mixBlur;
        uniform float mirror;
        uniform float mixStrength;
        uniform float minDepthThreshold;
        uniform float maxDepthThreshold;
        uniform float mixContrast;
        uniform float depthScale;
        uniform float depthToBlurRatioBias;
        varying vec4 my_vUv;
        ${e.fragmentShader}`,e.fragmentShader=e.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>

      float distortionFactor = 0.0;
      #ifdef USE_DISTORTION
        distortionFactor = texture2D(distortionMap, vUv).r * distortion;
      #endif

      vec4 new_vUv = my_vUv;
      new_vUv.x += distortionFactor;
      new_vUv.y += distortionFactor;

      vec4 base = texture2DProj(tDiffuse, new_vUv);
      vec4 blur = texture2DProj(tDiffuseBlur, new_vUv);

      vec4 merge = base;

      #ifdef USE_NORMALMAP
        vec2 normal_uv = vec2(0.0);
        vec4 normalColor = texture2D(normalMap, vUv * normalScale);
        vec3 my_normal = normalize( vec3( normalColor.r * 2.0 - 1.0, normalColor.b,  normalColor.g * 2.0 - 1.0 ) );
        vec3 coord = new_vUv.xyz / new_vUv.w;
        normal_uv = coord.xy + coord.z * my_normal.xz * 0.05;
        vec4 base_normal = texture2D(tDiffuse, normal_uv);
        vec4 blur_normal = texture2D(tDiffuseBlur, normal_uv);
        merge = base_normal;
        blur = blur_normal;
      #endif

      float depthFactor = 0.0001;
      float blurFactor = 0.0;

      #ifdef USE_DEPTH
        vec4 depth = texture2DProj(tDepth, new_vUv);
        depthFactor = smoothstep(minDepthThreshold, maxDepthThreshold, 1.0-(depth.r * depth.a));
        depthFactor *= depthScale;
        depthFactor = max(0.0001, min(1.0, depthFactor));

        #ifdef USE_BLUR
          blur = blur * min(1.0, depthFactor + depthToBlurRatioBias);
          merge = merge * min(1.0, depthFactor + 0.5);
        #else
          merge = merge * depthFactor;
        #endif

      #endif

      float reflectorRoughnessFactor = roughness;
      #ifdef USE_ROUGHNESSMAP
        vec4 reflectorTexelRoughness = texture2D( roughnessMap, vUv );
        reflectorRoughnessFactor *= reflectorTexelRoughness.g;
      #endif

      #ifdef USE_BLUR
        blurFactor = min(1.0, mixBlur * reflectorRoughnessFactor);
        merge = mix(merge, blur, blurFactor);
      #endif

      vec4 newMerge = vec4(0.0, 0.0, 0.0, 1.0);
      newMerge.r = (merge.r - 0.5) * mixContrast + 0.5;
      newMerge.g = (merge.g - 0.5) * mixContrast + 0.5;
      newMerge.b = (merge.b - 0.5) * mixContrast + 0.5;

      diffuseColor.rgb = diffuseColor.rgb * ((1.0 - min(1.0, mirror)) + newMerge.rgb * mixStrength);
      `)}get tDiffuse(){return this._tDiffuse.value}set tDiffuse(e){this._tDiffuse.value=e}get tDepth(){return this._tDepth.value}set tDepth(e){this._tDepth.value=e}get distortionMap(){return this._distortionMap.value}set distortionMap(e){this._distortionMap.value=e}get tDiffuseBlur(){return this._tDiffuseBlur.value}set tDiffuseBlur(e){this._tDiffuseBlur.value=e}get textureMatrix(){return this._textureMatrix.value}set textureMatrix(e){this._textureMatrix.value=e}get hasBlur(){return this._hasBlur.value}set hasBlur(e){this._hasBlur.value=e}get mirror(){return this._mirror.value}set mirror(e){this._mirror.value=e}get mixBlur(){return this._mixBlur.value}set mixBlur(e){this._mixBlur.value=e}get mixStrength(){return this._blurStrength.value}set mixStrength(e){this._blurStrength.value=e}get minDepthThreshold(){return this._minDepthThreshold.value}set minDepthThreshold(e){this._minDepthThreshold.value=e}get maxDepthThreshold(){return this._maxDepthThreshold.value}set maxDepthThreshold(e){this._maxDepthThreshold.value=e}get depthScale(){return this._depthScale.value}set depthScale(e){this._depthScale.value=e}get depthToBlurRatioBias(){return this._depthToBlurRatioBias.value}set depthToBlurRatioBias(e){this._depthToBlurRatioBias.value=e}get distortion(){return this._distortion.value}set distortion(e){this._distortion.value=e}get mixContrast(){return this._mixContrast.value}set mixContrast(e){this._mixContrast.value=e}}let c=n.forwardRef(({mixBlur:e=0,mixStrength:t=1,resolution:r=256,blur:a=[0,0],minDepthThreshold:l=.9,maxDepthThreshold:c=1,depthScale:f=0,depthToBlurRatioBias:d=.25,mirror:m=0,distortion:v=1,mixContrast:p=1,distortionMap:g,reflectorOffset:x=0,...b},_)=>{(0,o.e)({MeshReflectorMaterialImpl:h});let w=(0,o.D)(({gl:e})=>e),y=(0,o.D)(({camera:e})=>e),T=(0,o.D)(({scene:e})=>e),S=(a=Array.isArray(a)?a:[a,a])[0]+a[1]>0,M=a[0],C=a[1],B=n.useRef(null);n.useImperativeHandle(_,()=>B.current,[]);let[D]=n.useState(()=>new s.Zcv),[U]=n.useState(()=>new s.Pq0),[E]=n.useState(()=>new s.Pq0),[R]=n.useState(()=>new s.Pq0),[P]=n.useState(()=>new s.kn4),[F]=n.useState(()=>new s.Pq0(0,0,-1)),[z]=n.useState(()=>new s.IUQ),[k]=n.useState(()=>new s.Pq0),[A]=n.useState(()=>new s.Pq0),[I]=n.useState(()=>new s.IUQ),[O]=n.useState(()=>new s.kn4),[L]=n.useState(()=>new s.ubm),j=n.useCallback(()=>{var e;let t=B.current.parent||(null==(e=B.current)||null==(e=e.__r3f.parent)?void 0:e.object);if(!t||(E.setFromMatrixPosition(t.matrixWorld),R.setFromMatrixPosition(y.matrixWorld),P.extractRotation(t.matrixWorld),U.set(0,0,1),U.applyMatrix4(P),E.addScaledVector(U,x),k.subVectors(E,R),k.dot(U)>0))return;k.reflect(U).negate(),k.add(E),P.extractRotation(y.matrixWorld),F.set(0,0,-1),F.applyMatrix4(P),F.add(R),A.subVectors(E,F),A.reflect(U).negate(),A.add(E),L.position.copy(k),L.up.set(0,1,0),L.up.applyMatrix4(P),L.up.reflect(U),L.lookAt(A),L.far=y.far,L.updateMatrixWorld(),L.projectionMatrix.copy(y.projectionMatrix),O.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),O.multiply(L.projectionMatrix),O.multiply(L.matrixWorldInverse),O.multiply(t.matrixWorld),D.setFromNormalAndCoplanarPoint(U,E),D.applyMatrix4(L.matrixWorldInverse),z.set(D.normal.x,D.normal.y,D.normal.z,D.constant);let r=L.projectionMatrix;I.x=(Math.sign(z.x)+r.elements[8])/r.elements[0],I.y=(Math.sign(z.y)+r.elements[9])/r.elements[5],I.z=-1,I.w=(1+r.elements[10])/r.elements[14],z.multiplyScalar(2/z.dot(I)),r.elements[2]=z.x,r.elements[6]=z.y,r.elements[10]=z.z+1,r.elements[14]=z.w},[y,x]),[H,V,q,Q]=n.useMemo(()=>{let i={minFilter:s.k6q,magFilter:s.k6q,type:s.ix0},n=new s.nWS(r,r,i);n.depthBuffer=!0,n.depthTexture=new s.VCu(r,r),n.depthTexture.format=s.zdS,n.depthTexture.type=s.cHt;let o=new s.nWS(r,r,i),a=new u({gl:w,resolution:r,width:M,height:C,minDepthThreshold:l,maxDepthThreshold:c,depthScale:f,depthToBlurRatioBias:d}),h={mirror:m,textureMatrix:O,mixBlur:e,tDiffuse:n.texture,tDepth:n.depthTexture,tDiffuseBlur:o.texture,hasBlur:S,mixStrength:t,minDepthThreshold:l,maxDepthThreshold:c,depthScale:f,depthToBlurRatioBias:d,distortion:v,distortionMap:g,mixContrast:p,"defines-USE_BLUR":S?"":void 0,"defines-USE_DEPTH":f>0?"":void 0,"defines-USE_DISTORTION":g?"":void 0};return[n,o,a,h]},[w,M,C,O,r,m,S,e,t,l,c,f,d,v,g,p]);return(0,o.F)(()=>{var e;let t=B.current.parent||(null==(e=B.current)||null==(e=e.__r3f.parent)?void 0:e.object);if(!t)return;t.visible=!1;let r=w.xr.enabled,i=w.shadowMap.autoUpdate;j(),w.xr.enabled=!1,w.shadowMap.autoUpdate=!1,w.setRenderTarget(H),w.state.buffers.depth.setMask(!0),w.autoClear||w.clear(),w.render(T,L),S&&q.render(w,H,V),w.xr.enabled=r,w.shadowMap.autoUpdate=i,t.visible=!0,w.setRenderTarget(null)}),n.createElement("meshReflectorMaterialImpl",(0,i.A)({attach:"material",key:"key"+Q["defines-USE_BLUR"]+Q["defines-USE_DEPTH"]+Q["defines-USE_DISTORTION"],ref:B},Q,b))})},3617:(e,t,r)=>{r.d(t,{F:()=>l,o:()=>n});var i=r(5339);class n{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}let s=new i.qUd(-1,1,1,-1,0,1);class o extends i.LoY{constructor(){super(),this.setAttribute("position",new i.qtW([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new i.qtW([0,2,0,0,2,0],2))}}let a=new o;class l{constructor(e){this._mesh=new i.eaF(a,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,s)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}},3654:(e,t,r)=>{var i=r(2115),n=r(4806),s="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=n.useSyncExternalStore,a=i.useRef,l=i.useEffect,u=i.useMemo,h=i.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,i,n){var c=a(null);if(null===c.current){var f={hasValue:!1,value:null};c.current=f}else f=c.current;var d=o(e,(c=u(function(){function e(e){if(!l){if(l=!0,o=e,e=i(e),void 0!==n&&f.hasValue){var t=f.value;if(n(t,e))return a=t}return a=e}if(t=a,s(o,e))return t;var r=i(e);return void 0!==n&&n(t,r)?(o=e,t):(o=e,a=r)}var o,a,l=!1,u=void 0===r?null:r;return[function(){return e(t())},null===u?void 0:function(){return e(u())}]},[t,r,i,n]))[0],c[1]);return l(function(){f.hasValue=!0,f.value=d},[d]),h(d),d}},3689:(e,t,r)=>{r.d(t,{DY:()=>o,IU:()=>l,uv:()=>a});let i=[];function n(e,t,r=(e,t)=>e===t){if(e===t)return!0;if(!e||!t)return!1;let i=e.length;if(t.length!==i)return!1;for(let n=0;n<i;n++)if(!r(e[n],t[n]))return!1;return!0}function s(e,t=null,r=!1,o={}){for(let s of(null===t&&(t=[e]),i))if(n(t,s.keys,s.equal)){if(r)return;if(Object.prototype.hasOwnProperty.call(s,"error"))throw s.error;if(Object.prototype.hasOwnProperty.call(s,"response"))return o.lifespan&&o.lifespan>0&&(s.timeout&&clearTimeout(s.timeout),s.timeout=setTimeout(s.remove,o.lifespan)),s.response;if(!r)throw s.promise}let a={keys:t,equal:o.equal,remove:()=>{let e=i.indexOf(a);-1!==e&&i.splice(e,1)},promise:("object"==typeof e&&"function"==typeof e.then?e:e(...t)).then(e=>{a.response=e,o.lifespan&&o.lifespan>0&&(a.timeout=setTimeout(a.remove,o.lifespan))}).catch(e=>a.error=e)};if(i.push(a),!r)throw a.promise}let o=(e,t,r)=>s(e,t,!1,r),a=(e,t,r)=>void s(e,t,!0,r),l=e=>{if(void 0===e||0===e.length)i.splice(0,i.length);else{let t=i.find(t=>n(e,t.keys,t.equal));t&&t.remove()}}},3718:(e,t,r)=>{r.d(t,{h:()=>l});var i=r(2115),n=r(8828);let s=e=>{let t,r=new Set,i=(e,i)=>{let n="function"==typeof e?e(t):e;if(!Object.is(n,t)){let e=t;t=(null!=i?i:"object"!=typeof n||null===n)?n:Object.assign({},t,n),r.forEach(r=>r(t,e))}},n=()=>t,s={setState:i,getState:n,getInitialState:()=>o,subscribe:e=>(r.add(e),()=>r.delete(e))},o=t=e(i,n,s);return s},{useSyncExternalStoreWithSelector:o}=n,a=(e,t)=>{let r=(e=>e?s(e):s)(e),n=(e,n=t)=>(function(e,t=e=>e,r){let n=o(e.subscribe,e.getState,e.getInitialState,t,r);return i.useDebugValue(n),n})(r,e,n);return Object.assign(n,r),n},l=(e,t)=>e?a(e,t):a},4735:(e,t,r)=>{r.d(t,{Af:()=>a,Go:()=>f,Nz:()=>n,u5:()=>l,y3:()=>c});var i=r(2115);function n(e,t,r){if(!e)return;if(!0===r(e))return e;let i=t?e.return:e.child;for(;i;){let e=n(i,t,r);if(e)return e;i=t?null:i.sibling}}function s(e){try{return Object.defineProperties(e,{_currentRenderer:{get:()=>null,set(){}},_currentRenderer2:{get:()=>null,set(){}}})}catch(t){return e}}(()=>{var e,t;return"undefined"!=typeof window&&((null==(e=window.document)?void 0:e.createElement)||(null==(t=window.navigator)?void 0:t.product)==="ReactNative")})()?i.useLayoutEffect:i.useEffect;let o=s(i.createContext(null));class a extends i.Component{render(){return i.createElement(o.Provider,{value:this._reactInternals},this.props.children)}}function l(){let e=i.useContext(o);if(null===e)throw Error("its-fine: useFiber must be called within a <FiberProvider />!");let t=i.useId();return i.useMemo(()=>{for(let r of[e,null==e?void 0:e.alternate]){if(!r)continue;let e=n(r,!1,e=>{let r=e.memoizedState;for(;r;){if(r.memoizedState===t)return!0;r=r.next}});if(e)return e}},[e,t])}let u=Symbol.for("react.context"),h=e=>null!==e&&"object"==typeof e&&"$$typeof"in e&&e.$$typeof===u;function c(){let e=function(){let e=l(),[t]=i.useState(()=>new Map);t.clear();let r=e;for(;r;){let e=r.type;h(e)&&e!==o&&!t.has(e)&&t.set(e,i.use(s(e))),r=r.return}return t}();return i.useMemo(()=>Array.from(e.keys()).reduce((t,r)=>n=>i.createElement(t,null,i.createElement(r.Provider,{...n,value:e.get(r)})),e=>i.createElement(a,{...e})),[e])}function f(){if(!i.Activity)throw Error("its-fine: useActivityBridge requires React 19.2 or later!");let e=l(),[t]=i.useState(()=>{let t,r=[],s=!1;n(e,!0,e=>{var t,n;if(e.elementType===i.Activity){let i=(null==(t=e.child)?void 0:t.tag)===22?e.child.stateNode:null;if("number"!=typeof(null==i?void 0:i._visibility))throw Error("its-fine: unsupported React Activity internals!");r.push(i)}else 22===e.tag&&(null==(n=e.return)?void 0:n.elementType)!==i.Activity&&(s=!0)});let o="hidden",a=new Set,l={mounted:!1,connected:!1,subscribe:e=>(a.add(e),()=>{a.delete(e)}),sync(e){l.mounted&&!l.connected&&s&&r.length>0?t||(t=function(e){if("function"==typeof requestAnimationFrame){let t=requestAnimationFrame(e);return()=>cancelAnimationFrame(t)}let t=setTimeout(e,16);return()=>clearTimeout(t)}(()=>{t=void 0,l.sync(!0)})):(null==t||t(),t=void 0);let i=o;if(l.mounted?l.connected?i="visible":e&&(i=r.every(e=>(1&e._visibility)!=0)?"visible":"hidden"):i="hidden",o!==i)for(let e of(o=i,a))e()},Bridge:({children:e})=>i.createElement(i.Activity,{mode:i.useSyncExternalStore(l.subscribe,()=>o,()=>"hidden")},e)};return l});return i.useInsertionEffect(()=>(t.mounted=!0,queueMicrotask(()=>t.sync(!1)),()=>{t.mounted=!1,queueMicrotask(()=>t.sync(!1))}),[t]),i.useLayoutEffect(()=>(t.connected=!0,t.sync(!1),()=>{t.connected=!1,t.sync(!0)}),[t]),t.Bridge}},4806:(e,t,r)=>{e.exports=r(125)},6170:(e,t,r)=>{r.d(t,{A:()=>s});var i=r(5339),n=r(3617);class s extends n.o{constructor(e,t,r=null,n=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new i.Q1f}render(e,t,r){let i,n,s=e.autoClear;e.autoClear=!1,null!==this.overrideMaterial&&(n=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),null!==this.clearColor&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),null!==this.clearAlpha&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),!0==this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),!0===this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),null!==this.clearColor&&e.setClearColor(this._oldClearColor),null!==this.clearAlpha&&e.setClearAlpha(i),null!==this.overrideMaterial&&(this.scene.overrideMaterial=n),e.autoClear=s}}},6451:(e,t)=>{function r(e,t){var r=e.length;for(e.push(t);0<r;){var i=r-1>>>1,n=e[i];if(0<s(n,t))e[i]=t,e[r]=n,r=i;else break}}function i(e){return 0===e.length?null:e[0]}function n(e){if(0===e.length)return null;var t=e[0],r=e.pop();if(r!==t){e[0]=r;for(var i=0,n=e.length,o=n>>>1;i<o;){var a=2*(i+1)-1,l=e[a],u=a+1,h=e[u];if(0>s(l,r))u<n&&0>s(h,l)?(e[i]=h,e[u]=r,i=u):(e[i]=l,e[a]=r,i=a);else if(u<n&&0>s(h,r))e[i]=h,e[u]=r,i=u;else break}}return t}function s(e,t){var r=e.sortIndex-t.sortIndex;return 0!==r?r:e.id-t.id}if(t.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now){var o,a=performance;t.unstable_now=function(){return a.now()}}else{var l=Date,u=l.now();t.unstable_now=function(){return l.now()-u}}var h=[],c=[],f=1,d=null,m=3,v=!1,p=!1,g=!1,x=!1,b="function"==typeof setTimeout?setTimeout:null,_="function"==typeof clearTimeout?clearTimeout:null,w="undefined"!=typeof setImmediate?setImmediate:null;function y(e){for(var t=i(c);null!==t;){if(null===t.callback)n(c);else if(t.startTime<=e)n(c),t.sortIndex=t.expirationTime,r(h,t);else break;t=i(c)}}function T(e){if(g=!1,y(e),!p)if(null!==i(h))p=!0,S||(S=!0,o());else{var t=i(c);null!==t&&P(T,t.startTime-e)}}var S=!1,M=-1,C=5,B=-1;function D(){return!!x||!(t.unstable_now()-B<C)}function U(){if(x=!1,S){var e=t.unstable_now();B=e;var r=!0;try{e:{p=!1,g&&(g=!1,_(M),M=-1),v=!0;var s=m;try{t:{for(y(e),d=i(h);null!==d&&!(d.expirationTime>e&&D());){var a=d.callback;if("function"==typeof a){d.callback=null,m=d.priorityLevel;var l=a(d.expirationTime<=e);if(e=t.unstable_now(),"function"==typeof l){d.callback=l,y(e),r=!0;break t}d===i(h)&&n(h),y(e)}else n(h);d=i(h)}if(null!==d)r=!0;else{var u=i(c);null!==u&&P(T,u.startTime-e),r=!1}}break e}finally{d=null,m=s,v=!1}}}finally{r?o():S=!1}}}if("function"==typeof w)o=function(){w(U)};else if("undefined"!=typeof MessageChannel){var E=new MessageChannel,R=E.port2;E.port1.onmessage=U,o=function(){R.postMessage(null)}}else o=function(){b(U,0)};function P(e,r){M=b(function(){e(t.unstable_now())},r)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_next=function(e){switch(m){case 1:case 2:case 3:var t=3;break;default:t=m}var r=m;m=t;try{return e()}finally{m=r}},t.unstable_requestPaint=function(){x=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=m;m=e;try{return t()}finally{m=r}},t.unstable_scheduleCallback=function(e,n,s){var a=t.unstable_now();switch(s="object"==typeof s&&null!==s&&"number"==typeof(s=s.delay)&&0<s?a+s:a,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=0x3fffffff;break;case 4:l=1e4;break;default:l=5e3}return l=s+l,e={id:f++,callback:n,priorityLevel:e,startTime:s,expirationTime:l,sortIndex:-1},s>a?(e.sortIndex=s,r(c,e),null===i(h)&&e===i(c)&&(g?(_(M),M=-1):g=!0,P(T,s-a))):(e.sortIndex=l,r(h,e),p||v||(p=!0,S||(S=!0,o()))),e},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(e){var t=m;return function(){var r=m;m=t;try{return e.apply(this,arguments)}finally{m=r}}}},8587:(e,t,r)=>{r.d(t,{r:()=>i});let i=parseInt(r(5339).sPf.replace(/\D+/g,""))},8828:(e,t,r)=>{e.exports=r(3654)},8832:(e,t,r)=>{r.d(t,{C:()=>a});var i=r(5339),n=r(3617),s=r(2049);let o={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new i.Q1f(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class a extends n.o{constructor(e,t=1,r,a){super(),this.strength=t,this.radius=r,this.threshold=a,this.resolution=void 0!==e?new i.I9Y(e.x,e.y):new i.I9Y(256,256),this.clearColor=new i.Q1f(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let l=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new i.nWS(l,u,{type:i.ix0}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new i.nWS(l,u,{type:i.ix0});t.texture.name="UnrealBloomPass.h"+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let r=new i.nWS(l,u,{type:i.ix0});r.texture.name="UnrealBloomPass.v"+e,r.texture.generateMipmaps=!1,this.renderTargetsVertical.push(r),l=Math.round(l/2),u=Math.round(u/2)}this.highPassUniforms=i.LlO.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new i.BKk({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let h=[3,5,7,9,11];l=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(h[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new i.I9Y(1/l,1/u),l=Math.round(l/2),u=Math.round(u/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.uniforms.bloomFactors.value=[1,.8,.6,.4,.2],this.bloomTintColors=[new i.Pq0(1,1,1),new i.Pq0(1,1,1),new i.Pq0(1,1,1),new i.Pq0(1,1,1),new i.Pq0(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=i.LlO.clone(s.Z.uniforms),this.blendMaterial=new i.BKk({uniforms:this.copyUniforms,vertexShader:s.Z.vertexShader,fragmentShader:s.Z.fragmentShader,blending:i.EZo,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new i.Q1f,this._oldClearAlpha=1,this._basic=new i.V9B,this._fsQuad=new n.F(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let r=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(r,n);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(r,n),this.renderTargetsVertical[e].setSize(r,n),this.separableBlurMaterials[e].uniforms.invSize.value=new i.I9Y(1/r,1/n),r=Math.round(r/2),n=Math.round(n/2)}render(e,t,r,i,n){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let s=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),n&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let t=0;t<this.nMips;t++)this._fsQuad.material=this.separableBlurMaterials[t],this.separableBlurMaterials[t].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[t].uniforms.direction.value=a.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[t]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[t].uniforms.colorTexture.value=this.renderTargetsHorizontal[t].texture,this.separableBlurMaterials[t].uniforms.direction.value=a.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[t]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[t];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,n&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?e.setRenderTarget(null):e.setRenderTarget(r),this._fsQuad.render(e),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=s}_getSeparableBlurMaterial(e){let t=[];for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(e*e))/e);return new i.BKk({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new i.I9Y(.5,.5)},direction:{value:new i.I9Y(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new i.BKk({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}a.BlurDirectionX=new i.I9Y(1,0),a.BlurDirectionY=new i.I9Y(0,1)},8945:(e,t,r)=>{r.d(t,{A:()=>i});function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(null,arguments)}},9914:(e,t,r)=>{e.exports=r(6451)}}]);