-- USER 테이블 학번 조회하기 
SELECT * FROM USER;

-- 변경하려는 학번 입력한 후에
-- USER 테이블의 CHECKOUT 업데이트 하기
UPDATE USER 
SET CHECKOUT = FALSE
WHERE UNUM = 202112345;

