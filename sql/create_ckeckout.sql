CREATE TABLE Ckeckout (
	`loan_date`	   DATE	    NOT NULL COMMENT '대출날짜',
	`return_date`  DATE	    NOT NULL COMMENT '반납날짜',
	`book_delay`   BOOLEAN	NOT NULL COMMENT '연체여부',
	foreign key (book_uid) references Book(UID)
    foreign key (user_uid) references USER(UID)	
);