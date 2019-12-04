import React, { Component } from 'react';
import { comment } from 'postcss-selector-parser';
import FacePost from '../FacePost/index';
// import Comment from '../Comment/index';

export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          author: {
            name: 'Ilda Silva Neta',
            avatar: require('../../assets/avatar-logo.jpg')
          },
          date: '10 ago 2019',
          content: 'Pessoal, vocês já ouviram falar da Rocketseat?',
          comments: [
            {
              id: 1,
              author: {
                name: 'Diego Fernandes',
                avatar: require('../../assets/avatar-diego-fernandes.png')
              },
              content:
                'Olá, a Rocketseat veio para mostrar ao mercado como alavancar a carreira de todos os desenvolvedores e mostrá-los como podem chegar a um novo nível.'
            }
          ]
        },
        {
          id: 2,
          author: {
            name: 'Rocketseat',
            avatar: require('../../assets/avatar-rocketseat.jpg')
          },
          date: '12 out 2019',
          content:
            'Turma estaremos abrindo o bootcamp GoStack 10.0 logo logo. Já Garantiu seu assento nesse foguete?',
          comments: [
            {
              id: 1,
              author: {
                name: 'Diego Fernandes',
                avatar: require('../../assets/avatar-diego-fernandes.png')
              },
              content:
                'Temos a melhor e maior comunidade para fazer com que todos alanvanquem suas carreiras e consigam um assento especial nesse foguete.'
            }
          ]
        },
        {
          id: 3,
          author: {
            name: 'Lucas Montano',
            avatar: require('../../assets/avatar-lucas-montano.jpg')
          },
          date: '03 dez 2019',
          content:
            'Galera vocês já viram minha nova sequência de vídeos de dezembro? Estaremos falando sobre propósitos e em contato com os melhores desenvolvedores atuais.',
          comments: [
            {
              id: 1,
              author: {
                name: 'Filipe Deschamps',
                avatar: require('../../assets/avatar-filipe-deschamps.png')
              },
              content:
                'Fala galera! Estarei em um desses vídeos em, não percam!!!'
            },
            {
              id: 2,
              author: {
                name: 'Lucas Montano',
                avatar: require('../../assets/avatar-lucas-montano.jpg')
              },
              content: 'Isso aí, o conteúdo está show!'
            }
          ]
        }
      ]
    };
  }

  render() {
    const { posts } = this.state;

    return (
      <>
        {posts.map(post => (
          <FacePost
            key={post.id}
            date={post.date}
            content={post.content}
            authorName={post.author.name}
            avatar={post.author.avatar}
            comments={post.comments}
          />
        ))}
      </>
    );
  }
}
