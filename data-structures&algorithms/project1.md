# Veri Yapıları ve Algoritmalar 
---

## **INSERTION SORT PROJESİ**
---
![insertion](/data-structures%26algorithms/insertion-sort.png)


### 1. SORU

**ilk geçiş:**
[**22** | 27 16 2 18 6] 
İlk sayı olduğundan dolayı 22 kendi başına sıralıdır. Bir işlem yapılmadan devam eder.

**ikinci geçiş:**
[22 **27** | 16 2 18 6] 
27 ile gerisindeki 22 sayısı kıyaslanır. 27 sayısı 22den büyük olduğundan bir işlem yapılmaz ve devam eder.

**üçüncü geçiş:**
[22 27 **16** | 2 18 6] 
16 sayısı ile önce 27 sayısı kıyaslanır. 16 27den küçük olduğu için yer değiştirirler.

[22  **16** 27 | 2 18 6] 
Ardından 16 ile 22 kıyaslanır. 16 sayısı 22den küçük olduğu için yer değiştirirler ve kendinden küçük eleman olmadığı için orada kalır.

**dördüncü geçiş:**
[16 22 27 **2** | 18 6] 2 27 ile kıyaslanır ve küçük olduğundan yer değiştirir. 

[16 22 **2** 27 | 18 6] 2 22 ile küçük olduğundan yer değiştirir.

[16 **2** 22 27 | 18 6] 2 16 ile kıyaslanır, küçük olduğu için tekrar yer değiştirilir ve kendinden küçük eleman kalmadığından orada kalır.

**beşinci geçiş:**
[2 16 22 27 **18** | 6] 18 sayısı 27 ile kıyaslanır, küçük olduğu için yer değiştirir.

[2 16 22 **18** 27 | 6] 18 22den küçük olduğu için tekrar yer değiştirir ve 16dan büyük olduğu için orada kalır.

**altıncı geçiş:**
[2 16 18 22 27 **6** |] 6 küçük olduğundan 27 ile yer değiştirirler.

[2 16 18 22 **6** 27|] 6 22den küçük olduğundan yer değiştirirler.

[2 16 18 **6** 22 27|] 6 18e göre küçük olduğundan yer değiştirirler.

[2 16 **6** 18 22 27|] 6 16dan küçük olduğu için yer değiştirirler. 2 den büyük olduğu için olduğu yerde kalır ve algoritmamız sonlanır.

Son durumda dizimiz [2 6 16 18 22 27] halini alır ve sıralı bir dizi oluşmuş olur.


---
### 2. SORU

Insertion sort algoritması worst case senaryosunda O(n²) sonucunu, best case senaryosunda ise O(n) sonucunu verir. Bu durumda ortalamasını alırsak sonuç O(n²) olur.
Algoritmamız 6 aşamalı olduğundan dolayı:

O(n²) = O(6²) = O(36)

---
### 3. SORU

**Average case:** Aradığımız sayının ortada olması.
**Worst case:** Aradığımız sayının sonda olması.
**Best case:** Aradığımız sayının dizinin en başında olması.

Dizi sıralandıktan sonra 18 sayısı dizinin ortasında yer aldığından dolayı average case olur.

---
### 4. SORU

[7,3,5,8,2,9,4,15,6]

**1. adım:**

[**7** 3 5 8 2 9 4 15 6] -> değişim olmaz

**2. adım:**

[ 7 **3** 5 8 2 9 4 15 6] -> [**3** 7 5 8 2 9 4 15 6]

**3. adım:**

[3 7 **5** 8 2 9 4 15 6] -> [3 **5** 7 8 2 9 4 15 6]

**4. adım:**
[3 5 7 **8** 2 9 4 15 6] -> değişim olmaz

