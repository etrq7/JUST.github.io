$(".mm > li").mouseenter(function () {
    $(".sm").stop().slideDown();
})

$(".mm > li").mouseleave(function () {
    $(".sm").stop().slideUp();
})


// 탑 - 블라우스
fetch("1-1.json")
    .then((res) => { return res.json() })
    .then((items) => {
        let br = document.createElement("br");
        let h1 = document.createElement("h1");

        document.querySelector(".ct").append(br)
        h1.innerHTML += "탑 - 블라우스"
        document.querySelector(".ct").append(h1)

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

// 탑 - 티
fetch("1-2.json")
    .then((res) => { return res.json() })
    .then((items) => {
        let br = document.createElement("br");
        let h1 = document.createElement("h1");

        document.querySelector(".ct").append(br)
        h1.innerHTML += "탑 - 티"
        document.querySelector(".ct").append(h1)

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

// 탑 - 셔츠
fetch("1-3.json")
    .then((res) => { return res.json() })
    .then((items) => {
        let br = document.createElement("br");
        let h1 = document.createElement("h1");

        document.querySelector(".ct").append(br)
        h1.innerHTML += "탑 - 셔츠"
        document.querySelector(".ct").append(h1)

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

// 탑 - 니트
fetch("1-4.json")
    .then((res) => { return res.json() })
    .then((items) => {
        let br = document.createElement("br");
        let h1 = document.createElement("h1");

        document.querySelector(".ct").append(br)
        h1.innerHTML += "탑 - 니트"
        document.querySelector(".ct").append(h1)

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