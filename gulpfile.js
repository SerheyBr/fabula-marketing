const { src, dest, watch, parallel, series } = require("gulp");
const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const browserSync = require("browser-sync").create();
const clean = require("gulp-clean");
const fileinclude = require("gulp-file-include");
// const autoprefixer = require("gulp-autoprefixer");

// работа со стилями
async function styles() {
  return (
    src("src/scss/style.scss") // путь до файла
      // .pipe(autoprefixer({ overrideBrowserslist: ["last 2 versions"] })) НУЖНО РАЗОБРАТЬСЯ С АЫТОПРЕФИКСОМ
      .pipe(concat("style.css")) // объеденяет все файлы в один (в случае с минификацией изменить на style.min.css)
      .pipe(scss()) // преобразование scss в css
      // .pipe(scss({ style: "compressed" })) // преобразование scss в css и минифицирует его (если нужна минификация просто разкомментируй эту строку а строку выше закомментируй)
      .pipe(dest("src/css")) // путь где будет хранится уже готовый css
      .pipe(browserSync.stream()) //обновляем браузер после каждого изменения
  );
}

// работа со скриптами
function scripts() {
  return (
    src("src/js/modules/*.js") // путь до файлов js
      .pipe(concat("main.js")) // объеденяет все файлы в один (в случае с минификацией изменить на main.min.js)
      //  .pipe(uglify()) // минифицирует js
      .pipe(dest("src/js")) // путь где будет хранится уже готовый js
      .pipe(browserSync.stream()) //обновляем браузер после каждого изменения
  );
}

// работа со скриптами
function html() {
  return src("src/html/pages/*.html")
    .pipe(fileinclude())
    .pipe(dest("src"))
    .pipe(browserSync.stream());
}

// копируем изображения
function copyImg() {
  return src("src/assets/images/**/*.*", { encoding: false }).pipe(
    dest("dist/assets/images")
  );
}

// копируем библиотеки
function copyLibs() {
  return src("src/assets/libs/**/*.*").pipe(dest("dist/assets/libs"));
}

// копируем шрифты
function copyFonts() {
  return src("src/assets/fonts/**/*.*").pipe(dest("dist/assets/fonts"));
}

// отслеживание изменений в файлах
function watching() {
  watch(["src/scss/**/*.scss"], styles); //отслеживаем изменения в  scss и запускаем скрипт
  watch(["src/js/modules/**/*.js"], scripts); //отслеживаем изменения в js и запускаем скрипт
  watch(["src/html/**/*.html"], html); //отслеживаем изменения во всех html и перезагружаем браузер
  //   watch(["src/assets/images/**/*.{jpg,jpeg,png,gif,svg,webp}"], copyImg); //отслеживаем изменения во всех html и перезагружаем браузер
}
// инициализируем и запускает локальный сервер
function browsersync() {
  browserSync.init({
    server: {
      baseDir: "src/",
    },
  });
}

// удаляем папку dist (ВАЖНО!!! если у нас вдруг изначально нету папки dist будет ошибка, так как функция cleanDist ищет конкретно эту папку, так что если ее нет нужно создать папку dist(пустую) )
function cleanDist() {
  return src("dist").pipe(clean());
}

// собираем проект
function building() {
  return src(
    [
      "src/css/style.css", // берем конкретный файл style.css (с минификацией добовляем min)
      "src/js/main.js", // берем конкретный файл main.js (с минификацией добовляем min)
      "src/*.html", // берем все файлы html
    ],
    {
      base: "src", //Сохраняет исходную структуру папок относительно src/ Без этой опции файлы скопировались бы в dist/ напрямую (без вложенных папок css/, js/)
    }
  ).pipe(dest("dist"));
}

exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.browsersync = browsersync;
exports.html = html;
// exports.copyImg = copyImg;
exports.build = series(cleanDist, building, copyImg, copyLibs, copyFonts);

exports.default = parallel(styles, scripts, browsersync, html, watching);
