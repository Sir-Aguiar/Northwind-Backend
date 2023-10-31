interface IProps {
  first_name: string;
  last_name: string;
  title: string;
  title_of_courtesy: string;
  birth_date: string;
  hire_date: string;
  address: string;
  city: string;
  region: string;
  postal_code: string;
  country: string;
  home_phone: string;
  extension: string;
  notes: string;
  reports_to: number;
}

export const CreateEmployeeUseCase = async ({}: IProps) => {
  const execute = async () => {
    //
  };
  return { execute };
};
