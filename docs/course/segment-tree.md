+++
tags = ["data structures"]
+++

# 线段树

TODO

复杂度证明：

全查（查询区间等于维护区间）、内查（查询区间包含于维护区间，且非全查）、半查（查询区间不包含于维护区间且查询区间和维护区间有交集）

显然内查的子调用是一个内查或者两个以下的半查

半查的子调用是至多一个半查（有可能出现一个全查，但不会继续调用下去，为了简单忽略此常数）



区间修改操作O(logn)、区间查询操作O(logn)
