(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,a){},,,,,,,function(e,t,a){},,,function(e,t,a){e.exports=a(27)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(9),l=a.n(i),o=(a(17),a(2)),c=a(3),s=a(5),u=a(4),d=a(6),f=(a(18),function(e){var t=e.cell;return n.a.createElement("div",{className:"cell ".concat(1===t?"active":2===t?"freeze":"")})}),m=(a(19),function(e){var t=e.row;return n.a.createElement("div",{className:"row"},t.map(function(e,t){return n.a.createElement(f,{key:t,cell:e})}))}),h=(a(20),function(e){var t=e.field;return n.a.createElement("div",{className:"field"},t.map(function(e,t){return n.a.createElement(m,{className:"row",key:t,row:e})}))}),v=(a(21),function(e){var t=e.nextFigureField;return n.a.createElement("div",{className:"field next-figure"},n.a.createElement("div",{className:"next-figure__title"},"NEXT"),t.map(function(e,t){return n.a.createElement(m,{className:"row",key:t,row:e})}))}),g=(a(22),[{path:[[[0,0],[0,1],[1,1],[1,2]],[[1,0],[2,0],[0,1],[1,1]]]},{path:[[[1,0],[0,1],[1,1],[0,2]],[[0,0],[1,0],[1,1],[2,1]]]},{path:[[[0,0],[1,0],[2,0],[2,1]],[[1,0],[1,1],[1,2],[0,2]],[[0,0],[0,1],[1,1],[2,1]],[[0,0],[1,0],[0,1],[0,2]]]},{path:[[[0,0],[1,0],[2,0],[0,1]],[[0,0],[1,0],[1,1],[1,2]],[[2,0],[0,1],[1,1],[2,1]],[[0,0],[0,1],[0,2],[1,2]]]},{path:[[[0,0],[1,0],[2,0],[3,0]],[[1,0],[1,1],[1,2],[1,3]]]},{path:[[[0,0],[1,0],[2,0],[1,1]],[[1,0],[1,1],[1,2],[0,1]],[[1,0],[0,1],[1,1],[2,1]],[[0,0],[0,1],[0,2],[1,1]]]}]),p=(a(23),a(1),function(e){var t=e.handleClickButton;return n.a.createElement("div",{onClick:t,"data-arrow":"up",className:"arrow arrow--up"},n.a.createElement("div",{className:"arrow__content"}))}),F=function(e){var t=e.handleClickButton;return n.a.createElement("div",{onClick:t,"data-arrow":"down",className:"arrow arrow--down"},n.a.createElement("div",{className:"arrow__content"}))},w=function(e){var t=e.handleClickButton;return n.a.createElement("div",{onClick:t,"data-arrow":"left",className:"arrow arrow--left"},n.a.createElement("div",{className:"arrow__content"}))},E=function(e){var t=e.handleClickButton;return n.a.createElement("div",{onClick:t,"data-arrow":"right",className:"arrow arrow--right"},n.a.createElement("div",{className:"arrow__content"}))},k=(a(8),function(e){var t=e.pauseGame,a=e.isPaused;return n.a.createElement("button",{className:"btn btn--pause ".concat(a?"isPaused":""),onClick:t})}),C=a(10),x=function(e){var t=e.startGame,a=e.isGameOver,i=Object(r.useState)(),l=Object(C.a)(i,2),o=l[0],c=l[1];return n.a.createElement("button",{className:"btn btn--start ".concat(o),onClick:function(){t(),a&&(c("start"),setTimeout(function(){return c("")},200))}})},b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this))).handleClickButton=function(e){var t=document.querySelector(".control-panel__arrows-wrapper"),r=e.target.dataset.arrow;t.classList.add(r),setTimeout(function(){t.classList.remove(r)},300),a.handleClick(e)},a.handleClick=e.handleClick,a.pauseGame=e.pauseGame,a.startGame=e.startGame,a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"control-panel"},n.a.createElement("div",{className:"control-panel__arrows-wrapper"},n.a.createElement(p,{handleClickButton:this.handleClickButton}),n.a.createElement(F,{handleClickButton:this.handleClickButton}),n.a.createElement(w,{handleClickButton:this.handleClickButton}),n.a.createElement(E,{handleClickButton:this.handleClickButton})),n.a.createElement("div",{className:"control-panel__buttons-wrapper"},n.a.createElement(k,{pauseGame:this.pauseGame,isPaused:this.props.isPaused}),n.a.createElement(x,{startGame:this.startGame,isGameOver:this.props.isGameOver})))}}]),t}(n.a.PureComponent),N=(a(24),function(e){var t=e.title,a=e.score;return n.a.createElement("div",{className:"score-board"},n.a.createElement("div",{className:"score-board__title"},t),n.a.createElement("div",{className:"score-board__score"},a))}),S=(a(25),function(e){var t=e.isGameOver;return n.a.createElement("div",{className:"game-over ".concat(t?"visible":"")},n.a.createElement("div",{className:"game-over__text"},"GAME"),n.a.createElement("div",{className:"game-over__text"},"OVER"))}),G=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).createField=function(e,t){for(var a=[],r=0;r<e;r++){a[r]=[];for(var n=0;n<t;n++)a[r][n]=0}return a},e.getRandomFigure=function(){var t=Math.floor(Math.random()*e.figures.length);return e.lastRandomNumber===t&&e.getRandomFigure(),e.lastRandomNumber=t,e.figures[t]},e.loop=function(){e.field[0].includes(2)?e.gameOver():(e.pathIndex=0,e.nextFigureField=e.nextFigureField.map(function(e){return e.map(function(e){return 0})}),e.currentFigure=e.nextFigure,e.figurePath=e.currentFigure.path[0],e.drawFigure(e.field,e.figurePath,e.figureCoord.x,e.figureCoord.y),e.nextFigure=e.getRandomFigure(),e.drawFigure(e.nextFigureField,e.nextFigure.path[0],1,1),e.setState({field:e.field,nextFigureField:e.nextFigureField}),e.interval=setInterval(e.moveFigure,e.speed))},e.handleKeyDown=function(t){if(e.isKeyDown&&!e.state.isGameOver&&!e.state.isPaused)switch(t.keyCode){case 37:e.isKeyDown=!1,e.moveFigureLeft();break;case 39:e.isKeyDown=!1,e.moveFigureRight();break;case 40:e.isKeyDown=!1,e.moveFigureDown();break;case 38:e.isKeyDown=!1,e.rotateFigure();break;default:return}},e.handleClick=function(t){if(!e.state.isGameOver&&!e.state.isPaused)switch(t.target.dataset.arrow){case"left":e.moveFigureLeft();break;case"right":e.moveFigureRight();break;case"down":e.moveFigureDown();break;case"up":e.rotateFigure();break;default:return}},e.drawFigure=function(e,t,a,r){t.forEach(function(t){e[t[1]+r][t[0]+a]=1})},e.moveFigure=function(){for(var t=!0,a=e.field.length-1;a>=0;a--)for(var r=0;r<=e.field[a].length-1;r++)1===e.field[a][r]&&(a+1!==e.field.length&&2!==e.field[a+1][r]||(t=!1,e.freezeFigure()));if(t){e.figureCoord.y++;for(var n=e.field.length-1;n>=0;n--)for(var i=0;i<=e.field[n].length-1;i++)1===e.field[n][i]&&(e.field[n][i]=0,e.field[n+1][i]=1);e.setState({field:e.field})}},e.moveFigureLeft=function(){for(var t=!0,a=0;a<=e.field[1].length-1;a++)for(var r=0;r<=e.field.length-1;r++)1===e.field[r][a]&&(a<=0||2===e.field[r][a-1])&&(t=!1);if(t){e.figureCoord.x--;for(var n=0;n<=e.field[1].length-1;n++)for(var i=0;i<=e.field.length-1;i++)1===e.field[i][n]&&(e.field[i][n]=0,e.field[i][n-1]=1);e.setState({field:e.field})}},e.moveFigureRight=function(){for(var t=!0,a=e.field[1].length-1;a>=0;a--)for(var r=0;r<=e.field.length-1;r++)1===e.field[r][a]&&(a>=e.field[1].length-1||2===e.field[r][a+1])&&(t=!1);if(t){e.figureCoord.x++;for(var n=e.field[1].length-1;n>=0;n--)for(var i=0;i<=e.field.length-1;i++)1===e.field[i][n]&&(e.field[i][n]=0,e.field[i][n+1]=1);e.setState({field:e.field})}},e.moveFigureDown=function(){clearInterval(e.interval),e.interval=setInterval(e.moveFigure,10)},e.freezeFigure=function(){clearInterval(e.interval);for(var t=e.field.length-1;t>=0;t--)for(var a=0;a<=e.field[t].length-1;a++)1===e.field[t][a]&&(e.field[t][a]=2);e.figureCoord.x=0,e.figureCoord.y=0,e.setState({field:e.field}),e.clearFullRow(),e.loop()},e.clearFullRow=function(){var t=e.getFullRowIndex();if(t){for(var a=t;a>0;a--)for(var r=0;r<e.field[0].length;r++)e.field[a][r]=e.field[a-1][r];e.addScore(),e.clearFullRow()}},e.addScore=function(){e.score=e.score+10,e.setState({score:e.score})},e.getHiScore=function(){e.savedHiScore=parseInt(window.localStorage.getItem("hi-score-tetris")),e.setState({hiScore:e.savedHiScore?e.savedHiScore:0})},e.setHiScore=function(){e.score<e.savedHiScore||(window.localStorage.setItem("hi-score-tetris",e.score),e.getHiScore())},e.getFullRowIndex=function(){for(var t,a=e.field.length-1;a>=0;a--){t=!0;for(var r=0;r<=e.field[a].length-1;r++)0===e.field[a][r]&&(t=!1);if(t)return a}return!1},e.gameOver=function(){e.setState({isGameOver:!0}),clearInterval(e.interval),e.setHiScore()},e.startGame=function(){e.state.isGameOver&&(e.score=0,e.setState({isGameOver:!1,score:0}),e.field=e.field.map(function(e){return e.map(function(e){return 0})}),e.loop())},e.pauseGame=function(){e.state.isGameOver||(e.state.isPaused?(e.interval=setInterval(e.moveFigure,e.speed),e.setState({isPaused:!1})):(clearInterval(e.interval),e.setState({isPaused:!0})))},e.state={field:[[]],nextFigureField:[[]],isGameOver:!1,isPaused:!1,score:0,hiScore:0},e.speed=800,e.field=e.createField(20,10),e.nextFigureField=e.createField(5,5),e.pathIndex=0,e.isKeyDown=!0,e.figureCoord={x:0,y:0},e.lastRandomNumber=null,e.currentFigure=null,e.figurePath=null,e.figures=g,e.score=0,e.savedHiScore=null,e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",function(){return e.isKeyDown=!0}),this.getHiScore(),this.nextFigure=this.getRandomFigure(),this.loop()}},{key:"rotateFigure",value:function(){var e=this,t=!0;this.nextFigurePath=this.currentFigure.path[this.pathIndex+1],this.nextFigurePath.forEach(function(a){var r=a[0]+e.figureCoord.x,n=a[1]+e.figureCoord.y;(r>=e.field[0].length||n>=e.field.length||2===e.field[n][r])&&(t=!1)}),t&&(this.pathIndex=this.pathIndex>=this.currentFigure.path.length-2?-1:this.pathIndex+1,this.figurePath=this.nextFigurePath,this.field.forEach(function(t,a){return t.forEach(function(t,r){1===t&&(e.field[a][r]=0)})}),this.drawFigure(this.field,this.figurePath,this.figureCoord.x,this.figureCoord.y),this.setState({field:this.field}))}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"game"},n.a.createElement("div",{className:"game__frame--outer"},n.a.createElement("div",{className:"game__frame--middle"},n.a.createElement("div",{className:"game__frame--inner"},n.a.createElement(h,{field:this.state.field}),n.a.createElement("div",{className:"game__side-panel"},n.a.createElement(N,{title:"HI-SCORE",score:this.state.hiScore}),n.a.createElement(N,{title:"SCORE",score:this.state.score}),n.a.createElement(v,{nextFigureField:this.state.nextFigureField}),n.a.createElement(S,{isGameOver:this.state.isGameOver}))))),n.a.createElement(b,{handleClick:this.handleClick,pauseGame:this.pauseGame,startGame:this.startGame,isPaused:this.state.isPaused,isGameOver:this.state.isGameOver})))}}]),t}(n.a.Component),O=(a(26),function(){return n.a.createElement("div",{className:"skin"},n.a.createElement(G,null))});l.a.render(n.a.createElement(O,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.ce73c96d.chunk.js.map