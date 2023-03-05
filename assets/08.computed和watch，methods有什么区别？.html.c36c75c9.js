import{_ as e,o as a,c as t,e as d}from"./app.acfc35a6.js";const h={},c=d('<h1 id="_08-computed-和-watch-methods-有什么区别" tabindex="-1"><a class="header-anchor" href="#_08-computed-和-watch-methods-有什么区别" aria-hidden="true">#</a> 08.computed 和 watch，methods 有什么区别？</h1><h2 id="相同点" tabindex="-1"><a class="header-anchor" href="#相同点" aria-hidden="true">#</a> 相同点</h2><p>都是 Vue 中的配置项</p><h2 id="不同点" tabindex="-1"><a class="header-anchor" href="#不同点" aria-hidden="true">#</a> 不同点</h2><h3 id="computed" tabindex="-1"><a class="header-anchor" href="#computed" aria-hidden="true">#</a> computed</h3><ul><li>比较关注结果</li><li>不支持异步</li><li>只有当依赖的数据改变，才会更新</li></ul><h3 id="watch" tabindex="-1"><a class="header-anchor" href="#watch" aria-hidden="true">#</a> watch</h3><ul><li>比较关注过程；</li><li>支持异步</li></ul><h3 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> methods</h3><ul><li>用来定义方法的区域，定义的方法需要调用触发，不具备缓存性</li></ul><h2 id="别人的总结" tabindex="-1"><a class="header-anchor" href="#别人的总结" aria-hidden="true">#</a> 别人的总结</h2><p>对于 Computed：</p><p>它支持缓存，只有依赖的数据发生了变化，才会重新计算 不支持异步，当 Computed 中有异步操作时，无法监听数据的变化 如果一个属性是由其他属性计算而来的，这个属性依赖其他的属性，一般会使用 computed 如果 computed 属性的属性值是函数，那么默认使用 get 方法，函数的返回值就是属性的属性值；在 computed 中，属性有一个 get 方法和一个 set 方法，当数据发生变化时，会调用 set 方法。</p><p>对于 Watch：</p><p>它不支持缓存，当一个属性发生变化时，它就会触发相应的操作 支持异步监听 监听的函数接收两个参数，第一个参数是最新的值，第二个是变化之前的值 监听数据必须是 data 中声明的或者父组件传递过来的 props 中的数据，当发生变化时，会触发其他操作 函数有两个的参数：</p><p>immediate：组件加载立即触发回调函数 deep：深度监听，发现数据内部的变化，在复杂数据类型中使用，例如数组中的对象发生变化</p>',16),i=[c];function r(o,s){return a(),t("div",null,i)}const n=e(h,[["render",r],["__file","08.computed和watch，methods有什么区别？.html.vue"]]);export{n as default};
