import{_ as n,a as s}from"./image-20221127203742785.14e0bcda.js";import{_ as a,o as e,c as t,e as i}from"./app.acfc35a6.js";const p={},o=i('<h1 id="什么是闭包" tabindex="-1"><a class="header-anchor" href="#什么是闭包" aria-hidden="true">#</a> 什么是闭包</h1><h2 id="_1-概念" tabindex="-1"><a class="header-anchor" href="#_1-概念" aria-hidden="true">#</a> 1. 概念</h2><p>闭包（closure）指有权访问另一个函数作用域中变量的<code>函数</code>。---《JavaScript 高级程设计》</p><blockquote><p>简单理解就是一个函数。</p></blockquote><img src="'+n+`" alt="image-20221127194022360" style="zoom:30%;"><h2 id="_2-如何产生闭包" tabindex="-1"><a class="header-anchor" href="#_2-如何产生闭包" aria-hidden="true">#</a> 2. 如何产生闭包？</h2><p>当一个嵌套的内部函数引用了嵌套的外部函数的变量（函数）时，就产生了闭包.</p><h2 id="_3-闭包到底是什么" tabindex="-1"><a class="header-anchor" href="#_3-闭包到底是什么" aria-hidden="true">#</a> 3. 闭包到底是什么？</h2><h3 id="_3-1-代码" tabindex="-1"><a class="header-anchor" href="#_3-1-代码" aria-hidden="true">#</a> 3.1 代码：</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">debugger</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">123</span>
  <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">123</span>

  <span class="token keyword">function</span> <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>浏览器 debugger 中的截图：</code></p><p><img src="`+s+`" alt="image-20221127203742785"></p><h3 id="_3-2-思考" tabindex="-1"><a class="header-anchor" href="#_3-2-思考" aria-hidden="true">#</a> 3.2 思考：</h3><ul><li><p>可以在浏览器的 debugger 查看， <code>Closure</code></p><ul><li><p>理解一：闭包是嵌套的内部函数</p></li><li><p>理解二：包含被引用变量（函数）的对象</p><blockquote><p>注意：闭包存在于嵌套的内部函数中</p></blockquote></li></ul></li></ul><blockquote><p>看到浏览器的调试工具：在外层函数的作用域中，存储着内部函数，内部函数身上有一个内部属性 <code>[[Scopes]]</code> 里面存储着 <code>Closure</code>。</p></blockquote><h3 id="_3-3-产生闭包的条件" tabindex="-1"><a class="header-anchor" href="#_3-3-产生闭包的条件" aria-hidden="true">#</a> 3.3 产生闭包的条件？</h3><ol><li><p>函数嵌套</p></li><li><p>内部函数引用了外部函数的数据（变量/函数）</p></li><li><p>调用了外部函数。</p></li></ol><h2 id="_4-闭包的思考" tabindex="-1"><a class="header-anchor" href="#_4-闭包的思考" aria-hidden="true">#</a> 4. 闭包的思考</h2><h3 id="_4-1-闭包的作用" tabindex="-1"><a class="header-anchor" href="#_4-1-闭包的作用" aria-hidden="true">#</a> 4.1 闭包的作用</h3><ul><li><p>使函数内部的变量在函数执行完后，仍然存活在内存中（延长了局部变量的生命周期）</p></li><li><p>让函数外部可以操作（读写）到函数内部的数据（变量/函数）</p></li></ul><h3 id="_4-2-闭包的应用" tabindex="-1"><a class="header-anchor" href="#_4-2-闭包的应用" aria-hidden="true">#</a> 4.2 闭包的应用</h3><ol><li>将函数作为另一个函数的返回值</li><li>将函数作为实参传递给另一个函数调用</li></ol><h4 id="模块化中的使用" tabindex="-1"><a class="header-anchor" href="#模块化中的使用" aria-hidden="true">#</a> 模块化中的使用</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">window</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;tomato777&#39;</span>
  <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">foo() </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>str<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">bar() </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>str<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token function">otherFun</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">otherFun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;otherFun()&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  window<span class="token punctuation">.</span>myModule <span class="token operator">=</span> <span class="token punctuation">{</span> foo<span class="token punctuation">,</span> bar <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;myModule&#39;</span><span class="token punctuation">,</span> myModule<span class="token punctuation">)</span>
<span class="token comment">// {foo: ƒ, bar: ƒ}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;myModule.str&#39;</span><span class="token punctuation">,</span> myModule<span class="token punctuation">.</span>str<span class="token punctuation">)</span>
<span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>可以保证变量私有，但是又可以通过我们自己暴露的方法去修改这个变量。</p></blockquote><p>for 循环中使用的场景：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">item</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">/* 
5
5
5
5
5

因为 arr 中存储的函数中的i都是使用的for循环中的\`var i\`


解决方案1： var改为let

解决方案2： 利用闭包，在赋值的代码外层包裹一层函数，形成闭包。代码如下
var arr = []
for (var i = 0; i &lt; 5; i++) {
  ;((i) =&gt; {
    arr[i] = function fn() {
      console.log(i)
    }
  })(i)
}

arr.forEach((item) =&gt; {
  item()
})


*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-闭包的生命周期" tabindex="-1"><a class="header-anchor" href="#_4-3-闭包的生命周期" aria-hidden="true">#</a> 4.3 闭包的生命周期</h3><ol><li>产生：嵌套内部函数定义执行完毕之后就产生了（不是在调用）</li><li>死亡：在嵌套的内部函数成为垃圾对象时</li></ol><h3 id="_4-4-闭包优缺点" tabindex="-1"><a class="header-anchor" href="#_4-4-闭包优缺点" aria-hidden="true">#</a> 4.4 闭包优缺点</h3><ol><li>缺点 <ul><li>函数执行完后，函数内的局部变量没有释放，占用内存时间会变长</li><li>容易造成内存泄露</li></ul></li><li>解决 <ul><li>能不用就不用</li><li>及时释放</li></ul></li></ol><h2 id="end" tabindex="-1"><a class="header-anchor" href="#end" aria-hidden="true">#</a> End</h2><p><strong>说说番茄我自己的想法，参考即可。</strong></p><p>闭包可以说，是从我开始学习 JavaScript 的那天开始，就频繁遇到的名词。</p><p><strong><em>1. 有权访问另一个函数作用域中变量的<code>函数</code></em></strong></p><p><strong><em>2. 闭包是一种引用关系，该引用存在于内部函数中，引用的是外部函数中的局部变量。</em></strong></p><blockquote><ul><li>用我自己的理解来说，闭包就是一个对象，存储在内部函数中，记录了内部函数对外部函数的局部变量的引用。实现了，当外部函数执行完毕以后，在内部函数中，依旧可以访问到外部函数中的局部变量。</li><li>当然，理解成函数，理解成对象，本质上无差别。</li></ul></blockquote>`,37),c=[o];function l(u,r){return e(),t("div",null,c)}const v=a(p,[["render",l],["__file","01.说说闭包.html.vue"]]);export{v as default};
