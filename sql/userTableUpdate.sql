
-- uid를 자동증가로 변경하고 PK 설정
ALTER TABLE user
DROP PRIMARY KEY,
ADD PRIMARY KEY (uid),
MODIFY uid INT AUTO_INCREMENT;