## Особенности react-toolbox

- используется SASS
- CSS modules
- peerDependencies (immutability-helper, react-addons-css-transition-group)
- rem
- material icons + Roboto

## Drawer/Sidebar

- Drawer создаётся отдельным элементом в body
- ~~.map, .ui { position: absolute }~~ `Layout`
- ~~недокументированный компонент `Sidebar`~~ `Layout/Sidebar`

## Кастомизация

- переопределяем переменные из scss (commons, globals, ...)
- инжектим кастомный SASS перед каждым компонентом -> слишком много переопределений

## DatePicker

- Svg в табах можно, но не задукоментировано
- Svg как React-компонент

## Dropdown

- баг https://github.com/react-toolbox/react-toolbox/issues/867
