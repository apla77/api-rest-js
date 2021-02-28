import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novaAluna = await Aluno.create({
      nome: 'Maria',
      sobrenome: 'Miranda',
      email: 'maria@gmail.com',
      idade: 23,
      peso: 57,
      altura: 1.70,
    });
    res.json(novaAluna);
  },

}

export default new HomeController();
