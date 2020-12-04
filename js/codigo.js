$(document).ready(function () {
  $(" #conector a:eq(0)").click(function () {
    var alto = $(".seccionUno").offset().top;
    $("html").animate({
      scrollTop: alto,
    });
  });

  $(" #conector a:eq(1)").click(function () {
    var alto = $(".seccionTres").offset().top;
    $("html").animate({
      scrollTop: alto,
    });
  });

  $(" #conector a:eq(2)").click(function () {
    var alto = $(".seccionCuatro").offset().top;
    $("html").animate({
      scrollTop: alto,
    });
  });

  $(" #conector a:eq(3)").click(function () {
    var alto = $("#grupo").offset().top;
    $("html").animate({
      scrollTop: alto,
    });
  });

  $(".logo").click(function () {
    console.log("funcinando")
    var alto = $(".seccionUno").offset().top;
    $("html").animate({
      scrollTop: alto,
    });
  });

  /*------ Videos ------*/
  var indice;
  $(".circulo").click(function () {
    indice = parseInt($(this).attr("num"));

    manejarVideos();
    $("#flotante").css({
      top: "0",
    });
    $("#video").css({
      display: "block",
    });
    console.log($("#video").attr("src"));
  });

  $(".cerrar").click(function () {
    $("#flotante").css({
      top: "-100vh",
    });
  });

  $("#sig").click(function () {
    if (indice == 3) {
      indice = 0;
    } else {
      indice++;
    }
    manejarVideos();
  });
  $("#ant").click(function () {
    if (indice == 0) {
      indice = 3;
    } else {
      indice--;
    }

    manejarVideos();
  });

  function manejarVideos() {
    var urlVideo = $(".circulo:eq(" + indice + ")").attr("videoURL");

    console.log(urlVideo);
    $("#video").attr("src", urlVideo);
  }

    /*---- Galeria ----*/

	var i = 1;

	$(".btn:eq(0)").click(function(){

		
		if (i == 1) {
			$(".seccionCuatro img:eq(0)").css("display", "none");
			$(".seccionCuatro img:eq(1)").css("display", "flex");
			$(".seccionCuatro img:eq(2)").css("display", "none");
			$(".seccionCuatro img:eq(3)").css("display", "none");
			i = 2;
			console.log("funcionando2");
		}
		else if (i == 2) {
			$(".seccionCuatro img:eq(0)").css("display", "none");
			$(".seccionCuatro img:eq(1)").css("display", "none");
			$(".seccionCuatro img:eq(2)").css("display", "flex");
			$(".seccionCuatro img:eq(3)").css("display", "none");
			i = 3;
			console.log("funcionando3");
		}
		else if (i == 3) {
			$(".seccionCuatro img:eq(0)").css("display", "none");
			$(".seccionCuatro img:eq(1)").css("display", "none");
			$(".seccionCuatro img:eq(2)").css("display", "none");
			$(".seccionCuatro img:eq(3)").css("display", "flex");
			i = 4;
			console.log("funcionando4");
		}
		else if (i == 4) {
			$(".seccionCuatro img:eq(0)").css("display", "flex");
			$(".seccionCuatro img:eq(1)").css("display", "none");
			$(".seccionCuatro img:eq(2)").css("display", "none");
			$(".seccionCuatro img:eq(3)").css("display", "none");
			i = 1;
			console.log("funcionando1");
		}

	});

	$(".btn:eq(1)").click(function(){

		if (i == 1) {
			$(".seccionCuatro img:eq(0)").css("display", "none");
			$(".seccionCuatro img:eq(1)").css("display", "none");
			$(".seccionCuatro img:eq(2)").css("display", "none");
			$(".seccionCuatro img:eq(3)").css("display", "flex");
			i = 4;
			console.log("funcionando5");
		}
		else if (i == 4) {
			$(".seccionCuatro img:eq(0)").css("display", "none");
			$(".seccionCuatro img:eq(1)").css("display", "none");
			$(".seccionCuatro img:eq(2)").css("display", "flex");
			$(".seccionCuatro img:eq(3)").css("display", "none");
			i = 3;
			console.log("funcionando5");
		}
		else if (i == 3) {
			$(".seccionCuatro img:eq(0)").css("display", "none");
			$(".seccionCuatro img:eq(1)").css("display", "flex");
			$(".seccionCuatro img:eq(2)").css("display", "none");
			$(".seccionCuatro img:eq(3)").css("display", "none");
			i = 2;
			console.log("funcionando5");
		}
		else if (i == 2) {
			$(".seccionCuatro img:eq(0)").css("display", "flex");
			$(".seccionCuatro img:eq(1)").css("display", "none");
			$(".seccionCuatro img:eq(2)").css("display", "none");
			$(".seccionCuatro img:eq(3)").css("display", "none");
			i = 1;
			console.log("funcionando5");
		}
	});

function ejecucionMenu(x) {

		if (x.matches) { 

		  	/*document.body.style.backgroundColor = "yellow";*/
			$("#conector").addClass("menuOculto");

		  	var me = 1;

			$("#ic").click(function(){

				if (me == 1) {
					$("#conector").removeClass("menuOculto");
					$("#conector").addClass("menuVisible");
					$("#conector").addClass("transicion");
					me = 0;
					console.log("0");
				}

				else if ( me == 0){
					$("#conector").removeClass("menuVisible");
					$("#conector").addClass("menuOculto");
					$("#conector").addClass("transicion");
					me = 1;
					console.log("1");}
			});

		} else {
		 	/*document.body.style.backgroundColor = "pink";*/
			$("#conector").removeClass("menuOculto");
			$("#conector").addClass("menuVisible");
			$("#conector").removeClass("transicion");
		}
	  }
	  
	var x = window.matchMedia("(max-width: 1000px)")
	ejecucionMenu(x) // Llamado a la funcion ejecucionMenu
	x.addListener(ejecucionMenu) // Evento de escucha para cambio de mediaQuery

/*Nosotros*/
	var parrafo = document.getElementsByTagName("h3")[0];
	var pantalla = document.getElementsByTagName("img")[13];
	var miniaturas = document.getElementsByClassName("miniatura");

	function cambiar (){
		var atributo = this.getAttribute("src");
		var titulo = this. getAttribute("name");
		pantalla.setAttribute("src",atributo);
		parrafo.innerHTML = titulo;
	}

	miniaturas[0].addEventListener("click",cambiar);
	miniaturas[1].addEventListener("click",cambiar);
	miniaturas[2].addEventListener("click",cambiar);
	miniaturas[3].addEventListener("click",cambiar);	

});