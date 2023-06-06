SELECT
	*
FROM
	(
	SELECT
		c.customerNumber as 'CUST_NUMBER',
		p2.productLine as 'PRODUCT_LINE',
		COUNT(p2.productLine) as 'PRODUCT_COUNT'
	FROM
		customers c
	LEFT JOIN orders o ON
		c.customerNumber = o.customerNumber
	LEFT JOIN orderdetails o2 ON
		o.orderNumber = o2.orderNumber
	LEFT JOIN products p ON
		o2.productCode = p.productCode
	LEFT JOIN productlines p2 ON
		p.productLine = p2.productLine
	WHERE
		p2.productLine = 'Classic Cars'
	GROUP BY
		c.customerNumber
) as car_sales
WHERE
	car_sales.PRODUCT_COUNT > 23