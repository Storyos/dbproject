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

INSERT INTO book
VALUES (123456, '마흔에 읽는 쇼펜하우어', '강용수', '유노북스','2024-02-14', 2, '2024-02-14', 'sge1234') ;

INSERT INTO book
VALUES (123457, '트래픽설계자', '러셀 브런슨', '윌북','2024-02-10', 5, '2024-02-14', 'sge1235') ;