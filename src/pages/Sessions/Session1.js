import { Link } from 'react-router-dom';
import './sessionsHome.css';
import { GiPotionBall } from 'react-icons/gi';

function Session1() {
  return (
    <div className="session-page">
      <h1 className="session-title">
        Sessão 1: A Emboscada <GiPotionBall />
      </h1>
      <div className="text-container">
        <p className="paragraph">
          Cinco aventureiros de lugares e culturas diferentes reuniram-se na
          renomada "Tralhas gloriosas de Flamel", uma loja de produtos de
          alquimia em Krieg na ilha de Licht, para pegar um contrato que estava
          pagando estranhamente bem para uma tarefa teóricamente simples,
          entregar um pacote até Dunkel, uma vila vizinha da grande cidade.
          Havia apenas um porém, o grupo não poderia deslacrar o pacote, se não
          ganharia apenas a metade do valor.
        </p>
        <br></br>
        <p className="paragraph">
          Os aventureiros eram, <Link to="/personagens/kick">Kick</Link> de
          Feenin, uma ilha ao sul de Licht conhecida por ser magicamente
          superior as demais, <Link to="/personagens/quarion">Quarion</Link> da
          umbreterna, o perigoso e misterioso subterrâneo que interconecta por
          debaixo da terra, quase todas as ilhas de Eylanden,{' '}
          <Link to="/personagens/yggdrasil">Yggdrasil</Link> de Krieg, a
          "capital" de Licht, o maior ponto turístico e comercial da ilha,
          <Link to="/personagens/seraphine">Seraphine</Link> de Meruen, uma
          enclave élfico perto de Eiskir, onde Elfos da floresta e Eladrins
          vivem em harmonia e Quent, de <div className="flicker">vndg</div> um{' '}
          <div className="flicker">euxar</div> misterioso e carismático.
        </p>
        <br></br>
        <p className="paragraph">
          Eles aceitaram o contrato e se dirigiram, junto de dois mercenários
          que estavam concluíndo um outro contrato também de Flamel, dirigido ao
          mesmo cliente, porém que não tinha relação com o pacote misterioso.
        </p>
        <p className="paragraph">
          O início da viagem foi tranquila, e o dia passou rápido, os
          aventureiros decidiram então parar quando chegou a noite em uma
          clareira, para descansar e seguir viagem pela manhã, no segundo turno
          de vigia daquela noite, Quarion ouviu barulhos vindo da floresta e foi
          investigar, viu um humanóide que ao perceber que foi visto tentou se
          esconder rapidamente, mas sem sucesso. Ao olhar para a clareira onde
          os outros aventureiros estavam dormindo, Quarion se deparou com Quent
          roubando o pacote e fugindo para a floresta, enquanto disparava uma
          magia aos céus, que fazia alto barulho e podia se ver a kilomêtros de
          distância, para comandar a Ordem do Caos à atacar.
        </p>
        <br></br>
        <p className="paragraph">
          A batalha foi tranquila para os aventureiros, que conseguiram eliminar
          todos os cultistas facilmente, porém Quent conseguiu fugir com o
          pacote, para o meio da floresta. Quarion perseguiu ele, porém
          descobriu da pior forma que Quent possuía magias poderossísimas,
          capazes de deixar o corpo do Ladino imóvel, como uma pedra. E assim,
          Quent fugiu com o pacote.
        </p>
      </div>
    </div>
  );
}

export default Session1;
