(function () {

    function handleBitts(bitts) {
        localStorage.bitts = bitts;
        console.log(bitts)
    }

    function getData() {
        console.log("getData")

        fetch('/get-all-bitts')
            .then(function(response) {
                return response.text();
            })
            .then(function(text) {
                handleBitts(JSON.parse(text))
            })
            .catch(function(error) {
                console.log('Request failed', error);
            });
    }

    let getDataIntervalID = setInterval(getData, 1*1000)

    console.log("getDataIntervalID: " + getDataIntervalID)

    setTimeout(function() { clearInterval(getDataIntervalID) }, 10*1000)

}())
