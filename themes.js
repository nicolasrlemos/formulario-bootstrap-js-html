$('#theme-selector').change(function(){
    let valor = $(this).val()
    console.log(valor)
    const link = document.getElementById('tema')
    if (valor == 1) {
        link.href="./themes/bootstrap-darkly.css"
    }else if ( valor == 2 ){
        link.href="./themes/bootstrap-solar.css"
    } else if ( valor == 3 ){
        link.href="./themes/bootstrap-pulse.css"
    } else {
        link.href="./style.css"
    }
})