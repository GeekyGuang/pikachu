let string = `/*
* 首先，准备皮卡丘的皮肤
*/
.pikachu {
    background: #ffe600;
}

/*
 * 画一个鼻子
 */
.nose {
    width: 0;
    height: 0;
    border-top: .09em solid black;
    border-left: .11em solid transparent;
    border-right: .11em solid transparent;
    position: absolute;
    left: 50%;
    top: 1.20em;
    margin-left: -.11em;
    transform-origin: bottom center;
    animation: nose-move 4s infinite;
}

.nose::before {
    content: '';
    display: block;
    width: .22em;
    height: .05em;
    background: black;
    position: absolute;
    top: -.14em;
    left:-.11em;
    border-top-right-radius: .11em .05em;
    border-top-left-radius: .11em .05em;
    box-shadow: 0 -.005em .01em black;
}

/*
 * 让鼻子抖一抖
 */
@keyframes nose-move {
    0%, 35%, 38%, 41%, 44%,100% {transform: rotate(0)}
    36%,39%,42% {transform: rotate(5deg)}
    37%,40%,43% {transform: rotate(-5deg)}
}

/* 
 * 画一双眼睛
 */
.eye {
    border: .03em solid black;
    width: .64em;
    height: .64em;
    position: absolute;
    left: 50%;
    top: .80em;
    margin-left: -.32em;
    border-radius: 50%;
    background:#2e2e2e;
}

/*
 * 左眼移到左边
 */
.eye.left {
    transform: translateX(-1.15em);
}

/*
 * 右眼移到右边
 */
.eye.right {
    transform: translateX(1.15em);
}

/*
 * 画上眼珠子
 */
.eye::before{
    content: '';
    display: block;
    width: .3em;
    height: .3em;
    border: .03em solid black;
    background: white;
    border-radius: 50%;
    position: relative;
    top: -.01em; 
    left: .07em;
    animation: eyes-move 4s infinite linear;
}

/*
 * 眼睛转一转
 */
@keyframes eyes-move {
    0%,20% {top: -.01em; left: .07em;}
    5% {top: .05em; left: .25em;}
    10% {top: .2em; left: .29em;}
    15% {top: .25em; left: .05em;}  
}

/* 
 * 画上眼皮
 */
.eye::after {
    content: '';
    display: block;
    width: .66em;
    height: .66em;
    position: relative;
    top: -1em;
    left: -.04em;
    background: #ffe600;
    animation: eye-close 4s infinite linear;
}

/*
 * 眼睛眨一眨
 */
@keyframes eye-close {
    0%, 23%, 33%, 100% {top: -1em;}
    28% {top: -.55em;}
}

/*
 * 画上嘴唇
 */
.up {
    width: 1.6em;
    height: 1em;
    position: absolute;
    left: 50%;
    top: 1.4em;
    margin-left: -.8em;
    z-index: 1;
}

.up .lip {
    background: #ffe600;
    width: .8em;
    height: .3em;
    position: absolute;
}

.up .lip.left{ 
    border-left: .03em solid black;
    border-bottom: .03em solid black; 
    border-bottom-left-radius: .55em .3em;   
    transform: rotate(-25.5deg) translateZ(0);
    left: -.015em;
}

.up .lip.right{
    border-right: .03em solid black;
    border-bottom: .03em solid black; 
    border-bottom-right-radius: .55em .3em;
    transform: rotate(25.5deg) translateZ(0); 
    right: -.015em;
}

/* 
 * 画个大嘴巴
 */
.down {
    width: 1.4em;
    height: 1.7em;
    position: absolute;
    left: 50%;
    top: 1.52em;
    margin-left: -.7em;
    overflow: hidden;
}

.down .inner {
    width: 1.8em;
    height: 9em;
    border: .04em solid black;
    background: #9b000a;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -.9em;
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;
    overflow: hidden;
}

/*
 * 画个小舌头
 */
.down .inner .tongue {
    width: 2em;
    height: 5em;
    background: #ff485f;
    position: absolute;
    bottom: -3.6em;
    left: 50%;
    margin-left: -1em;
    border-top-left-radius: .95em 1.5em;
    border-top-right-radius: .95em 1.5em;
}

/*
 * 画2个红红的小脸颊
 */
.cheek {
    width: .88em;
    height: .88em;
    border: .03em solid black;
    border-radius: 50%;
    background: #ff0000;
    position: absolute;
    left: 50%;
    top: 1.9em;
    margin-left: -.44em;
    animation: light 4s ease-out infinite;
    z-index: 2;
}

/* 
 * 一个移到左边
 */
.cheek.left {
    transform: translateX(-1.65em);
}

/*
 * 一个移到右边
 */
.cheek.right {
    transform: translateX(1.65em);
}

/*
 * 放出爱的光芒
 */
@keyframes light {
    55% {background: #ff0000;}
    60% {background: #FFFA3F;} 
}

/*
 * 画好了，这只皮卡丘送给你~
 */
`

export default string;