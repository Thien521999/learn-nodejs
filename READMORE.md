# npm install --save-exact express@4.17.1
# package-lock.json : ghi chi tiet qua trinh cai dat
# node server.js
# npm install --save-exact ejs@3.1.6
# npm install --save-exact body-parser@1.19.0
# npm install --save-exact nodemon@2.0.12
# npm install --save-exact @babel/core@7.15.5
# npm install --save-exact @babel/node@7.15.4
# npm install --save-exact @babel/preset-env@7.15.6
# static files
# npm install --save-exact dotenv@10.0.0 => use env in nodejs
# npm install --save-exact mysql2@2.3.0
# npm install --save-exact sequelize-cli@6.2.0
# npx sequelize-cli init
# npm install --save sequelize@6.6.2   
# node_modules/.bin/sequelize init
# Tao model: npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
# npm install --save mysql2@2.2.5
# Tao migrations: npx sequelize-cli db:migrate
# Tao Seeder: npx sequelize-cli seed:generate --name demo-user
# npx sequelize-cli db:seed:all
# search: sequelize datatype
# file migrations: tu dong map vao file database 
# npx sequelize-cli db:migrate
# npm install --save bcryptjs@2.4.3


## keyword
# bcrpt npm



## note
# .env.example to push github
# .env not push github
# library bodyParser support get  tham so lay tu client
# ejs.co doc them

# Controller: xem nhu la boss viec cua no chi dieu huong thong tin
# services: ket noi den db or lay thong tin tu db len

## logic login BE:
# validate 
# check email exist
# compare password
# return userInfo
# access_token: JWT json web token


## Luu tru hinh anh trong thuc te : có 3 option
# option1: luu tru anh vao 1 ben server thu ba vd: amazon web services s3(uu diem rat nhanh ,nhuoc diem phai tra phi)
# option2: luu tru file anh truc tiep duoi database.Làm so de luu dc nhung dang file đấy. người ta dùng 1 kieu du lieu nhu la BLOB, nhuoc diem neu luu nhieu se nang 


# khi up load anh len heroku 300 phut sau no se mat

# ORM


## Muon dung sequelize de luu anh co 2 anh:
# cach 1: tu thang React doc file anh, chuyen file anh qua base64, sau do gui len server nodejs
# cach 2: nem luon file len server nodejs , sau do doc file,....