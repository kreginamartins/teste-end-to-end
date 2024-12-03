import { faker } from '@faker-js/faker';

export const generatedate = () => {
  return{
      nomeRua: faker.location.street(),
      cidade: faker.location.city(),
      cep : faker.location.zipCode('08752500'),
      telefone : faker.phone.number('67992159363')

  }
      
}