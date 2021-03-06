          var chart = c3.generate({
          axis: {
            x: {
              tick: {
                outer: false
              }
            },
            y: {
              tick: {
                outer: false
              }
            }
          },
          bindto: '#chart',
          data: {
            columns: [
              ['data1', 30, 200, 100, 400, 150, 250],
              ['data2', 50, 220, 310, 240, 115, 25],
              ['data3', 70, 100, 390, 295, 170, 220],
              ['data4', 10, 340, 30, 290, 35, 20],
              ['data5', 90, 150, 160, 165, 180, 5]
            ]
          },
          grid: {
            y: {
              show: true
            }
          },
          point: {
            r: 4
          }
        });
        var chart1 = c3.generate({
          axis: {
            x: {
              tick: {
                outer: false
              }
            },
            y: {
              tick: {
                outer: false
              }
            }
          },
          bindto: '#chart1',
          color: {
            pattern: ['#0088ce', '#00659c', '#3f9c35', '#ec7a08', '#cc0000']
          },
          data: {
            columns: [
              ['data1', 30, 200, 100, 400, 150, 250],
              ['data2', 50, 220, 310, 240, 115, 25],
              ['data3', 70, 100, 390, 295, 170, 220],
              ['data4', 10, 340, 30, 290, 35, 20],
              ['data5', 90, 150, 160, 165, 180, 5]
            ]
          },
          grid: {
            y: {
              show: true
            }
          },
          point: {
            r: 4
          }
        });
        
        
        var chart2 = c3.generate({
          axis: {
            x: {
              show: false
            },
            y: {
              show: false
            }
          },
          bindto: '#chart2',
          color: {
            pattern: ['#0088ce', '#00659c', '#3f9c35', '#ec7a08', '#cc0000']
          },
          data: {
            columns: [
              ['Less than one year remaining', 10, 14, 12, 20, 31, 27, 44, 36, 52, 55, 62, 68, 69, 88, 74, 88, 91],
            ],
            type: 'area'
          },
          legend: {
            show: false
          },
          point: {
            r: 1,
            focus: {
              expand: {
                r: 4
              }
            }
          },
          size: {
            height: 50
          },
          tooltip: {
            // because a sparkline should only contain a single data column, the tooltip will only work for a single data column
            contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
              for (i = 0; i < d.length; i++) {
                return '<span class="c3-tooltip-sparkline">' + d[i].value + '%' + '</span>'
              }
            }
          }
        });







        var chart2b = c3.generate({
          axis: {
            x: {
              show: false
            },
            y: {
              show: false
            }
          },
          bindto: '#chart2b',
          color: {
            pattern: ['#0088ce', '#00659c', '#3f9c35', '#ec7a08', '#cc0000']
          },
          data: {
            columns: [
              ['Less than one year remaining', 20, 10, 12, 2, 11, 17, 24, 26, 52, 8, 35, 38, 39, 28, 4, 48, 91],
            ],
            type: 'area'
          },
          legend: {
            show: false
          },
          point: {
            r: 1,
            focus: {
              expand: {
                r: 4
              }
            }
          },
          size: {
            height: 50
          },
          tooltip: {
            // because a sparkline should only contain a single data column, the tooltip will only work for a single data column
            contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
              for (i = 0; i < d.length; i++) {
                return '<span class="c3-tooltip-sparkline">' + d[i].value + '%' + '</span>'
              }
            }
          }
        });




        var chart2c = c3.generate({
          axis: {
            x: {
              show: false
            },
            y: {
              show: false
            }
          },
          bindto: '#chart2c',
          color: {
            pattern: ['#0088ce', '#00659c', '#3f9c35', '#ec7a08', '#cc0000']
          },
          data: {
            columns: [
              ['Less than one year remaining', 90, 80, 65, 30, 20, 17, 24, 26, 22, 24, 85, 78, 59, 78, 70, 48, 91],
            ],
            type: 'area'
          },
          legend: {
            show: false
          },
          point: {
            r: 1,
            focus: {
              expand: {
                r: 4
              }
            }
          },
          size: {
            height: 50
          },
          tooltip: {
            // because a sparkline should only contain a single data column, the tooltip will only work for a single data column
            contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
              for (i = 0; i < d.length; i++) {
                return '<span class="c3-tooltip-sparkline">' + d[i].value + '%' + '</span>'
              }
            }
          }
        });





        var chart2d = c3.generate({
          axis: {
            x: {
              show: false
            },
            y: {
              show: false
            }
          },
          bindto: '#chart2d',
          color: {
            pattern: ['#0088ce', '#00659c', '#3f9c35', '#ec7a08', '#cc0000']
          },
          data: {
            columns: [
              ['Less than one year remaining', 30, 40, 55, 60, 70, 87, 94, 26, 102, 124, 185, 178, 159, 178, 170, 248, 691],
            ],
            type: 'area'
          },
          legend: {
            show: false
          },
          point: {
            r: 1,
            focus: {
              expand: {
                r: 4
              }
            }
          },
          size: {
            height: 50
          },
          tooltip: {
            // because a sparkline should only contain a single data column, the tooltip will only work for a single data column
            contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
              for (i = 0; i < d.length; i++) {
                return '<span class="c3-tooltip-sparkline">' + d[i].value + '%' + '</span>'
              }
            }
          }
        });








        var chart3 = c3.generate({
          axis: {
            x: {
              tick: {
                outer: false
              }
            },
            y: {
              tick: {
                outer: false
              }
            }
          },
          bindto: '#chart3',
          color: {
            pattern: ['#0088ce', '#00659c', '#3f9c35', '#ec7a08', '#cc0000']
          },
          data: {
            columns: [
              ['data1', 30, 200, 100, 400, 150, 250],
              ['data2', 50, 220, 310, 240, 115, 25],
              ['data3', 70, 100, 390, 295, 170, 220],
              ['data4', 10, 340, 30, 290, 35, 20],
              ['data5', 90, 150, 160, 165, 180, 5]
            ],
            type: 'spline'
          },
          grid: {
            y: {
              show: true
            }
          },
          point: {
            r: 4
          }
        });
        var chart4 = c3.generate({
          axis: {
            x: {
              tick: {
                outer: false
              }
            },
            y: {
              tick: {
                outer: false
              }
            }
          },
          bindto: '#chart4',
          color: {
            pattern: ['#0088ce', '#00659c', '#3f9c35', '#ec7a08', '#cc0000']
          },
          data: {
            columns: [
              ['data1', 300, 350, 300, 0, 0, 0],
              ['data2', 130, 100, 140, 200, 150, 50]
            ],
            types: {
              data1: 'area-spline',
              data2: 'area-spline'
            }
          },
          grid: {
            y: {
              show: true
            }
          },
          point: {
            r: 4
          }
        });
        var chart5 = c3.generate({
          axis: {
            x: {
              tick: {
                outer: false
              }
            },
            y: {
              tick: {
                outer: false
              }
            }
          },
          bindto: '#chart5',
          color: {
            pattern: ['#0088ce', '#00659c', '#3f9c35', '#ec7a08', '#cc0000']
          },
          data: {
            columns: [
              ['data1', 300, 350, 300, 0, 0, 0],
              ['data2', 130, 100, 140, 200, 150, 50]
            ],
            types: {
              data1: 'area-spline',
              data2: 'area-spline'
            },
            groups: [['data1', 'data2']]
          },
          grid: {
            y: {
              show: true
            }
          },
          point: {
            r: 4
          }
        });
        var chart6 = c3.generate({
          axis: {
            x: {
              categories: ['Red', 'Orange', 'Green', 'Blue'],
              tick: {
                outer: false
              },
              type: 'category'
            },
            y: {
              tick: {
                outer: false
              }
            }
          },
          bar: {
            width: {
              ratio: 0.5 // this makes bar width 50% of length between ticks
            }
          },
          bindto: '#chart6',
          color: {
            pattern: ['#0088ce', '#00659c', '#3f9c35', '#ec7a08', '#cc0000']
          },
          data: {
            columns: [
              ['data1', 50, 200, 170, 200, 340, 440],
              ['data2', 130, 100, 80, 140, 300, 380],
              ['data3', 130, 100, 20, 200, 240, 300]
            ],
            type: 'bar'
          },
          grid: {
            y: {
              show: true
            }
          }
        });
        var chart7 = c3.generate({
          axis: {
            rotated: true,
            x: {
              categories: ['Red', 'Orange', 'Green', 'Blue'],
              tick: {
                outer: false
              },
              type: 'category'
            },
            y: {
              tick: {
                outer: false
              }
            }
          },
          bindto: '#chart7',
          color: {
            pattern: ['#0088ce', '#00659c', '#3f9c35', '#ec7a08', '#cc0000']
          },
          data: {
            columns: [
              ['data1', 5, 200, 200, 400],
              ['data2', 130, 100, 20, 200]
            ],
            groups: [
              ['data1', 'data2']
            ],
            type: 'bar'
          },
          grid: {
            y: {
              show: true
            }
          }
        });
        var chart8 = c3.generate({
          bindto: '#chart8',
          data: {
            colors: {
              Cloud: 
          '#00659c',     Virtual: '#0088ce',
              Baremetal: '#969696'
            },
            columns: [
              ['Cloud', 4,828],
              ['Virtual', 13,258],
              ['Baremetal', 11,1124]
            ],
            type : 'donut',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
          },
          donut: {
            // title: "29,210 Host Totals"
          },
          legend: {
            show: false
          },
          label: {
            show: false
          }

          
        });
