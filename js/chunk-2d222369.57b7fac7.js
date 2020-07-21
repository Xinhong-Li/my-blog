(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d222369"],{ce3d:function(s){s.exports=JSON.parse('{"created_at":"2020-07-21T23:15:53+08:00","excerpt":"Eight-puzzle, which is also called \\"Nine grids\\", comes from an old game.","html":"<p>Eight-puzzle, which is also called \\"Nine grids\\", comes from an old game.  </p>\\n<p>In this game, you are given a 3 by 3 board and 8 tiles. The tiles  are numbered from 1 to 8 and each covers a grid. As you see, there is a  blank grid which can be represented as an \'X\'. Tiles in grids having a  common edge with the blank grid can be moved into that blank grid. This  operation leads to an exchange of \'X\' with one tile.  </p>\\n<p>We use the symbol \'r\' to represent exchanging \'X\' with the tile on  its right side, and \'l\' for the left side, \'u\' for the one above it, \'d\' for the one below it.    </p>\\n<p>A state of the board can be represented by a string S using the rule showed below. </p>\\n<table class=\\"codehilitetable\\"><tr><td class=\\"linenos\\"><div class=\\"linenodiv\\"><pre>1\\n2\\n3</pre></div></td><td class=\\"code\\"><div class=\\"codehilite\\"><pre><span></span><code><span class=\\"err\\">1 2 3</span>\\n<span class=\\"err\\">4 x 5</span>\\n<span class=\\"err\\">6 7 8</span>\\n</code></pre></div>\\n</td></tr></table>\\n\\n<p>is represented by \\"1234X5678\\". </p>\\n<p>The problem is to operate an operation list of \'r\', \'u\', \'l\', \'d\'  to turn the state of the board from state A to state B. You are required to find the result which meets the following constrains: </p>\\n<ol>\\n<li>\\n<p>It is of minimum length among all possible solutions. </p>\\n</li>\\n<li>\\n<p>It is the <strong>lexicographically smallest</strong> one of all solutions of minimum length.  </p>\\n</li>\\n</ol>\\n<h2 id=\\"input\\">Input</h2>\\n<p>The first line is T (T &lt;= 200), which means the number of test cases of this problem.</p>\\n<p>The input of each test case consists of two lines with state A occupying the first line and state B on the second line.</p>\\n<p>It is guaranteed that there is an available solution from state A to B. </p>\\n<h2 id=\\"output\\">Output</h2>\\n<p>For each test case two lines are expected.  </p>\\n<p>The first line is in the format of \\"Case x: d\\", in which x is the  case number counted from one, d is the minimum length of operation list  you need to turn A to B.</p>\\n<p>S is the operation list meeting the constraints and it should be showed on the second line. </p>\\n<h2 id=\\"sample-input\\">Sample Input</h2>\\n<table class=\\"codehilitetable\\"><tr><td class=\\"linenos\\"><div class=\\"linenodiv\\"><pre>1\\n2\\n3\\n4\\n5</pre></div></td><td class=\\"code\\"><div class=\\"codehilite\\"><pre><span></span><code><span class=\\"err\\">2</span>\\n<span class=\\"err\\">12X453786</span>\\n<span class=\\"err\\">12345678X</span>\\n<span class=\\"err\\">564178X23</span>\\n<span class=\\"err\\">7568X4123</span>\\n</code></pre></div>\\n</td></tr></table>\\n\\n<h2 id=\\"sample-output\\">Sample Output</h2>\\n<table class=\\"codehilitetable\\"><tr><td class=\\"linenos\\"><div class=\\"linenodiv\\"><pre>1\\n2\\n3\\n4</pre></div></td><td class=\\"code\\"><div class=\\"codehilite\\"><pre><span></span><code><span class=\\"err\\">Case 1: 2</span>\\n<span class=\\"err\\">dd</span>\\n<span class=\\"err\\">Case 2: 8</span>\\n<span class=\\"err\\">urrulldr</span>\\n</code></pre></div>\\n</td></tr></table>\\n\\n<h2 id=\\"solution\\">Solution</h2>\\n<p>类似 <a href=\\"hdu-1043\\">HDU-1043 Eight</a>，不过这次的查询是不同状态之间。直接做会TLE。但注意到给定状态中的数字（123等等）的顺序信息是不必要的，本质区别在于那个可移动的X。于是，一个巧妙的思路是将字母替换掉把A状态映射到9个状态之一（X出现在位置0, 1, ..., 8上），然后预处理这九个状态即可。查询时把A映射到其中一个，直接输出预处理好的结果即可。</p>\\n<table class=\\"codehilitetable\\"><tr><td class=\\"linenos\\"><div class=\\"linenodiv\\"><pre>  1\\n  2\\n  3\\n  4\\n  5\\n  6\\n  7\\n  8\\n  9\\n 10\\n 11\\n 12\\n 13\\n 14\\n 15\\n 16\\n 17\\n 18\\n 19\\n 20\\n 21\\n 22\\n 23\\n 24\\n 25\\n 26\\n 27\\n 28\\n 29\\n 30\\n 31\\n 32\\n 33\\n 34\\n 35\\n 36\\n 37\\n 38\\n 39\\n 40\\n 41\\n 42\\n 43\\n 44\\n 45\\n 46\\n 47\\n 48\\n 49\\n 50\\n 51\\n 52\\n 53\\n 54\\n 55\\n 56\\n 57\\n 58\\n 59\\n 60\\n 61\\n 62\\n 63\\n 64\\n 65\\n 66\\n 67\\n 68\\n 69\\n 70\\n 71\\n 72\\n 73\\n 74\\n 75\\n 76\\n 77\\n 78\\n 79\\n 80\\n 81\\n 82\\n 83\\n 84\\n 85\\n 86\\n 87\\n 88\\n 89\\n 90\\n 91\\n 92\\n 93\\n 94\\n 95\\n 96\\n 97\\n 98\\n 99\\n100\\n101\\n102\\n103\\n104\\n105\\n106\\n107\\n108\\n109\\n110\\n111\\n112\\n113\\n114\\n115\\n116\\n117\\n118\\n119\\n120</pre></div></td><td class=\\"code\\"><div class=\\"codehilite\\"><pre><span></span><code><span class=\\"cp\\">#include</span> <span class=\\"cpf\\">&lt;cstdio&gt;</span><span class=\\"cp\\"></span>\\n<span class=\\"cp\\">#include</span> <span class=\\"cpf\\">&lt;cstring&gt;</span><span class=\\"cp\\"></span>\\n<span class=\\"cp\\">#include</span> <span class=\\"cpf\\">&lt;algorithm&gt;</span><span class=\\"cp\\"></span>\\n<span class=\\"k\\">using</span> <span class=\\"k\\">namespace</span> <span class=\\"n\\">std</span><span class=\\"p\\">;</span>\\n\\n<span class=\\"k\\">const</span> <span class=\\"kt\\">int</span> <span class=\\"n\\">n</span> <span class=\\"o\\">=</span> <span class=\\"mi\\">9</span><span class=\\"p\\">,</span> <span class=\\"n\\">nperm</span> <span class=\\"o\\">=</span> <span class=\\"mi\\">362880</span><span class=\\"p\\">;</span>  <span class=\\"c1\\">// 9! = 362880</span>\\n<span class=\\"k\\">const</span> <span class=\\"kt\\">int</span> <span class=\\"n\\">dir</span><span class=\\"p\\">[</span><span class=\\"mi\\">9</span><span class=\\"p\\">][</span><span class=\\"mi\\">4</span><span class=\\"p\\">]</span> <span class=\\"o\\">=</span> <span class=\\"p\\">{</span>\\n  <span class=\\"p\\">{</span><span class=\\"mi\\">3</span><span class=\\"p\\">,</span> <span class=\\"o\\">-</span><span class=\\"mi\\">1</span><span class=\\"p\\">,</span> <span class=\\"mi\\">1</span><span class=\\"p\\">,</span> <span class=\\"o\\">-</span><span class=\\"mi\\">1</span><span class=\\"p\\">},</span> <span class=\\"p\\">{</span><span class=\\"mi\\">4</span><span class=\\"p\\">,</span> <span class=\\"mi\\">0</span><span class=\\"p\\">,</span> <span class=\\"mi\\">2</span><span class=\\"p\\">,</span> <span class=\\"o\\">-</span><span class=\\"mi\\">1</span><span class=\\"p\\">},</span> <span class=\\"p\\">{</span><span class=\\"mi\\">5</span><span class=\\"p\\">,</span> <span class=\\"mi\\">1</span><span class=\\"p\\">,</span> <span class=\\"o\\">-</span><span class=\\"mi\\">1</span><span class=\\"p\\">,</span> <span class=\\"o\\">-</span><span class=\\"mi\\">1</span><span class=\\"p\\">},</span>\\n  <span class=\\"p\\">{</span><span class=\\"mi\\">6</span><span class=\\"p\\">,</span> <span class=\\"o\\">-</span><span class=\\"mi\\">1</span><span class=\\"p\\">,</span> <span class=\\"mi\\">4</span><span class=\\"p\\">,</span> <span class=\\"mi\\">0</span><span class=\\"p\\">},</span> <span class=\\"p\\">{</span><span class=\\"mi\\">7</span><span class=\\"p\\">,</span> <span class=\\"mi\\">3</span><span class=\\"p\\">,</span> <span class=\\"mi\\">5</span><span class=\\"p\\">,</span> <span class=\\"mi\\">1</span><span class=\\"p\\">},</span> <span class=\\"p\\">{</span><span class=\\"mi\\">8</span><span class=\\"p\\">,</span> <span class=\\"mi\\">4</span><span class=\\"p\\">,</span> <span class=\\"o\\">-</span><span class=\\"mi\\">1</span><span class=\\"p\\">,</span> <span class=\\"mi\\">2</span><span class=\\"p\\">},</span>\\n  <span class=\\"p\\">{</span><span class=\\"o\\">-</span><span class=\\"mi\\">1</span><span class=\\"p\\">,</span> <span class=\\"o\\">-</span><span class=\\"mi\\">1</span><span class=\\"p\\">,</span> <span class=\\"mi\\">7</span><span class=\\"p\\">,</span> <span class=\\"mi\\">3</span><span class=\\"p\\">},</span> <span class=\\"p\\">{</span><span class=\\"o\\">-</span><span class=\\"mi\\">1</span><span class=\\"p\\">,</span> <span class=\\"mi\\">6</span><span class=\\"p\\">,</span> <span class=\\"mi\\">8</span><span class=\\"p\\">,</span> <span class=\\"mi\\">4</span><span class=\\"p\\">},</span> <span class=\\"p\\">{</span><span class=\\"o\\">-</span><span class=\\"mi\\">1</span><span class=\\"p\\">,</span> <span class=\\"mi\\">7</span><span class=\\"p\\">,</span> <span class=\\"o\\">-</span><span class=\\"mi\\">1</span><span class=\\"p\\">,</span> <span class=\\"mi\\">5</span><span class=\\"p\\">}</span>\\n<span class=\\"p\\">};</span>\\n\\n<span class=\\"k\\">const</span> <span class=\\"kt\\">char</span> <span class=\\"n\\">dirmap</span><span class=\\"p\\">[</span><span class=\\"mi\\">4</span><span class=\\"p\\">]</span> <span class=\\"o\\">=</span> <span class=\\"p\\">{</span><span class=\\"sc\\">&#39;d&#39;</span><span class=\\"p\\">,</span> <span class=\\"sc\\">&#39;l&#39;</span><span class=\\"p\\">,</span> <span class=\\"sc\\">&#39;r&#39;</span><span class=\\"p\\">,</span> <span class=\\"sc\\">&#39;u&#39;</span><span class=\\"p\\">};</span>\\n\\n<span class=\\"kt\\">char</span> <span class=\\"n\\">perm</span><span class=\\"p\\">[</span><span class=\\"n\\">nperm</span><span class=\\"p\\">][</span><span class=\\"mi\\">10</span><span class=\\"p\\">];</span>\\n<span class=\\"kt\\">int</span> <span class=\\"n\\">visit</span><span class=\\"p\\">[</span><span class=\\"n\\">nperm</span><span class=\\"p\\">],</span> <span class=\\"n\\">op</span><span class=\\"p\\">[</span><span class=\\"n\\">n</span><span class=\\"p\\">][</span><span class=\\"n\\">nperm</span><span class=\\"p\\">],</span> <span class=\\"n\\">pre</span><span class=\\"p\\">[</span><span class=\\"n\\">n</span><span class=\\"p\\">][</span><span class=\\"n\\">nperm</span><span class=\\"p\\">];</span>\\n<span class=\\"k\\">struct</span> <span class=\\"n\\">Item</span> <span class=\\"p\\">{</span>\\n  <span class=\\"kt\\">int</span> <span class=\\"n\\">pi</span><span class=\\"p\\">,</span> <span class=\\"n\\">xi</span><span class=\\"p\\">,</span> <span class=\\"n\\">dep</span><span class=\\"p\\">;</span>\\n<span class=\\"p\\">}</span> <span class=\\"n\\">que</span><span class=\\"p\\">[</span><span class=\\"n\\">nperm</span><span class=\\"p\\">];</span>\\n<span class=\\"kt\\">int</span> <span class=\\"n\\">ql</span><span class=\\"p\\">,</span> <span class=\\"n\\">qr</span><span class=\\"p\\">;</span>\\n<span class=\\"kt\\">int</span> <span class=\\"n\\">ans</span><span class=\\"p\\">[</span><span class=\\"n\\">nperm</span><span class=\\"p\\">],</span> <span class=\\"n\\">ansl</span><span class=\\"p\\">;</span>\\n\\n<span class=\\"kt\\">void</span> <span class=\\"nf\\">nextp</span><span class=\\"p\\">(</span><span class=\\"kt\\">char</span> <span class=\\"n\\">s</span><span class=\\"p\\">[],</span> <span class=\\"kt\\">int</span> <span class=\\"n\\">n</span><span class=\\"p\\">)</span> <span class=\\"p\\">{</span>\\n  <span class=\\"kt\\">int</span> <span class=\\"n\\">i</span><span class=\\"p\\">,</span> <span class=\\"n\\">j</span><span class=\\"p\\">;</span>\\n  <span class=\\"k\\">for</span> <span class=\\"p\\">(</span><span class=\\"n\\">i</span> <span class=\\"o\\">=</span> <span class=\\"n\\">n</span><span class=\\"o\\">-</span><span class=\\"mi\\">2</span><span class=\\"p\\">;</span> <span class=\\"n\\">i</span> <span class=\\"o\\">&gt;=</span> <span class=\\"mi\\">0</span> <span class=\\"o\\">&amp;&amp;</span> <span class=\\"n\\">s</span><span class=\\"p\\">[</span><span class=\\"n\\">i</span><span class=\\"p\\">]</span> <span class=\\"o\\">&gt;</span> <span class=\\"n\\">s</span><span class=\\"p\\">[</span><span class=\\"n\\">i</span><span class=\\"o\\">+</span><span class=\\"mi\\">1</span><span class=\\"p\\">];</span> <span class=\\"n\\">i</span> <span class=\\"o\\">--</span><span class=\\"p\\">)</span> <span class=\\"p\\">;</span>\\n  <span class=\\"k\\">if</span> <span class=\\"p\\">(</span><span class=\\"n\\">i</span> <span class=\\"o\\">==</span> <span class=\\"o\\">-</span><span class=\\"mi\\">1</span><span class=\\"p\\">)</span> <span class=\\"n\\">reverse</span><span class=\\"p\\">(</span><span class=\\"n\\">s</span><span class=\\"p\\">,</span> <span class=\\"n\\">s</span><span class=\\"o\\">+</span><span class=\\"n\\">n</span><span class=\\"p\\">);</span>\\n  <span class=\\"k\\">else</span> <span class=\\"p\\">{</span>\\n    <span class=\\"k\\">for</span> <span class=\\"p\\">(</span><span class=\\"n\\">j</span> <span class=\\"o\\">=</span> <span class=\\"n\\">i</span><span class=\\"o\\">+</span><span class=\\"mi\\">1</span><span class=\\"p\\">;</span> <span class=\\"n\\">j</span> <span class=\\"o\\">&lt;</span> <span class=\\"n\\">n</span> <span class=\\"o\\">&amp;&amp;</span> <span class=\\"n\\">s</span><span class=\\"p\\">[</span><span class=\\"n\\">j</span><span class=\\"p\\">]</span> <span class=\\"o\\">&gt;</span> <span class=\\"n\\">s</span><span class=\\"p\\">[</span><span class=\\"n\\">i</span><span class=\\"p\\">];</span> <span class=\\"n\\">j</span> <span class=\\"o\\">++</span><span class=\\"p\\">)</span> <span class=\\"p\\">;</span>\\n    <span class=\\"n\\">swap</span><span class=\\"p\\">(</span><span class=\\"n\\">s</span><span class=\\"p\\">[</span><span class=\\"n\\">i</span><span class=\\"p\\">],</span> <span class=\\"n\\">s</span><span class=\\"p\\">[</span><span class=\\"n\\">j</span><span class=\\"o\\">-</span><span class=\\"mi\\">1</span><span class=\\"p\\">]);</span>\\n    <span class=\\"n\\">reverse</span><span class=\\"p\\">(</span><span class=\\"n\\">s</span><span class=\\"o\\">+</span><span class=\\"n\\">i</span><span class=\\"o\\">+</span><span class=\\"mi\\">1</span><span class=\\"p\\">,</span> <span class=\\"n\\">s</span><span class=\\"o\\">+</span><span class=\\"n\\">n</span><span class=\\"p\\">);</span>\\n  <span class=\\"p\\">}</span>\\n<span class=\\"p\\">}</span>\\n\\n<span class=\\"kr\\">inline</span> <span class=\\"kt\\">int</span> <span class=\\"nf\\">cantor</span><span class=\\"p\\">(</span><span class=\\"kt\\">char</span> <span class=\\"n\\">s</span><span class=\\"p\\">[],</span> <span class=\\"kt\\">int</span> <span class=\\"n\\">n</span><span class=\\"p\\">)</span> <span class=\\"p\\">{</span>\\n  <span class=\\"kt\\">int</span> <span class=\\"n\\">pi</span> <span class=\\"o\\">=</span> <span class=\\"mi\\">0</span><span class=\\"p\\">,</span> <span class=\\"n\\">e</span> <span class=\\"o\\">=</span> <span class=\\"mi\\">1</span><span class=\\"p\\">;</span>\\n  <span class=\\"k\\">for</span> <span class=\\"p\\">(</span><span class=\\"kt\\">int</span> <span class=\\"n\\">i</span> <span class=\\"o\\">=</span> <span class=\\"n\\">n</span><span class=\\"o\\">-</span><span class=\\"mi\\">2</span><span class=\\"p\\">;</span> <span class=\\"n\\">i</span> <span class=\\"o\\">&gt;=</span> <span class=\\"mi\\">0</span><span class=\\"p\\">;</span> <span class=\\"n\\">i</span> <span class=\\"o\\">--</span><span class=\\"p\\">)</span> <span class=\\"p\\">{</span>\\n    <span class=\\"kt\\">int</span> <span class=\\"n\\">a</span> <span class=\\"o\\">=</span> <span class=\\"mi\\">0</span><span class=\\"p\\">;</span>\\n    <span class=\\"k\\">for</span> <span class=\\"p\\">(</span><span class=\\"kt\\">int</span> <span class=\\"n\\">j</span> <span class=\\"o\\">=</span> <span class=\\"n\\">i</span> <span class=\\"o\\">+</span> <span class=\\"mi\\">1</span><span class=\\"p\\">;</span> <span class=\\"n\\">j</span> <span class=\\"o\\">&lt;</span> <span class=\\"n\\">n</span><span class=\\"p\\">;</span> <span class=\\"n\\">j</span> <span class=\\"o\\">++</span><span class=\\"p\\">)</span> <span class=\\"k\\">if</span> <span class=\\"p\\">(</span><span class=\\"n\\">s</span><span class=\\"p\\">[</span><span class=\\"n\\">j</span><span class=\\"p\\">]</span> <span class=\\"o\\">&lt;</span> <span class=\\"n\\">s</span><span class=\\"p\\">[</span><span class=\\"n\\">i</span><span class=\\"p\\">])</span> <span class=\\"n\\">a</span><span class=\\"o\\">++</span><span class=\\"p\\">;</span>\\n    <span class=\\"n\\">pi</span> <span class=\\"o\\">+=</span> <span class=\\"n\\">a</span><span class=\\"o\\">*</span><span class=\\"n\\">e</span><span class=\\"p\\">;</span>\\n    <span class=\\"n\\">e</span> <span class=\\"o\\">*=</span> <span class=\\"p\\">(</span><span class=\\"n\\">n</span><span class=\\"o\\">-</span><span class=\\"n\\">i</span><span class=\\"p\\">);</span>\\n  <span class=\\"p\\">}</span>\\n  <span class=\\"k\\">return</span> <span class=\\"n\\">pi</span><span class=\\"p\\">;</span>\\n<span class=\\"p\\">}</span>\\n\\n<span class=\\"kt\\">int</span> <span class=\\"nf\\">bfs</span><span class=\\"p\\">(</span><span class=\\"kt\\">int</span> <span class=\\"n\\">src_pi</span><span class=\\"p\\">,</span> <span class=\\"kt\\">int</span> <span class=\\"n\\">src_xi</span><span class=\\"p\\">)</span> <span class=\\"p\\">{</span>\\n  <span class=\\"n\\">memset</span><span class=\\"p\\">(</span><span class=\\"n\\">visit</span><span class=\\"p\\">,</span> <span class=\\"mi\\">0</span><span class=\\"p\\">,</span> <span class=\\"k\\">sizeof</span><span class=\\"p\\">(</span><span class=\\"n\\">visit</span><span class=\\"p\\">));</span>\\n  <span class=\\"n\\">ql</span> <span class=\\"o\\">=</span> <span class=\\"n\\">qr</span> <span class=\\"o\\">=</span> <span class=\\"mi\\">0</span><span class=\\"p\\">;</span>\\n  <span class=\\"n\\">que</span><span class=\\"p\\">[</span><span class=\\"n\\">qr</span><span class=\\"o\\">++</span><span class=\\"p\\">]</span> <span class=\\"o\\">=</span> <span class=\\"p\\">(</span><span class=\\"k\\">struct</span> <span class=\\"n\\">Item</span><span class=\\"p\\">)</span> <span class=\\"p\\">{</span><span class=\\"n\\">src_pi</span><span class=\\"p\\">,</span> <span class=\\"n\\">src_xi</span><span class=\\"p\\">,</span> <span class=\\"mi\\">0</span><span class=\\"p\\">};</span>\\n  <span class=\\"n\\">visit</span><span class=\\"p\\">[</span><span class=\\"n\\">src_pi</span><span class=\\"p\\">]</span> <span class=\\"o\\">=</span> <span class=\\"mi\\">1</span><span class=\\"p\\">;</span>\\n  <span class=\\"k\\">while</span> <span class=\\"p\\">(</span><span class=\\"n\\">ql</span> <span class=\\"o\\">&lt;</span> <span class=\\"n\\">qr</span><span class=\\"p\\">)</span> <span class=\\"p\\">{</span>\\n    <span class=\\"k\\">struct</span> <span class=\\"n\\">Item</span> <span class=\\"n\\">itm</span> <span class=\\"o\\">=</span> <span class=\\"n\\">que</span><span class=\\"p\\">[</span><span class=\\"n\\">ql</span><span class=\\"o\\">++</span><span class=\\"p\\">];</span>\\n    <span class=\\"kt\\">char</span> <span class=\\"o\\">*</span><span class=\\"n\\">s</span> <span class=\\"o\\">=</span> <span class=\\"n\\">perm</span><span class=\\"p\\">[</span><span class=\\"n\\">itm</span><span class=\\"p\\">.</span><span class=\\"n\\">pi</span><span class=\\"p\\">];</span>\\n\\n    <span class=\\"k\\">for</span> <span class=\\"p\\">(</span><span class=\\"kt\\">int</span> <span class=\\"n\\">i</span> <span class=\\"o\\">=</span> <span class=\\"mi\\">0</span><span class=\\"p\\">;</span> <span class=\\"n\\">i</span> <span class=\\"o\\">&lt;</span> <span class=\\"mi\\">4</span><span class=\\"p\\">;</span> <span class=\\"n\\">i</span> <span class=\\"o\\">++</span><span class=\\"p\\">)</span> <span class=\\"p\\">{</span>\\n      <span class=\\"kt\\">int</span> <span class=\\"n\\">xi</span> <span class=\\"o\\">=</span> <span class=\\"n\\">dir</span><span class=\\"p\\">[</span><span class=\\"n\\">itm</span><span class=\\"p\\">.</span><span class=\\"n\\">xi</span><span class=\\"p\\">][</span><span class=\\"n\\">i</span><span class=\\"p\\">];</span>\\n      <span class=\\"k\\">if</span> <span class=\\"p\\">(</span><span class=\\"n\\">xi</span> <span class=\\"o\\">!=</span> <span class=\\"o\\">-</span><span class=\\"mi\\">1</span><span class=\\"p\\">)</span> <span class=\\"p\\">{</span>\\n        <span class=\\"n\\">swap</span><span class=\\"p\\">(</span><span class=\\"n\\">s</span><span class=\\"p\\">[</span><span class=\\"n\\">xi</span><span class=\\"p\\">],</span> <span class=\\"n\\">s</span><span class=\\"p\\">[</span><span class=\\"n\\">itm</span><span class=\\"p\\">.</span><span class=\\"n\\">xi</span><span class=\\"p\\">]);</span>\\n        <span class=\\"kt\\">int</span> <span class=\\"n\\">pi</span> <span class=\\"o\\">=</span> <span class=\\"n\\">cantor</span><span class=\\"p\\">(</span><span class=\\"n\\">s</span><span class=\\"p\\">,</span> <span class=\\"n\\">n</span><span class=\\"p\\">);</span>\\n        <span class=\\"n\\">swap</span><span class=\\"p\\">(</span><span class=\\"n\\">s</span><span class=\\"p\\">[</span><span class=\\"n\\">xi</span><span class=\\"p\\">],</span> <span class=\\"n\\">s</span><span class=\\"p\\">[</span><span class=\\"n\\">itm</span><span class=\\"p\\">.</span><span class=\\"n\\">xi</span><span class=\\"p\\">]);</span>\\n        <span class=\\"k\\">if</span> <span class=\\"p\\">(</span><span class=\\"o\\">!</span><span class=\\"n\\">visit</span><span class=\\"p\\">[</span><span class=\\"n\\">pi</span><span class=\\"p\\">])</span> <span class=\\"p\\">{</span>\\n          <span class=\\"n\\">visit</span><span class=\\"p\\">[</span><span class=\\"n\\">pi</span><span class=\\"p\\">]</span> <span class=\\"o\\">=</span> <span class=\\"mi\\">1</span><span class=\\"p\\">;</span>\\n          <span class=\\"n\\">op</span><span class=\\"p\\">[</span><span class=\\"n\\">src_xi</span><span class=\\"p\\">][</span><span class=\\"n\\">pi</span><span class=\\"p\\">]</span> <span class=\\"o\\">=</span> <span class=\\"n\\">i</span><span class=\\"p\\">;</span>\\n          <span class=\\"n\\">pre</span><span class=\\"p\\">[</span><span class=\\"n\\">src_xi</span><span class=\\"p\\">][</span><span class=\\"n\\">pi</span><span class=\\"p\\">]</span> <span class=\\"o\\">=</span> <span class=\\"n\\">itm</span><span class=\\"p\\">.</span><span class=\\"n\\">pi</span><span class=\\"p\\">;</span>\\n          <span class=\\"n\\">que</span><span class=\\"p\\">[</span><span class=\\"n\\">qr</span><span class=\\"o\\">++</span><span class=\\"p\\">]</span> <span class=\\"o\\">=</span> <span class=\\"p\\">(</span><span class=\\"k\\">struct</span> <span class=\\"n\\">Item</span><span class=\\"p\\">){</span><span class=\\"n\\">pi</span><span class=\\"p\\">,</span> <span class=\\"n\\">xi</span><span class=\\"p\\">,</span> <span class=\\"n\\">itm</span><span class=\\"p\\">.</span><span class=\\"n\\">dep</span><span class=\\"o\\">+</span><span class=\\"mi\\">1</span><span class=\\"p\\">};</span>\\n        <span class=\\"p\\">}</span>\\n      <span class=\\"p\\">}</span>\\n    <span class=\\"p\\">}</span>\\n  <span class=\\"p\\">}</span>\\n  <span class=\\"k\\">return</span> <span class=\\"o\\">-</span><span class=\\"mi\\">1</span><span class=\\"p\\">;</span>\\n<span class=\\"p\\">}</span>\\n\\n<span class=\\"kt\\">void</span> <span class=\\"nf\\">init</span><span class=\\"p\\">()</span> <span class=\\"p\\">{</span>\\n  <span class=\\"kt\\">char</span> <span class=\\"n\\">s</span><span class=\\"p\\">[</span><span class=\\"mi\\">10</span><span class=\\"p\\">]</span> <span class=\\"o\\">=</span> <span class=\\"s\\">&quot;abcdefghi&quot;</span><span class=\\"p\\">;</span>\\n  <span class=\\"k\\">for</span> <span class=\\"p\\">(</span><span class=\\"kt\\">int</span> <span class=\\"n\\">i</span> <span class=\\"o\\">=</span> <span class=\\"mi\\">0</span><span class=\\"p\\">;</span> <span class=\\"n\\">i</span> <span class=\\"o\\">&lt;</span> <span class=\\"n\\">nperm</span><span class=\\"p\\">;</span> <span class=\\"n\\">i</span> <span class=\\"o\\">++</span><span class=\\"p\\">)</span> <span class=\\"p\\">{</span>\\n    <span class=\\"n\\">memmove</span><span class=\\"p\\">(</span><span class=\\"n\\">perm</span><span class=\\"p\\">[</span><span class=\\"n\\">i</span><span class=\\"p\\">],</span> <span class=\\"n\\">s</span><span class=\\"p\\">,</span> <span class=\\"k\\">sizeof</span><span class=\\"p\\">(</span><span class=\\"n\\">perm</span><span class=\\"p\\">[</span><span class=\\"n\\">i</span><span class=\\"p\\">]));</span>\\n    <span class=\\"n\\">nextp</span><span class=\\"p\\">(</span><span class=\\"n\\">s</span><span class=\\"p\\">,</span> <span class=\\"n\\">n</span><span class=\\"p\\">);</span>\\n  <span class=\\"p\\">}</span>\\n  <span class=\\"n\\">memset</span><span class=\\"p\\">(</span><span class=\\"n\\">pre</span><span class=\\"p\\">,</span> <span class=\\"o\\">-</span><span class=\\"mi\\">1</span><span class=\\"p\\">,</span> <span class=\\"k\\">sizeof</span><span class=\\"p\\">(</span><span class=\\"n\\">pre</span><span class=\\"p\\">));</span>\\n  <span class=\\"k\\">for</span> <span class=\\"p\\">(</span><span class=\\"kt\\">int</span> <span class=\\"n\\">i</span> <span class=\\"o\\">=</span> <span class=\\"mi\\">0</span><span class=\\"p\\">;</span> <span class=\\"n\\">i</span> <span class=\\"o\\">&lt;</span> <span class=\\"n\\">n</span><span class=\\"p\\">;</span> <span class=\\"n\\">i</span> <span class=\\"o\\">++</span><span class=\\"p\\">)</span> <span class=\\"p\\">{</span>\\n    <span class=\\"n\\">swap</span><span class=\\"p\\">(</span><span class=\\"n\\">s</span><span class=\\"p\\">[</span><span class=\\"n\\">i</span><span class=\\"p\\">],</span> <span class=\\"n\\">s</span><span class=\\"p\\">[</span><span class=\\"n\\">n</span><span class=\\"o\\">-</span><span class=\\"mi\\">1</span><span class=\\"p\\">]);</span>\\n    <span class=\\"n\\">bfs</span><span class=\\"p\\">(</span><span class=\\"n\\">cantor</span><span class=\\"p\\">(</span><span class=\\"n\\">s</span><span class=\\"p\\">,</span> <span class=\\"n\\">n</span><span class=\\"p\\">),</span> <span class=\\"n\\">i</span><span class=\\"p\\">);</span>\\n    <span class=\\"n\\">swap</span><span class=\\"p\\">(</span><span class=\\"n\\">s</span><span class=\\"p\\">[</span><span class=\\"n\\">i</span><span class=\\"p\\">],</span> <span class=\\"n\\">s</span><span class=\\"p\\">[</span><span class=\\"n\\">n</span><span class=\\"o\\">-</span><span class=\\"mi\\">1</span><span class=\\"p\\">]);</span>\\n  <span class=\\"p\\">}</span>\\n<span class=\\"p\\">}</span>\\n\\n<span class=\\"kt\\">int</span> <span class=\\"nf\\">main</span><span class=\\"p\\">()</span> <span class=\\"p\\">{</span>\\n  <span class=\\"n\\">init</span><span class=\\"p\\">();</span>\\n\\n  <span class=\\"kt\\">int</span> <span class=\\"n\\">sxi</span><span class=\\"p\\">,</span> <span class=\\"n\\">spi</span><span class=\\"p\\">,</span> <span class=\\"n\\">tpi</span><span class=\\"p\\">;</span>\\n  <span class=\\"kt\\">char</span> <span class=\\"n\\">origin</span><span class=\\"p\\">[</span><span class=\\"mi\\">10</span><span class=\\"p\\">]</span> <span class=\\"o\\">=</span> <span class=\\"s\\">&quot;abcdefghi&quot;</span><span class=\\"p\\">,</span> <span class=\\"n\\">map</span><span class=\\"p\\">[</span><span class=\\"mi\\">256</span><span class=\\"p\\">],</span> <span class=\\"n\\">s</span><span class=\\"p\\">[</span><span class=\\"n\\">n</span><span class=\\"o\\">+</span><span class=\\"mi\\">1</span><span class=\\"p\\">],</span> <span class=\\"n\\">t</span><span class=\\"p\\">[</span><span class=\\"n\\">n</span><span class=\\"o\\">+</span><span class=\\"mi\\">1</span><span class=\\"p\\">];</span>\\n\\n  <span class=\\"kt\\">int</span> <span class=\\"n\\">nt</span><span class=\\"p\\">;</span>\\n  <span class=\\"n\\">scanf</span><span class=\\"p\\">(</span><span class=\\"s\\">&quot;%d&quot;</span><span class=\\"p\\">,</span> <span class=\\"o\\">&amp;</span><span class=\\"n\\">nt</span><span class=\\"p\\">);</span>\\n  <span class=\\"k\\">for</span> <span class=\\"p\\">(</span><span class=\\"kt\\">int</span> <span class=\\"n\\">ti</span> <span class=\\"o\\">=</span> <span class=\\"mi\\">1</span><span class=\\"p\\">;</span> <span class=\\"n\\">ti</span> <span class=\\"o\\">&lt;=</span> <span class=\\"n\\">nt</span><span class=\\"p\\">;</span> <span class=\\"n\\">ti</span> <span class=\\"o\\">++</span><span class=\\"p\\">)</span> <span class=\\"p\\">{</span>\\n    <span class=\\"n\\">scanf</span><span class=\\"p\\">(</span><span class=\\"s\\">&quot;%s%s&quot;</span><span class=\\"p\\">,</span> <span class=\\"n\\">s</span><span class=\\"p\\">,</span> <span class=\\"n\\">t</span><span class=\\"p\\">);</span>\\n\\n    <span class=\\"k\\">for</span> <span class=\\"p\\">(</span><span class=\\"kt\\">int</span> <span class=\\"n\\">i</span> <span class=\\"o\\">=</span> <span class=\\"mi\\">0</span><span class=\\"p\\">;</span> <span class=\\"n\\">i</span> <span class=\\"o\\">&lt;</span> <span class=\\"n\\">n</span><span class=\\"p\\">;</span> <span class=\\"n\\">i</span> <span class=\\"o\\">++</span><span class=\\"p\\">)</span> <span class=\\"p\\">{</span>\\n      <span class=\\"k\\">if</span> <span class=\\"p\\">(</span><span class=\\"n\\">s</span><span class=\\"p\\">[</span><span class=\\"n\\">i</span><span class=\\"p\\">]</span> <span class=\\"o\\">==</span> <span class=\\"sc\\">&#39;X&#39;</span><span class=\\"p\\">)</span> <span class=\\"p\\">{</span>\\n        <span class=\\"n\\">sxi</span> <span class=\\"o\\">=</span> <span class=\\"n\\">i</span><span class=\\"p\\">;</span>\\n        <span class=\\"k\\">break</span><span class=\\"p\\">;</span>\\n      <span class=\\"p\\">}</span>\\n    <span class=\\"p\\">}</span>\\n    <span class=\\"n\\">swap</span><span class=\\"p\\">(</span><span class=\\"n\\">origin</span><span class=\\"p\\">[</span><span class=\\"n\\">n</span><span class=\\"o\\">-</span><span class=\\"mi\\">1</span><span class=\\"p\\">],</span> <span class=\\"n\\">origin</span><span class=\\"p\\">[</span><span class=\\"n\\">sxi</span><span class=\\"p\\">]);</span>\\n    <span class=\\"k\\">for</span> <span class=\\"p\\">(</span><span class=\\"kt\\">int</span> <span class=\\"n\\">i</span> <span class=\\"o\\">=</span> <span class=\\"mi\\">0</span><span class=\\"p\\">;</span> <span class=\\"n\\">i</span> <span class=\\"o\\">&lt;</span> <span class=\\"n\\">n</span><span class=\\"p\\">;</span> <span class=\\"n\\">i</span> <span class=\\"o\\">++</span><span class=\\"p\\">)</span> <span class=\\"n\\">s</span><span class=\\"p\\">[</span><span class=\\"n\\">i</span><span class=\\"p\\">]</span> <span class=\\"o\\">=</span> <span class=\\"n\\">map</span><span class=\\"p\\">[</span><span class=\\"n\\">s</span><span class=\\"p\\">[</span><span class=\\"n\\">i</span><span class=\\"p\\">]]</span> <span class=\\"o\\">=</span> <span class=\\"n\\">origin</span><span class=\\"p\\">[</span><span class=\\"n\\">i</span><span class=\\"p\\">];</span>\\n    <span class=\\"k\\">for</span> <span class=\\"p\\">(</span><span class=\\"kt\\">int</span> <span class=\\"n\\">i</span> <span class=\\"o\\">=</span> <span class=\\"mi\\">0</span><span class=\\"p\\">;</span> <span class=\\"n\\">i</span> <span class=\\"o\\">&lt;</span> <span class=\\"n\\">n</span><span class=\\"p\\">;</span> <span class=\\"n\\">i</span> <span class=\\"o\\">++</span><span class=\\"p\\">)</span> <span class=\\"n\\">t</span><span class=\\"p\\">[</span><span class=\\"n\\">i</span><span class=\\"p\\">]</span> <span class=\\"o\\">=</span> <span class=\\"n\\">map</span><span class=\\"p\\">[</span><span class=\\"n\\">t</span><span class=\\"p\\">[</span><span class=\\"n\\">i</span><span class=\\"p\\">]];</span>\\n    <span class=\\"n\\">swap</span><span class=\\"p\\">(</span><span class=\\"n\\">origin</span><span class=\\"p\\">[</span><span class=\\"n\\">n</span><span class=\\"o\\">-</span><span class=\\"mi\\">1</span><span class=\\"p\\">],</span> <span class=\\"n\\">origin</span><span class=\\"p\\">[</span><span class=\\"n\\">sxi</span><span class=\\"p\\">]);</span>\\n\\n    <span class=\\"n\\">spi</span> <span class=\\"o\\">=</span> <span class=\\"n\\">cantor</span><span class=\\"p\\">(</span><span class=\\"n\\">s</span><span class=\\"p\\">,</span> <span class=\\"n\\">n</span><span class=\\"p\\">),</span> <span class=\\"n\\">tpi</span> <span class=\\"o\\">=</span> <span class=\\"n\\">cantor</span><span class=\\"p\\">(</span><span class=\\"n\\">t</span><span class=\\"p\\">,</span> <span class=\\"n\\">n</span><span class=\\"p\\">);</span>\\n    <span class=\\"n\\">ansl</span> <span class=\\"o\\">=</span> <span class=\\"mi\\">0</span><span class=\\"p\\">;</span>\\n    <span class=\\"k\\">for</span> <span class=\\"p\\">(</span><span class=\\"kt\\">int</span> <span class=\\"n\\">p</span> <span class=\\"o\\">=</span> <span class=\\"n\\">tpi</span><span class=\\"p\\">;</span> <span class=\\"n\\">pre</span><span class=\\"p\\">[</span><span class=\\"n\\">sxi</span><span class=\\"p\\">][</span><span class=\\"n\\">p</span><span class=\\"p\\">]</span> <span class=\\"o\\">!=</span> <span class=\\"o\\">-</span><span class=\\"mi\\">1</span><span class=\\"p\\">;</span> <span class=\\"n\\">p</span> <span class=\\"o\\">=</span> <span class=\\"n\\">pre</span><span class=\\"p\\">[</span><span class=\\"n\\">sxi</span><span class=\\"p\\">][</span><span class=\\"n\\">p</span><span class=\\"p\\">])</span>\\n      <span class=\\"n\\">ans</span><span class=\\"p\\">[</span><span class=\\"n\\">ansl</span><span class=\\"o\\">++</span><span class=\\"p\\">]</span> <span class=\\"o\\">=</span> <span class=\\"n\\">op</span><span class=\\"p\\">[</span><span class=\\"n\\">sxi</span><span class=\\"p\\">][</span><span class=\\"n\\">p</span><span class=\\"p\\">];</span>\\n\\n    <span class=\\"n\\">printf</span><span class=\\"p\\">(</span><span class=\\"s\\">&quot;Case %d: %d</span><span class=\\"se\\">\\\\n</span><span class=\\"s\\">&quot;</span><span class=\\"p\\">,</span> <span class=\\"n\\">ti</span><span class=\\"p\\">,</span> <span class=\\"n\\">ansl</span><span class=\\"p\\">);</span>\\n    <span class=\\"k\\">for</span> <span class=\\"p\\">(</span><span class=\\"kt\\">int</span> <span class=\\"n\\">i</span> <span class=\\"o\\">=</span> <span class=\\"n\\">ansl</span><span class=\\"o\\">-</span><span class=\\"mi\\">1</span><span class=\\"p\\">;</span> <span class=\\"n\\">i</span> <span class=\\"o\\">&gt;=</span> <span class=\\"mi\\">0</span><span class=\\"p\\">;</span> <span class=\\"n\\">i</span> <span class=\\"o\\">--</span><span class=\\"p\\">)</span>\\n      <span class=\\"n\\">putchar</span><span class=\\"p\\">(</span><span class=\\"n\\">dirmap</span><span class=\\"p\\">[</span><span class=\\"n\\">ans</span><span class=\\"p\\">[</span><span class=\\"n\\">i</span><span class=\\"p\\">]]);</span>\\n    <span class=\\"n\\">putchar</span><span class=\\"p\\">(</span><span class=\\"sc\\">&#39;\\\\n&#39;</span><span class=\\"p\\">);</span>\\n  <span class=\\"p\\">}</span>\\n\\n  <span class=\\"k\\">return</span> <span class=\\"mi\\">0</span><span class=\\"p\\">;</span>\\n<span class=\\"p\\">}</span>\\n</code></pre></div>\\n</td></tr></table>","tags":["bfs","trick"],"title":"HDU-3567 Eight II","updated_at":"2020-07-21T23:15:53+08:00","url":"/docs/acm/search/hdu-3567"}')}}]);
//# sourceMappingURL=chunk-2d222369.57b7fac7.js.map