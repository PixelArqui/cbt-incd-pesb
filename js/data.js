// Constantes e Dados Geográficos
const MUNICIPIOS = [
  {nome:'Araponga',lat:-20.6706,lon:-42.5131},
  {nome:'Divino',lat:-20.6144,lon:-42.1486},
  {nome:'Ervália',lat:-20.8403,lon:-42.6522},
  {nome:'Fervedouro',lat:-20.7277,lon:-42.2790},
  {nome:'Miradouro',lat:-20.8908,lon:-42.3428},
  {nome:'Muriaé',lat:-21.1306,lon:-42.3664},
  {nome:'Pedra Bonita',lat:-20.5208,lon:-42.3300},
  {nome:'Rosário da Limeira',lat:-20.9830,lon:-42.5170},
  {nome:'Sericita',lat:-20.4733,lon:-42.4817}
];

const DISTRITOS = [
  {nome:'Belisário',lat:-20.9261,lon:-42.4588,muni:'Muriaé'},
  {nome:'São Domingos',lat:-20.7501,lon:-42.5294,muni:'Araponga'},
  {nome:'Santo Antônio da Ventania',lat:-20.9559,lon:-42.6019,muni:'Ervália'},
  {nome:'Careço',lat:-20.8435,lon:-42.5388,muni:'Ervália'},
  {nome:'Estevão de Araújo',lat:-20.6100,lon:-42.5360,muni:'Araponga'},
  {nome:'São Vicente do Grama',lat:-20.5070,lon:-42.5250,muni:'Jequeri'},
  {nome:'Ribeirão de São Domingos',lat:-20.4660,lon:-42.2830,muni:'Santa Margarida'},
  {nome:'Bom Jesus do Divino',lat:-20.5980,lon:-42.2650,muni:'Divino'},
  {nome:'São Pedro do Glória',lat:-20.7090,lon:-42.3700,muni:'Fervedouro'},
  {nome:'Bom Jesus do Madeira',lat:-20.7237,lon:-42.4236,muni:'Fervedouro'},
  {nome:'Santa Cruz do Monte Alverne',lat:-20.7817,lon:-42.4372,muni:'Miradouro'}
];

const MAP_KEY = 'e4885bf7243f30d6f28a805f4d70daea';
const PESB_BOUNDS = {south:-21.25,north:-20.45,west:-42.65,east:-42.15};
