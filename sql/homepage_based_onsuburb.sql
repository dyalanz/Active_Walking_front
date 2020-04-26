# this is for the home page, if user selects any suburb to show the data, then we take the suburb name and get historical data
#from that suburb

set @user_selected_suburb = "Caulfield South";

select * from mydb.historical_building where postal_code_ps_val in (select ps_val from mydb.postal_code where 
suburb_name = @user_selected_suburb);