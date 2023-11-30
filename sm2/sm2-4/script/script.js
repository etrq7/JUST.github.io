$(".mm > li").mouseenter(function() {
    $(".sm").stop().slideDown();
})

$(".mm > li").mouseleave(function() {
    $(".sm").stop().slideUp();
})

fetch("0.json")
    .then((res) => { return res.json() })
    .then((items) => {
        let br = document.createElement("br");
        let hr = document.createElement("hr");
        let h1 = document.createElement("h1");

        document.querySelector(".ct").append(br)
        h1.innerHTML += "아우터 - 머플러"
        document.querySelector(".ct").append(h1)
        document.querySelector(".ct").append(hr)

        for (let a = 0; a < 17; a += 4) {
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