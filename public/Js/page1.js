// console.log("js running");
// Index page travelor review
function showHideReview(user) {
    // let user1 = document.getElementById("user1-review");
    // console.log("function call");
    // user.style.position = "relative";
    console.log("button clicked")
    if (user.style.display == "block") {
        user.style.display = "none";
    } else {
        user.style.display = "block";
    }
}
// Side Navbar
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "280px";
    document.getElementById("main").style.marginRight = "280px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    document.body.style.backgroundColor = "white";
}

// Date section in page2
function changeLink() {
    $('li').click(function() {
        $('li').removeClass("active");
        $(this).addClass("active");
    });
}

function collapseImg(checkbox, imgId) {
    checkbox.click();
    // console.log("collapse clicked")
    if (checkbox.checked == true) {
        imgId.src = "assests/img/upRoundArrow.svg";
    } else {
        imgId.src = "assests/img/down.png";
    }
}

function changeCollapseIcon(checkBox, iconId) {
    checkBox.click();
    // console.log("collapse clicked")
    if (checkBox.checked == true) {
        iconId.src = "assests/img/gray-up-icon.svg";
    } else {
        iconId.src = "assests/img/black-down-icon.svg";
    }
}

// collapse
/*let downArrowIcon = document.getElementById('down-arrow');
document.getElementById('day1').onclick = function() {
    if (downArrowIcon.src == "/assests/img/down.png") {
        // console.log(downArrowIcon);
        downArrowIcon.src = "/assests/img/up.png";
    } else {
        downArrowIcon.src = "/assests/img/down.png";
    }
};*/

// Goto registration page after otp modal
function registrationPage() {
    window.location = "/page7.html";
}

// show otp section only after user enter number and click on send button
function showOTPInput() {
    let otpInput = document.getElementById('otpInput');
    otpInput.classList.remove('invisible');
}

// Page 3
// Modal
window.onload = function() {
    document.getElementById('modal-card-button').setAttribute("disabled", "");
}

function selectCard(radio, card) {
    document.getElementById('modal-card-button').removeAttribute("disabled");
    // console.log(radio)
    // console.log(card)

    radio.click();
    document.querySelectorAll('.active-card-border').forEach(e => e.classList.remove('active-card-border'));
    card.classList.add('active-card-border');

}

/*$(function() {
    $('input[name="daterange"]').daterangepicker({
        opens: 'left'
    }, function(start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
}); */

// 2 minutes timer for otp 
var interval;

function countdown() {
    clearInterval(interval);
    interval = setInterval(function() {
        var timer = $('.js-timeout').html();
        timer = timer.split(':');
        var minutes = timer[0];
        var seconds = timer[1];
        seconds -= 1;
        if (minutes < 0) return;
        else if (seconds < 0 && minutes != 0) {
            minutes -= 1;
            seconds = 59;
        } else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;

        $('.js-timeout').html(minutes + ':' + seconds);

        if (minutes == 0 && seconds == 0) clearInterval(interval);
    }, 1000);
}
$('#js-startTimer').click(function() {
    // console.log("timer start");
    $('.js-timeout').text("2:00");
    countdown();
});


// open file using a tag in page 14 (upload)
function openFile() {
    document.getElementById('upload-file-id').click();
}

// Date picker in page7
/*$('input[name="dates"]').daterangepicker();
$(function() {
    $('input[name="daterange"]').daterangepicker({
        opens: 'left'
    }, function(start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
});*/

// Add another participant in registration page(page7)
var i = 0;

/*function addParticipant() {

    // let divTag = document.createElement('div');
    // let addParticipant = document.createElement('div');
    let participantBlock = document.getElementById('participant-block');
    let participant = document.getElementById('participant');
    let clone = participant.cloneNode(true);
    clone.id = "participant" + i++;
    participant.parentNode.appendChild(clone);
    console.log("button clicked")
}*/


/*function addParticipant() {
    let nameLabel = document.getElementById('name');
    sessionStorage.setItem("nameLabel", "name + i++");
    nameLabel.setAttribute("for",sessionStorage.getItem(nameLabel));
    nameLabel.innerText = "Name*";
}*/

// change to yellow tick when click on term and condition
function acceptCondition() {
    let yellowTick = document.getElementById('yellowTick');
    yellowTick.click();

    let yellowTickImg = document.getElementById('yellowTickImg');
    if (yellowTick.checked == true) {
        yellowTickImg.src = "assests/img/yellowTick.svg";
    } else {

        yellowTickImg.src = "assests/img/emptyCircle.svg";
    }
}
/*-------------------Payment Method-------------------------------*/
function enableBtn() {
    let onlinePay = document.getElementById('online-pay');
    if (onlinePay.checked == true) {
        console.log("online radio press")
        document.getElementById('pay-btn').removeAttribute("disabled");
    } else {
        document.getElementById('pay-btn').setAttribute("disabled", "");
    }
}


function uploadfile(file) {
    file.click()
}





/*Admin dashboard*/
function changePage() {
    $('li').click(function() {
        $('li').removeClass("active-card-border");
        $(this).addClass("active-card-border");
    });
}

function uploadCampPhoto(uploadFile) {
    uploadFile.click();
}
document.getElementById('imgAll').src = "assests/img/yellowTick.svg";

function changeRadio(radio, img) {
    document.getElementById('imgAll').src = "assests/img/emptyCircle.svg";
    document.getElementById('imgPending').src = "assests/img/emptyCircle.svg";
    document.getElementById('imgPaid').src = "assests/img/emptyCircle.svg";
    radio.click();
    img.src = "assests/img/yellowTick.svg";
}
$(document).ready(function() {
    $("#searchInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#mytable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

function openMenu(btnId) {
    // $('#link-box').slideToggle(1000);
    // console.log("js running")
    btnId.click();
}