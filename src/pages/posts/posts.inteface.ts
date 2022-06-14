export interface IPosts {
  body: string;
  id: string;
  reactions: number;
  tags: string[];
  title: string;
  userId: number;
}

export interface IPostsComponent {
  postsList: IPosts[];
  pageLimit: number;
  pagesCountArray: number[];
  onClick(id: string): void;
  inputValue: string;
  handleInput(value: string): void;
  handleButton(): void;
  handlePagination(value: number): void;
}

export interface IPost {
  id: string;
}
