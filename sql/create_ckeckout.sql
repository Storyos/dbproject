CREATE TABLE Checkout (
	`book_uid` int NOT NULL  COMMENT '도서 ID',
    `user_uid` int not null  comment '사용자 ID',
	`loan_date`	   DATE	    NOT NULL COMMENT '대출날짜',
	`return_date`  DATE	    NOT NULL COMMENT '반납날짜',
	`book_delay`   BOOLEAN	NOT NULL COMMENT '연체여부',
	foreign key (book_uid) references Book(UID),
    foreign key (user_uid) references USER(UID),
    primary key(book_uid,user_uid)
);