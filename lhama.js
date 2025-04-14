const axios = require('axios');

module.exports = async (req, res) => {
  const { prompt } = req.body;
  
  try {
    const response = await axios.post('URL_DO_SEU_LLaMA', {
      model: 'llama3',
      prompt,
      stream: false
    });

    res.json({
      response: response.data
    });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao se comunicar com a API' });
  }
};
