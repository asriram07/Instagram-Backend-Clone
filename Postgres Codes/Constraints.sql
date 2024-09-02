-- insert into Users values (939372121,'Virat Kohli','kohli@outlook.com','why','87283728','virat kohli');
-- insert into Users values (939372122,'Virat Kohli','kohli@outlook.com','why','87283728','virat kohli');
select * from Users;

alter table Users
-- add constraint unique_username UNIQUE (username),
add constraint unique_email UNIQUE (email),
add constraint unique_phone_number UNIQUE (phone_number);

ALTER TABLE Users
ALTER COLUMN username SET NOT NULL;

alter table users
alter column email set not null;


