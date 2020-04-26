#SQL query to find the historical building based on the user click. If user clicks on a historical place card in the
# website we need to get the id of which he clicked and search the details w.r.t to that hist_id

set @user_selected_place = 23;

select * from mydb.historical_building where hist_id = @user_selected_place;