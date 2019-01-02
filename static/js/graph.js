queue()
    .defer(d3.csv, "data/StudentsPerformance.csv")
    .await(makeGraphs);


function makeGraphs(error, studentData) {
    var ndx = crossfilter(studentData);

    studentData.forEach(function(d) {
        d.math_score = parseInt(d.math_score);
        d.reading_score = parseInt(d["reading_score"]);
        d.writing_score = parseInt(d["writing_score"]);
        d.average_score = (d.math_score + d.reading_score + d.writing_score) / 3;
    });

    
    show_gender_balance(ndx);
    show_test_scores_by_gender(ndx);
    show_parental_level_of_education_selector(ndx);
    show_race_ethnicity_balance(ndx);
    show_percent_that_are_in_each_race(ndx);

    dc.renderAll();
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
                .height(200)
                .radius(90)
                .transitionDuration(500)
                .dimension(genderDim)
                .group(math_score_by_gender)
    
    dc.pieChart("#gender-balance-reading")
                .height(200)
                .radius(90)
                .transitionDuration(500)
                .dimension(genderDim)
                .group(reading_score_by_gender)

    dc.pieChart("#gender-balance-writing")
                .height(200)
                .radius(90)
                .transitionDuration(500)
                .dimension(genderDim)
                .group(writing_score_by_gender)    
    
}


function show_parental_level_of_education_selector(ndx) {
    var parentDim = ndx.dimension(dc.pluck("parental_level_of_education"));
    var parentSelect = parentDim.group();

    dc.selectMenu("#parental_level_of_education-selector")
        .dimension(parentDim)
        .group(parentSelect);
}


function show_race_ethnicity_balance(ndx) {
    var race_ethnicityDim = ndx.dimension(dc.pluck("race_ethnicity"));
    var race_ethnicityMix = race_ethnicityDim.group();

    dc.barChart("#race_ethnicity-graph")
        .width(350)
        .height(250)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(race_ethnicityDim)
        .group(race_ethnicityMix)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Race/Ethnicity")
        .yAxis().ticks(5);
}


function show_percent_that_are_in_each_race(ndx) {
    
    function parental_level_of_education_by_Race(dimension, parental_level_of_education) {
        return dimension.group().reduce(
            function (p, v) {
                p.total++;
                if (v.parental_level_of_education === parental_level_of_education) {
                    p.match++;
                };
                return p;
            },
            function (p, v) {
                p.total--;
                if (v.parental_level_of_education === parental_level_of_education) {
                    p.match--;
                };
                return p;
            },
            function () {
                return { total: 0, match: 0 }
            }
        );
    };

    var dim = ndx.dimension(dc.pluck("race_ethnicity"));
    var someHighSchoolByRace = parental_level_of_education_by_Race(dim, "some high school");
    var highSchoolProfByRace = parental_level_of_education_by_Race(dim, "high school");
    var someCollegeProfByRace = parental_level_of_education_by_Race(dim, "some college");
    var associateDegreeProfByRace = parental_level_of_education_by_Race(dim, "associate's degree");
    var bachelorDegreeProfByRace = parental_level_of_education_by_Race(dim, "bachelor's degree");
    var mastersDegreeProfByRace = parental_level_of_education_by_Race(dim, "master's degree");
    

    dc.barChart("#parental_level_of_education_by_Race-chart")
        .width(350)
        .height(250)
        .dimension(dim)
        .group(someHighSchoolByRace, "some high school")
        .stack(highSchoolProfByRace, "high school")
        .stack(someCollegeProfByRace, "some college")
        .stack(associateDegreeProfByRace, "associate's degree")
        .stack(bachelorDegreeProfByRace, "bachelor's degree")
        .stack(mastersDegreeProfByRace, "master's degree")
        .valueAccessor(function (d) {
            if(d.value.total > 0) {
                return (d.value.match / d.value.total) * 100
            } else {
                return 0;
            }
            return d.value.percent * 100;
        })
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Race")
        .legend(dc.legend().x(270).y(20).itemHeight(15).gap(5))
        .margins({top: 10, right: 100, bottom: 30, left: 30});
}
