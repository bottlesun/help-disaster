export enum BoardStatues {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}

export type Board = {
  id: string;
  title: string;
  description: string;
  status: BoardStatues;
};
