
let timer;

function startCountdown() {

    let targetDate = new Date(document.getElementById("date").value).getTime();

    if (isNaN(targetDate)) {

        document.getElementById("result").innerHTML =
            "Please select a valid date.";

        return;
    }

    clearInterval(timer);

    timer = setInterval(function () {

        let now = new Date().getTime();

        let distance = targetDate - now;

        if (distance <= 0) {

            clearInterval(timer);

            document.getElementById("result").innerHTML =
                "Countdown Expired";

            return;
        }

        let days = Math.floor(
            distance / (1000 * 60 * 60 * 24)
        );

        let hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

        let minutes = Math.floor(
            (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        );

        let seconds = Math.floor(
            (distance % (1000 * 60)) /
            1000
        );

        document.getElementById("result").innerHTML =
            days + " Days " +
            hours + " Hours " +
            minutes + " Minutes " +
            seconds + " Seconds";

    }, 1000);
}

function reset() {

    clearInterval(timer);

    document.getElementById("date").value = "";

    document.getElementById("result").innerHTML = "";
}
