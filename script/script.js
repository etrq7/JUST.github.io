$(".mm > li").mouseenter(function () {
    $(".sm").stop().slideDown();
})

$(".mm > li").mouseleave(function () {
    $(".sm").stop().slideUp();
})

fetch("../1.json")
    .then((res) => { return res.json() })
    .then((items) => {
        let br = document.createElement("br");
        let hr = document.createElement("hr");
        let h1 = document.createElement("h1");
        let btn = document.createElement("a");

        btn.classList.add("btn");
        document.querySelector(".ct").append(br)
        document.querySelector(".ct").append(br)
        h1.innerHTML = "탑 인기상품" 
        btn.innerHTML = "보러가기"
        btn.setAttribute("href","../mm/mm1/index.html");
        document.querySelector(".ct").append(h1)
        document.querySelector(".ct").append(btn)
        document.querySelector(".ct").append(hr)

        // 탑
        for (let a = 0; a < 5; a += 4) {
            let df = document.createElement("ul");
            df.classList.add("df");

            for (let i = 0; i < 4; i++) {
                let info = `
                    <li>
                        <div class="ct-box">
                            <div class="img-box"><img src="images/${items.products[i + a].photo}"></div>
                            <h3>${items.products[i + a].title}</h3>
                            <p>가격 : ${items.products[i + a].price}</p>
                        </div>
                    </li>
                `;
                df.innerHTML += info;
                document.querySelector(".ct").append(df);
            }
        }
    }
    )

fetch("../2.json")
    .then((res) => { return res.json() })
    .then((items) => {
        let br = document.createElement("br");
        let hr = document.createElement("hr");
        let h1 = document.createElement("h1");
        let btn = document.createElement("a");

        btn.classList.add("btn");
        document.querySelector(".ct").append(br)
        document.querySelector(".ct").append(br)
        h1.innerHTML = "아우터 인기상품" 
        btn.innerHTML = "보러가기"
        btn.setAttribute("href","../mm/mm2/index.html");
        document.querySelector(".ct").append(h1)
        document.querySelector(".ct").append(btn)
        document.querySelector(".ct").append(hr)

        // 아우터
        for (let a = 0; a < 5; a += 4) {
            let df = document.createElement("ul");
            df.classList.add("df");

            for (let i = 0; i < 4; i++) {
                let info = `
                    <li>
                        <div class="ct-box">
                            <div class="img-box"><img src="images/${items.products[i + a].photo}"></div>
                            <h3>${items.products[i + a].title}</h3>
                            <p>가격 : ${items.products[i + a].price}</p>
                        </div>
                    </li>
                `;
                df.innerHTML += info;
                document.querySelector(".ct").append(df);
            }
        }
    }
    )

fetch("../3.json")
    .then((res) => { return res.json() })
    .then((items) => {
        let br = document.createElement("br");
        let hr = document.createElement("hr");
        let h1 = document.createElement("h1");
        let btn = document.createElement("a");

        btn.classList.add("btn");
        document.querySelector(".ct").append(br)
        document.querySelector(".ct").append(br)
        h1.innerHTML = "팬츠 인기상품" 
        btn.innerHTML = "보러가기"
        btn.setAttribute("href","../mm/mm3/index.html");
        document.querySelector(".ct").append(h1)
        document.querySelector(".ct").append(btn)
        document.querySelector(".ct").append(hr)

        // 아우터
        for (let a = 0; a < 5; a += 4) {
            let df = document.createElement("ul");
            df.classList.add("df");

            for (let i = 0; i < 4; i++) {
                let info = `
                    <li>
                        <div class="ct-box">
                            <div class="img-box"><img src="images/${items.products[i + a].photo}"></div>
                            <h3>${items.products[i + a].title}</h3>
                            <p>가격 : ${items.products[i + a].price}</p>
                        </div>
                    </li>
                `;
                df.innerHTML += info;
                document.querySelector(".ct").append(df);
            }
        }
    }
    )

fetch("../4.json")
    .then((res) => { return res.json() })
    .then((items) => {
        let br = document.createElement("br");
        let hr = document.createElement("hr");
        let h1 = document.createElement("h1");
        let btn = document.createElement("a");

        btn.classList.add("btn");
        document.querySelector(".ct").append(br)
        document.querySelector(".ct").append(br)
        h1.innerHTML = "악세사리 인기상품" 
        btn.innerHTML = "보러가기"
        btn.setAttribute("href","../mm/mm4/index.html");
        document.querySelector(".ct").append(h1)
        document.querySelector(".ct").append(btn)
        document.querySelector(".ct").append(hr)

        // 아우터
        for (let a = 0; a < 5; a += 4) {
            let df = document.createElement("ul");
            df.classList.add("df");

            for (let i = 0; i < 4; i++) {
                let info = `
                    <li>
                        <div class="ct-box">
                            <div class="img-box"><img src="images/${items.products[i + a].photo}"></div>
                            <h3>${items.products[i + a].title}</h3>
                            <p>가격 : ${items.products[i + a].price}</p>
                        </div>
                    </li>
                `;
                df.innerHTML += info;
                document.querySelector(".ct").append(df);
            }
        }
    }
    )
