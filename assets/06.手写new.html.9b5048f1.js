import{_ as n,o as s,c as a,e}from"./app.acfc35a6.js";const t={},o=e(`<h1 id="new" tabindex="-1"><a class="header-anchor" href="#new" aria-hidden="true">#</a> new</h1><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 手写 new
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">fn</span> 需要 new 的函数
 */</span>

<span class="token keyword">function</span> <span class="token function">myNew</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> fn <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>

  <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> fn<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>

  <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token keyword">typeof</span> result <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">?</span> result <span class="token operator">:</span> obj
<span class="token punctuation">}</span>

<span class="token comment">/* 测试代码 */</span>
<span class="token comment">// function Tomato(name) {</span>
<span class="token comment">//   this.name = name</span>
<span class="token comment">// }</span>
<span class="token comment">// Tomato.prototype.say = function () {</span>
<span class="token comment">//   console.log(&#39;我叫&#39;, this.name)</span>
<span class="token comment">// }</span>

<span class="token comment">// var t = myNew(Tomato, &#39;lazy&#39;)</span>

<span class="token comment">// t.say()</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="番茄的思考" tabindex="-1"><a class="header-anchor" href="#番茄的思考" aria-hidden="true">#</a> 番茄的思考</h2><ul><li>自己手写了一遍，掌握了 new 实质，手写起来不难，但是需要注意:</li></ul><ol><li>参数的处理；</li><li>对象隐式原型的设置；</li></ol>`,6),c=[o];function p(i,l){return s(),a("div",null,c)}const u=n(t,[["render",p],["__file","06.手写new.html.vue"]]);export{u as default};
