//como listar propriedades:
// const coolestTvShow = {
//     name: 'BoJack Horseman',
//     genre: 'adult animation',
//     author: 'Raphael Bob-Waksberg',
//     favoriteCharacter: 'Princess Carolyn',
//     quote: 'Princess Carolyn always lands on her feet.',
//     seasons: 6,
//   };
  
//   for (const index in coolestTvShow) {
//     console.log(index);
//   }
  
//   // name
//   // genre
//   // author
//   // favoriteCharacter
//   // quote
//   // seasons
//----------------------------------------

/*
Utilizando object.keys
*/
// const coolestTvShow = {
//     name: 'BoJack Horseman',
//     genre: 'adult animation',
//     createdBy: 'Raphael Bob-Waksberg',
//     favoriteCharacter: 'Princess Carolyn',
//     quote: 'Princess Carolyn always lands on her feet.',
//     seasons: 6,
//   };
  
//   // for (const property in coolestTvShow) {
//   //   console.log(property);
//   // }
  
//   console.log(Object.keys(coolestTvShow));
//---------------------------------------------------------

const student1 = {
    html: 'Muito Bom',
    css: 'Bom',
    javascript: 'Ótimo',
    softskills: 'Ótimo',
  };
  
  const student2 = {
    html: 'Bom',
    css: 'Ótimo',
    javascript: 'Ruim',
    softskills: 'Ótimo',
    git: 'Bom', // chave adicionada
  };
  
  const listSkills = (student) => {
    const arrayOfSkills = Object.keys(student);
    // console.log(arrayOfSkills)
    for (const index in arrayOfSkills) {
    //   console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
    }
    console.log(student1.css);
  };
  
//   console.log('Estudante 1');
  listSkills(student1);
  
//   console.log('Estudante 2');
  listSkills(student2);