(function () {

    let xhttp = new XMLHttpRequest();

    let newRequest = function() {
        xhttp
    }

    let handleError = function(error) {
        console.log("Ooops, there was an error... Error code: " + this.status);
    }

    let handleData = function(data) {
        let container = document.getElementById("bittsContainer");
        let bitts = JSON.parse(data);
        localStorage.setItem("bitts", bitts)

        for (let bitt of bitts) {
            let bittElement = document.createElement("p");
            bittElement.innerHTML = bitt.text;

            container.appendChild(bittElement);
        }

        newRequest(bitt)
    }

    xhttp.onload = function() {
        if(this.status === 200) {
            handleSuccess(xhttp.responseText)
        } else {
            handleError(xhttp)
        }
    };

    xhttp.open("GET", "/get-all-bitts", true);
    xhttp.send();

}())
