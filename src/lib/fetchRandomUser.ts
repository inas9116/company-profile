import axios from 'axios';

export interface RandomUser {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

export const fetchRandomUser = async (): Promise<RandomUser[]> => {
  const response = await axios.get('https://randomuser.me/api/', {
    params: { results: 6 },
  });
  return response.data.results as RandomUser[];
};
