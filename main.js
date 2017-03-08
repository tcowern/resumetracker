var myApp = angular.module('myApp', [])
    .controller('resCtr', resController);

// NOTE - The following uses local storage to create an MVP

resController.$inject = ['$timeout']



function resController($timeout) {

    var main = this;
    var localList = [];
    main.newResume = {};
    main.newInterview = {};
    main.newWebSite = {};
    main.resumeList = JSON.parse(window.localStorage.getItem('resumelist')) || [];
    main.interviewList = JSON.parse(window.localStorage.getItem('interviewlist')) || [];
    main.careerList = JSON.parse(window.localStorage.getItem('careerlist')) || [];
    // console.log(main.resumeList);
    window.main = main;

    main.sortType     = 'title'; // set the default sort type
    main.sortReverse  = false;  // set the default sort order
    main.searchTitle   = '';     // set the default search/filter term

    main.addResume = function() {

        // Adding 7 days to submitted date
        var subDate = Date.parse(main.newResume.dateSubmitted);

        var newDate = new Date(subDate + 604800000); 

        newDate = new Date(newDate);

        main.newResume.followUp = newDate;

        //Saving everything into local storage
        if (main.newResume.title && main.newResume.location) {

            main.resumeList.push(main.newResume);

            // Give newResume a new object
            main.newResume = {};

            // Update localStorage

            var resumelist = angular.copy(main.resumeList); // copy the resume entry information


            // Strip $$hashKey for storage
            resumelist.forEach(function(resume) {
                delete resume.$$hashKey;
            });

            window.localStorage.setItem('resumelist', JSON.stringify(resumelist));

            } else {
            main.resumeFormErrMessage = 'Please make sure both the "Bucket List" and Date field are filled out!';
            $timeout(function() {
                main.resumeFormErrMessage = '';
            }, 3000)

            }


    }

    main.addInterview = function() {

        console.log("Hit add interview");
        // Adding 7 days to interview date
        var subDate = Date.parse(main.newInterview.intDate);

        var newDate = new Date(subDate + 604800000); 

        newDate = new Date(newDate);


        main.newInterview.thanksDate = newDate;

        //Saving everything into local storage
        if (main.newInterview.intDate && main.newInterview.intName) {

            main.interviewList.push(main.newInterview);

            // Give newInterview a new object
            main.newInterview = {};

            // Update localStorage

            var interviewlist = angular.copy(main.interviewList); // copy the resume entry information


            // Strip $$hashKey for storage
            interviewlist.forEach(function(interview) {
                delete interview.$$hashKey;
            });

            window.localStorage.setItem('interviewlist', JSON.stringify(interviewlist));

            } else {
            main.interviewFormErrMessage = 'Please make sure both the "Bucket List" and Date field are filled out!';
            $timeout(function() {
                main.iterviewFormErrMessage = '';
            }, 3000)

            }


    }

    main.addWebSite = function() {

        // Adding 7 days to submitted date
        var subDate = Date.parse(main.newWebSite.lastsearched);

        var newDate = new Date(subDate + 604800000); 

        newDate = new Date(newDate);

        main.newWebSite.followUp = newDate;

        //Saving everything into local storage
        if (main.newWebSite.sitename && main.newWebSite.url) {

            main.careerList.push(main.newWebSite);

            // Give newWebSite a new object
            main.newWebSite = {};
            // Update localStorage

            var careerlist = angular.copy(main.careerList); // copy the resume entry information


            // Strip $$hashKey for storage
            careerlist.forEach(function(career) {
                delete career.$$hashKey;
            });

            window.localStorage.setItem('careerlist', JSON.stringify(careerlist));

            } else {
            main.careerFormErrMessage = 'Please make sure both the "Bucket List" and Date field are filled out!';
            $timeout(function() {
                main.careerFormErrMessage = '';
            }, 3000)

            }


    }

}



   