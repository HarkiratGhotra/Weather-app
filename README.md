# Weather-app

#Start with ( ionic start "app_name" tabs)
* Once we get the folder like src, resources and variable.ts, then 
Open the src folder to check the pages. You will see all the pages under src*

# ionic g page "pagename"  -- to create new pages
# I have changed the Contact page with Setting page 
# Also Changed the icon for setting ( just change tab-icon=setting) in tabs.html
and in tabs.ts change the tab3Root = SettingPage;

It is very important to import latest page in tabs.ts and in app.module.ts. And in app.module.ts page, add classes under declaration and entrycomponent

# Once page has been developed -- 
Use variable.scss to make changes to Header color change and Tabs color change 
# Then make some changes in Pages, if style needs to change within the page like background color, then add style in app.scss

# In order to fetch data from API , use Provider 
# ionic g provider "name_provider"

# in weather.ts include (import https and rxjs/add/operators/map)
Then Include variable key under class, like apikey and url 
then inside constructor , put url = link of api

#
also made one method to fetch city and state from API


# then move to Home page where we need to use  this provider 

Under class 
make varaible 
like 
weather:any , location {} -- in object form ,
also inside constructor parameter, include weatherprovide varaible

then get the API data to this page from provider 
