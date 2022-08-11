npx sequelize-cli model:generate --name schedule --attributes name:string,timeArrivePlane:date,timeDeparturePlane:date

npx sequelize-cli model:generate --name plane --attributes name:string,schedule_id:integer,airport_id:integer,route_id:integer


npx sequelize-cli model:generate --name route --attributes schedule_id:integer,airport_id:integer,plane_id:integer

npx sequelize-cli model:generate --name aiport --attributes name:string,timeArrivePlane_id:date,timeDeparturePlane_id:date

