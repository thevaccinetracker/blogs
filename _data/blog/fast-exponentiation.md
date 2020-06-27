---
template: BlogPost
path: /fast-exponentiation
date: 2020-06-21T10:56:54.665Z
title: Fast Exponentiation - CP
thumbnail: ''
metaDescription: Fast exponentiation in competitive coding
---

This concept is used to optimise the time complexity of finding a<sup>b</sup> from O(b) to O(log<sub>2</sub> b).

# Bruteforce

The naive method of finding a<sup>b</sup> takes O(b) unit time as 

a<sup>b</sup> = a\*a\*a\*a\*a......a (b times)

Iterative approach
```cpp
int power(int a, int b) {
    int ans = 1;
    for(int i = 0; i < b; i++)
        ans *= a;
    return ans;
}
```

Recursive approach
```cpp
int power(int a, int b) {
    if(b == 0) return 1;
    return a * power(a, b-1);
}
```

Thus it will takes O(b) unit time.

# Fast method

This method takes O(log b) unit time to compute a<sup>b</sup>.

We can say, if b is even, a<sup>b</sup> = (a<sup>b/2</sup>)<sup>2</sup>

If b is odd, a<sup>b</sup> = a \* (a<sup>b/2</sup>)<sup>2</sup>.

### How it takes O(log b) time
**b** is getting reduced to **b/2**, and this redution will be done till **b** reaches **1**.

Example -> 8 -> 4 -> 2 -> 1.

Since 8 = 2<sup>3</sup>, it takes 3 steps to become 1.

Earlier it was getting reduced like, 8 -> 7 -> 6 .... 1, which was taking O(8) time.

Now it is taking O(3) time which is O(log<sub>2</sub> 8) time.

```cpp
int fastPower(int a, int b) {
    // Base case
    if(b == 0) return 1;
    // Computing a^(b/2)
    int smallAns = power(a, b/2);
    smallAns *= smallAns;
    // If b is odd, a^b = a * (a^(b/2))^2
    if(b & 1)
        smallAns *= a;
    return smallAns; 
}
```

Hope it Helps


Thanks for reading