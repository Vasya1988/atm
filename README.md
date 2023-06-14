## create-next-app
### Столкнулся с проблемой отображения css при загрузке в gh-pages.

Нашел следующее решение проблемы отображения css в собранном(build) веб приложении.
Для того, что бы указать корректный пусть к css файлам, в веб приложении на gh-pages, нужно внести вручную, несколько изменений в файлы next.config.js и package.json

1. Создать пустой файл в ветке gh-pages, в корне и назвать его 

```
.nojekyll
```

2. В файле next.config.js нужно добавить в объект nextConfig следующие свойства:
```
  const nextConfig = {
  
    // Что бы при запуске npm run build, собрать экспорт в папку out
    output: "export", 
    
    // Что бы указать корретный путь к css файлам на github
    assetPrefix: `/atm/`, 
    basePath: '/atm'
  }
 ```

3. В файле package.json нужно в свойство 'scripts' добавить запуск деплоя на gh-pages
  ```
  "deploy": "gh-pages -d out"
  ```
  ----

[Офорлмение github reademe](https://github.com/GnuriaN/format-README)

<a href="https://blog.sallai.me/deploy-next-site-to-github-pages" target="_blank">Источник</a>
