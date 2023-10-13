import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';

import imagemHarryPotterEAPedraFilosofal from '../assets/hppf.jpg';
import imagemPrincipeCruel from '../assets/opc.jpg';
import imagemMeninoDoPijamaListrado from '../assets/omdpl.jpg';
import imagemQuemVoceAlasca from '../assets/qeva.jpg';
import imagemCidadeDosOssos from '../assets/cdo.jpg';
import imagemEleanorEPark from '../assets/ep.jpg';
import imagemWillEWill from '../assets/wew.jpg';
import imagemOrfanatoDaSenhorita from '../assets/oodsp.jpg';
import imagemSkyrim from '../assets/skyrim.jpg';
import imagemTudoQueEuTeEscreveria from '../assets/tacqetesp.jpg';
import imagemLukov from '../assets/lukov.jpg';
import imagemDiablo from '../assets/dia.jpg';

export function TelaPrincipal({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.flex}>
        <TouchableOpacity
          style={styles.livro}
          onPress={() =>
            navigation.navigate('TelaLivro', {
              titulo: 'Harry Potter e a Pedra Filosofal',
              sinopse:
                'SINOPSE: Harry Potter e a Pedra Filosofal inicia a saga de Harry Potter, um órfão maltratado pelos tios, que descobre sua verdadeira identidade como bruxo ao receber uma carta de admissão para Hogwarts, a Escola de Magia e Bruxaria. Lá, ele faz amigos leais, como Ron e Hermione, e desvenda os mistérios de seu passado, incluindo sua sobrevivência a um ataque mortal de Lord Voldemort quando era bebê, que deixou nele uma cicatriz em forma de raio.O enredo central do livro envolve a busca pela Pedra Filosofal, um objeto mágico que concede a imortalidade. Harry e seus amigos embarcam em uma emocionante jornada para proteger a pedra de cair nas mãos erradas, enfrentando desafios mágicos, criaturas fantásticas e enigmas intrigantes ao longo do caminho. "Harry Potter e a Pedra Filosofal" é uma história envolvente que mergulha os leitores em um mundo de magia, aventura e amizade, estabelecendo as bases para uma série que cativou inúmeras gerações de leitores em todo o mundo.',
              author: 'AUTORA: J. K. Rowling.',
              resenha:
                'RESENHA: Harry Potter e a Pedra Filosofal é o ponto de partida para uma das sagas literárias mais amadas do mundo. J.K. Rowling nos apresenta ao jovem Harry Potter, um órfão que, aos onze anos, descobre sua verdadeira identidade como bruxo e entra em um mundo repleto de magia, aventura e mistério. Ao lado de seus amigos, Ron e Hermione, Harry se envolve em uma emocionante busca pela Pedra Filosofal, um artefato mágico que promete a imortalidade, enfrentando desafios mágicos e descobrindo segredos profundos sobre seu próprio passado.Este livro é uma obra-prima da literatura infantojuvenil que transcende as idades, transmitindo lições atemporais de amizade, coragem e a batalha eterna entre o bem e o mal. O mundo mágico de Rowling é ricamente detalhado, e os personagens são cativantes, tornando Harry Potter e a Pedra Filosofal uma leitura obrigatória e o primeiro de uma série que continua a encantar e inspirar leitores em todo o mundo.',
            })
          }
        >
          <Image
            style={styles.livroImagem}
            source={imagemHarryPotterEAPedraFilosofal}
          />
          <View>
            <Text style={styles.textoLivro}>
              TÍTULO: Harry Potter e a Pedra Filosofal
            </Text>
            <Text numberOfLines={8} style={styles.textoSinopse}>
              SINOPSE: Harry Potter e a Pedra Filosofal inicia a saga de Harry
              Potter, um órfão maltratado pelos tios, que descobre sua
              verdadeira identidade como bruxo ao receber uma carta de admissão
              para Hogwarts, a Escola de Magia e Bruxaria. Lá, ele faz amigos
              leais, como Ron e Hermione, e desvenda os mistérios de seu
              passado, incluindo sua sobrevivência a um ataque mortal de Lord
              Voldemort quando era bebê, que deixou nele uma cicatriz em forma
              de raio...
            </Text>
            <Text style={styles.textoLivro}>Disponível: amazon.com.br.</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.livro}
          onPress={() =>
            navigation.navigate('TelaLivro', {
              titulo: 'O Principe Cruel',
              sinopse:
                'SINOPSE: O Príncipe Cruel é o primeiro livro da série "O Povo do Ar" escrita por Holly Black. Esta obra de literatura jovem adulta combina fantasia e intriga política em um mundo onde humanos coexistem com criaturas mágicas conhecidas como o Povo do Ar.A história gira em torno de Jude Duarte, uma jovem humana que cresceu em Elfhame, uma terra governada pelos Povo do Ar. Após sua mãe e pai serem brutalmente assassinados, Jude e suas duas irmãs mais velhas são levadas para Elfhame pelo assassino, Madoc, que é o pai biológico de Jude. Vivendo como uma humana em um mundo repleto de magia e enganos, Jude enfrenta constantes desafios e preconceitos. Ela está determinada a conquistar seu lugar na corte dos Povo do Ar, mesmo que isso signifique lutar contra nobres cruéis e traiçoeiros, incluindo o príncipe Cardan, conhecido por sua crueldade e belos traços.O livro aborda temas de poder, ambição, lealdade e as complexas relações que se desenvolvem na corte de Elfhame. À medida que Jude se envolve em intrigas políticas, ela se torna uma peça-chave em um jogo perigoso onde o destino de sua família e de todo o reino estão em jogo.',
              resenha:
                'RESENHA: O Príncipe Cruel, de Holly Black, transporta os leitores para um mundo onde humanos e seres mágicos coexistem, mas a harmonia é escassa. A história gira em torno de Jude Duarte, uma jovem humana determinada a conquistar seu espaço na corte dos Povo do Ar, mesmo que isso signifique enfrentar intrigas políticas cruéis e um príncipe, Cardan, conhecido por sua frieza e beleza perturbadora. A trama é uma mistura de elementos sombrios, suspense e uma dinâmica cativante entre os protagonistas, criando uma narrativa envolvente que deixa os leitores ansiosos por mais. Holly Black tece um mundo ricamente detalhado, repleto de personagens complexos e uma atmosfera misteriosa que mantém a tensão constante. "O Príncipe Cruel" é uma leitura irresistível para quem aprecia fantasia intrigante, com sua trama cheia de reviravoltas imprevisíveis e uma protagonista corajosa que luta para sobreviver e prosperar em um reino onde a crueldade e a beleza andam de mãos dadas.',
            })
          }
        >
          <Image style={styles.livroImagem} source={imagemPrincipeCruel} />
          <View>
            <Text style={styles.textoLivro}>TÍTULO: O Principe Cruel</Text>
            <Text numberOfLines={8} style={styles.textoSinopse}>
              SINOPSE: Envolvida em intrigas e traições do palácio, Jude
              descobre sua própria capacidade para truques e derramamento de
              sangue. Mas, com a ameaça de uma guerra civil e o Reino das Fadas
              por um fio, Jude precisará arriscar sua vida em uma perigosa
              aliança para salvar suas irmãs, e o próprio Reino.
            </Text>
            <Text style={styles.textoLivro}>Disponível: amazon.com.br.</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.livro}
          onPress={() =>
            navigation.navigate('TelaLivro', {
              titulo: 'O Menino do Pijama Listrado',
              sinopse:
                'SINOPSE: "O Menino do Pijama Listrado" é um romance escrito por John Boyne. A história se passa na Alemanha nazista e é narrada do ponto de vista de Bruno, um menino de 8 anos que se muda com a família para uma casa perto de um campo de concentração. Lá, ele conhece Shmuel, um garoto judeu que vive do outro lado da cerca do campo. Os dois desenvolvem uma amizade proibida e inocente, ignorando as terríveis realidades que os cercam.',
              resenha:
                'RESENHA: O Menino do Pijama Listrado é um livro comovente que mergulha no período sombrio da Segunda Guerra Mundial e do Holocausto, mas o faz através dos olhos inocentes de uma criança. A obra de John Boyne explora a amizade improvável entre Bruno e Shmuel, que transcende barreiras culturais e raciais em um momento histórico terrível.Através da perspectiva de Bruno, os leitores são levados a questionar as fronteiras artificiais e as consequências da intolerância e do ódio. O livro oferece uma lição profunda sobre a importância da empatia e da humanidade em tempos de adversidade.A narrativa é emocionante, porém, é importante notar que (O Menino do Pijama Listrado) lida com temas extremamente sensíveis e impactantes relacionados ao Holocausto. A história é uma poderosa reflexão sobre as atrocidades do passado e serve como um lembrete do que pode acontecer quando a intolerância prevalece. É uma leitura que toca o coração e estimula a reflexão sobre a natureza da humanidade e o poder da amizade em circunstâncias extremas.',
            })
          }
        >
          <Image
            style={styles.livroImagem}
            source={imagemMeninoDoPijamaListrado}
          />
          <View>
            <Text style={styles.textoLivro}>
              TÍTULO: O Menino do Pijama Listrado
            </Text>
            <Text numberOfLines={8} style={styles.textoSinopse}>
              SINOPSE: "O Menino do Pijama Listrado" é um romance escrito por
              John Boyne. A história se passa na Alemanha nazista e é narrada do
              ponto de vista de Bruno, um menino de 8 anos que se muda com a
              família para uma casa perto de um campo de concentração. Lá, ele
              conhece Shmuel, um garoto judeu que vive do outro lado da cerca do
              campo. Os dois desenvolvem uma amizade proibida e inocente,
              ignorando as terríveis realidades que os cercam.
            </Text>
            <Text style={styles.textoLivro}>Disponível: amazon.com.br.</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.livro}
          onPress={() =>
            navigation.navigate('TelaLivro', {
              titulo: 'Quem é Você Alasca?',
              sinopse:
                '"Quem É Você, Alasca?" é um romance jovem adulto escrito por John Green. O livro gira em torno de Miles Halter, um adolescente que decide se aventurar em um colégio interno, em busca de algo mais do que a vida monótona que levava. Lá, ele conhece Alasca Young, uma garota enigmática e fascinante, que o introduz a um mundo de novas experiências, amizade e desafios. Porém, um evento trágico muda o curso de suas vidas, e Miles e seus amigos embarcam em uma busca para entender o significado de "grande talvez".',
              author: 'AUTOR: John Green.',
              resenha:
                'RESENHA: "Quem É Você, Alasca?" é um livro emocionante e profundo que explora temas complexos, como amizade, identidade e a busca pelo significado da vida. John Green cria personagens cativantes e diálogos inteligentes que ressoam com o público jovem adulto. A história é narrada por Miles, que, apesar de seu nome de "Nada", busca o "grande talvez", e Alasca, cuja personalidade imprevisível e misteriosa é o centro das atenções.O livro aborda questões importantes, como o luto, o sentido da vida e a influência de nossas ações nas vidas daqueles ao nosso redor. A trama leva os leitores a uma jornada de autodescoberta, revelando o poder das conexões humanas e os momentos que podem moldar nossa existência."Quem É Você, Alasca?" é uma leitura envolvente que capta as complexidades da adolescência e os desafios de se encontrar em um mundo cheio de incertezas. É uma obra que provoca reflexão e emoção, e é altamente recomendada para jovens adultos e leitores que apreciam narrativas realistas e emocionais.',
            })
          }
        >
          <Image style={styles.livroImagem} source={imagemQuemVoceAlasca} />
          <View>
            <Text style={styles.textoLivro}>TÍTULO: Quem é Você Alasca?</Text>
            <Text numberOfLines={8} style={styles.textoSinopse}>
              SINOPSE: " Quem É Você, Alasca? " é um romance jovem adulto
              escrito por John Green. O livro gira em torno de Miles Halter, um
              adolescente que decide se aventurar em um colégio interno, em
              busca de algo mais do que a vida monótona que levava. Lá, ele
              conhece Alasca Young, uma garota enigmática e fascinante, que o
              introduz a um mundo de novas experiências, amizade e desafios.
              Porém, um evento trágico muda o curso de suas vidas, e Miles e
              seus amigos embarcam em uma busca para entender o significado de
              "grande talvez".
            </Text>
            <Text style={styles.textoLivro}>Disponível: amazon.com.br.</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.livro}
          onPress={() =>
            navigation.navigate('TelaLivro', {
              titulo: 'Cidade dos Ossos',
              sinopse:
                'SINOPSE: "Cidade dos Ossos" é o primeiro livro da série "Os Instrumentos Mortais" escrita por Cassandra Clare. A história segue a vida de Clary Fray, uma adolescente que descobre fazer parte de uma linhagem de Caçadores de Sombras, seres que combatem demônios. Clary se vê envolvida em um mundo de magia, criaturas sobrenaturais e segredos de família enquanto tenta resgatar sua mãe sequestrada. Ela forma alianças inesperadas e enfrenta perigos sobrenaturais enquanto desvenda os mistérios de sua herança',
              resenha:
                'RESENHA: "Cidade dos Ossos" é uma emocionante e misteriosa incursão no mundo dos Caçadores de Sombras criado por Cassandra Clare. A autora tece um enredo cheio de reviravoltas, combinando elementos sobrenaturais, ação e romance de forma envolvente. Clary Fray é uma protagonista cativante, e sua jornada de autodescoberta e aventura é o cerne da história.O mundo que Cassandra Clare cria é rico em mitologia, repleto de seres sobrenaturais, runas mágicas e segredos ancestrais. A dinâmica entre os personagens, incluindo o misterioso Jace, o amigo leal Simon e outros Caçadores de Sombras, adiciona profundidade à narrativa. O livro mantém um ritmo ágil, com reviravoltas surpreendentes que mantêm os leitores ansiosos por mais."Cidade dos Ossos" é um excelente ponto de partida para a série "Os Instrumentos Mortais" e atrairá fãs de fantasia urbana, jovens adultos e aqueles que apreciam uma mistura de ação e romance em um cenário sobrenatural intrigante. É uma leitura emocionante que abre as portas para um mundo de aventuras sobrenaturais.',
            })
          }
        >
          <Image style={styles.livroImagem} source={imagemCidadeDosOssos} />
          <View>
            <Text style={styles.textoLivro}>TÍTULO: Cidade dos Ossos.</Text>
            <Text numberOfLines={8} style={styles.textoSinopse}>
              SINOPSE: "Cidade dos Ossos" é o primeiro livro da série "Os
              Instrumentos Mortais" escrita por Cassandra Clare. A história
              segue a vida de Clary Fray, uma adolescente que descobre fazer
              parte de uma linhagem de Caçadores de Sombras, seres que combatem
              demônios. Clary se vê envolvida em um mundo de magia, criaturas
              sobrenaturais e segredos de família enquanto tenta resgatar sua
              mãe sequestrada. Ela forma alianças inesperadas e enfrenta perigos
              sobrenaturais enquanto desvenda os mistérios de sua herança.
            </Text>
            <Text style={styles.textoLivro}>Disponível: amazon.com.br.</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.livro}
          onPress={() =>
            navigation.navigate('TelaLivro', {
              titulo: 'Eleanor & Park',
              sinopse:
                'SINOPSE: "Eleanor & Park" é um romance young adult escrito por Rainbow Rowell. A história se passa nos anos 80 e acompanha dois adolescentes, Eleanor e Park, que se conhecem no ônibus escolar. Eles compartilham uma paixão por quadrinhos e música, o que os une em meio a problemas familiares e desafios típicos da adolescência. O livro explora o crescimento do amor entre eles, destacando a importância do apoio mútuo em tempos difíceis.',
              resenha:
                'RESENHA: "Eleanor & Park" é um romance envolvente que cativa o leitor com a genuinidade e complexidade de seus personagens adolescentes. A autora, Rainbow Rowell, cria uma narrativa que equilibra humor, nostalgia e momentos tocantes. A história de Eleanor e Park é uma jornada de descoberta, identidade e amor, retratando os altos e baixos da juventude e as dificuldades que ambos enfrentam em suas vidas familiares. A química entre Eleanor e Park é palpável, e a forma como seus relacionamentos se desenvolvem é tocante e realista. O livro também aborda questões de bullying, insegurança e desafios familiares de uma maneira sensível. "Eleanor & Park" é uma leitura cativante e emocionante que vai te fazer torcer pelo casal e relembrar os altos e baixos da adolescência.Este livro é altamente recomendado para os fãs de romances jovens adultos que apreciam histórias profundas, personagens bem desenvolvidos e um toque de nostalgia pelos anos 80.',
            })
          }
        >
          <Image style={styles.livroImagem} source={imagemEleanorEPark} />
          <View>
            <Text style={styles.textoLivro}>TÍTULO: Eleanor & Park.</Text>
            <Text numberOfLines={8} style={styles.textoSinopse}>
              SINOPSE: "Eleanor & Park" é um romance young adult escrito por
              Rainbow Rowell. A história se passa nos anos 80 e acompanha dois
              adolescentes, Eleanor e Park, que se conhecem no ônibus escolar.
              Eles compartilham uma paixão por quadrinhos e música, o que os une
              em meio a problemas familiares e desafios típicos da adolescência.
              O livro explora o crescimento do amor entre eles, destacando a
              importância do apoio mútuo em tempos difíceis.
            </Text>
            <Text style={styles.textoLivro}>Disponível: amazon.com.br.</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.livro}
          onPress={() =>
            navigation.navigate('TelaLivro', {
              titulo: 'Will e Will',
              sinopse:
                'SINOPSE: "Will e Will" é um romance jovem adulto escrito por John Green e David Levithan. A história gira em torno de dois adolescentes de Chicago, ambos chamados Will Grayson. Os capítulos alternam entre as perspectivas dos dois Wills, explorando suas vidas, amizades e busca por identidade. Quando os destinos desses dois jovens se cruzam, suas vidas são transformadas de maneiras inesperadas.',
              resenha:
                'RESENHA: "Will e Will" é uma história envolvente que explora temas de amizade, identidade e autodescoberta. John Green e David Levithan criam personagens cativantes e autênticos, cada um com suas próprias lutas e peculiaridades. A narrativa alternada entre os dois protagonistas oferece uma visão profunda de suas vidas e emoções.A trama é habilmente escrita, equilibrando momentos de humor e emoção, e os leitores são levados a torcer pelos dois Wills enquanto enfrentam desafios pessoais e românticos. A história é uma celebração da diversidade e da importância de ser autêntico consigo mesmo."Will e Will" é uma leitura agradável que cativará os fãs de John Green e David Levithan, bem como aqueles que apreciam romances jovens adultos que exploram a complexidade das relações humanas e o processo de autodescoberta.',
            })
          }
        >
          <Image style={styles.livroImagem} source={imagemWillEWill} />
          <View>
            <Text style={styles.textoLivro}>TÍTULO: Will e Will.</Text>
            <Text numberOfLines={8} style={styles.textoSinopse}>
              SINOPSE: "Will e Will" é um romance jovem adulto escrito por John
              Green e David Levithan. A história gira em torno de dois
              adolescentes de Chicago, ambos chamados Will Grayson. Os capítulos
              alternam entre as perspectivas dos dois Wills, explorando suas
              vidas, amizades e busca por identidade. Quando os destinos desses
              dois jovens se cruzam, suas vidas são transformadas de maneiras
              inesperadas.
            </Text>
            <Text style={styles.textoLivro}>Disponível: amazon.com.br.</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.livro}
          onPress={() =>
            navigation.navigate('TelaLivro', {
              titulo: 'O Lar da Senhorita Peregrine',
              sinopse:
                'SINOPSE: "O Lar da Senhorita Peregrine para Crianças Peculiares" é um romance de fantasia escrito por Ransom Riggs. A história segue Jacob Portman, um adolescente que, após uma tragédia familiar, parte em busca das histórias que seu avô lhe contava sobre um orfanato peculiar para crianças com dons especiais, dirigido pela misteriosa Senhorita Peregrine. Quando Jacob descobre o orfanato em uma ilha remota, ele se envolve em um mundo de magia, mistério e perigo.',
              resenha:
                'RESENHA: "O Lar da Senhorita Peregrine para Crianças Peculiares" é uma obra de fantasia que encanta os leitores com sua combinação única de texto e imagens. Ransom Riggs incorpora fotografias antigas em preto e branco, o que acrescenta um elemento visual intrigante à narrativa.A história oferece uma reviravolta única no gênero de fantasia, introduzindo personagens com habilidades peculiares e cenários sombrios. Jacob, como protagonista, é um guia para o mundo misterioso e perigoso dos peculiares, e sua jornada de autodescoberta é fascinante.A narrativa é repleta de suspense e reviravoltas, criando um senso de maravilha e inquietação que mantém os leitores ansiosos por mais. À medida que Jacob desvenda os segredos do orfanato e seus habitantes, ele se vê em uma aventura repleta de desafios e escolhas difíceis."O Lar da Senhorita Peregrine para Crianças Peculiares" é uma leitura envolvente para aqueles que procuram uma história de fantasia única, com um toque gótico e elementos visuais que a tornam verdadeiramente única. É um livro que atrai leitores de todas as idades e os transporta para um mundo extraordinário repleto de mistério e magia.',
            })
          }
        >
          <Image
            style={styles.livroImagem}
            source={imagemOrfanatoDaSenhorita}
          />
          <View>
            <Text style={styles.textoLivro}>
              TÍTULO: O Lar da Senhorita Peregrine.
            </Text>
            <Text numberOfLines={8} style={styles.textoSinopse}>
              SINOPSE:"O Lar da Senhorita Peregrine para Crianças Peculiares" é
              um romance de fantasia escrito por Ransom Riggs. A história segue
              Jacob Portman, um adolescente que, após uma tragédia familiar,
              parte em busca das histórias que seu avô lhe contava sobre um
              orfanato peculiar para crianças com dons especiais, dirigido pela
              misteriosa Senhorita Peregrine. Quando Jacob descobre o orfanato
              em uma ilha remota, ele se envolve em um mundo de magia, mistério
              e perigo.
            </Text>
            <Text style={styles.textoLivro}>Disponível: amazon.com.br.</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.livro}
          onPress={() =>
            navigation.navigate('TelaLivro', {
              titulo: 'O Lar da Senhorita Peregrine',
            })
          }
        >
          <Image style={styles.livroImagem} source={imagemSkyrim} />
          <View>
            <Text style={styles.textoLivro}>TÍTULO: Skyrim.</Text>
            <Text numberOfLines={8} style={styles.textoSinopse}>
              SINOPSE: Em The Elder Scroll V: Skyrim, você tem o livre-arbítrio
              de escolher o caminho que quer seguir - que pode ser desde um
              ladrão até um guerreiro. Contudo, muitos optam pelo caminho dos
              Magos, visando destruir seus inimigos evocando poderosos feitiços
              destrutivos.
            </Text>
            <Text style={styles.textoLivro}>Disponível: amazon.com.br.</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.livro}
          onPress={() =>
            navigation.navigate('TelaLivro', {
              titulo: 'O Lar da Senhorita Peregrine',
            })
          }
        >
          <Image
            style={styles.livroImagem}
            source={imagemTudoQueEuTeEscreveria}
          />
          <View>
            <Text style={styles.textoLivro}>
              TÍTULO: Todas as coisas que eu te escreveria se eu pudesse.
            </Text>
            <Text numberOfLines={8} style={styles.textoSinopse}>
              SINOPSE: Em The Elder Scroll V: Skyrim, você tem o livre-arbítrio
              de escolher o caminho que quer seguir - que pode ser desde um
              ladrão até um guerreiro. Contudo, muitos optam pelo caminho dos
              Magos, visando destruir seus inimigos evocando poderosos feitiços
              destrutivos.
            </Text>
            <Text style={styles.textoLivro}>Disponível: amazon.com.br.</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.livro}
          onPress={() =>
            navigation.navigate('TelaLivro', {
              titulo: 'De Lukov, com amor',
            })
          }
        >
          <Image style={styles.livroImagem} source={imagemLukov} />
          <View>
            <Text style={styles.textoLivro}>TÍTULO: Diablo.</Text>
            <Text numberOfLines={8} style={styles.textoSinopse}>
              SINOPSE: Se alguém perguntasse a Jasmine Santos como ela
              descreveria os últimos anos de sua vida em uma única palavra, ela,
              definitivamente, usaria uma com quatro letras. Depois de dezessete
              anos e incontáveis promessas e ossos quebrados, ela sabe que as
              portas para competir na patinação artística estão começando a se
              fechar.
            </Text>
            <Text style={styles.textoLivro}>Disponível: amazon.com.br.</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.livro}
          onPress={() =>
            navigation.navigate('TelaLivro', {
              titulo: 'De Lukov, com amor',
            })
          }
        >
          <Image style={styles.livroImagem} source={imagemDiablo} />
          <View>
            <Text style={styles.textoLivro}>TÍTULO: Diablo.</Text>
            <Text numberOfLines={8} style={styles.textoSinopse}>
              SINOPSE: O NOVO LIVRO INSPIRADO NA SÉRIE DE GAMES HOMÔNIMA Tyrael,
              agora um ex-arcanjo mortal, parte em uma tarefa impossível: roubar
              a Pedra Negra das Almas do coração da cidade prateada. Para isso,
              junta um grupo de guerreiros improvável e reforja a aliança com os
              Horadrim. Entre os escolhidos estão um guardião da lâmina
              El’druim, uma feiticeira, um monge de Ivgorod e um misterioso
              necromante. Deles depende não apenas o futuro de Santuário, como o
              destino da humanidade e o Equilíbrio entre Trevas e Luz.
              Conseguirão completar sua missão antes que o Paraíso Celestial se
              perca para sempre?
            </Text>
            <Text style={styles.textoLivro}>Disponível: amazon.com.br.</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1 },
  container: {
    flex: 1,
    backgroundColor: '#dbdbdb',
    gap: 12,
    borderTopColor: '#aaa',
    borderTopWidth: 2,
  },
  livro: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#aaa',
    padding: 8,
    gap: 18,
    alignItems: 'center',
  },
  livroImagem: {
    width: 130,
    height: 230,
  },
  textoLivro: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  textoSinopse: {
    fontWeight: 'bold',
    marginVertical: 6,
    color: '#000',
    width: Dimensions.get('window').width - 130 - 18 - 16 - 8,
    textAlign: 'justify',
    fontSize: 16,
  },
});
