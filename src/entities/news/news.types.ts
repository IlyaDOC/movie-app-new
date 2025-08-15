export type NewsItemsType = {
  total: number,
  totalPages: number,
  items: NewsItemType[]
}

export type NewsItemType = {
  kinopoiskId: number,
  imageUrl: string,
  title: string,
  description: string,
  url: string,
  publishedAt: string
}

