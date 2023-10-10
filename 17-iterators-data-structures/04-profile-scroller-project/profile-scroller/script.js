const people = [
  {
    name: 'Jamie Williams',
    age: 26,
    gender: 'female',
    location: 'Los Angeles, CA',
    imageURL: 'https://randomuser.me/api/portraits/women/1.jpg',
    looking: 'Female looking for male',
  },
  {
    name: 'John Smith',
    age: 35,
    gender: 'male',
    location: 'New York, NY',
    imageURL: 'https://randomuser.me/api/portraits/men/1.jpg',
    looking: 'Male looking for female',
  },
  {
    name: 'Bob Johnson',
    age: 42,
    gender: 'male',
    location: 'Chicago, IL',
    imageURL: 'https://randomuser.me/api/portraits/men/2.jpg',
    looking: 'Male looking for male',
  },
  {
    name: 'Shannon Jackson',
    age: 29,
    gender: 'female',
    location: 'Los Angeles, CA',
    imageURL: 'https://randomuser.me/api/portraits/women/2.jpg',
    looking: 'Female looking for female',
  },
];

const container = document.querySelector('.container');
const img = document.querySelector('img');
const profile_info = document.querySelector('.profile-info');
const next_btn = document.querySelector('#next');

function* createPeopleIterator() {
    let index = 0;
    while (true) {
        yield people[index++ % people.length];
    }
}

const iterator = createPeopleIterator();

console.log(iterator.next());

next_btn.addEventListener('click', () => {
    const person = iterator.next().value;
    img.src = person.imageURL;
    profile_info.querySelector('h3').textContent = person.name;
    profile_info.querySelectorAll('p')[0].textContent = `${person.age} Years Old`;
    profile_info.querySelectorAll('p')[1].textContent = `From ${person.location}`;
    profile_info.querySelectorAll('p')[2].textContent = person.looking;
});