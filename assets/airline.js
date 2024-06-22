const query = ' http://api.aviationstack.com/v1/countries?access_key=04436ea9c69848229dd5710c85a9699f';

fetch(query)
        .then(function (response) {
            console.log(response);
            return response.json();
        }).then(function (data) {

            //Here we want to pass our country into ANOTHER fetch request,

            // this second fetch request will pull flight info by arrival country (passed from holiday api) and departure city (pull from user's city)

            // Perform some fetches and parse the info, write it on a sheet of paper and do some testing with data pulled.

            // Tests will need to happen ebfore deciding how far to take the flight viewing feature
        });