import * as moment from 'moment';
  export function getUsers() {
    return [
      {
        firstname: 'Steven',
        parkedTime: moment(),
        leavingTime: moment().add(30, 'minutes'),
        car: {
          size: 'Coupe'
        }
      },
      {
        firstname: 'Drake',
        parkedTime: moment().subtract(45, 'minutes'),
        leavingTime: moment().add(2, 'hours'),
        car: {
          size: 'SUV'
        }
      },
      {
        firstname: 'Posty',
        parkedTime: moment().subtract(2, 'hours'),
        leavingTime: moment().add(3, 'hours'),
        car: {
          size: 'Sedan'
        }
      },
      {
        firstname: 'Cardi B',
        parkedTime: moment().subtract(2, 'hours'),
        leavingTime: moment().add(3.5, 'hours'),
        car: {
          size: 'Okurr'
        }
      },
    ];
  };