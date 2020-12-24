console.log('start xml request');
const xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = () => {
    console.log(xmlhttp.readyState, xmlhttp.status, xmlhttp);
    console.log(xmlhttp.response);
};
xmlhttp.open('GET', 'http://localhost:3000/getData');
xmlhttp.send();