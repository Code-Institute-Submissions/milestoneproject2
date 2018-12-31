queue()
    .defer(d3.csv, "data/StudentsPerformance.csv")
    .await(makeGraphs);


function makeGraphs(error, studentData) {
    var ndx = crossfilter(studentData);

    studentData.forEach(function(d) {
        d.math_score = parseInt(d.math_score);
        d.reading_score = parseInt(d["reading_score"]);
        d.writing_score = parseInt(d["writing_score"]);
    });

    show_gender_selector(ndx);
    show_gender_balance(ndx);
    show_test_scores_by_gender(ndx);

    dc.renderAll();
}


function show_gender_selector(ndx) {
    var disciplineDim = ndx.dimension(dc.pluck("race_ethnicity"));
    var disciplineSelect = disciplineDim.group();

    dc.selectMenu("#discipline-selector")
        .dimension(disciplineDim)
        .group(disciplineSelect);
}

function show_gender_balance(ndx) {
    var genderDim = ndx.dimension(dc.pluck("gender"));
    var genderMix = genderDim.group();

    dc.barChart("#gender-balance")
        .width(350)
        .height(250)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(genderDim)
        .group(genderMix)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Gender")
        .yAxis().ticks(20);
}


function show_test_scores_by_gender(ndx) {
    var genderDim = ndx.dimension(dc.pluck("gender"));
    var math_score_by_gender = genderDim.group().reduceSum(dc.pluck('math_score'));
    var reading_score_by_gender = genderDim.group().reduceSum(dc.pluck('reading_score'));
    var writing_score_by_gender = genderDim.group().reduceSum(dc.pluck('writing_score'));

    dc.pieChart("#gender-balance-math")
                .height(330)
                .radius(90)
                .transitionDuration(500)
                .dimension(genderDim)
                .group(math_score_by_gender)
    
    dc.pieChart("#gender-balance-reading")
                .height(330)
                .radius(90)
                .transitionDuration(500)
                .dimension(genderDim)
                .group(reading_score_by_gender)

    dc.pieChart("#gender-balance-writing")
                .height(330)
                .radius(90)
                .transitionDuration(500)
                .dimension(genderDim)
                .group(writing_score_by_gender)    
    
}
