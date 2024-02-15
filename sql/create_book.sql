CREATE TABLE Book (
book_title VARCHAR(100) NOT NULL,
book_author VARCHAR(50) NOT NULL,
publisher VARCHAR(50) NOT NULL,
publishing_year DATE NOT NULL,
book_account INT NOT NULL,
book_rent_yn DATE NULL,
book_id INT NOT NULL,
UID INT NOT NULL AUTO_INCREMENT ,
PRIMARY KEY (UID)
);

INSERT INTO  VALUES('트래픽설계자', '러셀 브런슨', '윌북','2024-02-10',5,'2024-02-14',12345678);

INSERT INTO BOOK(BOOK_TITLE,BOOK_AUTHOR,PUBLISHER,PUBLISHING_YEAR,BOOK_ACCOUNT,BOOK_RENT_YN,BOOK_ID)
VALUES 
('세이노의가르침', '세이노', '데이원','2023-03-02', 5, '2024-02-14', 000001 ),
('데일 카네기 인간관계론 ', '데일 카네기 저 임상훈 역 ', '현대지성 ','2019-10-07', 5, '2024-01-14', 000001),
('트래픽 설계자', '러셀 브런슨 저 홍경탁 역', '윌북 ','2024-02-10', 5, '2024-02-14', 000001),
('Clear Thinking ', 'Shane Parrish ', 'Portfolio ','2023-10-03', 5, '2024-02-14', 000001);

