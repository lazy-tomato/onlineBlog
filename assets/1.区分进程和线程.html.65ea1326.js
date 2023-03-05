import{_ as a,r as s,o as d,c as l,a as e,b as n,d as r,e as t}from"./app.acfc35a6.js";const c="/onlineBlog/assets/image-20221208180635294.d6600444.png",o={},u=t(`<h1 id="区分进程和线程" tabindex="-1"><a class="header-anchor" href="#区分进程和线程" aria-hidden="true">#</a> 区分进程和线程</h1><h2 id="正文" tabindex="-1"><a class="header-anchor" href="#正文" aria-hidden="true">#</a> 正文</h2><p>线程和进程区分不清，看看下面这个形象的比喻：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- 进程是一个工厂，工厂有它的独立资源

- 工厂之间相互独立

- 线程是工厂中的工人，多个工人协作完成任务

- 工厂内有一个或多个工人

- 工人之间共享空间
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再完善完善概念：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- 工厂的资源 -&gt; 系统分配的内存（独立的一块内存）

- 工厂之间的相互独立 -&gt; 进程之间相互独立

- 多个工人协作完成任务 -&gt; 多个线程在进程中协作完成任务

- 工厂内有一个或多个工人 -&gt; 一个进程由一个或多个线程组成

- 工人之间共享空间 -&gt; 同一进程下的各个线程之间共享程序的内存空间（包括代码段、数据集、堆等）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后再巩固下：</p><p>如果是 windows 电脑中，可以打开任务管理器，可以看到有一个后台进程列表。对，那里就是查看进程的地方，而且可以看到每个进程的内存资源信息以及 cpu 占有率。</p><p><img src="`+c+'" alt="image-20221208180635294"></p><p>所以，应该更容易理解了：进程是 cpu 资源分配的最小单位（系统会给它分配内存）</p><p>最后，再用较为官方的术语描述一遍：</p><ul><li>进程是 cpu 资源分配的最小单位（是能拥有资源和独立运行的最小单位）</li><li>线程是 cpu 调度的最小单位（线程是建立在进程的基础上的一次程序运行单位，一个进程中可以有多个线程）</li></ul><h2 id="tips" tabindex="-1"><a class="header-anchor" href="#tips" aria-hidden="true">#</a> tips</h2><ul><li>不同进程之间也可以通信，不过代价较大</li><li>现在，一般通用的叫法：<strong>单线程与多线程，都是指在一个进程内的单和多。（所以核心还是得属于一个进程才行）</strong></li></ul><h2 id="来源" tabindex="-1"><a class="header-anchor" href="#来源" aria-hidden="true">#</a> 来源</h2>',15),v={href:"https://segmentfault.com/a/1190000012925872",target:"_blank",rel:"noopener noreferrer"};function m(p,h){const i=s("ExternalLinkIcon");return d(),l("div",null,[u,e("p",null,[n("本文来源："),e("a",v,[n("从浏览器多进程到 JS 单线程，JS 运行机制最全面的一次梳理"),r(i)])])])}const b=a(o,[["render",m],["__file","1.区分进程和线程.html.vue"]]);export{b as default};
