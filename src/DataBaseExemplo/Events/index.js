/*Para importar dados daqui adicionar import {Events} from '../../DataBaseExemplo/Events' e usar Events[id].Name ou o item que desejar */
export const EventsSettings = {
    EventoOcorrendo: true,
}

export const Events = [
	{
		id: 0,
		Name: 'Hacktober Fest',
		Description: 'Uma Octoberfest no estilo programador!',
        Image: 'https://www.jenkins.io/images/hacktoberfest/2019_social.png',
        StartingDate: '01/10/2019/',
        EndingDate:'02/10/2019',
        CreatedBy: 'User',
        Adress: 'Endereço: Av. das Cataratas, 1118 - Vila Yolanda, Foz do Iguaçu - PR, 85853-000, Sala: 303.',
        Schedule:'Vide palestras',
        Participantes: '0, 1, 2, 3',

    },
    {
		id: 1,
		Name: 'FrontEnd-Day',
		Description: 'O GDG Foz ouviu as sugestões da comunidade de TI pedindo mais eventos de FrontEnd e irá realizar uma série deles, começando pelo tema.    ',
        Image: 'https://secure.meetupstatic.com/photos/event/b/3/d/e/highres_488806046.jpeg',
        StartingDate: '01/02/2020/',
        EndingDate:'02/02/2020',
        CreatedBy: 'User',
        adress: 'Endereço: Av. das Cataratas, 1118 - Vila Yolanda, Foz do Iguaçu - PR, 85853-000, Sala: 303.',
        Schedule:'Vide palestras',
        Participantes: '0, 1, 2, 3',

    },
    {
		id: 2,
		Name: 'Empreendedorismo',
		Description: 'Um evento sobre empreendedorismo',
        Image: '../../assets/img/past.events/empreendedorismo.jpeg',
        StartingDate: '03/03/2020/',
        EndingDate:'03/03/2020',
        /*../../assets/img/past.events/empreendedorismo.jpeg*/
        CreatedBy: 'User',
        adress: 'Endereço: Av. das Cataratas, 1118 - Vila Yolanda, Foz do Iguaçu - PR, 85853-000, Sala: 303.',
        Schedule:'Vide palestras',
        Participantes: '0, 1, 2, 3',
    },
    {
		id: 3,
		Name: 'Esportes e Natureza',
		Description: 'Evento sobre esportes e natureza',
        Image: '../../assets/img/past.events/esportes.natureza.jpeg',
        StartingDate: '01/02/2020/',
        EndingDate:'02/02/2020',
        CreatedBy: 'User',
        adress: 'Endereço: Av. das Cataratas, 1118 - Vila Yolanda, Foz do Iguaçu - PR, 85853-000, Sala: 303.',
        Schedule:'Vide palestras',
        Participantes: '0, 1, 2, 3',

    },
    {
		id: 4,
		Name: 'GDG Foz',
		Description: 'Google Development Group Foz do Iguaçu!',
        Image: '../../assets/img/past.events/gdgfoz.jpeg',
        StartingDate: '01/02/2020/',
        EndingDate:'02/02/2020',
        CreatedBy: 'User',
        adress: 'Endereço: Av. das Cataratas, 1118 - Vila Yolanda, Foz do Iguaçu - PR, 85853-000, Sala: 303.',
        Schedule:'Vide palestras',
        Participantes: '0, 1, 2, 3',

    },
    {
		id: 5,
		Name: 'Inteligent Hub',
		Description: 'Lancamento de um livro mais mesa de debates',
        Image: '../../assets/img/past.events/InteligentHub.jpg',
        StartingDate: '01/02/2020/',
        EndingDate:'02/02/2020',
        CreatedBy: 'User',
        adress: 'Endereço: Av. das Cataratas, 1118 - Vila Yolanda, Foz do Iguaçu - PR, 85853-000, Sala: 303.',
        Schedule:'Vide palestras',
        Participantes: '0, 1, 2, 3',

    },
    
]