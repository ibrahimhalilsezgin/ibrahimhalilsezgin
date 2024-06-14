var timestamp = 1194644981;

function updateAge() {
    var currentTime = Date.now();

    var startDate = new Date(timestamp * 1000);
    var timeDifference = currentTime - startDate.getTime();
    var ageInYears = timeDifference / (1000 * 60 * 60 * 24 * 365.25);
    document.getElementById('old').textContent = `${ageInYears.toFixed(8)} y.o`;
}

setInterval(updateAge);

updateAge();
