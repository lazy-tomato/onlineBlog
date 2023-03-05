import{_ as a,o as n,c as s,e}from"./app.acfc35a6.js";const i={},t=e(`<h1 id="说说箭头函数" tabindex="-1"><a class="header-anchor" href="#说说箭头函数" aria-hidden="true">#</a> 说说箭头函数</h1><h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h2><p>箭头函数是 ES6 中提供的语法。</p><h3 id="_1-写法" tabindex="-1"><a class="header-anchor" href="#_1-写法" aria-hidden="true">#</a> 1. 写法：</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-作用" tabindex="-1"><a class="header-anchor" href="#_2-作用" aria-hidden="true">#</a> 2. 作用：</h3><p>更简短的函数并且不绑定 this</p><h3 id="_3-简写规则" tabindex="-1"><a class="header-anchor" href="#_3-简写规则" aria-hidden="true">#</a> 3. 简写规则：</h3><ol><li>只有形参只有一个，可以不要小括号</li><li>方法体内容，只有一行代码，可以不要大括号</li><li>方法体内容，只有一行代码，可以不要 return，代码执行结果决定 return 内容</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* 1 */</span>
<span class="token comment">// var fn = a =&gt; {</span>
<span class="token comment">//   console.log(a)</span>
<span class="token comment">// }</span>

<span class="token comment">/* 2 */</span>
<span class="token comment">// var fn = (a) =&gt; console.log(a)</span>

<span class="token comment">/* 3 */</span>
<span class="token comment">// var fn = (a) =&gt; a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>箭头函数不绑定 this 关键字，箭头函数中的 this，指向箭头函数定义位置的上下文 this</p>`,11),c=[t];function l(r,d){return n(),s("div",null,c)}const p=a(i,[["render",l],["__file","02.说说箭头函数.html.vue"]]);export{p as default};
