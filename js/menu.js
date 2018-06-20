$(document).ready(function(){
    /* Efecto submenu quienes somos */
    $("#btn-quienes-somos").click(function(e){
        e.preventDefault();
        $(".contenedor-submenu-quienes-somos").toggleClass("active");
        $(".btn-quienes-somos").toggleClass("active");
        $(".contenedor-submenu-productos").removeClass("active");
        $(".btn-productos").removeClass("active");

        if ($(".contenedor-submenu-quienes-somos").hasClass("active")) {
            $(".contenedor-modal").addClass("active");
        } else {
            $(".contenedor-modal").removeClass("active");
        }

        $(".contenedor-modal").click(function(){
            $(".contenedor-submenu-quienes-somos").removeClass("active");
            $(".contenedor-modal").removeClass("active");
            $(".btn-quienes-somos").removeClass("active");
        });
    });

    /* Efecto submenu productos */
    $("#btn-productos").click(function(e){
        e.preventDefault();
        $(".contenedor-submenu-productos").toggleClass("active");
        $(".btn-productos").toggleClass("active");
        $(".contenedor-submenu-quienes-somos").removeClass("active");
        $(".btn-quienes-somos").removeClass("active");

        if ($(".contenedor-submenu-productos").hasClass("active")) {
            $(".contenedor-modal").addClass("active");
        } else {
            $(".contenedor-modal").removeClass("active");
        }

        $(".contenedor-modal").click(function(){
            $(".contenedor-submenu-productos").removeClass("active");
            $(".contenedor-modal").removeClass("active");
            $(".btn-productos").removeClass("active");
        });
    });

    /* Btn cerrar modal */
    $("#btn-cerrar-modal").click(function(e){
        e.preventDefault();
        $(".contenedor-modal").removeClass("active");
    });

    /* Menu Responsive */
    $("#btn-menu").click(function(e){
        e.preventDefault();

        if($(".btn-menu i").attr("class") == "fa fa-bars"){
            $(".btn-menu i").removeClass("fa fa-bars").addClass("fa fa-close");
        } else {
            $(".btn-menu i").removeClass("fa fa-close").addClass("fa fa-bars")
        }

        $(".contenedor-menu-responsive").toggleClass("active");

        if ($(".contenedor-menu-responsive").hasClass("active")){
            $(".contenedor-modal-responsive").addClass("active");
        } else {
            $(".contenedor-modal-responsive").addClass("active");
        }
    });

    /* Cerrar Modal */
    $(".contenedor-modal-responsive").click(function(){
        $(".contenedor-menu-responsive").removeClass("active");
        $(".btn-menu").removeClass("active");
        $(".contenedor-modal-responsive").removeClass("active");

        if ($(".btn-menu i").attr("class") == "fa fa-bars"){
            $(".btn-menu i").removeClass("fa fa-bars").addClass("fa fa-close");
        } else {
            $(".btn-menu i").removeClass("fa fa-close").addClass("fa fa-bars");
        }
    });

    $("#btn-cerrar-modal-responsive").click(function(e){
        e.preventDefault();
        $(".contenedor-modal-responsive").removeClass("active");
        $(".contenedor-menu-responsive").removeClass("active");
        $(".btn-menu").removeClass("active");
    });

    /* Botones para abrir los submenus */
    $("#btn-quienes-somos-responsive").click(function(e){
        e.preventDefault();
        $(".menu-responsive").addClass("cerrar");
        $(".contenedor-submenu-quienes-somos-responsive").addClass("active");
    });

    $("#btn-productos-responsive").click(function(e){
        e.preventDefault();
        $(".menu-responsive").addClass("cerrar");
        $(".contenedor-submenu-productos-responsive").addClass("active");
    });

    /* Botones para cerrar los submenus */
    $("#btn-cerrar-submenu-quienes-somos-responsive").click(function(e){
        e.preventDefault();
        $(".contenedor-submenu-quienes-somos-responsive").removeClass("active");
        $(".menu-responsive").removeClass("cerrar");
        $(".menu-responsive").addClass("active");
    });

    $("#btn-cerrar-submenu-productos-responsive").click(function(e){
        e.preventDefault();
        $(".contenedor-submenu-productos-responsive").removeClass("active");
        $(".menu-responsive").removeClass("cerrar");
        $(".menu-responsive").addClass("active");
    });
});