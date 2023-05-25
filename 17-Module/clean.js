const budget = Object.freeze([
    { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
    { value: -45, description: 'Groceries 🥑', user: 'jonas' },
    { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
    { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
    { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
    { value: -20, description: 'Candy 🍭', user: 'matilda' },
    { value: -125, description: 'Toys 🚂', user: 'matilda' },
    { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
  ]);
  
  const spendingLimits = Object.freeze({
    jonas: 1500,
    matilda: 100,
  });
  //Object인 spendingLimits을 불변하게 함
  
  const getLimit = (limits,user) => {
    return limits?.[user] ?? 0;
  }

  //pure Function
  const addExpense = (state, limits, value, description, user = 'jonas') => {
    const  cleanUser = user.toLowerCase();
    return value <= getLimit(limits,cleanUser) ? [...state, { value: -value, description, user:cleanUser }] : state;
  };

  const expense1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
  const expense2 = addExpense(expense1, spendingLimits, 100, 'Going to movies 🍿', 'Matilda');
  const expense3 = addExpense(expense2, spendingLimits, 200, 'Stuff', 'Jay');
  
  const checkExpenses = (state, limit) => 
    state.map(e=> e.value < -getLimit(limit,e.user) ? {...e,flag:'limit'} : e );

  const final = checkExpenses(expense3,spendingLimits);
  console.log(budget);
  console.log(final);
  
  
  const bigExpenses = (state,limit) => {

    const bigExpense = state.filter(e=>e.value <= -limit)
    .map(e=> e.description.slice(-2))
    .join(' / ')

    return bigExpense
  };
  
  console.log(bigExpenses(final,1000));