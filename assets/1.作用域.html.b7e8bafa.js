import{_ as n,o as a,c as s,e}from"./app.acfc35a6.js";const i={},t=e(`<h1 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h1><h2 id="正文" tabindex="-1"><a class="header-anchor" href="#正文" aria-hidden="true">#</a> 正文</h2><ol><li>理解 <ul><li>就是一块地盘，一个代码段所在的区域</li><li>它是静态的（相对于上下文对象），在编写代码的时候就确定了（函数定义的时候就已经确定了，而不是函数调用时）</li></ul></li><li>分类 <ul><li>全局</li><li>函数</li><li>块作用域（es6）</li></ul></li><li>作用 <ul><li>隔离变量，不同作用域下同名变量不会有冲突</li></ul></li></ol><h2 id="计算规律" tabindex="-1"><a class="header-anchor" href="#计算规律" aria-hidden="true">#</a> 计算规律</h2><p>作用域的数量 ，定义几个函数+1（全局作用域）</p><p>执行上下文的数量 ，执行了几次函数+1（全局执行上下文）</p><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>题目 1</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">10</span>

<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token parameter">f</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">20</span>
  <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">show</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>题目 2</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">fn2</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fn2<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
obj<span class="token punctuation">.</span><span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="题目答案" tabindex="-1"><a class="header-anchor" href="#题目答案" aria-hidden="true">#</a> 题目答案</h2><h3 id="题目一" tabindex="-1"><a class="header-anchor" href="#题目一" aria-hidden="true">#</a> 题目一</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 考点 ： 作用域是在代码编写完之后就已经确定了的</span>

<span class="token comment">// 10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="题目二" tabindex="-1"><a class="header-anchor" href="#题目二" aria-hidden="true">#</a> 题目二</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 考点： es6之前 只有函数有作用域，</span>

<span class="token comment">// fn对应的函数</span>
<span class="token comment">// 报错  fn2 没有定义</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="end" tabindex="-1"><a class="header-anchor" href="#end" aria-hidden="true">#</a> End</h2><ul><li>JS 中作用域是静态的，在函数定义完毕后，就已经确定了</li></ul>`,18),c=[t];function l(p,o){return a(),s("div",null,c)}const d=n(i,[["render",l],["__file","1.作用域.html.vue"]]);export{d as default};
