#getting the nearby locations of poi and crashes w.r.t to the historical places
#getting the nearby locations of poi and crashed w.r.t to the user location

set @hist_building_id = 153;#23; #user selected historical building id
set @startlat = -37.918530;#-37.877010; #user latitude point
set @startlng = 145.038040;#145.044266; #user longitude point
set @dist = 2;


SELECT 
    @histlat:=latitude
FROM
    mydb.historical_building
WHERE
    hist_id = @hist_building_id;
SELECT 
    @histlng:=longitude
FROM
    mydb.historical_building
WHERE
    hist_id = @hist_building_id;
    
drop temporary table if exists mydb.hist_poi_temp1;
drop temporary table if exists mydb.hist_crash_temp2;
drop temporary table if exists mydb.user_poi_temp1;
drop temporary table if exists mydb.user_crash_temp2;
drop temporary table if exists mydb.temp11;
drop temporary table if exists mydb.temp2;

#this table calculated the distance of poi from the historical building location and store in hist_poi_temp1
create temporary table if not exists mydb.hist_poi_temp1 as (select *, ( 6371 * acos( cos( radians(@histlat) ) * cos( radians( p.latitude ) ) 
* cos( radians( p.longitude ) - radians(@histlng) ) + sin( radians(@histlat) ) 
* sin( radians( p.latitude ) ) ) ) AS poi_distance
from mydb.point_of_interest p having poi_distance < @dist  order by poi_distance); 

#this query calculates the distance from the historical building (selected) and the crashes lat lon points
create temporary table if not exists mydb.hist_crash_temp2 as (select *,
 (6371 * acos( cos( radians(@histlat) ) * cos( radians( c.latitude ) ) 
* cos( radians( c.longitude ) - radians(@histlng) ) + sin( radians(@histlat) ) 
* sin( radians( c.latitude ) ) ) ) AS crash_distance 
from mydb.crashes c having crash_distance < @dist order by crash_distance);

#this query calculates the distance from the user location and points of interests and store in user_poi_temp1
create temporary table if not exists mydb.user_poi_temp1 as (select *, ( 6371 * acos( cos( radians(@startlat) ) * cos( radians( p.latitude ) ) 
* cos( radians( p.longitude ) - radians(@startlng) ) + sin( radians(@startlat) ) 
* sin( radians( p.latitude ) ) ) ) AS poi_distance
from mydb.point_of_interest p having poi_distance < @dist  order by poi_distance);

#this query calculates the distance from the user location and the crashes lat lon points
create temporary table if not exists mydb.user_crash_temp2 as (select *,
 (6371 * acos( cos( radians(@startlat) ) * cos( radians( c.latitude ) ) 
* cos( radians( c.longitude ) - radians(@startlng) ) + sin( radians(@startlat) ) 
* sin( radians( c.latitude ) ) ) ) AS crash_distance 
from mydb.crashes c having crash_distance < @dist order by crash_distance);


#inner join between the hist_poi_temp1 and user_poi_temp1 and storing in another temp table
create temporary table if not exists mydb.temp11 as (select t1.* from mydb.hist_poi_temp1 t1 inner join mydb.user_poi_temp1 t2 on t1.poi_id = t2.poi_id);

#inner join between the hist_crashes_temp1 and user_poi_temp1 and storing in temp2 table
create temporary table if not exists mydb.temp2 as (select t1.latitude, t1.longitude, t1.crash_distance from mydb.hist_crash_temp2 t1
inner join mydb.user_crash_temp2 t2 on t1.accident_id = t2.accident_id);

#select * from mydb.hist_poi_temp1;

#select * from mydb.temp11;
#getting information of nearby poi location
select a.latitude, a.longitude, a.name, a.address, c.cat_name, a.poi_distance from 
(select * from mydb.temp11 t1 order by t1.poi_distance) a, mydb.category c where a.category_cat_id = c.cat_id group by a.category_cat_id;

#getting information of nearby crash location
select * from mydb.temp2 t2 order by t2.crash_distance;


