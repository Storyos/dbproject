CREATE TABLE `Book` (
	`book_title`	VARCHAR(100)	NOT NULL,
	`book_author`	VARCHAR(50)	NOT NULL,
	`publisher`	VARCHAR(50)	NOT NULL,
	`publishing_year`	DATE	NOT NULL,
	`book_account`	INT	NOT NULL,
	`book_rent_yn`	DATE	NULL,
	`book_id`	INT	NOT NULL,
	`UID`	VARCHAR(50)	NOT NULL
);