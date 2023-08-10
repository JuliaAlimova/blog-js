import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()

// ===

const headerTitle = createElement('div', 'header-title')

const title = createElement('h1', 'title', 'Коммьюніті')

const sections = createElement('div', 'sections')

sections.insertAdjacentHTML(
  'beforeend',
  '<p class="section button section--viewed">База знань</p> <p class="section button">Інформація</p>',
)

headerTitle.append(title, sections)

// ===

const main = createElement('main', 'card')

const img = new Image()
img.src = '/img/card.png'
img.style.width = '100%'

const cardInfo = createElement('div', 'card__info')

cardInfo.insertAdjacentHTML(
  'beforeend',
  '<h2 class="header">Що таке база знань?</h2> <p class="description">База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной   области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач.</p>',
)

const button = createElement(
  'button',
  'card__button button',
  "Перейти до ком'юніті у Телеграм",
)

main.append(img, cardInfo, button)

// ===

page.append(header, headerTitle, main)
