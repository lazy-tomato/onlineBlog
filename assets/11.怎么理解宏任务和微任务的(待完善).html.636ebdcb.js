import{_ as e,o as s,c as t,e as i}from"./app.acfc35a6.js";const n={},a=i(`<h1 id="怎么理解宏任务和微任务的" tabindex="-1"><a class="header-anchor" href="#怎么理解宏任务和微任务的" aria-hidden="true">#</a> 怎么理解宏任务和微任务的</h1><p>宏任务与微任务都是异步任务，都是在同一个任务队列中，主要区别在于它们的执行顺序 在异步任务队列下 ，又分为宏任务队列与微任务队列 当一个宏任务执行结束之前，会在微任务队列执行栈中查找是否有微任务，如果有则执行，没有则开启一个新的宏任务，所以微任务总是在宏任务结束之前执行的 宏任务</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>整体 script

setTimeout

setInterval

setImmediate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>微任务</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>promise
MutationObserver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>js 是单线程，同一个时间只能做一件事 为了协调事件、用户交互、脚本、UI 渲染和网络处理等行为，防止主线程阻塞，Event Loop 的方案应用而生 宏任务队列可以有多个，微任务队列只有一个 宏任务（task）：就是 JS 内部（任务队列里）的任务， 严格按照时间顺序压栈和执行 。 如 setTimeOut、setInverter、setImmediate 、 MessageChannel 等 微任务（Microtask ）：通常来说就是需要在 当前 任务 执行结束后立即执行的任务 ， 例如需要对一系列的任务做出回应，或者是需要异步的执行任务而又不需要分配一个新 的 任务 ，这样便可以减小一点性能的开销。 宏任务包含</p><p>script(整体代码) setTimeout setInterval http 回调 I/O UI 交互事件(事件回调) postMessage MessageChannel setImmediate(Node.js 环境) 微任务包含：</p><p>Promise.then Object.observe MutationObserver process.nextTick(Node.js 环境) 运行机制</p><p>image-20220424134832494</p><p>在执行栈中执行一个宏任务。 执行过程中遇到微任务，将微任务添加到微任务队列中。 当前宏任务执行完毕，立即执行微任务队列中的任务。 当前微任务队列中的任务执行完毕，检查渲染，GUI 线程接管渲染。 渲染完毕后，js 线程接管，开启下一次事件循环，执行下一次宏任务（事件队列中取）。</p>`,10),d=[a];function r(l,c){return s(),t("div",null,d)}const v=e(n,[["render",r],["__file","11.怎么理解宏任务和微任务的(待完善).html.vue"]]);export{v as default};
