DROP TABLE IF EXISTS PC;
DROP TABLE IF EXISTS Laptop;
DROP TABLE IF EXISTS Printer;
DROP TABLE IF EXISTS Product;

-- Create the Product table
CREATE TABLE Product (
    maker VARCHAR(50) NOT NULL,
    model INT NOT NULL,
    type VARCHAR(50) NOT NULL,
    PRIMARY KEY (model)
);

-- Create the PC table
CREATE TABLE PC (
    pc_code INT NOT NULL,
    model INT NOT NULL,
    speed INT NOT NULL,
    ram INT NOT NULL,
    hd INT NOT NULL,
    cd VARCHAR(50) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY (pc_code),
    FOREIGN KEY (model) REFERENCES Product(model) -- Define the foreign key relationship
);

-- Create the Laptop table
CREATE TABLE Laptop (
    laptop_code INT NOT NULL,
    model INT NOT NULL,
    speed INT NOT NULL,
    ram INT NOT NULL,
    hd INT NOT NULL,
    screen INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY (laptop_code),
    FOREIGN KEY (model) REFERENCES Product(model) -- Define the foreign key relationship
);

-- Create the Printer table
CREATE TABLE Printer (
    printer_code INT NOT NULL,
    model INT NOT NULL,
    color CHAR(1) NOT NULL,
    type VARCHAR(50) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY (printer_code),
    FOREIGN KEY (model) REFERENCES Product(model) -- Define the foreign key relationship
);

INSERT INTO Product (model, maker, type)
VALUES
    (101, 'Sony', 'Laptop'),
    (102, 'Sony', 'PC'),
    (103, 'HP', 'Printer'),
    (104, 'LG', 'Laptop'),
    (105, 'LG', 'PC'),
    (106, 'Konica Minolta', 'Printer'),
    (107, 'Samsung', 'Laptop'),
    (108, 'IBM', 'PC'),
    (109, 'Sony', 'PC'),
    (110, 'Xerox', 'Printer');
    
INSERT INTO PC (pc_code, model, speed, ram, hd, cd, price)
VALUES
    (201, 102, 2800, 8, 1000, 'DVD', 799.99),
    (202, 105, 3200, 16, 2000, 'Blu-ray', 1299.99),
    (203, 108, 2400, 4, 500, 'None', 549.99),
    (204, 109, 2600, 8, 1000, 'DVD', 699.99),
    (205, 102, 3500, 32, 1500, 'DVD', 1399.99),
    (206, 105, 2900, 8, 1000, 'DVD', 749.99),
    (207, 102, 2700, 4, 500, 'None', 599.99),
    (208, 109, 2800, 8, 1000, 'DVD', 699.99),
    (209, 102, 3300, 16, 2000, 'Blu-ray', 1199.99),
    (210, 105, 2600, 4, 500, 'DVD', 539.99);

INSERT INTO Laptop (laptop_code, model, speed, ram, hd, screen, price)
VALUES
    (301, 101, 2500, 8, 512, 13, 1299.99),
    (302, 104, 2800, 16, 1000, 15, 1599.99),
    (303, 107, 2400, 4, 256, 14, 799.99),
    (304, 101, 2700, 16, 512, 13, 1399.99),
    (305, 107, 2600, 8, 512, 14, 1199.99),
    (306, 101, 2300, 4, 256, 13, 999.99),
    (307, 107, 2500, 8, 512, 14, 1299.99),
    (308, 101, 2900, 16, 1000, 15, 1699.99),
    (309, 104, 2600, 8, 512, 14, 1299.99),
    (310, 107, 4700, 32, 256, 16, 1999.99);

INSERT INTO Printer (printer_code, model, color, type, price)
VALUES
    (401, 106, 'C', 'Inkjet', 249.99),
    (402, 103, 'B', 'Laser', 129.99),
    (403, 110, 'C', 'Laser', 299.99),
    (404, 103, 'B', 'Matrix', 139.99),
    (405, 103, 'C', 'Laser', 199.99),
    (406, 106, 'B', 'Inkjet', 119.99),
    (407, 103, 'C', 'Inkjet', 179.99),
    (408, 106, 'B', 'Laser', 109.99),
    (409, 110, 'C', 'Matrix', 279.99),
    (410, 103, 'B', 'Inkjet', 129.99),
    (411, 106, 'C', 'Inkjet', 169.99)
    ;
