const quotes=[
{quote:"좋은 카드를 뽑는 것이 아니라 내 손에 있는 카드를 가지고 어떻게 플레이할 것이냐가 중요하다."},
{quote:"당신이 할 거라고 말하는 일 말고, 당신이 하는일이 당신이다."},
{quote:"당신이 두려워하는 그 동굴 안에 바로 당신이 찾는 것이 숨어 있다."},
{quote:"내일은 항상 내일에 있다."},
{quote:"유혹은 참는 게 아니라 피하는 것이다."},
{quote:"과거를 자랑하는 것은 진보가 멈췄다는 증거"},
{quote:"삶을 관찰과 관조로 대신하지 말라."},
{quote:"두려움을 느끼지 않는 게 아니라 두려워도 계속하는 것이 용기이다."},
{quote:"성공의 반대는 실패가 아니라 아무것도 도전하지 않는 것이다."},
{quote:"소비는 놀이의 무덤이다."},
{qoute:"무엇도 내 허락 없이는 날 불행하게 만들 수 없다."}]
const quote=document.querySelector("#quote span");

quote.innerText=quotes[Math.floor(Math.random()*quotes.length)].quote;
