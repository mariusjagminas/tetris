(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,r){e.exports=r(20)},,,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var i=r(0),n=r.n(i),a=r(2),l=r.n(a),f=(r(14),r(3)),o=r(4),u=r(6),d=r(5),c=r(7),g=(r(15),function(e){var t=e.cell;return n.a.createElement("div",{className:"cell ".concat(1===t?"active":2===t?"freeze":"")})}),s=(r(16),function(e){var t=e.row;return n.a.createElement("div",{className:"row"},t.map(function(e,t){return n.a.createElement(g,{key:t,cell:e})}))}),h=(r(17),function(e){var t=e.field;return n.a.createElement("div",{className:"field"},t.map(function(e,t){return n.a.createElement(s,{className:"row",key:t,row:e})}))}),m=(r(18),function(e){var t=e.gameOver,r=e.startGame;return n.a.createElement("div",{className:"modal ".concat(t?"is-visible":"")},n.a.createElement("p",{className:"modal__text"},"Game Over"),n.a.createElement("button",{className:"modal__button",onClick:r},"Restart Game"))}),v=function(e){var t=e.nextFigureField;return n.a.createElement("div",{className:"field"},t.map(function(e,t){return n.a.createElement(s,{className:"row",key:t,row:e})}))},F=(r(19),[{path:[[[0,0],[0,1],[1,1],[1,2]],[[1,0],[2,0],[0,1],[1,1]]]},{path:[[[1,0],[0,1],[1,1],[0,2]],[[0,0],[1,0],[1,1],[2,1]]]},{path:[[[0,0],[1,0],[2,0],[2,1]],[[1,0],[1,1],[1,2],[0,2]],[[0,0],[0,1],[1,1],[2,1]],[[0,0],[1,0],[0,1],[0,2]]]},{path:[[[0,0],[1,0],[2,0],[0,1]],[[0,0],[1,0],[1,1],[1,2]],[[2,0],[0,1],[1,1],[2,1]],[[0,0],[0,1],[0,2],[1,2]]]},{path:[[[0,0],[1,0],[2,0],[3,0]],[[1,0],[1,1],[1,2],[1,3]]]},{path:[[[0,0],[1,0],[2,0],[1,1]],[[1,0],[1,1],[1,2],[0,1]],[[1,0],[0,1],[1,1],[2,1]],[[0,0],[0,1],[0,2],[1,1]]]}]),p=function(e){function t(){var e;return Object(f.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).createField=function(e,t){for(var r=[],i=0;i<e;i++){r[i]=[];for(var n=0;n<t;n++)r[i][n]=0}return r},e.getRandomFigure=function(){var t=Math.floor(Math.random()*e.figures.length);return e.lastRandomNumber===t&&e.getRandomFigure(),e.lastRandomNumber=t,e.figures[t]},e.loop=function(){e.field[0].includes(2)?e.gameOver():(e.pathIndex=0,e.nextFigureField=e.nextFigureField.map(function(e){return e.map(function(e){return 0})}),e.currentFigure=e.nextFigure,e.figurePath=e.currentFigure.path[0],e.drawFigure(e.field,e.figurePath,e.figureCoord.x,e.figureCoord.y),e.nextFigure=e.getRandomFigure(),e.drawFigure(e.nextFigureField,e.nextFigure.path[0],1,1),e.setState({field:e.field,nextFigureField:e.nextFigureField}),e.interval=setInterval(e.moveFigure,e.speed))},e.handleKeyDown=function(t){if(e.isKeyDown&&!e.state.gameOver)switch(t.keyCode){case 37:e.moveFigureLeft();break;case 39:e.moveFigureRight();break;case 40:e.moveFigureDown();break;case 38:e.rotateFigure();break;default:return}},e.drawFigure=function(e,t,r,i){t.forEach(function(t){e[t[1]+i][t[0]+r]=1})},e.moveFigure=function(){for(var t=!0,r=e.field.length-1;r>=0;r--)for(var i=0;i<=e.field[r].length-1;i++)1===e.field[r][i]&&(r+1!==e.field.length&&2!==e.field[r+1][i]||(t=!1,e.freezeFigure()));if(t){e.figureCoord.y++;for(var n=e.field.length-1;n>=0;n--)for(var a=0;a<=e.field[n].length-1;a++)1===e.field[n][a]&&(e.field[n][a]=0,e.field[n+1][a]=1);e.setState({field:e.field})}},e.moveFigureLeft=function(){e.isKeyDown=!1;for(var t=!0,r=0;r<=e.field[1].length-1;r++)for(var i=0;i<=e.field.length-1;i++)1===e.field[i][r]&&(r<=0||2===e.field[i][r-1])&&(t=!1);if(t){e.figureCoord.x--;for(var n=0;n<=e.field[1].length-1;n++)for(var a=0;a<=e.field.length-1;a++)1===e.field[a][n]&&(e.field[a][n]=0,e.field[a][n-1]=1);e.setState({field:e.field})}},e.moveFigureRight=function(){e.isKeyDown=!1;for(var t=!0,r=e.field[1].length-1;r>=0;r--)for(var i=0;i<=e.field.length-1;i++)1===e.field[i][r]&&(r>=e.field[1].length-1||2===e.field[i][r+1])&&(t=!1);if(t){e.figureCoord.x++;for(var n=e.field[1].length-1;n>=0;n--)for(var a=0;a<=e.field.length-1;a++)1===e.field[a][n]&&(e.field[a][n]=0,e.field[a][n+1]=1);e.setState({field:e.field})}},e.moveFigureDown=function(){e.isKeyDown=!1,clearInterval(e.interval),e.interval=setInterval(e.moveFigure,10)},e.freezeFigure=function(){clearInterval(e.interval);for(var t=e.field.length-1;t>=0;t--)for(var r=0;r<=e.field[t].length-1;r++)1===e.field[t][r]&&(e.field[t][r]=2);e.figureCoord.x=0,e.figureCoord.y=0,e.setState({field:e.field}),e.clearFullRow(),e.loop()},e.clearFullRow=function(){var t=e.getFullRowIndex();if(t){for(var r=t;r>0;r--)for(var i=0;i<e.field[0].length;i++)e.field[r][i]=e.field[r-1][i];e.clearFullRow()}},e.getFullRowIndex=function(){for(var t,r=e.field.length-1;r>=0;r--){t=!0;for(var i=0;i<=e.field[r].length-1;i++)0===e.field[r][i]&&(t=!1);if(t)return r}return!1},e.gameOver=function(){e.setState({gameOver:!0}),clearInterval(e.interval)},e.startGame=function(){e.setState({gameOver:!1}),e.field=e.field.map(function(e){return e.map(function(e){return 0})}),e.loop()},e.state={field:[[]],nextFigureField:[[]],gameOver:!1},e.speed=800,e.field=e.createField(14,8),e.nextFigureField=e.createField(5,5),e.pathIndex=0,e.isKeyDown=!0,e.figureCoord={x:0,y:0},e.lastRandomNumber=null,e.currentFigure=null,e.figurePath=null,e.figures=F,e}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",function(){return e.isKeyDown=!0}),this.nextFigure=this.getRandomFigure(),this.loop()}},{key:"rotateFigure",value:function(){var e=this;this.isKeyDown=!1;var t=!0;this.nextFigurePath=this.currentFigure.path[this.pathIndex+1],this.nextFigurePath.forEach(function(r){var i=r[0]+e.figureCoord.x,n=r[1]+e.figureCoord.y;(i>=e.field[0].length||n>=e.field.length||2===e.field[n][i])&&(t=!1)}),t&&(this.pathIndex=this.pathIndex>=this.currentFigure.path.length-2?-1:this.pathIndex+1,this.figurePath=this.nextFigurePath,this.field.forEach(function(t,r){return t.forEach(function(t,i){1===t&&(e.field[r][i]=0)})}),this.drawFigure(this.field,this.figurePath,this.figureCoord.x,this.figureCoord.y),this.setState({field:this.field}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"game"},n.a.createElement(h,{field:this.state.field}),n.a.createElement(m,{gameOver:this.state.gameOver,startGame:this.startGame}),n.a.createElement(v,{nextFigureField:this.state.nextFigureField}))}}]),t}(n.a.Component),w=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(p,null))};l.a.render(n.a.createElement(w,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.649973bd.chunk.js.map