+++
tags = ["graph", "math"]
+++

# 图论笔记

> 西江月 证明
>
> 即得易见平凡，仿照上例显然。留作习题答案略，读者自证不难。
> 反之亦然同理，推论自然成立，略去过程QED，由上可知证毕。



## 基本概念

图



### 可图（Graphical）

可图化/可简单图化：给定n个顶点的度数（度序列），能否构成无向图/无向简单图

**定理**（Havel-Hakimi）：单调不增的非负整数的度序列$d_1\ge  .., \ge d_n$是可图化的，当且仅当度序列 $d_2 - 1, ..., d_{d_1 + 1} -1, ..., d_n$是可图化的
**证明**：充分性显然，必要性易证（可图化的图G中，可以通过增删边使$v_1$和$v_2, ..., v_{d_1+1}$相邻）

可图化问题：尽可能地添加自环即可判定，即$\sum d[u] \text{mod} 2 $是否等于0
可简单图化：将度数序列按从大到小排序，每次删除第一个点v[0]，并对其后的d[v[0]]个点，度数减一，循环直至所有点度数为0，若途中出现度数为负的情况则不可简单图化。
可简单图化的唯一性：其后的d[v[0]]个点中的最后一个点的度数是否等于再下一个点的度数，若相等说明可以交换这两个点再连边，得到不同的图

可简单图化需用Havel-Hakimi定理：将度数序列按从大到小排序，每次删除第一个点v[0]，并对其后的d[v[0]]个点，度数减一，循环直至所有点度数为0，若途中出现度数为负的情况则不可简单图化。



## 二分图



## 最小生成树

最优子结构：MST的子树也是MST

负边权可以通过都加上某个大正数完成（为什么最短路不能？因为生成树的边数唯一）

正确性证明：保证子树是MST

### Kruskal

原理：每次选择边权最小的边，若加入后不会成环（两端点的属于不同并查集），则加入并更新并查集。
复杂度（假设图连通）：排序$O(E\log E)$，$O(E)$次并查集操作 $O(E\alpha(V))  = O(E\log V))$，故总的复杂度为$O(E\log E)$或$O(E\log V)$，因为$E\le V^2$
正确性证明：算法过程中保证了每个并查集都是一棵MST

### Prim

原理：类似Dijkstra算法，每次加入距离当前已选点集最近的点加入
复杂度：同Dijkstra算法，用斐波那契堆，$O(E+VlogV)$
正确性证明：保证已经加入的点构成MST



## 最优比例生成树

poj 2728 Desert King



## 最短路径算法

最长路径不具有最优子结构

### Single source shortest path

| 适用情况 | 算法                            | 复杂度           |
| -------- | ------------------------------- | ---------------- |
| 无边权   | BFS                             | $O(V+E)$         |
| 无负边权 | Dijkstra                        | $O(E + V\log V)$ |
| 所有情况 | Bellman-Ford                    | $O(VE)$          |
| DAG      | 拓扑排序 + 1 round Bellman-Ford | $O(V+E)$         |

#### Dijkstra

维护已计算好的最短路径的节点

#### Bellman-Ford

$\delta(s, v_i) = \delta(s, v_{i-1}) + w(v_{i-1}, v_i)$

对于一条最短路来说，每次循环都会使得最短路的有效长度（前k个点距离s的最短距离已算出）加1（除非无法再加）

由于最短路最长不超过节点数，故算法为两层循环，外层遍历所有点，内层遍历所有边

SPFA：TODO

#### Difference constraint

$x_j-x_i\le w_{ij}$

将差分约束方程转换成图，充要条件

- 若负环存在，则无解
- 若负环不存在，则有解（证明：加一个到所有节点的s，令$x_i=\delta(s, v_i)$即可）

于是可用Bellman-Ford来解决

### All-pairs shortest path

| 适用情况  | 算法            | 复杂度                    |
| --------- | --------------- | ------------------------- |
| 无边权    | V次BFS          | $O(VE)$                   |
| 无负边权  | V次Dijkstra     | $O(VE + V^2\log V)=O(VE)$ |
| 所有情况* | V次Bellman-Ford | $O(V^2E)$                 |

判断负环是否存在的两种方法

- 通过判断对角线上是否为负（到自己的路径为负，即负环）
- 在运行一轮算法，若边权改变了，则存在负环

*用以下三种方法来优化适用所有情况的多点源最短路算法

#### Matrix multiplication

DP方程 $d_{ij}^{(m)} = \min \{ d_{ik}^{(m-1)} + w_{kj}\}$

看作矩阵乘法 $D^{(m)} = D^{(m-1)} \otimes A = D^{(0)} \otimes A^{m}$，$D^{(0)} = \left[\begin{matrix} 0 & \infin & \infin \\ \infin & ... & \infin \\ \infin & \infin & 0   \end{matrix}\right]$

用divider-and-conquer做幂运算，复杂度为$O(V^3 \log V)$

- 但不能用Strassen

#### Floyd-Warshall

DP方程：从i到j的只用到前k个点的最短路径长度 $d_{ij}^{k} = \min \left\{ d_{ij}^{k-1}, d_{ik}^{k-1} + d_{kj}^{k-1} \right\}$

复杂度$O(V^3)$

#### Johnson's algorithm

1. 先将所有边权变成非负，即寻找h 使得 $w_h(u, v) = w(u, v) + h(u) - h(v) \ge 0$

   这是差分约束问题 $h(v)- h(u) \le w(u, v)$，可使用 Bellman-Ford 完成或找到负环

   复杂为 $O(VE)$

2. 再用V次Dijkstra算法找到$\delta_h(u, v)$

   复杂度为 $O(VE + V^2\log V)$

3. 由 $\delta_h(u, v) = \delta(u, v) + h(u) - h(v)$ 可反推出$\delta(u, v)$

   复杂度为 $O(V^2)$

故总复杂度为$O(VE + V^2\log V)=O(VE)$



## 网络流

有向图和无向图的残差网络的区别是，无向图初始正向边权等于反向边权等于容量，而有向图正向边权等于容量，反向边权等于0

### 概念

- 流、割（点割集）、割集（边割集）、割(A,B)的容量$c(A,B)=\sum_\text{e out of A}c_e$

- 残量网络：为了可以撤销操作

- 最大流、最小割

  

### Ford-Fulkerson

不断增广，直到没有增广路为止

$O(|E|max f) $，f是最大流大小



### Dinic

TODO



### 预流推进

TODO



### Stoer-Wagner

求解非负无向图的全局最小割

TODO



### 技巧和例子

技巧：超级源和超级汇、分点

#### Baseball Elimination

判断队伍i是否仍有机会取胜，源为分发剩余比赛场数到每个比赛节点，每个比赛节点分配胜利场数到这两个参与此比赛的队伍节点，队伍节点到汇则是其获胜场数与i获胜常数之差

#### 最小割唯一性

先跑一遍最大流，然后在残留网络中分别从源点和汇点出发dfs，只有当该边还有流量可用时可以访问下一个顶点，最后如果所有顶点都访问了，那么就是唯一的，否则不唯一。

#### 最少边数最小割

将每条边的容量乘以一个大数字k（大于边数加一）再加1，然后计算最大流$f_{max}$，最大流模k即为最大流的最小边数

另一种方法是，把未满流的边容量置为$\infin$，满流的边容量置为1，然后计算最大流。可以发现，这两种方法在边权时正整数的情况下是等价的（可以将第一种方法视作，k个原图将叠加后，再加个所有边权为1的图，乘以k是为了给未满流的边添加更大的容量，使其相当于无穷，并能填补满流边成k后加上的1）。

#### 平面图最大流

TODO



## 费用流

TODO
