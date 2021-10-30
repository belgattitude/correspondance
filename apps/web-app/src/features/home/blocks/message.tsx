import styled from '@emotion/styled';
import type { FC } from 'react';
import ReactMarkdown from 'react-markdown';

const MessageCtn = styled.div`
  padding: 3rem;
  font-size: 2.5em;
  line-height: 1.1em;
  @media (min-width: 600px) {
    padding: 4rem;
    font-size: 4em;
  }
`;

const MessageBody = styled.div`
  font-weight: bolder;
  font-variation-settings: 'wght' 700;
  //font-weight: bolder;

  color: dimgrey;
  p {
    margin-top: 1em;
    em {
      font-synthesis: none;
      font-variation-settings: 'slant' 18, 'wght' 200;
    }
  }
`;

const message = `
Parfois j'envenime le présent par une présence trop contrôlée,
avec la lenteur d'un object inanimé. 

*(Par seulement une aide précipitée,
elle lave l'assombrissement flêtri d'un souvenir ancien.)*

C'est là, à cet endroit précis, suspendu entre deux cîmes d'arbres
que la couleur prends forme conique, sphérique, scénique.

Puis un autre jour, différenciation par le sourire d'un soleil
levant.

Il y a un souffle divin caché entre les lignes du destin en courbe et 
prolongations, le décor enseveli, redécoré en quadrillages symétriques
semble se courber afin de former un lit de rivière

Elle emprunte, l'eau, les dessins fermentés d'un angle contrarié.

Au sommet d'un souterrain.

Transfiguration déraisonnée de sagesse aux accents de tendresse délibérée. 

Dé-libérée, aimante, amante.

Profondeur de cette nuit

Ici et maintenant,

Un réveil
`;

export const Message: FC = (_props) => {
  return (
    <MessageCtn>
      <MessageBody>
        <ReactMarkdown>{message}</ReactMarkdown>
      </MessageBody>
    </MessageCtn>
  );
};
