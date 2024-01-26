const province = {
    lombardia: ["Milano", "Bergamo", "Brescia"],
    lazio: ["Roma", "Latina", "Frosinone"]
  };

  const comuni = {
    milano: ["Milano", "Sesto San Giovanni", "Monza"],
    bergamo: ["Bergamo", "Alzano Lombardo", "Dalmine"],
    brescia: ["Brescia", "Desenzano del Garda", "Sirmione"],
    roma: ["Roma", "Ciampino", "Fiumicino"],
    latina: ["Latina", "Formia", "Sabaudia"],
    frosinone: ["Frosinone", "Cassino", "Alatri"]
  };

  function popolaProvince() {
    const regioneSelect = document.getElementById("regione");
    const provinciaSelect = document.getElementById("provincia");
    const comuneSelect = document.getElementById("comune");

    const regioneSelezionata = regioneSelect.value;

    provinciaSelect.innerHTML = "<option value=''>Seleziona una provincia</option>";
    comuneSelect.innerHTML = "<option value=''>Seleziona un comune</option>";

    if (regioneSelezionata !== "") {
      province[regioneSelezionata].forEach(provincia => {
        const option = document.createElement("option");
        option.value = provincia.toLowerCase();
        option.textContent = provincia;
        provinciaSelect.appendChild(option);
      });
    }
  }

  function popolaComuni() {
    const provinciaSelect = document.getElementById("provincia");
    const comuneSelect = document.getElementById("comune");

    const provinciaSelezionata = provinciaSelect.value;

    comuneSelect.innerHTML = "<option value=''>Seleziona un comune</option>";

    if (provinciaSelezionata !== "") {
      comuni[provinciaSelezionata].forEach(comune => {
        const option = document.createElement("option");
        option.value = comune.toLowerCase();
        option.textContent = comune;
        comuneSelect.appendChild(option);
      });
    }
  }