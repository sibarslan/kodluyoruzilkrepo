# Veri Yapıları ve Algoritmalar 
---
## **BINARY SEARCH TREE PROJESİ**
---

![binary-search-tree](/data-structures%26algorithms/binary-search-tree.png)

*Binary Search Tree algoritması bir root belirledikten sonra bu roota göre küçük olanların sola, büyük olanların da sağa yazılır. Yazılan bu elemanlar da kendi içinde büyükler sağa, küçükler sola olacak şekilde dallanır.*

[7,5,1,8,3,6,0,9,4,2]

Root 7 olarak belirlenir ve elemanlar sırasıyla Binary Tree'ye eklenir:

**1. adım:**

5 7'den küçük olduğu için soluna eklenir.
```
      7
     /
    5
```
**2. adım:**

1 7'den küçük olduğu için solundan devam eder; 5'ten de küçük olduğu için soluna eklenir.
```
        7
       /
      5
     /
    1
```
**3. adım:**

8 7'den büyük olduğu için sağına eklenir.
```
        7
       / \
      5   8
     /
    1
```
**4. adım:** 

3 sırasıyla 7'den küçük, 5'ten küçük ve 1'den büyük olduğu için 1'in sağına eklenir.
```
        7
       / \
      5   8
     / \
    1   3
```
**5. adım:**

6 sırasıyla 7'den küçük, 5'ten büyük olduğu için 5'in sağına eklenir.
```
         7
        / \
       5   8
      / \
     1   6
    / \
   0   3
```
**6. adım:** 

 0 sırasıyla 7'den küçük, 5'ten küçük ve 1'den küçük olduğu için 1'in soluna eklenir.
```
         7
        / \
       5   8
      / \  
     1   6  
    / \
   0   3
```
**7. adım:**

9 sırasıyla 7'den büyük ve 8'den büyük olduğu için 8'in soluna eklenir.
```
         7
        / \
       5   8
      / \   \
     1   6   9
    / \
   0   3
```
**8. adım:** 

4 sırasıyla 7'den küçük, 5'ten küçük, 1'den büyük ve 3'ten büyük olduğu için 3'ün sağına eklenir.
```
         7
        / \
       5   8
      / \   \
     1   6   9
    / \
   0   3
        \
         4
```
**9. adım:**

2 sırasıyla 7'den küçük, 5'ten küçük, 1'den büyük ve 3'ten küçük olduğu için 3'ün soluna eklenir.
```
         7
        / \
       5   8
      / \   \
     1   6   9
    / \
   0   3
      / \
     2   4

```
