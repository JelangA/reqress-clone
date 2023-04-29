command command nodejs 

setup {
    npm init
}

instalasi {
    npm install express
    npm install body-parser
    npm install cli
    npm install dotenv
    npm install mysql2
    npm install nodemon
    npm install sequelize
    shortcut = {{ npm i express, body-parser, cli, dotenv, mysql2, nodemon, sequelize }}
}

database migrations{
    sequelize db:migrate
    sequelize db:seed:all

    error security = {{ Set-ExecutionPolicy RemoteSigned }}

    undo:
        sequelize db:migrate:undo:all
        sequelize db:seed:undo:all
}

run {
    npm run main 
}

exptra
cli command add file {
    file model+migration+attributes : 
        sequelize model:generate --name <User> --attributes name:string,job:string
    file migration : 
        sequelize migration:create --name=<create_users_table>
    file seeder : 
        sequelize seed:generate --name <nama-seeder>.js
}