# dbproject

주제 : 도서관리시스템

기능 
1. 회원
-- 도서 조회 기능
-- 도서 대출 기능


2. 관리자
-- 회원 ENTITY에서 대출가능여부 속성을 수정



Data입력 양식
-- 사용자 테이블 INSERT 양식 
INSERT INTO USER(UNUM, UNAME, UPNO, CHECKOUT, UPWD)
VALUES(202112345, '정서화', '010-0000-0004', TRUE, 'doyou');

-- BOOK 테이블 INSERT 양식
INSERT INTO BOOK(BOOK_TITLE,BOOK_AUTHOR,PUBLISHER,PUBLISHING_YEAR,BOOK_ACCOUNT,
BOOK_RENT_YN,BOOK_ID) VALUES('트래픽설계자', '러셀 브런슨', '윌북','2024-02-10',5,'2024-02-14',12345678);

