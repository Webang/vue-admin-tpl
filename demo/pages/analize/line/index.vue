<template>
  <div class="chart" ref="chart"></div>
</template>

<script>
import * as d3 from "d3";
export default {
  mounted() {
    var chart = this.$refs.chart;
    var width = 300; //画布的宽度
    var height = 300; //画布的高度
    var svg = d3
      .select(chart)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    // 画布周边的空白
    var padding = { left: 30, right: 30, top: 20, bottom: 20 };

    // 定义一个数组
    var dataset = [10, 20, 30, 40, 33, 24, 12, 5];

    // x轴的比例尺
    var xScale = d3
      .scaleLinear()
      .domain([10, 130])
      .range([0, 960]);
    
    // y轴的比例尺
    var yScale = d3.scaleLinear()
      .domain([0, d3.max(dataset)])
      .range([height - padding.top - padding.bottom, 0]);

    //定义x轴
    var xAxis = d3.axisBottom(xScale);
    // var xAxis = d3
    //   .axis()
    //   .scale(xScale)
    //   .orient("bottom");

    var xAxis = d3.axisLeft(yScale);

    //矩形之间的空白
    var rectPadding = 4;

    // 添加矩形元素
    var rects = svg
      .selectAll(".MyRect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("class", "MyRect")
      .attr("transform", "translate(" + padding.left + "," + padding.top + ")")
      .attr("x", function(d, i) {
        return xScale(i) + rectPadding / 2;
      })
      .attr("y", function(d) {
        return yScale(d);
      })
      .attr("width", 300)
      .attr("height", function(d) {
        return height - padding.top - padding.bottom - yScale(d);
      })
      .attr("fill", "steelblue");

    //添加文字元素
    var texts = svg
      .selectAll(".MyText")
      .data(dataset)
      .enter()
      .append("text")
      .attr("class", "MyText")
      .attr("transform", "translate(" + padding.left + "," + padding.top + ")")
      .attr("x", function(d, i) {
        return xScale(i) + rectPadding / 2;
      })
      .attr("y", function(d) {
        return yScale(d);
      })
      .attr("dx", function() {
        return (xScale.rangeBand() - rectPadding) / 2;
      })
      .attr("dy", function(d) {
        return 20;
      })
      .text(function(d) {
        return d;
      })
      .style({
        fill: "#FFF",
        "text-anchor": "middle"
      });

    // 添加x轴
    svg
      .append("g")
      .attr("class", "axis")
      .attr(
        "transform",
        "translate(" + padding.left + "," + (height - padding.bottom) + ")"
      )
      .call(xAxis);

    // 添加y轴
    svg
      .append("g")
      .attr("class", "axis")
      .attr("transform", "translate(" + padding.left + "," + padding.top + ")")
      .call(yAxis);
  }
};
</script>

<style scoped>
.chart {
  width: 400px;
  height: 400px;
}
</style>