describe('Data test', function(){
  it('Shows data is there', function(){
    expect("data/StudentsPerformance.csv").toBeDefined();
  })
});

describe('Hidden paragraph test', function(){
  it('Shows that the p has the visible-xs class', function(){
    expect($('#hidden-p')).toHaveClass('visible-xs');
  })
})

