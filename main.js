let images = [];
$.get({
    url:'/data.json',
    dataType: "json",
    crossDomain: true,
    success: 
    function (data) {
        edulist(data.pendidikan);
        worklist(data.pengalaman);
        portoList(data);
        
        data.porto.forEach((item, i) => {
            images.push(item)
        })
        
    }
});
$(document).ready(() => {
    const datas = images.slice(0, 6)
    datas.forEach((item, i) => {
        $('#image-bar').append(
            `<div class="col-4 p-1 mb-1"><img height="150" width="150" src="${item.gambar}" alt="${item.judul}" class="img-fluid"></div>`
        );
    })

    images.forEach((item, i) => {
        $('#image-bar-x').append(
            `<div class="col-4 p-0 m-0 mb-1"><img height="150" width="150" src="${item.gambar}" alt="${item.judul}" class="img-fluid"></div>`
        );
    })
})
function portoList(data) {
    data.porto.forEach((item, i) => {

    $('.main-porto').append(
        `<div class="post bunder py-3">
            <div class="d-flex">
                <div class="mx-2">
                    <img
                        src="${data.profile}"
                        class="img-fluid rounded-circle mx-2"
                        width="40"
                        height="40"
                        alt="">
                </div>
                <div class="inner-post">
                    <h6 class="name mb-0">${data.nama}</h6>
                    <small class="text-body">
                        Last year ago ·
                        <i class="fas fa-earth-americas"></i>
                    </small>
                    <div class="desc-post my-1">
                        ${item.judul}
                    </div>
                </div>
            </div>
            <div class="img-post">
                <img
                    src="https://via.placeholder.com/730"
                    class="img-fluid img-post-inner"
                    alt="">
                <div class="row mt-1 mx-3">
                    <div class="col-3 m-0 p-1">
                        <img
                            src="https://via.placeholder.com/730"
                            class="img-fluid img-post-inner-bar"
                            alt="">
                    </div>
                    <div class="col-3 m-0 p-1">
                        <img
                            src="https://via.placeholder.com/730"
                            class="img-fluid img-post-inner-bar"
                            alt="">
                    </div>
                    <div class="col-3 m-0 p-1">
                        <img
                            src="https://via.placeholder.com/730"
                            class="img-fluid img-post-inner-bar"
                            alt="">
                    </div>
                    <div class="col-3 m-0 p-1">
                        <img
                            src="https://via.placeholder.com/730"
                            class="img-fluid img-post-inner-bar"
                            alt="">
                    </div>
                </div>
            </div>
            <hr>
        </div>`
    )
});
}

function getInfo(data) {
    let listItems = data.map(item => `<li>${item}</li>`);
    return listItems.join('');
}
function openWhatsApp() {
    // Ganti "123456789" dengan nomor WhatsApp yang diinginkan, tanpa tanda '+' atau karakter lain.
    var phoneNumber = "081290669170";
    
    // Ganti "Halo, saya tertarik dengan produk Anda!" dengan teks pesan awal yang diinginkan.
    var message = encodeURIComponent("Halo, saya tertarik dengan profile Anda!");

    // Membuat URL WhatsApp dengan nomor telepon dan teks pesan awal
    var whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + message;

    // Membuka URL WhatsApp dalam tab atau jendela baru
    window.open(whatsappUrl);
  }

function worklist(data){
    data.forEach((item, i) => {
    $('.work-list').append(`
    <div class="d-flex my-4" id="myjob">
        <div class="">
            <img
                src="https://via.placeholder.com/150"
                class="img-fluid rounded-circle"
                height="50"
                width="50"
                alt="">
        </div>
        <div class="mx-3">
            <h6 class="mb-0">${item.perusahaan} - ${item.posisi}</h6>
            <small>Jakarta Indonesia</small>
            <br>
            <small>Since :
                <span>${item.waktu.mulai} - ${item.waktu.selesai}</span></small>
            <br>
            <small>
                <ol class="m-0 mx-3  p-0 job-desk-list">
                    ${getInfo(item.tugas)}
                </ol>
            </small>
        </div>

    </div>
`);
}) 
}
function edulist(data){
    $('.edu-list').append(
    `<div class="d-flex my-4" id="myjob">
        <div class="">
            <img
                src="https://via.placeholder.com/150"
                class="img-fluid rounded-circle"
                height="50"
                width="50"
                alt=""></div>
            <div class="mx-3">
                <h6 class="mb-0">${data.nama}</h6>
                <small>${data.gelar} in ${data.jurusan} with GPA :
                    <strong>${data.ipk}</strong>
                </small>
                <br>
                    <small>
                        <strong>${data.dari} - ${data.sampai}</strong>
                    </small>
                    <br>
                        <small>
                            <ol class="m-0 mx-3 p-0">
                                <li>Learn Basic Programing and Algoritm</li>
                                <li>Learn how to management team in college project</li>
                            </ol>
                        </small>
                    </div>
                </div>`
        )
    }

function seeMorePorto() {
    $('#image-bar').html('')
    $('#button-see-more').addClass('d-none');
    images.forEach((item, i) => {
        $('#image-bar').append(
            `<div class="col-4 p-1 mb-1">
                <img src="${item.gambar}" height="150" width="150" alt="${item.judul}" class="img-fluid">
            </div>`
        );
    })
}