(function fillFormWithTestData() {
  const profileData = {
    email: 'example@example.com',
    login: 'examplelogin',
    fname: 'Иван',
    sname: 'Иванов',
    nickname: 'superhero',
    phone: '89099999999'
  };

  for (const prop in profileData) {
    if (document.getElementById(prop))
      document.getElementById(prop).value = profileData[prop];
  }
})();
