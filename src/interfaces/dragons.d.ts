interface DragonItem {
  id: string;
  createdAt: string;
  name: string;
  type: string;
  histories: string[];
  imageUrl: string;
}

interface FormFields {
  id?: string;
  name: string;
  type: string;
  imageUrl: string;
  histories: string;
}

interface Login {
  email: string;
  password: string;
}
