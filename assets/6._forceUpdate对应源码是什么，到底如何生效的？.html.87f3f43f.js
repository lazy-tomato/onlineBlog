import{_ as n,o as s,c as a,e}from"./app.acfc35a6.js";const t="/onlineBlog/assets/image-20230220215631056.3c5282b9.png",p="/onlineBlog/assets/image-20230220220202625.bf35c5de.png",c="/onlineBlog/assets/image-20230220220309461.88398ad7.png",o={},i=e('<h1 id="this-forceupdate对应源码是什么-到底如何生效的" tabindex="-1"><a class="header-anchor" href="#this-forceupdate对应源码是什么-到底如何生效的" aria-hidden="true">#</a> this.$forceUpdate对应源码是什么，到底如何生效的？</h1><h2 id="start" tabindex="-1"><a class="header-anchor" href="#start" aria-hidden="true">#</a> start</h2><ul><li>最近在编写代码的时候，更新了一个比较复杂的数据，但是对应的视图没有更新。</li><li>使用到了 <code>this.$forceUpdate()</code> ，但是网上的博客总说它有性能损耗问题。查看一下它的源码，学习一下。</li></ul><h2 id="正文" tabindex="-1"><a class="header-anchor" href="#正文" aria-hidden="true">#</a> 正文</h2><p><img src="'+t+`" alt="image-20230220215631056"></p><p><code>对应源码</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$forceUpdate</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 这里的 this 指向的是 组件的实例</span>
        <span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
        <span class="token comment">// 组件实例上有 watcher ，主动触发 update() 方法</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_watcher<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            vm<span class="token punctuation">.</span>_watcher<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+p+`" alt="image-20230220220202625"></p><p><code>对应源码</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token keyword">class</span> <span class="token class-name">Watcher</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> expOrFn<span class="token punctuation">,</span> cb<span class="token punctuation">,</span> options<span class="token punctuation">,</span> isRenderWatcher</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">recordEffectScope</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> 
        <span class="token comment">// if the active effect scope is manually created (not a component scope),</span>
        <span class="token comment">// prioritize it</span>
        activeEffectScope <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>activeEffectScope<span class="token punctuation">.</span>_vm
            <span class="token operator">?</span> activeEffectScope
            <span class="token operator">:</span> vm
                <span class="token operator">?</span> vm<span class="token punctuation">.</span>_scope
                <span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>vm <span class="token operator">=</span> vm<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> isRenderWatcher<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            vm<span class="token punctuation">.</span>_watcher <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+c+`" alt="image-20230220220309461"></p><p><code>对应源码</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Watcher</span> <span class="token punctuation">{</span>
  <span class="token comment">// 主动触发组件的更新</span>
  <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>lazy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>dirty <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>sync<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">queueWatcher</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>查看了上述的代码， <code>this.$forceUpdate()</code> 主要逻辑就是触发当前组件实例的渲染 <code>watcher</code>上的 <code>update</code> 更新方法。</p><p>也就是主动触发整个组件的更新。</p>`,16),l=[i];function u(d,r){return s(),a("div",null,l)}const v=n(o,[["render",u],["__file","6.$forceUpdate对应源码是什么，到底如何生效的？.html.vue"]]);export{v as default};
