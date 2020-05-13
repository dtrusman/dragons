import { get, post, put, del } from 'api/methods';

export default {
  list: () => {
    return get<DragonItem[]>('/dragon');
  },
  details: (id: string) => {
    return get<DragonItem>(`/dragon/${id}`);
  },
  save: (data: FormFields) => {
    return post<Response>(`/dragon`, data, {}, true);
  },
  update: (data: FormFields) => {
    return put<Response>(`/dragon`, data, {}, true);
  },
  remove: (id: string) => {
    return del(`/dragon/${id}`);
  },
};
