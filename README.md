<h1>create-next-app</h1>
<h2>Столкнулся с проблемой отображения css при загрузке в gh-pages.</h2>
<p>
  Нашел следующее решение проблемы отображения css в собранном(build) веб приложении.
Для того, что бы указать корректный пусть к css файлам, в веб приложении на gh-pages, нужно внести вручную, несколько изменений в файлы next.config.js и package.json

1. Создать пустой файл в ветке gh-pages, в корне и назвать его '.nojekyll'

2. В файле next.config.js нужно добавить в объект nextConfig следующие свойства:
<span>
  const nextConfig = {<br>
    <span style={color:red}> output: "export", // Что бы при запуске npm run build, собрать экспорт в папку out</span><br>
    <span>assetPrefix: `/atm/`, // Что бы указать корретный путь к css файлам на github</span><br>
    <span>basePath: '/atm' // Что бы указать корретный путь к css файлам на github</span><br>
  }<br>
 </span>

3. В файле package.json нужно в свойство 'scripts' добавить запуск деплоя на gh-pages
  "deploy": "gh-pages -d out"
</p>
