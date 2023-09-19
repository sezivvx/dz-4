function loadJSON() {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);

            console.log(data);
        } else {
            console.error('Error:', xhr.status);
        }
    };

    xhr.onerror = function() {
        console.error('Request failed');
    };

    xhr.open('GET', 'data.json', true);
    xhr.send();
}
loadJSON();





