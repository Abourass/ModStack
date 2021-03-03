var G=Object.defineProperty;var J=(e,t)=>{for(var n in t)G(e,n,{get:t[n],enumerable:!0})};var k={};J(k,{MODE:()=>X,NODE_ENV:()=>Y,SSR:()=>Z});var X="production",Y="production",Z=!1;function l(){}function U(e){return e()}function V(){return Object.create(null)}function b(e){e.forEach(U)}function ee(e){return typeof e=="function"}function g(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function te(e){return Object.keys(e).length===0}function f(e,t,n){e.insertBefore(t,n||null)}function m(e){e.parentNode.removeChild(e)}function d(e){return document.createElement(e)}function ne(e){return document.createTextNode(e)}function M(){return ne(" ")}function _(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function se(e){return Array.from(e.childNodes)}var x;function $(e){x=e}function ie(){if(!x)throw new Error("Function called outside component initialization");return x}function E(e){ie().$$.on_mount.push(e)}var h=[],F=[],y=[],z=[],ae=Promise.resolve(),A=!1;function ue(){A||(A=!0,ae.then(B))}function C(e){y.push(e)}var N=!1,P=new Set;function B(){if(!N){N=!0;do{for(let e=0;e<h.length;e+=1){let t=h[e];$(t),re(t.$$)}for($(null),h.length=0;F.length;)F.pop()();for(let e=0;e<y.length;e+=1){let t=y[e];P.has(t)||(P.add(t),t())}y.length=0}while(h.length);for(;z.length;)z.pop()();A=!1,N=!1,P.clear()}}function re(e){if(e.fragment!==null){e.update(),b(e.before_update);let t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(C)}}var q=new Set,oe;function w(e,t){e&&e.i&&(q.delete(e),e.i(t))}function I(e,t,n,s){if(e&&e.o){if(q.has(e))return;q.add(e),oe.c.push(()=>{q.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}}function O(e){e&&e.c()}function j(e,t,n){let{fragment:s,on_mount:u,on_destroy:o,after_update:i}=e.$$;s&&s.m(t,n),C(()=>{let r=u.map(U).filter(ee);o?o.push(...r):b(r),e.$$.on_mount=[]}),i.forEach(C)}function S(e,t){let n=e.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function le(e,t){e.$$.dirty[0]===-1&&(h.push(e),ue(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function v(e,t,n,s,u,o,i=[-1]){let r=x;$(e);let a=e.$$={fragment:null,ctx:null,props:o,update:l,not_equal:u,bound:V(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(r?r.$$.context:[]),callbacks:V(),dirty:i,skip_bound:!1},D=!1;if(a.ctx=n?n(e,t.props||{},(c,H,...L)=>{let T=L.length?L[0]:H;return a.ctx&&u(a.ctx[c],a.ctx[c]=T)&&(!a.skip_bound&&a.bound[c]&&a.bound[c](T),D&&le(e,c)),H}):[],a.update(),D=!0,b(a.before_update),a.fragment=s?s(a.ctx):!1,t.target){if(t.hydrate){let c=se(t.target);a.fragment&&a.fragment.l(c),c.forEach(m)}else a.fragment&&a.fragment.c();t.intro&&w(e.$$.fragment),j(e,t.target,t.anchor),B()}$(r)}var p=class{$destroy(){S(this,1),this.$destroy=l}$on(t,n){let s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{let u=s.indexOf(n);u!==-1&&s.splice(u,1)}}$set(t){this.$$set&&!te(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}};function ce(e){let t;return{c(){t=d("div"),t.innerHTML='<div class="rounded-xl p-6 pt-4 w-240 flex justify-center bg-white shadow-lg svelte-1v4o7qk"><span class="text-center font-modern text-5xl svelte-1v4o7qk"><small>The</small> Modern Farm</span></div>',_(t,"class","w-5/6 mx-auto flex justify-center")},m(n,s){f(n,t,s)},p:l,i:l,o:l,d(n){n&&m(t)}}}function me(e){"use strict";return[]}var K=class extends p{constructor(t){super();v(this,t,me,ce,g,{})}},Q=K;function fe(e){let t,n,s,u,o;return n=new Q({}),{c(){t=d("div"),O(n.$$.fragment),s=M(),u=d("div"),u.innerHTML=`<div class="w-1/3 mx-auto pt-2.5"><p style="color: rgb(107 107 123)">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue enim, pretium eu ante at, facilisis finibus massa. Phasellus eu ligula orci. Pellentesque eu erat arcu. Proin nec eros sed leo finibus lobortis. Duis mattis ex ut interdum eleifend. Etiam luctus est a justo mattis, in iaculis sapien pharetra. Ut vestibulum est sed auctor scelerisque. In nec aliquet augue. Sed sagittis eros eu sodales mollis.

      Maecenas eu sapien vitae neque tincidunt iaculis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla ipsum dolor, mollis sed egestas ut, vehicula sit amet orci. Curabitur dignissim vehicula libero. Cras mollis magna vitae pharetra dictum. In hac habitasse platea dictumst. Ut non convallis arcu. Maecenas molestie elementum ligula ut cursus.

      Etiam scelerisque massa sem, et congue lorem aliquet efficitur. Sed commodo et massa vel congue. Curabitur vitae feugiat quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean condimentum molestie ipsum, ac mattis sapien feugiat sed. Proin tincidunt dapibus pharetra. Cras in nunc bibendum, elementum metus at, interdum quam. Duis vel feugiat ante. Nunc feugiat risus ipsum, eu accumsan magna molestie ac. Pellentesque convallis elementum elit, eu aliquet leo feugiat sit amet. Maecenas tristique eros id nulla venenatis porta. Vivamus varius dui ut diam feugiat, laoreet egestas urna elementum. Ut ultrices eros sagittis ligula sodales, ac egestas nulla lobortis. Duis commodo interdum nisi, nec volutpat eros interdum eget. Praesent quam quam, vestibulum eget porta vitae, posuere sit amet libero.

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere tortor quis ligula maximus luctus. Nulla luctus sed lectus sed dignissim. Curabitur elit augue, hendrerit dapibus velit vel, lacinia faucibus diam. Quisque ultrices, dolor quis feugiat efficitur, erat diam hendrerit elit, at rhoncus elit magna a dolor. Maecenas ultricies porta mauris, at rhoncus ante pellentesque et. Praesent at sapien felis. Aenean ligula nisi, mattis nec mauris efficitur, iaculis tempor enim. Sed at elementum mi, et tempus ante.

      Suspendisse potenti. Donec suscipit sagittis nisl at interdum. Ut sapien ante, elementum non scelerisque id, sodales in felis. Mauris ut est vel massa iaculis varius id viverra ex. Vestibulum faucibus placerat sapien, ac suscipit lacus faucibus ac. Proin et lacinia nisi, vel tincidunt justo. Sed vitae vestibulum mauris.</p></div>`,_(t,"class","bg-gray-100 ")},m(i,r){f(i,t,r),j(n,t,null),f(i,s,r),f(i,u,r),o=!0},p:l,i(i){o||(w(n.$$.fragment,i),o=!0)},o(i){I(n.$$.fragment,i),o=!1},d(i){i&&m(t),S(n),i&&m(s),i&&m(u)}}}function de(e){let t=0;return E(()=>{let n=setInterval(()=>t+=Math.floor(1e3/7),1e3);return()=>{clearInterval(n)}}),[]}var R=class extends p{constructor(t){super();v(this,t,de,fe,g,{})}},W=R;import.meta.env=k;var pe=new W({target:document.body}),ge=pe;export{ge as default};