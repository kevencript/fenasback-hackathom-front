import axios from "axios";

export const inserirContato = async formData => {
  try {
    // criando objeto de configuração
    const config = {
      headers: {
        "Content-type": "application/json"
      }
    };

    // conectando com API e inserindo os dados
    const response = await axios.post("/api/contato/inserir", formData, config);

    // verificando se o formulario foi inserido corretamente
    if (!response) {
      console.log("Error");
    }
  } catch (error) {
    console.log(error);
  }
};
