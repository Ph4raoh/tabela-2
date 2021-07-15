$(document).ready(function () {
  $(".select2").hide();
  $("#slct2").hide();
  $(".inputpeso").hide();

  $(".select3").hide();
  $("#slct3").hide();

  $(".select4").hide();
  $("#slct4").hide();

  $(".resultado").hide();
  $(".resultado2").hide();

  $("#textodescricao").hide();

  $("#botaoBaixar").hide();

  $("#textonivel").hide();
  $("#textonivel2").hide();
  $("#textonivel3").hide();

  $(".resultado3").hide();

  $("#slct").on("change", function () {
    if (this.value == "1" || this.value == "2") {
      var sexo;
      if (this.value == "1") {
        sexo = "homem";
      } else {
        sexo = "mulher";
      }

      $(".select2").show();
      $("#slct2").show();

      $("#slct2").on("change", function () {
        if (this.value == "1" || this.value == "2" || this.value == "3") {
          var idade;
          if (this.value == "1") {
            idade = "1";
          }
          if (this.value == "2") {
            idade = "2";
          }
          if (this.value == "3") {
            idade = "3";
          }

          $(".inputpeso").show();

          $("#peso").keyup(function () {
            var peso = $("#peso").val();

            //console.log("basal " + basal);

            if (peso.toString().length >= 2) {
              $(".select4").show();
              $("#slct4").show();
              $("#textonivel").show();
              $("#textonivel2").show();
              $("#textonivel3").show();
              $("#slct4").on("change", function () {
                var atividade;
                var nivelDeAtividade;
                if (
                  this.value == "1" ||
                  this.value == "2" ||
                  this.value == "3"
                ) {
                  if (this.value == "1") {
                    if (sexo == "homem") {
                      atividade = 1.55;
                    } else {
                      atividade = 1.56;
                    }
                    nivelDeAtividade = 1;
                  }
                  if (this.value == "2") {
                    if (sexo == "homem") {
                      atividade = 1.78;
                    } else {
                      atividade = 1.64;
                    }
                    nivelDeAtividade = 2;
                  }
                  if (this.value == "3") {
                    if (sexo == "homem") {
                      atividade = 2.1;
                    } else {
                      atividade = 1.82;
                    }
                    nivelDeAtividade = 3;
                  }
                  $(".select3").show();
                  $("#slct3").show();

                  $("#slct3").on("change", function () {
                    var objetivo;
                    if (this.value == "1") {
                      objetivo = "emagrecimento";

                      console.log("sexo " + sexo);
                      console.log("idade " + idade);
                      console.log("peso " + peso);
                      console.log("atividade " + atividade);
                      console.log("objetivo " + objetivo);
                      console.log("Nivel De Atividade " + nivelDeAtividade);

                      var resu;

                      if (sexo == "mulher" && idade == 1) {
                        resu = (14.7 * peso + 496) * atividade;
                      }
                      if (sexo == "mulher" && idade == 2) {
                        resu = (8.7 * peso + 829) * atividade;
                      }
                      if (sexo == "mulher" && idade == 3) {
                        resu = (10.5 * peso + 596) * atividade;
                      }

                      if (sexo == "homem" && idade == 1) {
                        resu = (15.3 * peso + 679) * atividade;
                      }
                      if (sexo == "homem" && idade == 2) {
                        resu = (11.6 * peso + 879) * atividade;
                      }
                      if (sexo == "homem" && idade == 3) {
                        resu = (13.5 * peso + 487) * atividade;
                      }

                      var reduzir;

                      if (
                        sexo == "homem" &&
                        nivelDeAtividade == 1 &&
                        idade == 1 &&
                        objetivo == "emagrecimento"
                      ) {
                        console.log("reduzir 700kcal");
                        $("#resu").val("reduzir 700kcal");

                        var reduzir = 700;
                      }

                      if (
                        sexo == "homem" &&
                        nivelDeAtividade == 1 &&
                        idade == 2 &&
                        objetivo == "emagrecimento"
                      ) {
                        console.log("reduzir 600 kcal");
                        $("#resu").val("reduzir 600 kcal");

                        var reduzir = 600;
                      }

                      if (
                        sexo == "homem" &&
                        nivelDeAtividade == 1 &&
                        idade == 3 &&
                        objetivo == "emagrecimento"
                      ) {
                        console.log("reduzir 500 kcal");
                        $("#resu").val("reduzir 500 kcal");

                        var reduzir = 500;
                      }

                      ("-----------------------------------------");

                      if (
                        sexo == "homem" &&
                        nivelDeAtividade == 2 &&
                        idade == 1 &&
                        objetivo == "emagrecimento"
                      ) {
                        console.log("reduzir 500kcal");
                        $("#resu").val("reduzir 500kcal");

                        var reduzir = 500;
                      }

                      if (
                        sexo == "homem" &&
                        nivelDeAtividade == 2 &&
                        idade == 2 &&
                        objetivo == "emagrecimento"
                      ) {
                        console.log("reduzir 450kcal");
                        $("#resu").val("reduzir 450kcal");

                        var reduzir = 450;
                      }

                      if (
                        sexo == "homem" &&
                        nivelDeAtividade == 2 &&
                        idade == 3 &&
                        objetivo == "emagrecimento"
                      ) {
                        console.log("reduzir 400kcal");
                        $("#resu").val("reduzir 400kcal");

                        var reduzir = 400;
                      }

                      ("-----------------------------------------");

                      if (
                        sexo == "homem" &&
                        nivelDeAtividade == 3 &&
                        idade == 1 &&
                        objetivo == "emagrecimento"
                      ) {
                        console.log("reduzir 300kcal");
                        $("#resu").val("reduzir 300kcal");

                        var reduzir = 300;
                      }

                      if (
                        sexo == "homem" &&
                        nivelDeAtividade == 3 &&
                        idade == 2 &&
                        objetivo == "emagrecimento"
                      ) {
                        console.log("reduzir 300kcal");
                        $("#resu").val("reduzir 300kcal");

                        var reduzir = 300;
                      }

                      if (
                        sexo == "homem" &&
                        nivelDeAtividade == 3 &&
                        idade == 3 &&
                        objetivo == "emagrecimento"
                      ) {
                        console.log("reduzir 300kcal");
                        $("#resu").val("reduzir 300kcal");

                        var reduzir = 300;
                      }

                      //-----------------Mulher------------------

                      if (
                        sexo == "mulher" &&
                        nivelDeAtividade == 1 &&
                        idade == 1 &&
                        objetivo == "emagrecimento"
                      ) {
                        console.log("reduzir 500kcal");
                        $("#resu").val("reduzir 500kcal");

                        var reduzir = 500;
                      }

                      if (
                        sexo == "mulher" &&
                        nivelDeAtividade == 1 &&
                        idade == 2 &&
                        objetivo == "emagrecimento"
                      ) {
                        console.log("reduzir 400 kcal");
                        $("#resu").val("reduzir 400 kcal");

                        var reduzir = 400;
                      }

                      if (
                        sexo == "mulher" &&
                        nivelDeAtividade == 1 &&
                        idade == 3 &&
                        objetivo == "emagrecimento"
                      ) {
                        console.log("reduzir 400 kcal");
                        $("#resu").val("reduzir 400 kcal");

                        var reduzir = 400;
                      }

                      ("-----------------------------------------");

                      if (
                        sexo == "mulher" &&
                        nivelDeAtividade == 2 &&
                        idade == 1 &&
                        objetivo == "emagrecimento"
                      ) {
                        console.log("reduzir 400kcal");
                        $("#resu").val("reduzir 400kcal");

                        var reduzir = 400;
                      }

                      if (
                        sexo == "mulher" &&
                        nivelDeAtividade == 2 &&
                        idade == 2 &&
                        objetivo == "emagrecimento"
                      ) {
                        console.log("reduzir 300kcal");
                        $("#resu").val("reduzir 300kcal");

                        var reduzir = 300;
                      }

                      if (
                        sexo == "mulher" &&
                        nivelDeAtividade == 2 &&
                        idade == 3 &&
                        objetivo == "emagrecimento"
                      ) {
                        console.log("reduzir 300kcal");
                        $("#resu").val("reduzir 300kcal");

                        var reduzir = 300;
                      }

                      ("-----------------------------------------");

                      if (
                        sexo == "mulher" &&
                        nivelDeAtividade == 3 &&
                        idade == 1 &&
                        objetivo == "emagrecimento"
                      ) {
                        console.log("reduzir 300kcal");
                        $("#resu").val("reduzir 300kcal");

                        var reduzir = 300;
                      }

                      if (
                        sexo == "mulher" &&
                        nivelDeAtividade == 3 &&
                        idade == 2 &&
                        objetivo == "emagrecimento"
                      ) {
                        console.log("reduzir 230kcal");
                        $("#resu").val("reduzir 230kcal");

                        var reduzir = 230;
                      }

                      if (
                        sexo == "mulher" &&
                        nivelDeAtividade == 3 &&
                        idade == 3 &&
                        objetivo == "emagrecimento"
                      ) {
                        console.log("reduzir 230kcal");
                        $("#resu").val("reduzir 230kcal");

                        var reduzir = 230;
                      }

                      $("#resu2").val(
                        `Total: ${(resu - reduzir).toFixed(0)}kcal ao dia`
                      );

                      var carboidrato;
                      var proteina;
                      var gordura;

                      if (objetivo == "emagrecimento") {
                        carboidrato = (((resu - reduzir) * 30) / 100).toFixed(
                          0
                        );
                        proteina = (((resu - reduzir) * 50) / 100).toFixed(0);
                        gordura = (((resu - reduzir) * 20) / 100).toFixed(0);

                        $("#resu3").val(
                          `Carbo. ${carboidrato}kcal | Prote. ${proteina}kcal | Gordu. ${gordura}kcal`
                        );

                        console.log(
                          carboidrato + " " + proteina + " " + gordura
                        );

                        $(".select2").hide();
                        $("#slct2").hide();
                        $(".inputpeso").hide();

                        $(".select3").hide();
                        $("#slct3").hide();

                        $(".select4").hide();
                        $("#slct4").hide();

                        $(".resultado").hide();
                        $(".resultado2").show();
                        $("#resu2").show();
                        $(".select").hide();

                        $("#textodescricao").show();

                        $("#botaoBaixar").show();

                        $("#textonivel").hide();
                        $("#textonivel2").hide();
                        $("#textonivel3").hide();

                        $(".resultado3").show();

                        var xValues = ["Carboidrato", "Proteínas", "Gordura"];
                        var yValues = [carboidrato, proteina, gordura];
                        var barColors = ["#b91d47", "#00aba9", "#2b5797"];

                        new Chart("myChart", {
                          type: "pie",
                          data: {
                            labels: xValues,
                            datasets: [
                              {
                                backgroundColor: barColors,
                                data: yValues,
                              },
                            ],
                          },
                          options: {
                            title: {
                              display: true,
                            },
                          },
                        });
                      }
                      //$(".resultado").show();
                      $(".resultado2").show();
                    }
                    if (this.value == "2") {
                      objetivo = "hipertrofia";
                      console.log("sexo " + sexo);

                      console.log("idade " + idade);
                      console.log("peso " + peso);
                      console.log("atividade " + atividade);
                      console.log("objetivo " + objetivo);
                      console.log("Nivel De Atividade " + nivelDeAtividade);

                      var resu;

                      if (sexo == "mulher" && idade == 1) {
                        resu = (14.7 * peso + 496) * atividade;
                      }
                      if (sexo == "mulher" && idade == 2) {
                        resu = (8.7 * peso + 829) * atividade;
                      }
                      if (sexo == "mulher" && idade == 3) {
                        resu = (10.5 * peso + 596) * atividade;
                      }

                      if (sexo == "homem" && idade == 1) {
                        resu = (15.3 * peso + 679) * atividade;
                      }
                      if (sexo == "homem" && idade == 2) {
                        resu = (11.6 * peso + 879) * atividade;
                      }
                      if (sexo == "homem" && idade == 3) {
                        resu = (13.5 * peso + 487) * atividade;
                      }

                      var aumentar;

                      if (
                        sexo == "homem" &&
                        nivelDeAtividade == 1 &&
                        idade == 1 &&
                        objetivo == "hipertrofia"
                      ) {
                        console.log("aumentar 300kcal");
                        $("#resu").val("aumentar 300kcal");

                        var aumentar = 300;
                      }

                      if (
                        sexo == "homem" &&
                        nivelDeAtividade == 1 &&
                        idade == 2 &&
                        objetivo == "hipertrofia"
                      ) {
                        console.log("aumentar 300 kcal");
                        $("#resu").val("aumentar 300 kcal");

                        var aumentar = 300;
                      }

                      if (
                        sexo == "homem" &&
                        nivelDeAtividade == 1 &&
                        idade == 3 &&
                        objetivo == "hipertrofia"
                      ) {
                        console.log("aumentar 200 kcal");
                        $("#resu").val("aumentar 200 kcal");

                        var aumentar = 200;
                      }

                      ("-----------------------------------------");

                      if (
                        sexo == "homem" &&
                        nivelDeAtividade == 2 &&
                        idade == 1 &&
                        objetivo == "hipertrofia"
                      ) {
                        console.log("aumentar 400kcal");
                        $("#resu").val("aumentar 400kcal");

                        var aumentar = 400;
                      }

                      if (
                        sexo == "homem" &&
                        nivelDeAtividade == 2 &&
                        idade == 2 &&
                        objetivo == "hipertrofia"
                      ) {
                        console.log("aumentar 350kcal");
                        $("#resu").val("aumentar 350kcal");

                        var aumentar = 350;
                      }

                      if (
                        sexo == "homem" &&
                        nivelDeAtividade == 2 &&
                        idade == 3 &&
                        objetivo == "hipertrofia"
                      ) {
                        console.log("aumentar 300kcal");
                        $("#resu").val("aumentar 300kcal");

                        var aumentar = 300;
                      }

                      ("-----------------------------------------");

                      if (
                        sexo == "homem" &&
                        nivelDeAtividade == 3 &&
                        idade == 1 &&
                        objetivo == "hipertrofia"
                      ) {
                        console.log("aumentar 500kcal");
                        $("#resu").val("aumentar 500kcal");

                        var aumentar = 500;
                      }

                      if (
                        sexo == "homem" &&
                        nivelDeAtividade == 3 &&
                        idade == 2 &&
                        objetivo == "hipertrofia"
                      ) {
                        console.log("aumentar 450kcal");
                        $("#resu").val("aumentar 450kcal");

                        var aumentar = 450;
                      }

                      if (
                        sexo == "homem" &&
                        nivelDeAtividade == 3 &&
                        idade == 3 &&
                        objetivo == "hipertrofia"
                      ) {
                        console.log("aumentar 400kcal");
                        $("#resu").val("aumentar 400kcal");

                        var aumentar = 400;
                      }

                      //-----------------Mulher------------------

                      if (
                        sexo == "mulher" &&
                        nivelDeAtividade == 1 &&
                        idade == 1 &&
                        objetivo == "hipertrofia"
                      ) {
                        console.log("aumentar 250kcal");
                        $("#resu").val("aumentar 250kcal");

                        var aumentar = 250;
                      }

                      if (
                        sexo == "mulher" &&
                        nivelDeAtividade == 1 &&
                        idade == 2 &&
                        objetivo == "hipertrofia"
                      ) {
                        console.log("aumentar 200 kcal");
                        $("#resu").val("aumentar 200 kcal");

                        var aumentar = 200;
                      }

                      if (
                        sexo == "mulher" &&
                        nivelDeAtividade == 1 &&
                        idade == 3 &&
                        objetivo == "hipertrofia"
                      ) {
                        console.log("aumentar 150 kcal");
                        $("#resu").val("aumentar 150 kcal");

                        var aumentar = 150;
                      }

                      ("-----------------------------------------");

                      if (
                        sexo == "mulher" &&
                        nivelDeAtividade == 2 &&
                        idade == 1 &&
                        objetivo == "hipertrofia"
                      ) {
                        console.log("aumentar 350kcal");
                        $("#resu").val("aumentar 350kcal");

                        var aumentar = 350;
                      }

                      if (
                        sexo == "mulher" &&
                        nivelDeAtividade == 2 &&
                        idade == 2 &&
                        objetivo == "hipertrofia"
                      ) {
                        console.log("aumentar 300kcal");
                        $("#resu").val("aumentar 300kcal");

                        var aumentar = 300;
                      }

                      if (
                        sexo == "mulher" &&
                        nivelDeAtividade == 2 &&
                        idade == 3 &&
                        objetivo == "hipertrofia"
                      ) {
                        console.log("aumentar 250kcal");
                        $("#resu").val("aumentar 250kcal");

                        var aumentar = 250;
                      }

                      ("-----------------------------------------");

                      if (
                        sexo == "mulher" &&
                        nivelDeAtividade == 3 &&
                        idade == 1 &&
                        objetivo == "hipertrofia"
                      ) {
                        console.log("aumentar 450kcal");
                        $("#resu").val("aumentar 450kcal");

                        var aumentar = 450;
                      }

                      if (
                        sexo == "mulher" &&
                        nivelDeAtividade == 3 &&
                        idade == 2 &&
                        objetivo == "hipertrofia"
                      ) {
                        console.log("aumentar 400kcal");
                        $("#resu").val("aumentar 400kcal");

                        var aumentar = 400;
                      }

                      if (
                        sexo == "mulher" &&
                        nivelDeAtividade == 3 &&
                        idade == 3 &&
                        objetivo == "hipertrofia"
                      ) {
                        console.log("aumentar 350kcal");
                        $("#resu").val("aumentar 350kcal");

                        var aumentar = 350;
                      }

                      $("#resu2").val(
                        `Total: ${(resu + aumentar).toFixed(0)}kcal ao dia`
                      );

                      var carboidrato;
                      var proteina;
                      var gordura;

                      if (objetivo == "hipertrofia") {
                        carboidrato = (((resu + aumentar) * 50) / 100).toFixed(
                          0
                        );
                        proteina = (((resu + aumentar) * 30) / 100).toFixed(0);
                        gordura = (((resu + aumentar) * 20) / 100).toFixed(0);

                        $("#resu3").val(
                          `Carbo. ${carboidrato}kcal | Prote. ${proteina}kcal | Gordu. ${gordura}kcal`
                        );

                        console.log(
                          carboidrato + " " + proteina + " " + gordura
                        );

                        $(".select2").hide();
                        $("#slct2").hide();
                        $(".inputpeso").hide();

                        $(".select3").hide();
                        $("#slct3").hide();

                        $(".select4").hide();
                        $("#slct4").hide();

                        $(".resultado").hide();
                        $(".resultado2").show();
                        $("#resu2").show();
                        $(".select").hide();

                        $("#textodescricao").show();

                        $("#botaoBaixar").show();

                        $("#textonivel").hide();
                        $("#textonivel2").hide();
                        $("#textonivel3").hide();

                        $(".resultado3").show();

                        var xValues = ["Carboidrato", "Proteínas", "Gordura"];
                        var yValues = [carboidrato, proteina, gordura];
                        var barColors = ["#b91d47", "#00aba9", "#2b5797"];

                        new Chart("myChart", {
                          type: "pie",
                          data: {
                            labels: xValues,
                            datasets: [
                              {
                                backgroundColor: barColors,
                                data: yValues,
                              },
                            ],
                          },
                          options: {
                            title: {
                              display: true,
                            },
                          },
                        });
                      }

                      //$(".resultado").show();
                      $(".resultado2").show();
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });
});
//--------------------
