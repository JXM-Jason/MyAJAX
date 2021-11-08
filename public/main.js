let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', `/page${n+1}`);
    request.onreadystatechange = () => { 
        if (request.readyState === 4 && request.status === 200) {
            let array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item.id;
                xxx.appendChild(li);
            })
            n += 1;
        }
    };
    request.send();
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/5.json');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            //将返回的响应转化为对象
            const object = JSON.parse(request.response)
            console.log(object);
            Myname.textContent = object.name;
        }
        
    }
    request.send();
}

getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/4.xml');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            //直接生成dom
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent.trim();
            console.log(text);
        }
    }
    request.send();
}
getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/3.html');
    request.onload = () => {
        const response = request.response;
        console.log(response);
        const div = document.createElement('div');
        div.innerHTML = response;
        document.body.appendChild(div);
    }
    request.onerror = () => {
        console.log('失败！');
    }
    request.send();
}

getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/2.js');
    request.onreadystatechange = () => {
        //下载完成，但是不知道是成功还是失败！
        if (request.readyState === 4) {
            if (request.status>=200 && request.status<300) {
                const response = request.response;
                console.log(response);
                const script = document.createElement('script');
                script.innerHTML = response;
                document.body.appendChild(script);
            } else {
                alert('加载js失败了!!')
            }
        }
    }
    request.send();
}


getCSS.onclick =()=> {
    //创建一个http请求对象
    const request = new XMLHttpRequest();
//初始化一个请求规定请求方式、url
    request.open("GET", "/style.css");

    request.onload = () => {
        const response = request.response;//这是收到的响应信息
        console.log(response);
        //创建style标签
        const style = document.createElement('style');
        //在标签内填写内容
        style.innerHTML = response;
        //将标签插到头部
        document.head.appendChild(style);
    };
    request.onerror = () => {
        console.log('fail!!');
    };
    request.send();
}



