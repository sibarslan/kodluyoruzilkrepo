# Veri Yapıları ve Algoritmalar 
---
## **MERGE SORT PROJESİ**
---

![merge](/data-structures%26algorithms/merge-sort.png)

### 1. SORU

**1. adım:**

Algoritmamız diziyi ortadan iki parçaya ayırır.
[16,21,11,8,12,22] -> [**16,21,11**] - [**8,12,22**]

**2. adım:**

Oluşan ayrı iki dizi kendi içinde tekrar iki parça olacak şekilde bölünür.

[16,21,11] -> [**16**] - [**21,11**]
[8,12,22] -> [**8**] - [**12,22**]

**3. adım:**

Kalan diziler de kendi içinde ikiye bölünür.
[16] - [21,11] -> - [16] - [**21**] - [**11**]
[8] - [12,22] -> [8] - [**12**] - [**22**]

**4. adım:**

Bu aşamadan itibaren bölünmüş her bir dizi elemanı kendi içinde sıralanarak birleşmeye başlar.

[16] - [21] - [11] -> [16] - [**11,21**]
[8] - [12] - [22] -> [8] - [**12,22**]


**5. adım:**

[16] - [11,21] -> [**11,16,21**]
[8] - [12,22] -> [**8,12,22**]

**6. adım:**

Son olarak kalan parçalar da sıralanarak birleşir ve sırasız dizimiz sıralı hale gelmiş olur. 

[11,16,21] - [8,12,22]  -> [**8,11,12,16,21,22**]

---

### 2. SORU

Merge sort algoritması verilmiş diziyi her seferinde ortadan ikiye bölerek parçaları kendi içinde sıralar ve bu parçaları birleştirerek sonuca ulaşır. Yani her bölünmüş dizi için n işlem yapıldığından Big-O gösterimi O(nlogn) olacaktır.
Algoritmamız 6 adımdan oluştuğundan dolayı:

O(nlogn) = O(6log6)