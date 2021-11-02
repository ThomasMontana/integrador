const buscar = () => {
    var valor = $("#ELEMENTO").val();
    let data = {
        type: "GET",
        url: `https://api.giphy.com/v1/gifs/search?api_key=djpP1xFqVEyqRhH8KCfdsWX6ccVMwzQ6&q=${valor}`,
        data: {
            "data": [],
            "pagination": {
            "total_count": 0,
            "count": 0,
            "offset": 0
            },
            "meta": {
            "status": 200,
            "msg": "OK",
            "response_id": "rz2b5yiow977vp01q9ry7wt5paychtiig9jd6x1b"
            }
            },
        dataType: "json",
        success: (respuesta) => {
            $("#contenedor").empty();
            // console.log(respuesta)
                for (i of respuesta.data) {
                    $("#Gift").append(`
                    <div class="card" style="width: 18rem;" >
                    <img src="${i.images.downsized.url}" class="card-img-top">
                    <div class="card-body">
                    <p class="card-text">TITLE: ${i.title}</p>
                    <p>TYPE: ${i.type}</p>
                    <a href="${i.url}">URL</a></p>
                    </div>
                    </div>
                    `);
            }
        },
        error: () => {
            console.log("Error 001")
        }
    };
    $.ajax(data);
}