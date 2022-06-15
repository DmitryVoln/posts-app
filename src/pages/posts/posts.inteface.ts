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
  pagesCountArray: number[];
  onClick(id: string): void;
  inputValue: string;
  handleInput(value: string): void;
  handleButtonFind(): void;
  handleButtonClear(): void;
  handlePagination(value: number): void;
  pageNumber: number;
  isLoading: boolean;
}

export interface IPost {
  id: string;
}
