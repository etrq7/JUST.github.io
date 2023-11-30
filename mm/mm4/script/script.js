$(".mm > li").mouseenter(function() {
    $(".sm").stop().slideDown();
})

$(".mm > li").mouseleave(function() {
    $(".sm").stop().slideUp();
})


// 악세사리 - 귀고리
fetch("1-1.json")
    .then((res) => { return res.json() })
    .then((items) => {
        let br = document.createElement("br");
        let h1 = document.createElement("h1");

        document.querySelector(".ct").append(br)
        h1.innerHTML += "악세사리 - 귀고리"
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

// 악세사리 - 목걸이
fetch("1-2.json")
    .then((res) => { return res.json() })
    .then((items) => {
        let br = document.createElement("br");
        let h1 = document.createElement("h1");

        document.querySelector(".ct").append(br)
        h1.innerHTML += "악세사리 - 목걸이"
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

// 악세사리 - 반지
fetch("1-3.json")
    .then((res) => { return res.json() })
    .then((items) => {
        let br = document.createElement("br");
        let h1 = document.createElement("h1");

        document.querySelector(".ct").append(br)
        h1.innerHTML += "악세사리 - 반지"
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

// 악세사리 - 팔찌
fetch("1-4.json")
    .then((res) => { return res.json() })
    .then((items) => {
        let br = document.createElement("br");
        let h1 = document.createElement("h1");

        document.querySelector(".ct").append(br)
        h1.innerHTML += "악세사리 - 팔찌"
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