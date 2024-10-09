# NextJS Simple Weather App

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

**To run project locally** you need to launch these commands (after cloning this repository): 
1. **add .env file** in the root of project; you need to add these variables in this file:
NEXT_PUBLIC_API_URL=https://api.openweathermap.org/data/2.5/forecast \
NEXT_PUBLIC_KEY="your_api_key" \
NEXT_PUBLIC_START_CITY="New York" (or another default city for which the weather search will be performed when the application is initially launched)

2. **npm ci** 

3. **npm run dev**

Next, you could open the application in the browser.


**Application** 
This application is used to get the weather forecast for the city entered by the user. To get the weather forecast data, you need to enter the name of the city in the form. The api.openweathermap.org service is used. Below this form, the weather forecast for this city until the end of the current day (by the hour) will appear. Changing the browser screen size will reduce the number of hourly forecasts displayed on the screen. The application used the chakra-ui, zustand, moment libraries.

Live demo - https://cats-dogs-breed-explorer.vercel.app/