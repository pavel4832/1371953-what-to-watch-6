import {nanoid} from 'nanoid';

const ID_LENGTH = 5;

export const generateCard = () => {
  return {
    id: nanoid(ID_LENGTH),
    name: `Fantastic Beasts: The Crimes of Grindelwald`
  };
};
