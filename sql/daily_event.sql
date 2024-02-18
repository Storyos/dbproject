DELIMITER $$
CREATE EVENT my_daily_event
ON SCHEDULE EVERY 1 DAY STARTS TIMESTAMP(CURRENT_DATE, '00:00:00')
DO
	begin
  UPDATE CHECKOUT SET BOOK_DELAY = 2 WHERE BOOK_DELAY = 1 AND RETURN_DATE < CURDATE();
  update user set checkout = 0 where uid = (select user_uid from checkout where book_delay=2);
	END $$
DELIMITER ;
