var myApp = angular.module('myApp', ['ngMaterial', 'ngMessages'])
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

            // Give newBucket a new object
            main.newResume = {};

            // Manually trigger the modal
            // $('#myModal').modal('toggle');

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

            // Give newBucket a new object
            main.newInterview = {};

            // Manually trigger the modal
            // $('#myModal').modal('toggle');

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

            // Give newBucket a new object
            main.newWebSite = {};

            // Manually trigger the modal
            // $('#myModal').modal('toggle');

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



    // main.Prioritize = function($index) {
    //     // console.log("ng-click works!");

    //     console.log($index);

    //     if ($index === 0) {

    //     } else {

    //         // copy the Bucket List
    //         var bucketlist = angular.copy(main.bucketList);

    //         // switch the values of the clicked item and the one above it
    //         var myIndex = "";
    //         myIndex = bucketlist[$index + 1];
    //         console.log(myIndex);
    //         var oldName = bucketlist[$index].name;
    //         var newName = bucketlist[$index - 1].name;
    //         var oldDate = bucketlist[$index].date;
    //         var newDate = bucketlist[$index - 1].date;
    //         var oldTask = bucketlist[$index].task;
    //         var newTask = bucketlist[$index - 1].task;
    //         bucketlist[$index - 1].name = oldName;
    //         bucketlist[$index].name = newName;
    //         bucketlist[$index - 1].date = oldDate;
    //         bucketlist[$index].date = newDate;
    //         bucketlist[$index - 1].task = oldTask;
    //         bucketlist[$index].task = newTask;

    //         // Strip $$hashKey for storage
    //         bucketlist.forEach(function(bucket) {
    //             delete bucket.$$hashKey;
    //         });

    //         // update main Bucket List to display new list order
    //         main.bucketList = angular.copy(bucketlist);

    //         // Update localStorage
    //         window.localStorage.setItem('bucketlist', JSON.stringify(bucketlist));

    //     }
    // }

    // main.updateDate = function($index, date) {
    //     // console.log("Index is " + $index + ", " + "Date is " + date)
    //     // copy the Bucket List
    //     var bucketlist = angular.copy(main.bucketList);

    //     // update the date value in the copy of bucketlist
    //     bucketlist[$index].date = date;

    //     // Update localStorage
    //     window.localStorage.setItem('bucketlist', JSON.stringify(bucketlist));

    // }

    // main.startClock = function() {
    //     var clock = $('.clock').FlipClock({
    //         clockFace: 'MinuteCounter',
    //         autoStart: false,
    //         callbacks: {
    //             stop: function() {
    //                 $('#congratsModal').modal(true);
    //             }
    //         }
    //     });

    //     clock.setTime(100);
    //     clock.setCountdown(true);
    //     clock.start();
    // }

    // main.selectBucket = function($index) {
    //     // console.log("Dropdown works!")
    //     // document.getElementById("nobucket").style.visibility="hidden";
    //     // copy the Bucket List
    //     var bucketlist = angular.copy(main.bucketList);
    //     main.addTaskErrMessage = '';

    //     // var myIndex = "";

    //     var myName = bucketlist[$index].name;
    //     var myIndex = $index + 1;

    //     document.getElementById("dLabel").innerHTML = myName;

    //     myItemCombo = "Item: " + myIndex + " - " + myName;

    //     document.getElementsByName("myBucketHeading")[0].innerHTML = (myName);
    //     document.getElementsByName("index")[0].innerHTML = (myIndex);
    //     document.getElementsByName("search")[0].value = myName;

    //     // main.addTask($index);

    // }

    // main.getIndex = function() {
    //     var myName = document.getElementsByName("search")[0].value;
    //     var bucketlist = angular.copy(main.bucketList);
    //     for (var i = 0; i < bucketlist.length; i++) {
    //         if (myName === bucketlist[i].name) {
    //             console.log(bucketlist[i].name);
    //             var myIndex = bucketlist[i].$index;
    //             document.getElementsByName("index")[0].innerHTML = (myIndex);
    //             console.log(myIndex);
    //         }
    //     }
    //     console.log(myName);
    // }


    // main.addTask = function() {
    //     // console.log("clicked")
    //     main.addTaskErrMessage = '';
  
    //     var myIndex = document.getElementsByName("index")[0].innerHTML;
    //     // var myName = document.getElementsByName("name")[0].innerHTML;
    //     // console.log(myName);
    //     myIndex--;
    //     // console.log(myIndex);
    //     var myTask = document.getElementById("task").value;
    //     console.log(myTask);
    //     if (myTask === "") {
    //         console.log("No Task!");
    //         // document.getElementById("err1").className("ng-show");
    //         main.addTaskErrMessage = 'Please add a task before clicking Submit!';
            
    //     } else {
    //         console.log(myTask);
    //         var bucketlist = angular.copy(main.bucketList);
    //         console.log(bucketlist[myIndex].name);
    //         // var myString= "BL one, Item Three"
    //         // var myString = bucketlist.task
    //         // console.log(myTask);
    //         bucketlist[myIndex].task.push(myTask);
    //         console.log(bucketlist[myIndex].task);

    //         // Strip $$hashKey for storage
    //         bucketlist.forEach(function(bucket) {
    //             delete bucket.$$hashKey;
    //         });

    //         window.localStorage.setItem('bucketlist', JSON.stringify(bucketlist));

    //         // update main Bucket List to display new list order
    //         main.bucketList = angular.copy(bucketlist);
    //         document.getElementById("task").value = "";

    //     }
    // }

//     main.choiceEmpty = function() {
//         // console.log("onChange worked")
//         main.addTaskErrMessage = '';
//         var myCheck = document.getElementById('dLabel').innerText;
//         var checkStr = "Select Your Bucket List Item here";
//         // console.log(checkStr);
//         // console.log(myCheck);
//         if(myCheck === checkStr) {
//             console.log("equals")
//             document.getElementById("nobucket").style.display="none";
//             main.addTaskErrMessage = 'Please add a task before clicking Submit2!';
//         // console.log("clicked")


//         }
        
//     }


// }


// myApp.run(function(editableOptions) {
//     editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
// });