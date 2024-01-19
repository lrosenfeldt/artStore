export type ImageData = {
  title: string;
  artist: string;
  price: number;
  uri: string;
};

function waitFor<T>(value: T, ms: number = 100): Promise<T> {
  return new Promise<T>(resolve => setTimeout(() => resolve(value), ms));
}

type Db = {
  images: ImageData[];
};

const db: Db = {
  images: [
    {
      title: 'Bouquet',
      artist: 'Amelie von Prunkenstern',
      price: 405,
      uri: 'https://source.unsplash.com/5TK1F5VfdIk',
    },
    {
      title: 'Urban',
      artist: 'Isabella Sturmhardt',
      price: 270,
      uri: 'https://source.unsplash.com/yu68fUQDvOI',
    },
    {
      title: 'Einblicke',
      artist: 'Frank Wolf',
      price: 220,
      uri: 'https://source.unsplash.com/fT49QnFucQ8',
    },
    {
      title: 'In der Tiefe',
      artist: 'Jean Claude',
      price: 270,
      uri: 'https://source.unsplash.com/3Sf_G9m0gcQ',
    },
    {
      title: 'Spring',
      artist: 'Irina Angus',
      price: 333,
      uri: 'https://source.unsplash.com/YoK5pBcSY8s',
    },
  ],
};

export const api = {
  async getImages(): Promise<ImageData[]> {
    return await waitFor(db.images, 2_000);
  },
};
