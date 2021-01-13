import Russian from './Russian';
import CityName from '@civ-clone/core-civilization/CityName';
import { instance as cityNameRegistryInstance } from '@civ-clone/core-civilization/CityNameRegistry';

([
  'Moscow',
  'Saint Petersburg',
  'Novosibirsk',
  'Yekaterinburg',
  'Nizhny Novgorod',
  'Kazan',
  'Chelyabinsk',
  'Omsk',
  'Samara',
  'Ufa',
  'Rostov-on-Don',
  'Krasnoyarsk',
  'Voronezh',
  'Perm',
  'Volgograd',
  'Krasnodar',
  'Saratov',
  'Tyumen',
  'Makhachkala',
  'Tolyatti',
  'Barnaul',
  'Ulyanovsk',
  'Izhevsk',
  'Vladivostok',
  'Irkutsk',
  'Khabarovsk',
  'Yaroslavl',
  'Tomsk',
  'Orenburg',
  'Kemerovo',
  'Novokuznetsk',
  'Tula',
  'Ryazan',
  'Kirov',
  'Astrakhan',
  'Naberezhnye Chelny',
  'Sochi',
  'Penza',
  'Lipetsk',
  'Cheboksary',
  'Balashikha',
  'Kaliningrad',
  'Kursk',
  'Stavropol',
  'Ulan-Ude',
  'Bryansk',
  'Tver',
  'Magnitogorsk',
  'Ivanovo',
  'Belgorod',
  'Surgut',
  'Vladimir',
  'Arkhangelsk',
  'Nizhny Tagil',
  'Kaluga',
  'Chita',
  'Saransk',
  'Yakutsk',
  'Smolensk',
  'Podolsk',
  'Volzhsky',
  'Vladikavkaz',
  'Vologda',
  'Cherepovets',
  'Kurgan',
  'Oryol',
  'Grozny',
  'Murmansk',
  'Tambov',
  'Petrozavodsk',
  'Sterlitamak',
  'Kostroma',
  'Nizhnevartovsk',
  'Novorossiysk',
  'Yoshkar-Ola',
  'Taganrog',
  'Komsomolsk-on-Amur',
  'Khimki',
  'Syktyvkar',
  'Nalchik',
  'Nizhnekamsk',
  'Shakhty',
  'Dzerzhinsk',
  'Bratsk',
  'Orsk',
  'Angarsk',
  'Engels',
  'Blagoveshchensk',
  'Stary Oskol',
  'Veliky Novgorod',
  'Korolyov',
  'Pskov',
  'Mytishchi',
  'Biysk',
  'Lyubertsy',
  'Prokopyevsk',
  'Yuzhno-Sakhalinsk',
  'Balakovo',
  'Armavir',
  'Rybinsk',
  'Severodvinsk',
  'Abakan',
  'Petropavlovsk-Kamchatsky',
  'Norilsk',
  'Syzran',
  'Volgodonsk',
  'Ussuriysk',
  'Kamensk-Uralsky',
  'Novocherkassk',
  'Zlatoust',
  'Elektrostal',
  'Almetyevsk',
  'Krasnogorsk',
  'Salavat',
  'Miass',
  'Nakhodka',
  'Kopeysk',
  'Pyatigorsk',
  'Rubtsovsk',
  'Berezniki',
  'Kolomna',
  'Maykop',
  'Odintsovo',
  'Khasavyurt',
  'Kovrov',
  'Kislovodsk',
  'Neftekamsk',
  'Nefteyugansk',
  'Novocheboksarsk',
  'Serpukhov',
  'Shchyolkovo',
  'Novomoskovsk',
  'Bataysk',
  'Pervouralsk',
  'Domodedovo',
  'Derbent',
  'Cherkessk',
  'Orekhovo-Zuyevo',
  'Nevinnomyssk',
  'Dimitrovgrad',
  'Nazran',
  'Kyzyl',
  'Oktyabrsky',
  'Obninsk',
  'Kaspiysk',
  'Novy Urengoy',
  'Ramenskoye',
  'Kamyshin',
  'Murom',
  'Zhukovsky',
] as string[]).forEach((name, i): void =>
  cityNameRegistryInstance.register(new CityName(name, Russian, i === 0))
);
