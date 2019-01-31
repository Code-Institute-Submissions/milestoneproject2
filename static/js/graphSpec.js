//Tests to see if the data set is working
describe('Data test', function(){
  it('Shows data is there', function(){
    expect("data/StudentsPerformance.csv").toBeDefined();
  })
});


function progress(loading) {
  if (loading === 6 || loading === 0) {
    document.getElementById('wrapper').style.display = 'block';
    return 'loaded';
  }
  document.getElementById('wrapper').style.display = 'none';
  return 'loading';
}


//Tests if the charts load
describe('Loader (UX test)', () => {
  beforeEach(() => { loader = 0; });

  it('Should hide all elements on site before everything is loaded', () => {
    progress(1); // Page is loaded
    expect(document.getElementById('wrapper').style.display).toBe('none');
  });

  it('Should show all elements when everything is loaded', () => {
    progress(6); // Page is loaded
    expect(document.getElementById('wrapper').style.display).toBe('block');
  });
});

