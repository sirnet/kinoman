import { getRandom } from '../utils.js';

const COUNTER = 24;

const title = ['The Dance of Life', 'Sagebrush Trail', 'The Man with the Golden Arm',
'Santa Claus Conquers the Martians', 'Popeye the Sailor Meets Sindbad the Sailor'];

const poster = [
  'made-for-each-other.png',
  'popeye-meets-sinbad.png',
  'sagebrush-trail.jpg',
  'santa-claus-conquers-the-martians.jpg',
  'the-dance-of-life.jpg',
  'the-great-flamarion.jpg',
  'the-man-with-the-golden-arm.jpg'
];

const description = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.'
];

const comment = {
  autors : ['Misha', 'Viktor', 'Gena', 'Sveta', 'Anastasiya'],
  emotions : ['smile', 'sleeping', 'puke', 'angry'],
  dates : [
    '2019/12/31 23:59',
    '2020/01/23 13:59',
    '2020/02/8 11:20',
    '2020/02/16 63:50',
    '2020/03/13 09:54'
  ],
  message : ['Great movie!', 'Cool', 'Top', 'Nice film']
};

const cardMove = () => {
  let arrayMove = [];
  for (let i = 0; i <= COUNTER; i ++){
    arrayMove[i] = {
      id : i,
      title : title[getRandom(0, title.length - 1)],
      poster : poster[getRandom(0, poster.length - 1)],
      description : description[getRandom(0, description.length - 1)],
      comment : {
        autors : comment.autors[getRandom(0, comment.autors.length - 1)],
        emotions : comment.emotions[getRandom(0, comment.emotions.length - 1)],
        dates : comment.dates[getRandom(0, comment.dates.length - 1)],
        message : comment.message[getRandom(0, comment.message.length - 1)]
      }
    };
  }

  return arrayMove;
};

const arrayMove = cardMove();
export { arrayMove };
