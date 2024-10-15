function updateTable() {
    // Obtém o ano selecionado no campo select
    var selectedSeason = document.getElementById("season").value;

    // Atualiza o atributo data-season da div da tabela
    var standingsDiv = document.getElementById("wg-api-football-standings");
    standingsDiv.setAttribute("data-season", selectedSeason);

    // Recarrega o widget para refletir as mudanças
    var script = document.createElement('script');
    script.type = "module";
    script.src = "https://widgets.api-sports.io/2.0.3/widgets.js";
    document.body.appendChild(script);
}