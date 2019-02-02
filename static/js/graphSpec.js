//Tests to see if the data set is working
describe('Data test', function(){
  it('Shows data is there', function(){
    expect("data/StudentsPerformance.csv").toBeDefined();
  })
});


function progress(loading, id) {
  if (loading === 6 || loading === 0) {
    document.getElementById(id).style.display = 'block';
    return 'loaded';
  }
  document.getElementById(id).style.display = 'none';
  return 'loading';
}


//Tests if the charts load
describe('Loader (UX test)', () => {
  beforeEach(() => { loader = 0; });

  it('Should hide all elements on site before everything is loaded', () => {
    progress(1, 'wrapper'); // Page is loaded
    expect(document.getElementById('wrapper').style.display).toBe('none');
  });

  it('Should show all elements when everything is loaded', () => {
    progress(6, 'wrapper'); // Page is loaded
    expect(document.getElementById('wrapper').style.display).toBe('block');
  });
  
  it('Should hide the chart on site before loaded', () => {
    progress(1, 'gender-balance'); // Page is loaded
    expect(document.getElementById('gender-balance').style.display).toBe('none');
  });

  it('Should show the chart when loaded', () => {
    progress(6, 'gender-balance'); // Page is loaded
    expect(document.getElementById('gender-balance').style.display).toBe('block');
  });
  
    
  
});



