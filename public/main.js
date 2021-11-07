console.log('我是main.js');
getCSS.onclick =()=> {
    //创建一个http请求对象
    const request = new XMLHttpRequest();
//初始化一个请求规定请求方式、url
    request.open("GET", "/style.css");

    request.onload = () => {
        // const response = request.response;
        // console.log(response.response);
        console.log('good job!!!!');
    };

    request.onerror = () => {
        console.log('fail!!');
    };
    request.send();
}



