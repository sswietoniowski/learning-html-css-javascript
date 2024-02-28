# Objectives

Identify the `pc_code`, `model`, `speed`, and `ram` of PCs from the `market` database with 16 GB of RAM or more.

Ensure the results are sorted primarily by `ram` in ascending order and secondarily by `speed` in descending order.

The column order is essential.

```sql
SELECT pc_code, model, speed, ram
FROM PC
WHERE ram >= 16
ORDER BY ram ASC, speed DESC;
```
