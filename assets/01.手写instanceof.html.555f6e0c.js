import{_ as n,o as s,c as a,e}from"./app.acfc35a6.js";const t={},o=e(`<h1 id="_01-手写-instanceof" tabindex="-1"><a class="header-anchor" href="#_01-手写-instanceof" aria-hidden="true">#</a> 01.手写 instanceof</h1><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1. 参数 对应 instanceof 左侧和右侧的数据</span>
<span class="token keyword">function</span> <span class="token function">myInstanceof</span><span class="token punctuation">(</span><span class="token parameter">left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 2.排除基础类型和null</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    <span class="token keyword">typeof</span> left <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span>
    <span class="token keyword">typeof</span> left <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">||</span>
    left <span class="token operator">===</span> <span class="token string">&#39;null&#39;</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 3. 获取左侧的属性的隐式原型</span>
  <span class="token keyword">let</span> proto <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span>

  <span class="token comment">// 4. 沿原型链去寻找</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>proto <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>proto <span class="token operator">===</span> right<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>

    proto <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>proto<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="个人总结" tabindex="-1"><a class="header-anchor" href="#个人总结" aria-hidden="true">#</a> 个人总结</h2><p>手写的前提是，对 <code>instanceof</code> 比较熟悉。 主要逻辑就是：</p><ol><li>排除基础类型和 null。</li><li>沿着左侧属性的原型链向上寻找，看是否等于右侧属性的 prototype。</li></ol>`,6),p=[o];function c(l,i){return s(),a("div",null,p)}const u=n(t,[["render",c],["__file","01.手写instanceof.html.vue"]]);export{u as default};
