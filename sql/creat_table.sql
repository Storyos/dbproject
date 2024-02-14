CREATE TABLE `Book` (
	`book_num`	int(6)	NOT NULL	COMMENT '도서아이디',
	`book_title`	VARCHAR(100)	NOT NULL	COMMENT '도서명',
	`book_author`	VARCHAR(50)	NOT NULL	COMMENT '저자명',
	`publisher`	VARCHAR(50)	NOT NULL	COMMENT '출판사',
	`publishing_year`	DATE	NOT NULL	COMMENT '출판년도',
	`book_account`	INT	NOT NULL	COMMENT '권수',
	`book_rent_yn`	DATE	NULL	COMMENT '신청일',
	`UID`	VARCHAR(50)	NOT NULL	COMMENT '신청자id'
);

INSERT INTO book
VALUES (123456, '마흔에 읽는 쇼펜하우어', '강용수', '유노북스','2024-02-14', 2, '2024-02-14', 'sge1234') ;

INSERT INTO book
VALUES (123457, '트래픽설계자', '러셀 브런슨', '윌북','2024-02-10', 5, '2024-02-14', 'sge1235') ;
