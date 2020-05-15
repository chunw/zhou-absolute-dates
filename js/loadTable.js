d3.text("data/data.csv", function(data) {
    var parsedCSV = d3.csv.parseRows(data);
    headerData = [parsedCSV.shift()];

    var theader = d3.select(".table")
                .append("table")
                .attr('class', 'overflow-y')
                .append("thead")

                .selectAll("tr")
                    .data(headerData).enter()
                .append("tr")

                .selectAll("th")
                    .data(function(d) { return d; }).enter()
                    .append("th")
                    .text(function(d) { return d; })


    var tbody = d3.select("table")
                .append("tbody")

                .selectAll("tr")
                    .data(parsedCSV).enter()
                .append("tr")

                .selectAll("td")
                    .data(function(d) { return d; }).enter()
                    .append("td")
                    .text(function(d) { return d; })
                    .each(function(d) {
                        var cell = d3.select(this);
                        var data = cell[0][0].innerText;
                        if (data.indexOf('失') > -1) {
                            cell.attr('class', 'shi');
                        } else if (data.indexOf('超') > -1) {
                            cell.attr('class', 'chao');
                        } else if (data.indexOf('错') > -1) {
                            cell.attr('class', 'cuo');
                        } else if (data.indexOf('正') > -1) {
                            cell.attr('class', 'zheng');
                        }
                    });
});