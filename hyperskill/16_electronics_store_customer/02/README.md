# Objectives

Identify the average `price` of printers having the `Inkjet` type and `C` color from the `Printer` table.

Round the result up to 2 decimal places.

```sql
SELECT ROUND(AVG(price), 2) AS avg_price
  FROM Printer
 WHERE color = 'C'
   AND type = 'Inkjet';
```
