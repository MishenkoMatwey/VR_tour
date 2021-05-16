# Виртуальная экскурсия по кафедре  МОЭВМ
`Для запуска программы :`<br>
- git clone 
- cd в только что скачанную папку "cd VR_tour"
- npm install
- npm start 
- откройте браузер по адресу http://localhost:8081/index.html

`В случае возникновении ошибки:` <br>
Invalid regular expression: 
/(node_modules[\\\]react[\\\]dist[\\\].*|website\\node_modules\\.*|heapCapture\\bundle\.js|.*\\__tests__\\.*)$/: 
Unterminated character class

***В файле : *** 
.....\VR_tour\node_modules\metro\src\blacklist.js

var sharedBlacklist = [
  /node_modules[/\\]react[/\\]dist[/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];

***Заменить на 

var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
