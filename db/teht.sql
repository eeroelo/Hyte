source C:/Users/eeroe/Downloads/health-diary.sql;

MariaDB [HealthDiary]> CREATE TABLE stress_level (
    ->     entry_id INT AUTO_INCREMENT PRIMARY KEY,
    ->     user_id INT,
    ->     entry_date DATE NOT NULL,
    ->     mood VARCHAR(50),
    ->     weight DECIMAL(5,2),
    ->     stress_grade INT,
    ->     notes TEXT,
    ->     created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    ->     FOREIGN KEY (user_id) REFERENCES Users(user_id)
    -> );

MariaDB [HealthDiary]> INSERT INTO stress_level (entry_id, user_id, entry_date, mood, stress grade) VALUES
    ->   ('1', '77', '2024-01-02 10:00:00', 'good', '3');


CREATE TABLE Professional (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    entry_date DATE NOT NULL,
    comments VARCHAR(255),
    to_improve VARCHAR(255),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

INSERT INTO professional VALUES (2, '2024-01-02 10:00:00', 'looking good', 'go sleep earlier', '2024-01-02 10:00:00');

git checkout -b week3
git add .
git commit -m "Add database design and sql script"
git push origin week3
