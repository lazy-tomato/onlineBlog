import{_ as e,r as t,o as p,c as o,a as n,b as a,d as c,e as i}from"./app.acfc35a6.js";const l={},r=n("h1",{id:"_1-阅读-设计模式小册收获总结",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-阅读-设计模式小册收获总结","aria-hidden":"true"},"#"),a(" 1.阅读-设计模式小册收获总结")],-1),u=n("h2",{id:"start",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#start","aria-hidden":"true"},"#"),a(" start")],-1),d=n("li",null,"我现在还记得在多年前的一场面试中，有面试官问到我对设计模式(Design Pattern)有没有了解，使我对设计模式有非常深刻的记忆。",-1),k={href:"https://juejin.cn/book/6844733790204461070",target:"_blank",rel:"noopener noreferrer"},h=n("li",null,"希望阅读完这篇小册，让我对设计模式有一个初步的认知。",-1),v=n("li",null,"2023/02/11--14/20 (星期六)",-1),b=i(`<p><strong>设计模式的主要目的：使变化的部分灵活、不变的地方稳定。</strong></p><h2 id="构造器模式" tabindex="-1"><a class="header-anchor" href="#构造器模式" aria-hidden="true">#</a> 构造器模式</h2><p>在 JavaScript 中，我们使用构造函数去初始化对象，就是应用了构造器模式。</p><h2 id="工厂模式" tabindex="-1"><a class="header-anchor" href="#工厂模式" aria-hidden="true">#</a> 工厂模式</h2><p>工厂模式其实就是<strong>将创建对象的过程单独封装</strong>。</p><p>它很像我们去餐馆点菜：比如说点一份西红柿炒蛋，我们不用关心西红柿怎么切、怎么打鸡蛋这些菜品制作过程中的问题，我们只关心摆上桌那道菜。在工厂模式里，我传参这个过程就是点菜，工厂函数里面运转的逻辑就相当于炒菜的厨师和上桌的服务员做掉的那部分工作——这部分工作我们同样不用关心，我们只要能拿到工厂交付给我们的实例结果就行了。</p><p>总结一下：工厂模式的目的，就是为了实现<strong>无脑传参</strong>，就是为了爽！</p><p>工厂模式的简单之处，在于它的概念相对好理解：将创建对象的过程单独封装，这样的操作就是工厂模式。同时它的应用场景也非常容易识别：有构造函数的地方，我们就应该想到简单工厂；在写了大量构造函数、调用了大量的 new、自觉非常不爽的情况下，我们就应该思考是不是可以掏出工厂模式重构我们的代码了。</p><blockquote><p>对 new 进行封装，然后简化传参，批量生成对象。我们吃饭，只需要点菜，至于买菜炒菜买油等逻辑，我们不必关心。</p></blockquote><h2 id="单例模式" tabindex="-1"><a class="header-anchor" href="#单例模式" aria-hidden="true">#</a> 单例模式</h2><p><strong>保证一个类仅有一个实例，并提供一个访问它的全局访问点</strong>，这样的模式就叫做单例模式。</p><blockquote><p>单例模式，保证类仅有一个实例。例如 vuex。 全局多次注册，但是仅有一个实例</p></blockquote><blockquote><p>简单来说，一个类，保证他只有一个实例，而且能够访问到。</p><p>1.if 判断；2.闭包（返回一个函数，函数的返回值是闭包）</p></blockquote><p>手写单例模式</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 静态方法的形式</span>
<span class="token keyword">class</span> <span class="token class-name">singleDog</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token function">getIntance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>singleDog<span class="token punctuation">.</span>instance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      singleDog<span class="token punctuation">.</span>instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">singleDog</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> singleDog<span class="token punctuation">.</span>instance
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> s1 <span class="token operator">=</span> singleDog<span class="token punctuation">.</span><span class="token function">getIntance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> s2 <span class="token operator">=</span> singleDog<span class="token punctuation">.</span><span class="token function">getIntance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">,</span> s1 <span class="token operator">===</span> s2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 闭包的形式</span>
<span class="token keyword">function</span> <span class="token function">singleDog</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

singleDog<span class="token punctuation">.</span>getIntance <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> intance <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>intance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      intance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">singleDog</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> intance
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">var</span> s1 <span class="token operator">=</span> singleDog<span class="token punctuation">.</span><span class="token function">getIntance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> s2 <span class="token operator">=</span> singleDog<span class="token punctuation">.</span><span class="token function">getIntance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">,</span> s1 <span class="token operator">===</span> s2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-原型模式" tabindex="-1"><a class="header-anchor" href="#_3-原型模式" aria-hidden="true">#</a> 3.原型模式</h2><p>原型模式不仅是一种设计模式，它还是一种编程范式（programming paradigm），是 JavaScript 面向对象系统实现的根基。</p><h2 id="_4-装饰器模式" tabindex="-1"><a class="header-anchor" href="#_4-装饰器模式" aria-hidden="true">#</a> 4.装饰器模式</h2><p>装饰器模式，又名装饰者模式。它的定义是“在不改变原对象的基础上，通过对其进行包装拓展，使原有对象可以满足用户的更复杂需求”。</p><h2 id="_5-适配器模式" tabindex="-1"><a class="header-anchor" href="#_5-适配器模式" aria-hidden="true">#</a> 5.适配器模式</h2><p>适配器模式通过把一个类的接口变换成客户端所期待的另一种接口，可以帮我们解决不兼容的问题。</p><blockquote><p>中转的处理函数，然后对接两个接口的不同差异。 例如 axios 中对 XMLHeepRequest/http 的支持。</p></blockquote><h2 id="_6-代理模式" tabindex="-1"><a class="header-anchor" href="#_6-代理模式" aria-hidden="true">#</a> 6. 代理模式</h2><p>代理模式，式如其名——在某些情况下，出于种种考虑/限制，一个对象不能直接访问另一个对象，需要一个第三者（代理）牵线搭桥从而间接达到访问目的，这样的模式就是代理模式。</p><blockquote><p>Proxy</p></blockquote><h2 id="_7-策略模式" tabindex="-1"><a class="header-anchor" href="#_7-策略模式" aria-hidden="true">#</a> 7.策略模式</h2><h2 id="_8-状态机模式" tabindex="-1"><a class="header-anchor" href="#_8-状态机模式" aria-hidden="true">#</a> 8.状态机模式</h2><p>状态模式(State Pattern) ：允许一个对象在其内部状态改变时改变它的行为，对象看起来似乎修改了它的类。 状态模式主要解决的是当控制一个对象状态的条件表达式过于复杂时的情况。把状态的判断逻辑转移到表示不同状态的一系列类中，可以把复杂的判断逻辑简化。</p><p>状态机模式是对行为做封装，策略模式是对算法进行封装。</p><h2 id="_9-观察者模式" tabindex="-1"><a class="header-anchor" href="#_9-观察者模式" aria-hidden="true">#</a> 9.观察者模式</h2><p>观察者模式定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个目标对象，当这个目标对象的状态发生变化时，会通知所有观察者对象，使它们能够自动更新。 这种发布者直接触及到订阅者的操作，叫观察者模式。但如果韩梅梅没有拉群，而是把需求文档上传到了公司统一的需求平台上，需求平台感知到文件的变化、自动通知了每一位订阅了该文件的开发者，这种发布者不直接触及到订阅者、而是由统一的第三方来完成实际的通信的操作，叫做发布-订阅模式。</p><h2 id="_10-迭代器模式" tabindex="-1"><a class="header-anchor" href="#_10-迭代器模式" aria-hidden="true">#</a> 10.迭代器模式</h2><p>迭代器模式提供一种方法顺序访问一个聚合对象中的各个元素，而又不暴露该对象的内部表示。</p>`,34);function _(m,g){const s=t("ExternalLinkIcon");return p(),o("div",null,[r,u,n("ul",null,[d,n("li",null,[a("今天学习一下。修言编写的 "),n("a",k,[a("《JavaScript 设计模式核⼼原理与应⽤实践》"),c(s)]),a("，说说感受，写写自己的笔记。")]),h,v]),b])}const x=e(l,[["render",_],["__file","1.阅读-设计模式小册收获总结.html.vue"]]);export{x as default};
