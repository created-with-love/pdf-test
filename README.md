# Конвертування тексту в PDF

Даний проект допоможе зконвертувати введений текст у PDF
На льоту буде сформований файл (посилання формується після api запиту), який можна переглянути в онлайн форматі

# Структура проекту

1) Використані npm packages: 
- react v18+
- tailwindcss + headlessui (оформлення UI)
- clsx (для зручного регулювання класів)
- pdfjs-dist + react-pdf-viewer (для перегляду PDF)
- dotenv (для зберігання сенсатів інформації - ключа для апі)

2) Структура проекту
Вхідний файл залишається App.js
Додаткові сторінки не створювались, в нас одна голована сторінка яка покриває всі потреби.

Чотири головні папки містять компоненти, тести, helpers - хендлери для запиту та зберігання інформації в локальному храниліщі та константи

# Для початку роботи - 
1) Додайте .env файл і вкажіть ключ для api (як вказано в .env.example)
2) встановіть всі залежності за допомогою npm i, створіть перший білд командою npm run build, запустіть проект командою npm start

# Можливі покращення 
- Проект досить невеликий, але можна додати typescript
- Додати краще зберігання та оновлення даних (наприклад, в mongodb)
- Показувати віконце для роботи з PDF в реакт-порталі для більшої зручності, додати більше плагінів з пакету

@author Volodymyr Ivanchenko
