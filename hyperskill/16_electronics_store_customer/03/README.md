# Objectives

Identify the total price of all laptop models produced by each maker.

Find the maker in the `Product` table and `SUM` of the prices in Laptop as `total_price`.

Ensure the results are sorted by `total_price` in ascending order. Use `GROUP_BY` and `SUM` functions to solve this.

```sql
SELECT maker, SUM(price) AS total_price
FROM Product JOIN Laptop ON Product.model = Laptop.model
GROUP BY maker
ORDER BY total_price ASC;
```
